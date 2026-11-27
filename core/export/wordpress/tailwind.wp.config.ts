import fs from 'node:fs';
import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';

import cssnano from 'cssnano';
import lite from 'cssnano-preset-lite';
import postcssNesting from 'postcss-nesting';

import {
    colorMixFallback,
} from '../../engines/css-compatibility/index.ts';

import type { InlineConfig } from 'vite';

const cssCompatibility = process.env.SYS_CSS_COMPATIBILITY !== 'false';

export function createWordPressTailwindConfig(
    siteRoot: string,
    outputDir: string,
): InlineConfig {
    const tailwindPath = path.join(
        siteRoot,
        'src',
        'styles',
        'tailwind.css',
    );

    const entryDir = path.join(
        siteRoot,
        '.makelier',
        'wp',
        '__entries__',
    );

    const entryPath = path.join(
        entryDir,
        'tailwind.ts',
    );

    fs.mkdirSync(entryDir, { recursive: true });

    fs.writeFileSync(
        entryPath,
        `import '${tailwindPath.replace(/\\/g, '/')}';\n`,
        'utf8',
    );

    return {
        configFile: false,
        root: siteRoot,

        plugins: [
            tailwindcss(),
        ],

        css: {
            postcss: {
                plugins: [
                    postcssNesting({ noIsPseudoSelector: true }),
                    ...(cssCompatibility ? [colorMixFallback] : []),
                    cssnano({ preset: lite }),
                ],
            },
        },

        build: {
            outDir: outputDir,
            emptyOutDir: false,
            manifest: false,
            sourcemap: false,
            cssCodeSplit: false,
            cssMinify: false,

            rollupOptions: {
                input: entryPath,

                output: {
                    entryFileNames: 'assets/tailwind.js',

                    assetFileNames: (assetInfo) => {
                        if (assetInfo.name?.endsWith('.css')) {
                            return 'assets/tailwind.css';
                        }

                        return 'assets/[name][extname]';
                    },
                },
            },
        },
    };
}