import fs from 'node:fs';
import path from 'node:path';

import type { SiteContext, DiscoveredReactPage } from '../../../utils/types.ts';
import { parseTemplate } from '../../../engines/template/parser.ts';

const PACKAGE_NAME_PATTERN = /^(@[^/]+\/[^/]+|[^/]+)/;

function getPackageName(specifier: string): string | null {
    if (
        !specifier ||
        specifier.startsWith('.') ||
        specifier.startsWith('/') ||
        specifier.startsWith('@/') ||
        specifier.startsWith('#') ||
        specifier.startsWith('node:')
    ) {
        return null;
    }

    return specifier.match(PACKAGE_NAME_PATTERN)?.[1] ?? null;
}

function readSitePackage(site: SiteContext): Record<string, any> {
    const packagePath = path.join(site.root, 'package.json');
    if (!fs.existsSync(packagePath)) return {};

    try {
        return JSON.parse(fs.readFileSync(packagePath, 'utf8')) as Record<string, any>;
    } catch {
        return {};
    }
}

function collectFromSource(
    filePath: string,
    found: Map<string, string>,
    declared: Record<string, string>,
): void {
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return;

    const extension = path.extname(filePath).toLowerCase();
    if (!['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'].includes(extension)) return;

    const source = fs.readFileSync(filePath, 'utf8');

    try {
        const parsed = parseTemplate({
            source,
            fileName: extension === '.jsx' ? filePath.replace(/\.jsx$/i, '.tsx') : filePath,
        });

        for (const declaration of parsed.sourceFile.getImportDeclarations()) {
            const name = getPackageName(declaration.getModuleSpecifierValue());
            if (name && !found.has(name)) {
                found.set(name, declared[name] ?? '*');
            }
        }

        for (const declaration of parsed.sourceFile.getExportDeclarations()) {
            const specifier = declaration.getModuleSpecifierValue();
            if (!specifier) continue;
            const name = getPackageName(specifier);
            if (name && !found.has(name)) found.set(name, declared[name] ?? '*');
        }
    } catch {
        // A non-TS source file may not be understood by the template parser.
        // Its declared Site dependencies are still merged below.
    }
}

function walk(directory: string, callback: (filePath: string) => void): void {
    if (!fs.existsSync(directory)) return;

    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const target = path.join(directory, entry.name);
        if (entry.isDirectory()) walk(target, callback);
        else if (entry.isFile()) callback(target);
    }
}

export function collectExternalDependencies(
    appRoot: string,
    pages: DiscoveredReactPage[],
    componentsOutputDir: string,
    site: SiteContext,
): Record<string, string> {
    const sitePackage = readSitePackage(site);
    const declared = {
        ...(sitePackage.dependencies ?? {}),
        ...(sitePackage.devDependencies ?? {}),
    } as Record<string, string>;

    const found = new Map<string, string>();

    for (const page of pages) {
        walk(page.outputDir, (filePath) => collectFromSource(filePath, found, declared));
    }

    walk(componentsOutputDir, (filePath) => collectFromSource(filePath, found, declared));

    // Preserve all Site-declared runtime dependencies, even if imported dynamically.
    for (const [name, version] of Object.entries(sitePackage.dependencies ?? {})) {
        if (!found.has(name)) found.set(name, String(version));
    }

    return Object.fromEntries(found);
}
