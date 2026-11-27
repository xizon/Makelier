import fs from 'node:fs';
import path from 'node:path';

import type { SiteContext } from '../../../utils/types.ts';

import { discoverReactPages } from './page-discoverer.ts';
import { exportPageComponentsToReact } from './component-exporter.ts';
import { exportReactPages } from './page-exporter.ts';
import { exportReactAssets } from './asset-exporter.ts';
import { generateReactApplicationFiles } from './app-generator.ts';
import { collectExternalDependencies } from './dependency-collector.ts';

/**
 * Export a Site as a complete, standalone React application.
 */
export async function exportSiteToReactApp(site: SiteContext): Promise<void> {
    const appRoot = path.resolve(
        site.root,
        'dist-react',
        `${site.name}-app`,
    );

    const srcRoot = path.join(appRoot, 'src');
    const pagesOutputDir = path.join(srcRoot, 'pages');
    const componentsOutputDir = path.join(srcRoot, 'components');

    const pages = discoverReactPages(site, pagesOutputDir);

    // Recreate only the generated app directory, preserving other exports.
    fs.rmSync(appRoot, { recursive: true, force: true });
    fs.mkdirSync(appRoot, { recursive: true });

    const componentCount = exportPageComponentsToReact(
        site,
        pages.map((page) => page.sourceFile),
        componentsOutputDir,
    );

    exportReactPages(site, pages, componentsOutputDir);
    exportReactAssets(site, appRoot);

    const externalDependencies = collectExternalDependencies(
        appRoot,
        pages,
        componentsOutputDir,
        site,
    );

    generateReactApplicationFiles(
        site,
        appRoot,
        pages,
        externalDependencies,
    );

    console.log(
        `\n\x1b[32m[Export React App] Done! ${pages.length} pages and ${componentCount} components exported to ${path.relative(site.root, appRoot)}/\x1b[0m`,
    );
}
