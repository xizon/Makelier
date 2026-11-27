/*
TEST：

npx tsx tests/playground/_examples_s2.ts
*/

import { readFile } from 'node:fs/promises';

import {
    parseMarkdown,
    extractComponentInfo,
    extractDemos,
} from '../../core/playground/markdown-parser.ts';

import {
    createComponentRegistry,
    resolveComponentDirectory,
} from '../../core/playground/component-registry.ts';

import { extractComponentNames } from '../../core/playground/jsx-parser.ts';

import { parseDemoJSX } from '../../core/playground/jsx-parser.ts';

async function main() {
    const componentDirectories = [
        'hero-3d',
        'photo-scatter',
        'scenes',
    ];

    const componentsRoot =
        'sites/product-elegant/src/components';

    const registry = await createComponentRegistry(
        componentsRoot
    );

    for (const componentDirectory of componentDirectories) {
        console.log(`\n========== ${componentDirectory} ==========\n`);

        const filePath =
            `sites/product-elegant/src/components/${componentDirectory}/examples.md`;

        const source = await readFile(filePath, 'utf8');

        const ast = parseMarkdown(source);
        const info = extractComponentInfo(ast, source);
        const demos = extractDemos(ast, source, componentDirectory);

        for (const demo of demos) {
            const program = parseDemoJSX(demo.code);

            const componentNames = extractComponentNames(program);

            const resolvedComponents = componentNames.map((name) => ({
                name,
                directory: resolveComponentDirectory(name, registry),
            }));

            console.log(
                `[PASS] ${info.componentName} / ${demo.title}`,
                resolvedComponents
            );
        }
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});