
import fs from 'node:fs';
import path from 'node:path';

import type {
    SiteContext,
    ResolvedComponentImport,
} from '../../utils/types.ts';

import { loadSite } from '../../site/load-site.ts';

const MODULE_EXTENSIONS = [
    '.tsx',
    '.ts',
    '.jsx',
    '.js',
];

/**
 * Check whether a path is inside a directory.
 */
function isInsideDirectory(
    directory: string,
    targetPath: string,
): boolean {
    const relativePath = path.relative(directory, targetPath);

    return (
        relativePath === '' ||
        (
            relativePath !== '..' &&
            !relativePath.startsWith(`..${path.sep}`) &&
            !path.isAbsolute(relativePath)
        )
    );
}

/**
 * Resolve a module inside a component directory.
 *
 * Supports:
 *   icon
 *   icon.tsx
 *   icons/index.tsx
 */
function resolveModulePath(
    sourceDir: string,
    internalPath: string,
): string {
    const targetPath = path.resolve(sourceDir, internalPath);

    if (!isInsideDirectory(sourceDir, targetPath)) {
        throw new Error(
            `[Makelier] Invalid component import path: ${internalPath}`,
        );
    }

    // Check an exact file or directory first.
    if (fs.existsSync(targetPath)) {
        const stat = fs.statSync(targetPath);

        if (stat.isFile()) {
            if (!MODULE_EXTENSIONS.includes(path.extname(targetPath))) {
                throw new Error(
                    `[Makelier] Unsupported component module: ${targetPath}`,
                );
            }

            return targetPath;
        }

        if (stat.isDirectory()) {
            for (const extension of MODULE_EXTENSIONS) {
                const indexPath = path.join(
                    targetPath,
                    `index${extension}`,
                );

                if (
                    fs.existsSync(indexPath) &&
                    fs.statSync(indexPath).isFile()
                ) {
                    return indexPath;
                }
            }

            throw new Error(
                `[Makelier] Component module not found: ${targetPath}`,
            );
        }
    }

    // Resolve extensionless file imports.
    for (const extension of MODULE_EXTENSIONS) {
        const candidate = `${targetPath}${extension}`;

        if (
            fs.existsSync(candidate) &&
            fs.statSync(candidate).isFile()
        ) {
            return candidate;
        }
    }

    // Resolve directory index imports.
    for (const extension of MODULE_EXTENSIONS) {
        const candidate = path.join(
            targetPath,
            `index${extension}`,
        );

        if (
            fs.existsSync(candidate) &&
            fs.statSync(candidate).isFile()
        ) {
            return candidate;
        }
    }

    throw new Error(
        `[Makelier] Component module not found: ${targetPath}`,
    );
}

/**
 * Resolve a component import.
 *
 * Supported formats:
 *   @/components/logo
 *   @/components/logo/icon
 *   @/site/product-elegant/components/logo
 *   @/site/product-elegant/components/logo/icon
 */
export function resolveComponentImport(
    currentSite: SiteContext,
    specifier: string,
    outputRoot: string,
): ResolvedComponentImport | null {
    const localMatch = specifier.match(
        /^@\/components\/([^/]+)(?:\/(.*))?$/,
    );

    const crossSiteMatch = specifier.match(
        /^@\/site\/([^/]+)\/components\/([^/]+)(?:\/(.*))?$/,
    );

    if (!localMatch && !crossSiteMatch) {
        return null;
    }

    const siteName = crossSiteMatch
        ? crossSiteMatch[1]
        : currentSite.name;

    const componentName = crossSiteMatch
        ? crossSiteMatch[2]
        : localMatch![1];

    const internalPath = (
        crossSiteMatch
            ? crossSiteMatch[3]
            : localMatch![2]
    ) ?? '';

    // Resolve the Site directory.
    const siteRoot = siteName === currentSite.name
        ? currentSite.root
        : path.resolve(path.dirname(currentSite.root), siteName);

    if (
        !fs.existsSync(siteRoot) ||
        !fs.statSync(siteRoot).isDirectory()
    ) {
        throw new Error(
            `[Makelier] Site not found: ${siteName}`,
        );
    }

    // Reuse the existing Site discovery service.
    const site = siteName === currentSite.name
        ? currentSite
        : loadSite(siteRoot);

    // Resolve the component source directory.
    const componentsRoot = path.resolve(site.paths.components);
    const sourceDir = path.resolve(componentsRoot, componentName);

    if (!isInsideDirectory(componentsRoot, sourceDir) ||
        sourceDir === componentsRoot) {
        throw new Error(
            `[Makelier] Invalid component path: ${specifier}`,
        );
    }

    if (
        !fs.existsSync(sourceDir) ||
        !fs.statSync(sourceDir).isDirectory()
    ) {
        throw new Error(
            `[Makelier] Component not found: ${specifier}`,
        );
    }

    // Keep the current Site at the output root.
    // Place cross-Site components inside their Site directory.
    const outputDir = siteName === currentSite.name
        ? path.join(outputRoot, componentName)
        : path.join(outputRoot, siteName, componentName);

    let outputPath = outputDir;

    if (internalPath) {
        const resolvedSourcePath = resolveModulePath(
            sourceDir,
            internalPath,
        );

        const resolvedInternalPath = path.relative(
            sourceDir,
            resolvedSourcePath,
        );

        const isDirectoryIndex = path.basename(resolvedSourcePath)
            .startsWith('index.');

        const outputInternalPath = isDirectoryIndex
            ? path.dirname(resolvedInternalPath)
            : resolvedInternalPath;

        outputPath = path.resolve(outputDir, outputInternalPath);

        if (!isDirectoryIndex) {
            const extension = path.extname(outputPath);
            outputPath = outputPath.slice(0, -extension.length);
        }
    }

    return {
        dependency: {
            siteName,
            componentName,
            sourceDir,
            outputDir,
            site,
        },
        internalPath,
        outputPath,
    };
}
