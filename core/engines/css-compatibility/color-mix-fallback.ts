
import {
    list,
    type AtRule,
    type Declaration,
    type Result,
    type Root,
    type Rule,
    type Node,
} from 'postcss';

import {
    extractColorMix,
    getSimpleColorVariable,
    resolveColorVariable,
    toRgba,
} from './utils.ts';

import type {
    ColorMixRule
} from '../../utils/types.ts';

/**
 * Get the CSS rule's surrounding at-rule scope.
 *
 * Ignore the color-mix @supports wrapper because the fallback
 * declaration is intentionally outside that wrapper.
 */
function getRuleScope(rule: Rule): string {
    const scopes: string[] = [];

    let parent: Node | undefined = rule.parent;

    while (parent) {
        if (parent.type === 'atrule') {
            const atRule = parent as AtRule;

            const isColorMixSupport =
                atRule.name.toLowerCase() === 'supports' &&
                /color-mix/i.test(atRule.params);

            if (!isColorMixSupport) {
                scopes.push(`${atRule.name}:${atRule.params}`);
            }
        }

        parent = parent.parent;
    }

    return scopes.reverse().join('|');
}

/**
 * Get individual selectors from a CSS rule.
 */
function getSelectors(rule: Rule): string[] {
    return list.comma(rule.selector).map((selector) => selector.trim());
}

/**
 * Get the parent CSS rule.
 */
function getParentRule(
    declaration: Declaration,
): Rule | null {
    return declaration.parent?.type === 'rule'
        ? declaration.parent as Rule
        : null;
}

/**
 * Collect CSS custom properties.
 *
 * No fixed prefix is assumed.
 */
function collectColorVariables(
    root: Root,
): Map<string, string> {
    const variables = new Map<string, string>();

    root.walkDecls(/^--[\w-]+$/, (declaration) => {
        variables.set(
            declaration.prop,
            declaration.value.trim(),
        );
    });

    return variables;
}

/**
 * Collect modern color-mix declarations.
 *
 * Each selector is stored independently because Tailwind
 * may combine multiple selectors into a single CSS rule.
 */
function collectColorMixRules(
    root: Root,
): ColorMixRule[] {
    const rules: ColorMixRule[] = [];

    root.walkDecls((declaration) => {
        if (!declaration.value.includes('color-mix(')) {
            return;
        }

        const parentRule = getParentRule(declaration);

        if (!parentRule) {
            return;
        }

        const mix = extractColorMix(declaration.value);

        if (!mix) {
            return;
        }

        for (const selector of getSelectors(parentRule)) {
            rules.push({
                selector,
                property: declaration.prop,
                scope: getRuleScope(parentRule),
                colorVariable: mix.colorVariable,
                alpha: mix.alpha,
            });
        }
    });

    return rules;
}

/**
 * Find a matching color-mix declaration for an individual selector.
 */
function findColorMixRule(
    selector: string,
    property: string,
    scope: string,
    colorVariable: string,
    rules: ColorMixRule[],
): ColorMixRule | undefined {
    return rules.find((rule) =>
        rule.selector === selector &&
        rule.property === property &&
        rule.scope === scope &&
        rule.colorVariable === colorVariable
    );
}

/**
 * Split grouped fallback rules when individual selectors
 * require different color-mix fallback values.
 *
 * Example:
 *
 * .bg-cyan,
 * .bg-cyan\/10 {
 *     background-color: var(--color-cyan);
 * }
 *
 * Becomes:
 *
 * .bg-cyan {
 *     background-color: var(--color-cyan);
 * }
 *
 * .bg-cyan\/10 {
 *     background-color: rgba(..., 0.1);
 * }
 */
function splitGroupedFallbackRules(
    root: Root,
    colorMixRules: ColorMixRule[],
): void {
    const groupedRules: Rule[] = [];

    root.walkRules((rule) => {
        if (getSelectors(rule).length < 2) {
            return;
        }

        const selectors = getSelectors(rule);
        const scope = getRuleScope(rule);

        const needsSplit = rule.nodes?.some((node) => {
            if (node.type !== 'decl') {
                return false;
            }

            const declaration = node as Declaration;

            const colorVariable = getSimpleColorVariable(
                declaration.value,
            );

            if (!colorVariable) {
                return false;
            }

            return selectors.some((selector) =>
                findColorMixRule(
                    selector,
                    declaration.prop,
                    scope,
                    colorVariable,
                    colorMixRules,
                ) !== undefined
            );
        });

        if (needsSplit) {
            groupedRules.push(rule);
        }
    });

    for (const rule of groupedRules) {
        const parent = rule.parent;

        if (!parent) {
            continue;
        }

        for (const selector of getSelectors(rule)) {
            parent.insertBefore(
                rule,
                rule.clone({ selector }),
            );
        }

        rule.remove();
    }
}

/**
 * CSS color-mix fallback plugin.
 */
export const colorMixFallback = {
    postcssPlugin: 'color-mix-fallback',

    Once(root: Root, { result }: { result: Result }) {
        // 1. Read compiled CSS custom properties.
        const variables = collectColorVariables(root);

        if (variables.size === 0) {
            return;
        }

        // 2. Collect modern color-mix declarations.
        const colorMixRules = collectColorMixRules(root);

        if (colorMixRules.length === 0) {
            return;
        }

        // 3. Split grouped selectors when necessary.
        splitGroupedFallbackRules(root, colorMixRules);

        // 4. Replace solid-color fallback declarations.
        root.walkDecls((declaration) => {
            if (declaration.value.includes('color-mix(')) {
                return;
            }

            const colorVariable = getSimpleColorVariable(
                declaration.value,
            );

            if (!colorVariable) {
                return;
            }

            const parentRule = getParentRule(declaration);

            if (!parentRule) {
                return;
            }

            const mixRule = findColorMixRule(
                parentRule.selector.trim(),
                declaration.prop,
                getRuleScope(parentRule),
                colorVariable,
                colorMixRules,
            );

            if (!mixRule) {
                return;
            }

            const color = resolveColorVariable(
                colorVariable,
                variables,
            );

            if (!color) {
                declaration.warn(
                    result,
                    `Unable to generate color-mix fallback for "${colorVariable}". Supported formats: HEX and RGB/RGBA.`,
                );

                return;
            }

            declaration.value = toRgba(
                color,
                mixRule.alpha,
            );
        });
    },
};
