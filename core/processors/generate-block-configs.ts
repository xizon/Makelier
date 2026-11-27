
import { Project } from 'ts-morph';
import fs from 'node:fs';
import path from 'node:path';

import type {
    SiteContext,
    ComponentManifest,
} from '../utils/types.ts';

import { readJson } from '../utils/helper.ts';

import {
    analyzeBlockConfig,
} from '../engines/template/block-config-analyzer.ts';

import {
    writeBlockJson,
} from '../export/wordpress/block-json-generator.ts';

import {
    writeBlockConfig,
} from '../export/wordpress/block-config-generator.ts';

import {
    writeEditorEntry,
} from '../export/wordpress/editor-entry-generator.ts';

import {
    writeViewEntry,
} from '../export/wordpress/view-entry-generator.ts';


import { CONSOLE_COLORS } from '../utils/const.ts';

const {
    GREEN,
    YELLOW,
    RESET,
} = CONSOLE_COLORS;

type BlockMetadata = {
    apiVersion: number;
    name: string;
    title: string;
    category: string;
    description?: string;
    editorScript: string;
    viewScript: string;
    style: string;
};

/**
 * Convert a component directory name into a readable title.
 */
function toTitle(name: string): string {
    return name
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Generate WordPress block metadata from a component manifest.
 */
function createBlockMetadata(
    componentName: string,
    manifest: ComponentManifest,
): BlockMetadata {
    const name = manifest.name?.trim() || componentName;

    const metadata: BlockMetadata = {
        apiVersion: 3,
        name: `makelier/${name}`,
        title: toTitle(name),
        category: 'widgets',
        editorScript: 'file:./edit.js',
        viewScript: 'file:./view.js',
        style: 'file:./component-pure.css',
    };

    if (manifest.description?.trim()) {
        metadata.description = manifest.description.trim();
    }

    return metadata;
}

/**
 * Generate WordPress block.json files for all valid components.
 */
export function generateBlockConfigs(site: SiteContext): void {
    const componentsDir = site.paths.components;

    if (!fs.existsSync(componentsDir)) {
        console.warn(
            `${YELLOW}[Makelier] Components directory not found: ${componentsDir}${RESET}`,
        );
        return;
    }

    const outputRoot = path.join(
        site.root,
        '.makelier',
        'wp',
    );

    const directories = fs.readdirSync(componentsDir, {
        withFileTypes: true,
    }).filter((entry) => entry.isDirectory());

    const project = new Project({
        useInMemoryFileSystem: true,
    });

    let generatedCount = 0;

    for (const entry of directories) {
        const componentName = entry.name;

        const componentDir = path.join(
            componentsDir,
            componentName,
        );

        const manifestPath = path.join(
            componentDir,
            'manifest.json',
        );

        const templatePath = path.join(
            componentDir,
            'template.tsx',
        );

        if (
            !fs.existsSync(manifestPath) ||
            !fs.existsSync(templatePath)
        ) {
            continue;
        }

        const manifest = readJson<ComponentManifest>(manifestPath);

        if (!manifest || typeof manifest !== 'object') {
            console.warn(
                `${YELLOW}[Makelier] Skipping "${componentName}": invalid manifest.json${RESET}`,
            );
            continue;
        }

        try {
            const sourceFile = project.createSourceFile(
                templatePath,
                fs.readFileSync(templatePath, 'utf8'),
                {
                    overwrite: true,
                },
            );

            const config = analyzeBlockConfig(
                sourceFile,
                componentName,
            );

            const metadata = createBlockMetadata(
                componentName,
                manifest,
            );

            const outputDir = path.join(
                outputRoot,
                componentName,
            );

            const outputPath = path.join(
                outputDir,
                'block.json',
            );

            writeBlockJson(metadata, config.attributes, outputPath);

            const configPath = path.join(outputDir, 'config.json');
            writeBlockConfig(config, configPath);


            const editorEntryPath = writeEditorEntry(
                componentName,
                site.root,
            );

            const viewEntryPath = writeViewEntry(
                componentName,
                site.root,
            );

console.log('[DEBUG] View entry path:', viewEntryPath);
console.log('[DEBUG] View entry exists:', fs.existsSync(viewEntryPath));


            // console.log(`${GREEN}[Makelier] Generated WordPress editor entry: ${path.relative(site.root, editorEntryPath)}${RESET}`);


            //
            generatedCount++;

            console.log(
                `${GREEN}[Makelier] Generated WordPress block: .makelier/wp/${componentName}/block.json${RESET}`,
            );
        } catch (error) {
            console.error(
                `[Makelier] Failed to generate WordPress block for "${componentName}":`,
                error,
            );
        }
    }

    console.log(
        `${GREEN}[Makelier] Generated ${generatedCount} WordPress block configuration(s).${RESET}`,
    );
}
