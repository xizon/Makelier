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
 * Generate the WordPress frontend view entry source.
 */
export function generateViewEntry(
    componentName: string,
    siteRoot: string,
): string {
    const wpRoot = path.join(siteRoot, '.makelier', 'wp');
    const entryDir = path.join(wpRoot, 'view-entries');

    const componentPath = path.join(
        siteRoot,
        'src/components',
        componentName,
    );

    const registerPath = path.join(
        makelierRoot,
        'core/runtime/bridge/register.ts',
    );

    const componentImport = toImportPath(
        entryDir,
        componentPath,
    );

    const registerImport = toImportPath(
        entryDir,
        registerPath,
    );

    return `/**
 * WordPress View Entry
 */

import '${componentImport}';

import {
    mountComponents,
} from '${registerImport}';

function start() {
    mountComponents();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, {
        once: true,
    });
} else {
    start();
}
`;
}

/**
 * Write a WordPress frontend view entry file.
 */
export function writeViewEntry(
    componentName: string,
    siteRoot: string,
): string {
    const entryDir = path.join(
        siteRoot,
        '.makelier',
        'wp',
        '__view-entries__',
    );

    const entryPath = path.join(
        entryDir,
        `${componentName}.ts`,
    );

    fs.mkdirSync(entryDir, {
        recursive: true,
    });

    fs.writeFileSync(
        entryPath,
        generateViewEntry(componentName, siteRoot),
        'utf8',
    );

    return entryPath;
}