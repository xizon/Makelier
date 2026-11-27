import fs from 'node:fs';
import path from 'node:path';

import type { SiteContext } from '../../../utils/types.ts';

function copyDirectory(
    sourceDir: string,
    outputDir: string,
    filter?: (relativePath: string, isDirectory: boolean) => boolean,
    relativeRoot = sourceDir,
): void {
    if (!fs.existsSync(sourceDir)) return;

    fs.mkdirSync(outputDir, { recursive: true });

    for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
        const sourcePath = path.join(sourceDir, entry.name);
        const outputPath = path.join(outputDir, entry.name);
        const relativePath = path.relative(relativeRoot, sourcePath);

        if (filter && !filter(relativePath, entry.isDirectory())) continue;

        if (entry.isDirectory()) {
            copyDirectory(sourcePath, outputPath, filter, relativeRoot);
        } else if (entry.isFile()) {
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            fs.copyFileSync(sourcePath, outputPath);
        }
    }
}

/**
 * Copy Site public assets, styles, and additional src modules.
 * Components and pages are exported separately so unused components
 * are not copied into the generated application.
 */
export function exportReactAssets(
    site: SiteContext,
    appRoot: string,
): void {
    const srcOutput = path.join(appRoot, 'src');
    const publicOutput = path.join(appRoot, 'public');

    copyDirectory(site.paths.public, publicOutput);
    copyDirectory(site.paths.styles, path.join(srcOutput, 'styles'));

    const excluded = new Set(['pages', 'components', 'styles']);

    if (fs.existsSync(site.paths.src)) {
        for (const entry of fs.readdirSync(site.paths.src, { withFileTypes: true })) {
            if (excluded.has(entry.name)) continue;

            const sourcePath = path.join(site.paths.src, entry.name);
            const outputPath = path.join(srcOutput, entry.name);

            if (entry.isDirectory()) {
                copyDirectory(sourcePath, outputPath);
            } else if (entry.isFile()) {
                fs.mkdirSync(path.dirname(outputPath), { recursive: true });
                fs.copyFileSync(sourcePath, outputPath);
            }
        }
    }
}
