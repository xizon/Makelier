/*
TEST：

npx tsx tests/playground/_examples_s1.ts
*/
import { readFile } from 'node:fs/promises';
import {
    parseMarkdown,
    extractComponentInfo,
    extractDemos,
} from '../../core/playground/markdown-parser.ts';

async function main() {
    const componentDirectories = [
        'hero-3d',
        'photo-scatter',
        'scenes',
    ];

    for (const componentDirectory of componentDirectories) {
        console.log(`\n========== ${componentDirectory} ==========\n`);

        const filePath =
            `sites/product-elegant/src/components/${componentDirectory}/examples.md`;

        const source = await readFile(filePath, 'utf8');
        const ast = parseMarkdown(source);

        const info = extractComponentInfo(ast, source);
        const demos = extractDemos(ast, source, componentDirectory);

        console.log(
            JSON.stringify(
                {
                    ...info,
                    demos,
                },
                null,
                2
            )
        );
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});