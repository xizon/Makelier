
/**
 * Exports a single component as a React component.
 */

import fs from 'node:fs';
import path from 'node:path';

import type {
    SiteContext,
    ExportComponentOptions,
} from '../../utils/types.ts';

import { parseTemplate } from '../../engines/template/parser.ts';
import { transformToReact } from '../../engines/template/transformer.ts';
import { analyzeTemplate } from '../../engines/template/analyzer.ts';

import { rewriteComponentImports } from './import-rewriter.ts';

/**
 * Convert kebab-case or snake_case to PascalCase.
 */
function toPascalCase(str: string): string {
    return str
        .split(/[-_]/)
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
}

/**
 * Transform a TSX file into React-compatible TypeScript.
 */
function transformTsxFile(
    source: string,
    sourcePath: string,
    outputPath: string,
    site: SiteContext,
    outputRoot: string,
): string {
    const parsed = parseTemplate({
        source,
        fileName: sourcePath,
    });

    const transformed = transformToReact(parsed.sourceFile);

    return rewriteComponentImports({
        source: transformed.code,
        fileName: outputPath,
        importerOutputPath: outputPath,
        site,
        outputRoot,
    });
}

/**
 * Rewrite component imports in a JSX file without TypeScript transformation.
 */
function rewriteJsxFile(
    source: string,
    sourcePath: string,
    outputPath: string,
    site: SiteContext,
    outputRoot: string,
): string {
    // Use a TSX virtual filename so the parser recognizes JSX syntax.
    const virtualFileName = sourcePath.replace(/\.jsx$/i, '.tsx');

    return rewriteComponentImports({
        source,
        fileName: virtualFileName,
        importerOutputPath: outputPath,
        site,
        outputRoot,
    });
}

/**
 * Check whether a resolved path is inside a directory.
 */
