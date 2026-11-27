import fs from 'node:fs';
import path from 'node:path';

import type {
    SiteContext,
    ComponentDependency,
} from '../../../utils/types.ts';

import { parseTemplate } from '../../../engines/template/parser.ts';
import { collectComponentDependencies } from '../dependency-collector.ts';
import { resolveComponentImport } from '../dependency-resolver.ts';
import { exportComponent } from '../component-exporter.ts';

function getDependencyId(dependency: ComponentDependency): string {
    return `${dependency.siteName}/${dependency.componentName}`;
}

/**
 * Export only components referenced by discovered page entry files,
 * plus their recursive component dependencies.
 */
export function exportPageComponentsToReact(
    site: SiteContext,
    pageFiles: string[],
    componentsOutputDir: string,
): number {
    const outputRoot = path.resolve(componentsOutputDir);
    const dependencies = new Map<string, ComponentDependency>();

    for (const pageFile of pageFiles) {
        const source = fs.readFileSync(pageFile, 'utf8');
        const parsed = parseTemplate({
            source,
            fileName: pageFile,
        });

        for (const declaration of parsed.sourceFile.getImportDeclarations()) {
            const specifier = declaration.getModuleSpecifierValue();
            const resolved = resolveComponentImport(site, specifier, outputRoot);

            if (!resolved) continue;

            const rootDependency = resolved.dependency;
            const rootId = getDependencyId(rootDependency);

            if (!dependencies.has(rootId)) {
                dependencies.set(rootId, rootDependency);
            }

            // The collector's output root is relative to the Site passed to it.
            // For a cross-Site page import, scope the collector under that Site.
            const collectorOutputRoot = rootDependency.siteName === site.name
                ? outputRoot
                : path.join(outputRoot, rootDependency.siteName);

            const collected = collectComponentDependencies({
                site: rootDependency.site,
                componentName: rootDependency.componentName,
                outputRoot: collectorOutputRoot,
            });

            for (const dependency of collected.dependencies) {
                const id = getDependencyId(dependency);
                if (!dependencies.has(id)) dependencies.set(id, dependency);
            }
        }
    }

    for (const dependency of dependencies.values()) {
        // Ensure the root output location follows the existing cross-Site layout.
        const expectedOutputDir = dependency.siteName === site.name
            ? path.join(outputRoot, dependency.componentName)
            : path.join(outputRoot, dependency.siteName, dependency.componentName);

        if (path.resolve(dependency.outputDir) !== path.resolve(expectedOutputDir)) {
            dependency.outputDir = expectedOutputDir;
        }

        exportComponent({
            dependency,
            outputRoot,
        });
    }

    return dependencies.size;
}
