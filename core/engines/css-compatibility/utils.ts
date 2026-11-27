
import valueParser from 'postcss-value-parser';
import type {
    RGBColor,
    ColorMixInfo
} from '../../utils/types.ts';

import {
    isCssVariable
} from '../../utils/helper.ts';


/**
 * Format a number without unnecessary decimal places.
 */
function formatNumber(value: number): string {
    return String(Number(value.toFixed(4)));
}

/**
 * Parse CSS hexadecimal colors.
 *
 * Supports:
 * #RGB
 * #RGBA
 * #RRGGBB
 * #RRGGBBAA
 */
function parseHexColor(value: string): RGBColor | null {
    const hex = value.trim().replace(/^#/, '');

    if (!/^(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(hex)) {
        return null;
    }

    const expanded = hex.length <= 4
        ? [...hex].map((char) => char + char).join('')
        : hex;

    const hasAlpha = expanded.length === 8;

    return {
        r: parseInt(expanded.slice(0, 2), 16),
        g: parseInt(expanded.slice(2, 4), 16),
        b: parseInt(expanded.slice(4, 6), 16),
        a: hasAlpha
            ? parseInt(expanded.slice(6, 8), 16) / 255
            : 1,
    };
}

/**
 * Parse CSS RGB / RGBA colors.
 *
 * Supports both comma and modern space-separated syntax.
 */
function parseRgbColor(value: string): RGBColor | null {
    const match = value.trim().match(/^rgba?\((.*)\)$/i);

    if (!match) {
        return null;
    }

    const content = match[1].trim();

    const parts = content
        .replace(/\s*\/\s*/, ' ')
        .replace(/,/g, ' ')
        .trim()
        .split(/\s+/);

    if (parts.length !== 3 && parts.length !== 4) {
        return null;
    }

    const parseChannel = (input: string): number | null => {
        if (input.endsWith('%')) {
            const percentage = Number.parseFloat(input);

            if (!Number.isFinite(percentage)) return null;

            return Math.max(0, Math.min(255, percentage * 2.55));
        }

        const number = Number(input);

        if (!Number.isFinite(number)) return null;

        return Math.max(0, Math.min(255, number));
    };

    const parseAlpha = (input: string): number | null => {
        const percentage = input.endsWith('%');

        const number = Number.parseFloat(input);

        if (!Number.isFinite(number)) return null;

        return Math.max(
            0,
            Math.min(1, percentage ? number / 100 : number),
        );
    };

    const r = parseChannel(parts[0]);
    const g = parseChannel(parts[1]);
    const b = parseChannel(parts[2]);

    const a = parts.length === 4
        ? parseAlpha(parts[3])
        : 1;

    if (r === null || g === null || b === null || a === null) {
        return null;
    }

    return { r, g, b, a };
}

/**
 * Parse supported CSS colors.
 */
export function parseColor(value: string): RGBColor | null {
    return (
        parseHexColor(value) ??
        parseRgbColor(value)
    );
}

/**
 * Resolve a CSS color variable.
 */
export function resolveColorVariable(
    variable: string,
    variables: Map<string, string>,
    visited = new Set<string>(),
): RGBColor | null {
    if (!isCssVariable(variable)) {
        return null;
    }

    if (visited.has(variable)) {
        return null;
    }

    const value = variables.get(variable);

    if (!value) {
        return null;
    }

    visited.add(variable);

    const directColor = parseColor(value);

    if (directColor) {
        return directColor;
    }

    const alias = value.match(
        /^var\(\s*(--[\w-]+)\s*\)$/,
    );

    if (alias) {
        return resolveColorVariable(
            alias[1],
            variables,
            visited,
        );
    }

    return null;
}
/**
 * Convert RGB color to RGBA CSS.
 */
export function toRgba(
    color: RGBColor,
    alpha: number,
): string {
    const finalAlpha = Math.max(
        0,
        Math.min(1, color.a * alpha),
    );

    return `rgba(${formatNumber(color.r)}, ${formatNumber(color.g)}, ${formatNumber(color.b)}, ${formatNumber(finalAlpha)})`;
}

/**
 * Split function arguments by top-level commas.
 */
function splitArguments(
    nodes: ReturnType<typeof valueParser>['nodes'],
) {
    const result: typeof nodes[] = [[]];

    for (const node of nodes) {
        if (node.type === 'div' && node.value === ',') {
            result.push([]);
        } else {
            result[result.length - 1].push(node);
        }
    }

    return result;
}

/**
 * Extract color-mix information.
 *
 * Supports:
 * color-mix(in oklab, var(--mkl-color-xxx) 6%, transparent)
 */
export function extractColorMix(
    value: string,
): ColorMixInfo | null {
    const parsed = valueParser(value);

    let mixNode:
        | ReturnType<typeof valueParser>['nodes'][number]
        | undefined;

    parsed.walk((node) => {
        if (
            node.type === 'function' &&
            node.value.toLowerCase() === 'color-mix'
        ) {
            mixNode = node;
            return false;
        }
    });

    if (!mixNode || mixNode.type !== 'function') {
        return null;
    }

    const args = splitArguments(mixNode.nodes);

    if (args.length !== 3) {
        return null;
    }

    const colorSpace = valueParser
        .stringify(args[0])
        .trim()
        .toLowerCase();

    if (colorSpace !== 'in oklab') {
        return null;
    }

    const secondArgument = args[1];

    const variableNode = secondArgument.find(
        (node) =>
            node.type === 'function' &&
            node.value.toLowerCase() === 'var',
    );

    if (!variableNode || variableNode.type !== 'function') {
        return null;
    }

    const colorVariable = valueParser
        .stringify(variableNode.nodes)
        .trim();

    if (!isCssVariable(colorVariable)) {
        return null;
    }

    const percentageNode = secondArgument.find(
        (node) =>
            node.type === 'word' &&
            /^\d*\.?\d+%$/.test(node.value),
    );

    if (!percentageNode || percentageNode.type !== 'word') {
        return null;
    }

    const thirdArgument = valueParser
        .stringify(args[2])
        .trim()
        .toLowerCase();

    if (thirdArgument !== 'transparent') {
        return null;
    }

    const percentage = Number.parseFloat(percentageNode.value);

    if (
        !Number.isFinite(percentage) ||
        percentage < 0 ||
        percentage > 100
    ) {
        return null;
    }

    return {
        colorVariable,
        alpha: percentage / 100,
    };
}

/**
 * Extract a simple CSS custom property reference.
 *
 * Supports any CSS variable name without assuming a fixed prefix.
 */
export function getSimpleColorVariable(
    value: string,
): string | null {
    const match = value.trim().match(
        /^var\(\s*(--[\w-]+)\s*\)$/,
    );

    return match?.[1] ?? null;
}