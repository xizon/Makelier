import fs from 'node:fs';
import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';

import type { InlineConfig } from 'vite';

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

        build: {
            outDir: outputDir,
            emptyOutDir: false,
            manifest: false,
            sourcemap: false,
            cssCodeSplit: false,

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