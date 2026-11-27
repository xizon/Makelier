import path from 'node:path';
import { defineConfig } from 'vite';
import { createSiteContext } from '../../core/site/site-context.ts';
import {
    injectComponentAttributePlugin,
} from '../../core/plugins/inject-com.ts';
import { autoMount } from '../../core/plugins/auto-mount.ts';

/*
TEST: npx vite build --config tests/wordpress/vite.wp.config.ts
@Compatible with WordPress 7+
*/

const pluginDir = './tests/wordpress/gen_plugins/makelier-test-block';
const projectRoot = path.resolve(import.meta.dirname, '../..');
const {
    pages,
} = createSiteContext(projectRoot);

const viewEntry = path.resolve(
    projectRoot,
    'tests/wordpress/view.ts',
);


export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@/runtime',
                replacement: path.resolve(
                    projectRoot,
                    'core/runtime',
                ),
            },
            {
                find: '@/components',
                replacement: path.resolve(
                    projectRoot,
                    'sites/_official/src/components',
                ),
            },
            {
                find: /^@\//,
                replacement: `${projectRoot}/`,
            },
        ],
    },
    plugins: [
        injectComponentAttributePlugin(),
        autoMount({
            componentsDir: 'src/components',
            sitesDir: 'sites',
            registryEntry: '@/runtime/bridge/register',
            runtimeEntry: path.resolve(
                projectRoot,
                'core/runtime/auto.ts',
            ),
            entryFiles: [viewEntry],
        }),

    ],

    build: {
        outDir: path.join(
            pluginDir,
            'blocks/pricing-table',
        ),

        emptyOutDir: false,

        cssCodeSplit: false, // required: "style.css" 

        lib: {

            // create "style.css" to wordpress "plugins/makelier-test-block"
            // -------------------
            cssFileName: 'style',


            // create "index.js" to wordpress "plugins/makelier-test-block"
            // -------------------
            // entry: path.resolve(
            //     process.cwd(),
            //     'tests/wordpress/index.js',
            // ),
            // formats: ['iife'],
            // name: 'MakelierPricingTable',
            // fileName: () => 'index.js',


            // create "view.js" to wordpress "plugins/makelier-test-block"
            // -------------------
            entry: path.resolve(process.cwd(), 'tests/wordpress/view.ts'),
            formats: ['iife'],
            name: 'MakelierPricingTable',
            fileName: () => 'view.js',

        },

        rolldownOptions: {
            external: [
                '@wordpress/blocks',
                '@wordpress/element',
                '@wordpress/block-editor',
                '@wordpress/components',
            ],

            output: {
                globals: {
                    '@wordpress/blocks': 'wp.blocks',
                    '@wordpress/element': 'wp.element',
                    '@wordpress/block-editor': 'wp.blockEditor',
                    '@wordpress/components': 'wp.components',
                },
            },
        },
    },
});