import { build } from 'vite';

import {
    createWordPressViteConfig,
    discoverEditorEntries,
    createWordPressViewViteConfig,
    discoverViewEntries,
} from './vite.wp.config.ts';

import {
    createWordPressTailwindConfig,
} from './tailwind.wp.config';

/*
TEST:
npm run build:wp-editor -- my-site
*/

export async function runBuildWordPressEditor(
    siteRoot: string,
): Promise<void> {
    const components = discoverEditorEntries(siteRoot);

    if (components.length === 0) {
        console.log(
            `[Makelier] No WordPress editor entries found in: ${siteRoot}`,
        );
        return;
    }

    for (const componentName of components) {
        console.log(
            `[Makelier] Building WordPress editor: ${componentName}`,
        );

        await build(
            createWordPressViteConfig(componentName, siteRoot),
        );
    }

    console.log(
        `[Makelier] Built ${components.length} WordPress editor script(s).`,
    );
}

/**
 * Build WordPress frontend view scripts and styles.
 */
export async function runBuildWordPressView(
    siteRoot: string,
): Promise<void> {
    const components = discoverViewEntries(siteRoot);

    if (components.length === 0) {
        console.log(
            `[Makelier] No WordPress view entries found in: ${siteRoot}`,
        );
        return;
    }

    for (const componentName of components) {
        console.log(
            `[Makelier] Building WordPress view: ${componentName}`,
        );

        await build(
            createWordPressViewViteConfig(componentName, siteRoot),
        );
    }

    console.log(
        `[Makelier] Built ${components.length} WordPress view script(s).`,
    );
}

/**
 * Build shared Tailwind CSS for WordPress.
 */
export async function runBuildWordPressTailwind(
    siteRoot: string,
    outputDir: string,
): Promise<void> {
    console.log(
        '[Makelier] Building shared WordPress Tailwind CSS...',
    );

    await build(
        createWordPressTailwindConfig(
            siteRoot,
            outputDir,
        ),
    );

    console.log(
        '[Makelier] Built shared WordPress Tailwind CSS.',
    );
}