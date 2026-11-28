import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Package root.
 */
const makelierRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../../..',
);


/**
 * Convert a filesystem path into a relative import path.
 */
function toImportPath(
    fromDir: string,
    targetPath: string,
): string {
    let relativePath = path.relative(fromDir, targetPath);

    relativePath = relativePath.split(path.sep).join('/');

    if (!relativePath.startsWith('.')) {
        relativePath = `./${relativePath}`;
    }

    return relativePath;
}

/**
 * Generate the Gutenberg editor entry source.
 */
export function generateEditorEntry(
    componentName: string,
    siteRoot: string,
): string {


    const wpRoot = path.join(siteRoot, '.makelier', 'wp');
    const entryDir = path.join(wpRoot, '__entries__');
    const blockDir = path.join(wpRoot, componentName);

    const metadataPath = path.join(blockDir, 'block.json');
    const configPath = path.join(blockDir, 'config.json');


    const templatePath = path.join(
        siteRoot,
        'src',
        'components',
        componentName,
        'template.tsx',
    );
    const templateImport = toImportPath(entryDir, templatePath);

    // if tailwind
    /*
    const tailwindPath = path.join(
        siteRoot,
        'src',
        'styles',
        'tailwind.css',
    );

    let tailwindImport = fs.existsSync(tailwindPath)
        ? `import '${toImportPath(entryDir, tailwindPath)}';\n`
        : '';
    */

    // !!!IMPORTANT:
    // Use a unified entry point to avoid bundling Tailwind repeatedly for each component.
    const tailwindImport = ''; 
        

    const editorGeneratorPath = path.join(
        makelierRoot,
        'core/export/wordpress/editor-generator.ts',
    );

    const typesPath = path.join(
        makelierRoot,
        'core/utils/types.ts',
    );

    const metadataImport = toImportPath(entryDir, metadataPath);
    const configImport = toImportPath(entryDir, configPath);
    const editorImport = toImportPath(entryDir, editorGeneratorPath);
    const typesImport = toImportPath(entryDir, typesPath);

    return `${tailwindImport}
import {
    registerBlockType,
} from '@wordpress/blocks';

import { Template } from '${templateImport}';
import metadata from '${metadataImport}';
import config from '${configImport}';

import {
    createBlockEdit,
    createBlockSave,
} from '${editorImport}';

import type {
    BlockConfig,
} from '${typesImport}';

registerBlockType(metadata, {
    edit: createBlockEdit(config as BlockConfig, Template),
    save: createBlockSave(config as BlockConfig, Template),
});
`;
}

/**
 * Write a Gutenberg editor entry file.
 */
export function writeEditorEntry(
    componentName: string,
    siteRoot: string,
): string {
    const entryDir = path.join(
        siteRoot,
        '.makelier',
        'wp',
        '__entries__',
    );

    const entryPath = path.join(
        entryDir,
        `${componentName}.ts`,
    );

    fs.mkdirSync(entryDir, { recursive: true });

    fs.writeFileSync(
        entryPath,
        generateEditorEntry(componentName, siteRoot),
        'utf8',
    );

    return entryPath;
}