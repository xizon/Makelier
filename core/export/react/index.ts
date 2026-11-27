/**
 * React export entry points.
 *
 * - exportComponentsToReact(): legacy component-only export.
 * - exportSiteToReact(): complete standalone React application export.
 */

import fs from 'node:fs';
import path from 'node:path';

import type {
    SiteContext,
    ComponentDependency
} from '../../utils/types.ts';

import {
    collectComponentDependencies,
} from './dependency-collector.ts';

import {
    exportComponent,
} from './component-exporter.ts';

import { exportSiteToReactApp } from './app/index.ts';

function getComponentId(
    dependency: ComponentDependency,
): string {
    return `${dependency.siteName}/${dependency.componentName}`;
}

function createRootDependency(
    site: SiteContext,
    componentName: string,
    outputRoot: string,
): ComponentDependency {
    return {
        siteName: site.name,
        componentName,
        sourceDir: path.join(site.paths.components, componentName),
        outputDir: path.join(outputRoot, componentName),
        site,
    };
}

/**
 * Export all Site components to the legacy dist-react directory.
 * This public API is retained for backwards compatibility.
 */
export async function exportComponentsToReact(
    site: SiteContext,
): Promise<void> {
    const componentsDir = path.resolve(site.paths.components);
    const outputRoot = path.resolve(site.root, 'dist-react');

    if (
        !fs.existsSync(componentsDir) ||
        !fs.statSync(componentsDir).isDirectory()
    ) {
        throw new Error(`[Makelier] Components directory not found: ${componentsDir}`);
    }

    const entries = fs.readdirSync(componentsDir, { withFileTypes: true });
    const componentNames = entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort();

    if (componentNames.length === 0) {
        console.warn(`[Makelier] No components found in Site "${site.name}".`);
        return;
    }

    fs.mkdirSync(outputRoot, { recursive: true });

    const components = new Map<string, ComponentDependency>();

    for (const componentName of componentNames) {
        const rootDependency = createRootDependency(site, componentName, outputRoot);
        components.set(getComponentId(rootDependency), rootDependency);

        const result = collectComponentDependencies({
            site,
            componentName,
            outputRoot,
        });

        for (const dependency of result.dependencies) {
            const dependencyId = getComponentId(dependency);
            if (!components.has(dependencyId)) {
                components.set(dependencyId, dependency);
            }
        }
    }

    for (const dependency of components.values()) {
        exportComponent({ dependency, outputRoot });
    }

    console.log(
        `\n\x1b[32m[Export React] Done! Total ${components.size} components exported to ${path.relative(site.root, outputRoot)}/\x1b[0m`,
    );
}

/**
 * Export the selected Site as a complete React application.
 */
export async function exportSiteToReact(
    site: SiteContext,
): Promise<void> {
    await exportSiteToReactApp(site);
}
