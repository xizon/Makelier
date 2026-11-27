
/**
 * External Adapter
 */
import fs from 'node:fs';
import path from 'node:path';

import type { Plugin } from 'vite';
import type { ExternalMap } from '../utils/types.ts';

import { EXTERNAL_GLOBALS } from '../utils/const.ts';

const IMPORT_RE =
    /(^|\n)([ \t]*)import\s+(\*\s+as\s+[\w$]+|\{[\s\S]*?\}|[\w$]+)\s+from\s+(['"])([^'"]+)\4[ \t]*;?/g;

interface ExternalAdapterOptions {
    autoExternal?: boolean;
}

/**
 * Discover external dependencies from package.json.
 */
function discoverExternalDependencies(
    siteRoot: string,
): ExternalMap {
    const packagePath = path.join(siteRoot, 'package.json');

    if (!fs.existsSync(packagePath)) {
        return {};
    }

    const packageJson = JSON.parse(
        fs.readFileSync(packagePath, 'utf8'),
    );

    const dependencies = packageJson.dependencies ?? {};
    const externals: ExternalMap = {};

    for (const dependency of Object.keys(dependencies)) {
        const globalName = EXTERNAL_GLOBALS[dependency];

        if (globalName) {
            externals[dependency] = globalName;
        }
    }

    return externals;
}

/**
 * Resolve external mappings.
 *
 * User-defined mappings override built-in mappings.
 */
function resolveExternals(
    siteRoot: string,
    externals: ExternalMap,
    options: ExternalAdapterOptions,
): ExternalMap {
    const autoExternals = options.autoExternal
        ? discoverExternalDependencies(siteRoot)
        : {};

    return {
        ...autoExternals,
        ...externals,
    };
}

function createExternalBinding(
    clause: string,
    specifier: string,
    globalName: string
): string[] {
    const globalAccess = `globalThis[${JSON.stringify(globalName)}]`;

    const createBinding = (
        importedName: string,
        localName: string
    ): string[] => {
        const access =
            importedName === '*' ||
                importedName === 'default' ||
                importedName === globalName
                ? globalAccess
                : `${globalAccess}?.[${JSON.stringify(importedName)}]`;

        return [
            `const ${localName} = ${access};`,
            `if (typeof ${localName} === 'undefined') {`,
            `    throw new Error(${JSON.stringify(
                `[Makelier] External "${specifier}" is unavailable. Expected global variable "${globalName}".`
            )});`,
            `}`
        ];
    };

    const namespaceMatch = clause.match(/^\*\s+as\s+([\w$]+)$/);

    if (namespaceMatch) {
        return createBinding('*', namespaceMatch[1]);
    }

    if (clause.startsWith('{') && clause.endsWith('}')) {
        const imports = clause.slice(1, -1)
            .split(',')
            .map(item => item.trim())
            .filter(Boolean);

        return imports.flatMap(item => {
            const match = item.match(
                /^([\w$]+)(?:\s+as\s+([\w$]+))?$/
            );

            if (!match) {
                throw new Error(
                    `[Makelier] Unsupported named import syntax in "${specifier}": ${item}`
                );
            }

            const importedName = match[1];
            const localName = match[2] ?? importedName;

            return createBinding(importedName, localName);
        });
    }

    const defaultMatch = clause.match(/^([\w$]+)$/);

    if (defaultMatch) {
        return createBinding('default', defaultMatch[1]);
    }

    throw new Error(
        `[Makelier] Unsupported external import syntax: ${clause} from "${specifier}"`
    );
}

export function externalAdapterPlugin(
    siteRoot: string,
    externals: ExternalMap = {},
    options: ExternalAdapterOptions = {},
): Plugin {
    const resolvedSiteRoot = path.resolve(siteRoot);

    const resolvedExternals = resolveExternals(
        resolvedSiteRoot,
        externals,
        options,
    );

    return {
        name: 'external-adapter',

        apply: 'build',

        enforce: 'pre',

        transform(code, id) {
            const cleanId = id.split('?')[0];
            const relativePath = path.relative(
                resolvedSiteRoot,
                cleanId
            );

            // Only process source files inside the current Site.
            if (
                relativePath.startsWith('..') ||
                path.isAbsolute(relativePath) ||
                relativePath.split(path.sep).includes('node_modules') ||
                !/\.(?:[cm]?[jt]sx?)$/.test(cleanId)
            ) {
                return null;
            }

            let transformed = false;

            const output = code.replace(
                IMPORT_RE,
                (match, prefix, indent, clause, _quote, specifier) => {
                    const globalName = resolvedExternals[specifier];

                    if (!globalName) {
                        return match;
                    }

                    // Type-only imports are handled by the TypeScript compiler.
                    if (/^type\s+/.test(clause.trim())) {
                        return match;
                    }

                    if (!/^[$A-Z_a-z][$\w]*$/.test(globalName)) {
                        throw new Error(
                            `[Makelier] Invalid global variable name for "${specifier}": ${globalName}`
                        );
                    }

                    const statements = createExternalBinding(
                        clause.trim(),
                        specifier,
                        globalName
                    );

                    transformed = true;

                    return (
                        prefix +
                        indent +
                        statements.join(`\n${indent}`)
                    );
                }
            );

            if (!transformed) {
                return null;
            }

            return {
                code: output,
                map: null
            };
        }
    };
}
