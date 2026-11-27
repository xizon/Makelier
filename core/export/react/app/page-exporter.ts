import fs from 'node:fs';
import path from 'node:path';

import type { SiteContext } from '../../../utils/types.ts';
import type { DiscoveredReactPage } from '../../../utils/types.ts';
import { rewriteComponentImports } from '../import-rewriter.ts';

function copyDirectory(
    sourceDir: string,
    outputDir: string,
    site: SiteContext,
    componentsOutputDir: string,
): void {
    fs.mkdirSync(outputDir, { recursive: true });

    for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
        const sourcePath = path.join(sourceDir, entry.name);
        const outputPath = path.join(outputDir, entry.name);

        if (entry.isDirectory()) {
            copyDirectory(sourcePath, outputPath, site, componentsOutputDir);
            continue;
        }

        if (!entry.isFile()) continue;

        const extension = path.extname(entry.name).toLowerCase();

        if (extension === '.tsx' || extension === '.jsx') {
            const source = fs.readFileSync(sourcePath, 'utf8');
            const rewritten = rewriteComponentImports({
                source,
                fileName: extension === '.jsx'
                    ? sourcePath.replace(/\.jsx$/i, '.tsx')
                    : sourcePath,
                importerOutputPath: outputPath,
                site,
                outputRoot: componentsOutputDir,
            });

            fs.writeFileSync(outputPath, rewritten, 'utf8');
        } else {
            fs.copyFileSync(sourcePath, outputPath);
        }
    }
}

export function exportReactPages(
    site: SiteContext,
    pages: DiscoveredReactPage[],
    componentsOutputDir: string,
): void {
    for (const page of pages) {
        copyDirectory(
            page.sourceDir,
            page.outputDir,
            site,
            componentsOutputDir,
        );
    }
}
