import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type {
    InlineConfig,
} from 'vite';

import {
    injectComponentAttributePlugin,
} from '../../plugins/inject-com.ts';

import {
    autoMount,
} from '../../plugins/auto-mount.ts';

/*
@Compatible with WordPress 7+


!!!IMPORTANT:
--------------
WordPress Editor Build
    │
    └── injectComponentAttributePlugin()
              │
              ▼
       Template with data-component
              │
              ▼
         Gutenberg Save
              │
              ▼
         WordPress HTML


WordPress View Build
    │
    └── autoMount()
              │
              ▼
       Controller Registration
              │
              ▼
       mountComponents()


       

STEP:
--------------
generateBlockConfigs()
        │
        ▼
block.json + config.json
        │
        ▼
generateEditorEntries()
        │
        ▼
 Block Editor Entry
        │
        ▼
Vite WordPress Build
        │
        ▼
.makelier/wp/

*/

const currentDir = path.dirname(fileURLToPath(import.meta.url));

export const makelierRoot = path.resolve(
    currentDir,
    '../../..',
);

export function createWordPressViteConfig(
    componentName: string,
    siteRoot: string,
): InlineConfig {
    const wpRoot = path.join(
        siteRoot,
        '.makelier',
        'wp',
    );

    const entriesDir = path.join(wpRoot, '__entries__');

    const entryPath = path.join(
        entriesDir,
        `${componentName}.ts`,
    );

    const outputDir = path.join(
        wpRoot,
        componentName,
    );

    const wordpressExternals: Record<string, string> = {
        '@wordpress/blocks': 'wp.blocks',
        '@wordpress/element': 'wp.element',
        '@wordpress/block-editor': 'wp.blockEditor',
        '@wordpress/components': 'wp.components',
    };

    const config: InlineConfig = {
        configFile: false,
        root: makelierRoot,
        plugins: [
            injectComponentAttributePlugin(),
        ],
        build: {
            outDir: outputDir,
            emptyOutDir: false,
            manifest: false,
            sourcemap: false,

            rollupOptions: {
                input: entryPath,

                external: Object.keys(wordpressExternals),

                output: {
                    format: 'iife',
                    entryFileNames: 'edit.js',
                    globals: wordpressExternals,
                },
            },
        },
    };

    return config;
}

/**
 * Discover all generated WordPress editor entries.
 */
export function discoverEditorEntries(
    siteRoot: string,
): string[] {
    const entriesDir = path.join(
        siteRoot,
        '.makelier',
        'wp',
        '__entries__',
    );

    if (!fs.existsSync(entriesDir)) {
        return [];
    }

    return fs.readdirSync(entriesDir)
        .filter((filename) => filename.endsWith('.ts'))
        .map((filename) => path.basename(filename, '.ts'));
}



/**
 * Create WordPress frontend view build config.
 */
export function createWordPressViewViteConfig(
    componentName: string,
    siteRoot: string,
): InlineConfig {
    const wpRoot = path.join(
        siteRoot,
        '.makelier',
        'wp',
    );

    const entriesDir = path.join(
        wpRoot,
        '__view-entries__',
    );

    const entryPath = path.join(
        entriesDir,
        `${componentName}.ts`,
    );

    const outputDir = path.join(
        wpRoot,
        componentName,
    );

    return {
        configFile: false,
        root: makelierRoot,

        plugins: [
            autoMount({
                componentsDir: 'src/components',
                sitesDir: 'sites',
                registryEntry: '@/runtime/bridge/register',
                runtimeEntry: path.resolve(
                    makelierRoot,
                    'core/runtime/auto.ts',
                ),
                entryFiles: [entryPath],
            }),
        ],

        resolve: {
            alias: [
                {
                    find: '@/runtime',
                    replacement: path.resolve(
                        makelierRoot,
                        'core/runtime',
                    ),
                },
                {
                    find: '@/components',
                    replacement: path.resolve(
                        siteRoot,
                        'src/components',
                    ),
                },
                {
                    find: /^@\//,
                    replacement: `${makelierRoot}/`,
                },
            ],
        },

        build: {
            outDir: outputDir,
            emptyOutDir: false,
            manifest: false,
            sourcemap: false,

            cssCodeSplit: false,

            lib: {
                entry: entryPath,
                formats: ['iife'],
                name: 'MakelierView',
                fileName: () => 'view.js',
                cssFileName: 'style',
            },
        },
    };
}


/**
 * Discover all generated WordPress view entries.
 */
export function discoverViewEntries(
    siteRoot: string,
): string[] {
    const entriesDir = path.join(
        siteRoot,
        '.makelier',
        'wp',
        '__view-entries__',
    );

    if (!fs.existsSync(entriesDir)) {
        return [];
    }

    return fs.readdirSync(entriesDir)
        .filter((filename) => filename.endsWith('.ts'))
        .map((filename) => path.basename(filename, '.ts'));
}