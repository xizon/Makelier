
import fs from 'node:fs';
import path from 'node:path';

import type { 
    SiteContext,
    ComponentDependency
 } from '../../utils/types.ts';

import { parseTemplate } from '../../engines/template/parser.ts';
import { resolveComponentImport } from './dependency-resolver.ts';


export interface CollectDependenciesOptions {
    site: SiteContext;
    componentName: string;
    outputRoot: string;
}

export interface CollectDependenciesResult {
    dependencies: ComponentDependency[];
}

type DependencyState = 'processing' | 'completed';

/**
 * Get a stable identifier for a component dependency.
 */
function getDependencyId(
    dependency: ComponentDependency,
): string {
    return `${dependency.siteName}/${dependency.componentName}`;
}

/**
 * Find supported source files inside a component directory.
 */
function findComponentFiles(
    componentDir: string,
): string[] {
    const files: string[] = [];

    function walk(directory: string): void {
        for (const entry of fs.readdirSync(directory, {
            withFileTypes: true,
        })) {
            const filePath = path.join(directory, entry.name);

            if (entry.isDirectory()) {
                walk(filePath);
                continue;
            }

            if (!entry.isFile()) {
                continue;
            }

            const extension = path.extname(entry.name).toLowerCase();

            if (extension === '.tsx') {
                files.push(filePath);
            }
        }
    }

    walk(componentDir);

    // Root template.ts is parsed as TSX.
    const templateTsPath = path.join(
        componentDir,
        'template.ts',
    );

    if (fs.existsSync(templateTsPath)) {
        files.push(templateTsPath);
    }

    return files;
}

/**
 * Collect component dependencies recursively.
 */
export function collectComponentDependencies(
    options: CollectDependenciesOptions,
): CollectDependenciesResult {
    const {
        site,
        componentName,
        outputRoot,
    } = options;

    const rootDependency: ComponentDependency = {
        siteName: site.name,
        componentName,
        sourceDir: path.join(
            site.paths.components,
            componentName,
        ),
        outputDir: path.join(outputRoot, componentName),
        site,
    };

    const rootId = getDependencyId(rootDependency);

    const dependencies = new Map<string, ComponentDependency>();
    const states = new Map<string, DependencyState>();

    function visit(dependency: ComponentDependency): void {
        const dependencyId = getDependencyId(dependency);

        if (states.has(dependencyId)) {
            return;
        }

        states.set(dependencyId, 'processing');

        const files = findComponentFiles(dependency.sourceDir);

        for (const filePath of files) {
            const source = fs.readFileSync(filePath, 'utf8');

            const parsed = parseTemplate({
                source,
                fileName: filePath.endsWith('.ts')
                    ? `${filePath}x`
                    : filePath,
            });

            const imports = parsed.sourceFile.getImportDeclarations();

            for (const declaration of imports) {
                const specifier = declaration.getModuleSpecifierValue();

                const resolved = resolveComponentImport(
                    dependency.site,
                    specifier,
                    outputRoot,
                );

                if (!resolved) {
                    continue;
                }

                const childDependency = resolved.dependency;
                const childId = getDependencyId(childDependency);

                if (
                    childId !== rootId &&
                    !dependencies.has(childId)
                ) {
                    dependencies.set(childId, childDependency);
                }

                if (!states.has(childId)) {
                    visit(childDependency);
                }
            }
        }

        states.set(dependencyId, 'completed');
    }

    visit(rootDependency);

    return {
        dependencies: [...dependencies.values()],
    };
}
