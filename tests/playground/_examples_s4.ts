/*
TEST：

npx tsx tests/playground/_examples_s4.ts
*/

import path from 'node:path';
import { writeDemoEntries } from '../../core/playground/entry-writer';
import { readFile } from 'node:fs/promises';

import { generateDemoEntry } from '../../core/playground/demo-entry.ts';
import { createComponentRegistry } from '../../core/playground/component-registry.ts';
import { analyzeComponentExamples } from '../../core/playground/analyze-component.ts';
import { parseDemoJSX } from '../../core/playground/jsx-parser.ts';

async function main() {

    const siteRoot = 'sites/product-elegant';

    const componentsRoot = path.join(
        siteRoot,
        'src',
        'components'
    );

    const outputRoot = path.join(
        siteRoot,
        '.makelier',
        'playground',
        'entries'
    );


    const registry = await createComponentRegistry(
        componentsRoot
    );

    const componentDirectories = [
        'hero-3d',
        'photo-scatter',
        'scenes',
    ];

    for (const componentDirectory of componentDirectories) {
        console.log(`\n========== ${componentDirectory} ==========\n`);

        const filePath =
            `${componentsRoot}/${componentDirectory}/examples.md`;

        const source = await readFile(filePath, 'utf8');

        const result = analyzeComponentExamples(
            source,
            registry,
            componentDirectory
        );

        // Validate every generated TSX entry.
        for (const demo of result.demos) {
            const entrySource = generateDemoEntry(demo);

            const entryProgram = parseDemoJSX(entrySource);

            console.log(
                `[PASS] ${result.componentName} / ${demo.title}`,
                `(${entryProgram.body.length} statements)`
            );
        }

        // Write all generated demo entries.
        const writtenEntries = await writeDemoEntries(
            componentDirectory,
            result.demos,
            outputRoot
        );

        for (const entry of writtenEntries) {
            console.log(
                `[WRITE] ${entry.title}`,
                entry.filePath
            );
        }
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});