function isInsideDirectory(
    directory: string,
    targetPath: string,
): boolean {
    const relativePath = path.relative(
        path.resolve(directory),
        path.resolve(targetPath),
    );

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
 * Copy assets referenced by the component manifest.
 *
 * Asset paths are relative to the component Site's public directory.
 */
function copyManifestAssets(
    assets: unknown,
    site: SiteContext,
    componentOutDir: string,
): void {
    if (assets === undefined) return;

    if (!Array.isArray(assets)) {
        throw new Error(
            `[Makelier] Invalid manifest assets in Site "${site.name}".`,
        );
    }

    const publicRoot = path.resolve(site.paths.public);
    const outputRoot = path.resolve(componentOutDir);

    for (const asset of assets) {
        if (
            typeof asset !== 'string' ||
            !asset.trim() ||
            asset.includes('\\') ||
            path.isAbsolute(asset) ||
            asset.startsWith('/') ||
            asset.startsWith('//') ||
            /^[a-z][a-z\d+.-]*:/i.test(asset)
        ) {
            throw new Error(
                `[Makelier] Invalid manifest asset path: ${String(asset)}`,
            );
        }

        const sourcePath = path.resolve(publicRoot, asset);
        const outputPath = path.resolve(outputRoot, asset);

        if (!isInsideDirectory(publicRoot, sourcePath)) {
            throw new Error(
                `[Makelier] Manifest asset is outside public directory: ${asset}`,
            );
        }

        if (!isInsideDirectory(outputRoot, outputPath)) {
            throw new Error(
                `[Makelier] Manifest asset escapes component output directory: ${asset}`,
            );
        }

        if (!fs.existsSync(sourcePath)) {
            console.warn(
                `[Makelier] Manifest asset not found: ${sourcePath}`,
            );
            continue;
        }

        if (!fs.statSync(sourcePath).isFile()) {
            console.warn(
                `[Makelier] Manifest asset is not a file: ${sourcePath}`,
            );
            continue;
        }

        fs.mkdirSync(path.dirname(outputPath), {
            recursive: true,
        });

        fs.copyFileSync(sourcePath, outputPath);
    }
}

/**
 * Copy a component's manifest and its referenced assets.
 */
function copyManifest(
    sourceDir: string,
    componentOutDir: string,
    site: SiteContext,
): void {
    const manifestPath = path.join(
        sourceDir,
        'manifest.json',
    );

    if (!fs.existsSync(manifestPath)) return;

    let manifest: Record<string, unknown>;

    try {
        const parsed: unknown = JSON.parse(
            fs.readFileSync(manifestPath, 'utf8'),
        );

        if (
            typeof parsed !== 'object' ||
            parsed === null ||
            Array.isArray(parsed)
        ) {
            throw new Error('Manifest must be a JSON object.');
        }

        manifest = parsed as Record<string, unknown>;
    } catch (error) {
        throw new Error(
            `[Makelier] Failed to parse component manifest: ${manifestPath}`,
            { cause: error },
        );
    }

    copyManifestAssets(
        manifest.assets,
        site,
        componentOutDir,
    );

    fs.writeFileSync(
        path.join(componentOutDir, 'manifest.json'),
        `${JSON.stringify(manifest, null, 4)}\n`,
        'utf8',
    );
}

/**
 * Recursively copy component files.
 *
 * Root-level entry files are handled separately.
 * Nested files with the same names are copied normally.
 */
function copyComponentFiles(
    sourceDir: string,
    outputDir: string,
    site: SiteContext,
    outputRoot: string,
    isRoot = true,
): void {
    fs.mkdirSync(outputDir, {
        recursive: true,
    });

    const excludedRootFiles = new Set([
        'index.ts',
        'index.tsx',
        'template.ts',
        'template.tsx',
        'manifest.json',
    ]);

    const entries = fs.readdirSync(sourceDir, {
        withFileTypes: true,
    });

    for (const entry of entries) {
        const sourcePath = path.join(
            sourceDir,
            entry.name,
        );

        const outputPath = path.join(
            outputDir,
            entry.name,
        );

        if (
            isRoot &&
            excludedRootFiles.has(entry.name)
        ) {
            continue;
        }

        if (entry.isDirectory()) {
            copyComponentFiles(
                sourcePath,
                outputPath,
                site,
                outputRoot,
                false,
            );

            continue;
        }

        if (!entry.isFile()) continue;

        const extension = path.extname(entry.name).toLowerCase();

        const source = (
            extension === '.tsx' ||
            extension === '.jsx'
        )
            ? fs.readFileSync(sourcePath, 'utf8')
            : null;

        if (extension === '.tsx' && source !== null) {
            const transformed = transformTsxFile(
                source,
                sourcePath,
                outputPath,
                site,
                outputRoot,
            );

            fs.mkdirSync(path.dirname(outputPath), {
                recursive: true,
            });

            fs.writeFileSync(
                outputPath,
                transformed,
                'utf8',
            );

            continue;
        }

        if (extension === '.jsx' && source !== null) {
            const rewritten = rewriteJsxFile(
                source,
                sourcePath,
                outputPath,
                site,
                outputRoot,
            );

            fs.mkdirSync(path.dirname(outputPath), {
                recursive: true,
            });

            fs.writeFileSync(
                outputPath,
                rewritten,
                'utf8',
            );

            continue;
        }

        // Copy all other files without modification.
        fs.mkdirSync(path.dirname(outputPath), {
            recursive: true,
        });

        fs.copyFileSync(sourcePath, outputPath);
    }
}

/**
 * Generate the React component entry point.
 */
function createReactEntry(
    componentName: string,
    hasTemplateParameter: boolean,
    hasController: boolean,
): string {
    const pascalName = toPascalCase(componentName);

    const propsType = hasTemplateParameter
        ? `React.ComponentProps<typeof Template>`
        : '{}';

    if (!hasController) {
        return `import React from 'react';
import { Template } from './template';

export type ${pascalName}Props = ${propsType};

export default function ${pascalName}(props: ${pascalName}Props) {
    return <Template {...props} />;
}
`;
    }

    return `import React, { useEffect, useRef } from 'react';
import { mount } from './controller';
import { Template } from './template';

export type ${pascalName}Props = ${propsType};

export default function ${pascalName}(props: ${pascalName}Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = mount(ref.current);

        return () => {
            if (typeof cleanup === 'function') {
                cleanup();
            }
        };
    }, []);

    return (
        <div ref={ref}>
            <Template {...props} />
        </div>
    );
}
`;
}

/**
 * Export one component to the React output directory.
 */
export function exportComponent(
    options: ExportComponentOptions,
): void {
    const { dependency, outputRoot } = options;

    const {
        componentName,
        sourceDir,
        outputDir,
        site,
    } = dependency;

    if (
        !fs.existsSync(sourceDir) ||
        !fs.statSync(sourceDir).isDirectory()
    ) {
        throw new Error(
            `[Makelier] Component directory not found: ${sourceDir}`,
        );
    }

    fs.mkdirSync(outputDir, {
        recursive: true,
    });

    // 1. Copy ordinary files and directories.
    copyComponentFiles(
        sourceDir,
        outputDir,
        site,
        outputRoot,
    );

    // 2. Copy manifest and referenced assets.
    copyManifest(
        sourceDir,
        outputDir,
        site,
    );

    // 3. Resolve the component template.
    const templatePathTsx = path.join(
        sourceDir,
        'template.tsx',
    );

    const templatePathTs = path.join(
        sourceDir,
        'template.ts',
    );

    const hasTsxTemplate = fs.existsSync(templatePathTsx);
    const hasTsTemplate = fs.existsSync(templatePathTs);

    if (hasTsxTemplate && hasTsTemplate) {
        throw new Error(
            `[Makelier] Both template.ts and template.tsx exist in: ${sourceDir}`,
        );
    }

    const templateSourcePath = hasTsxTemplate
        ? templatePathTsx
        : templatePathTs;

    const defaultTemplate = `
import './style.css';

export function Template({
    children,
    ...props
}: any) {
    return <div {...props}>{children}</div>;
}
`.trimStart();

    const hasTemplate = (
        hasTsxTemplate ||
        hasTsTemplate
    );

    const templateSource = hasTemplate
        ? fs.readFileSync(templateSourcePath, 'utf8')
        : defaultTemplate;

    // 4. Parse and transform the template.
    // Always use a TSX filename, including for template.ts.
    const parsed = parseTemplate({
        source: templateSource,
        fileName: hasTemplate
            ? templateSourcePath.replace(/\.ts$/i, '.tsx')
            : path.join(sourceDir, 'template.tsx'),
    });

    const analysis = analyzeTemplate(parsed.sourceFile);
    const transformed = transformToReact(parsed.sourceFile);

    // 5. Rewrite component imports using actual output paths.
    const templateOutputPath = path.join(
        outputDir,
        'template.tsx',
    );

    const templateCode = rewriteComponentImports({
        source: transformed.code,
        fileName: templateOutputPath,
        importerOutputPath: templateOutputPath,
        site,
        outputRoot,
    });

    fs.writeFileSync(
        templateOutputPath,
        templateCode,
        'utf8',
    );

    // 6. Generate React entry point.
    const hasController = fs.existsSync(
        path.join(sourceDir, 'controller.ts'),
    );

    const reactEntry = createReactEntry(
        componentName,
        analysis.hasParameter,
        hasController,
    );

    fs.writeFileSync(
        path.join(outputDir, 'index.tsx'),
        reactEntry,
        'utf8',
    );

    console.log(
        `\x1b[32m[Export React] Successfully exported: ${site.name}/${componentName}\x1b[0m`,
    );
}
