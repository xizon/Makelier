import fs from 'node:fs';
import path from 'node:path';

import type { 
    SiteContext,
    DiscoveredReactPage
 } from '../../../utils/types.ts';


function isSafePageSlug(slug: string): boolean {
    return (
        !!slug &&
        slug !== '.' &&
        slug !== '..' &&
        !slug.includes('/') &&
        !slug.includes('\\')
    );
}

/**
 * Discover pages using the Site convention:
 * src/pages/<page-name>/index.tsx
 *
 * The "home" page maps to "/"; all other page names map to "/<name>".
 */
export function discoverReactPages(
    site: SiteContext,
    outputPagesDir: string,
): DiscoveredReactPage[] {
    const pagesRoot = path.resolve(site.paths.pages);

    if (!fs.existsSync(pagesRoot) || !fs.statSync(pagesRoot).isDirectory()) {
        throw new Error(`[Makelier] Pages directory not found: ${pagesRoot}`);
    }

    const pages: DiscoveredReactPage[] = [];

    for (const entry of fs.readdirSync(pagesRoot, { withFileTypes: true })) {
        if (!entry.isDirectory() || !isSafePageSlug(entry.name)) continue;

        const sourceDir = path.join(pagesRoot, entry.name);
        const sourceFile = path.join(sourceDir, 'index.tsx');

        if (!fs.existsSync(sourceFile) || !fs.statSync(sourceFile).isFile()) {
            continue;
        }

        pages.push({
            slug: entry.name,
            route: entry.name === 'home' ? '/' : `/${entry.name}`,
            sourceDir,
            sourceFile,
            outputDir: path.join(outputPagesDir, entry.name),
            outputFile: path.join(outputPagesDir, entry.name, 'index.tsx'),
        });
    }

    pages.sort((a, b) => {
        if (a.slug === 'home') return -1;
        if (b.slug === 'home') return 1;
        return a.slug.localeCompare(b.slug);
    });

    if (pages.length === 0) {
        throw new Error(
            `[Makelier] No React pages found. Expected ${pagesRoot}/<page-name>/index.tsx`,
        );
    }

    return pages;
}
