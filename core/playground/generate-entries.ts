import fs from 'node:fs';
import path from 'node:path';

import { loadSite } from '../site/load-site.ts';

import { createComponentRegistry } from './component-registry.ts';
import { analyzeComponentExamples } from './analyze-component.ts';
import { writeDemoEntries } from './entry-writer.ts';
import { discoverComponents } from './discover-components.ts';

import { 
    CONSOLE_COLORS,
    DEFAULT_SITE,
 } from '../utils/const.ts';


const {
    RESET,
    YELLOW,
    BOLD_YELLOW,
    PINK,
} = CONSOLE_COLORS;




/**
 * Components currently enabled for Playground.
 *
 * SceneItem is a dependency of Scenes,
 * so it does not need to be a standalone Playground group.
 */


/**
 * Generate Playground TSX entries for the selected Site.
 */
async function main() {
    const projectRoot = process.cwd();

    // 1. Resolve current Site from environment.
    const siteName = process.env.SITE || DEFAULT_SITE;

    const siteRoot = path.resolve(
        projectRoot,
        'sites',
        siteName
    );

    const site = loadSite(siteRoot);

    const componentsRoot = site.paths.components;

    const hasComponents = fs.existsSync(componentsRoot);


    const entriesRoot = path.join(
        site.root,
        '.makelier',
        'playground',
        '__entries__'
    );

    console.log(`\n[Makelier][PLAYGROUND] Generating entries for ${site.name}`);

    // 2. Remove stale generated entries.
    fs.rmSync(entriesRoot, {
        recursive: true,
        force: true,
    });

    fs.mkdirSync(entriesRoot, {
        recursive: true,
    });

    // 3. Skip component discovery when the Site has no components directory.
    if (!hasComponents) {
        console.log(
            `[Makelier][PLAYGROUND] No components directory found. Skipping.`
        );
        console.warn(
            `${PINK}  ◆ Warning: If "components/{your_component}/controller.ts" is not used, JS scripts will not run automatically after the build.${RESET}`
        );
        
        console.log('\n================================');
        console.log(`[Makelier][PLAYGROUND] Generated 0 Playground entries.`);
        console.log('================================\n');

        return;
    }

    // 4. Create component registry.
    const registry = await createComponentRegistry(
        componentsRoot
    );

    // 5. Automatically discover components.
    const PLAYGROUND_COMPONENTS = discoverComponents(componentsRoot);
    const componentDirectories = PLAYGROUND_COMPONENTS;

    console.log(
        `[Makelier][PLAYGROUND] Discovered ${componentDirectories.length} components.`
    );


    // 6. Automatically discover components.
    /*
    TEST:

    const PLAYGROUND_COMPONENTS = [
        'hero-3d',
        'photo-scatter',
        'scenes',
    ];

    */



    console.log(`[Makelier][PLAYGROUND] Discovered ${componentDirectories.length} components.`);

    let totalDemos = 0;

    for (const componentDirectory of componentDirectories) {
        const componentRoot = path.join(
            componentsRoot,
            componentDirectory
        );

        const examplesPath = path.join(
            componentRoot,
            'examples.md'
        );
        // console.log(`-------`, examplesPath);

        if (!fs.existsSync(examplesPath)) {
            throw new Error(
                `[Makelier][PLAYGROUND] examples.md not found: ${examplesPath}`
            );
        }

        console.log(`\n[${componentDirectory}]`);

        // Read examples.md.
        const source = fs.readFileSync(
            examplesPath,
            'utf8'
        );

        // Parse Markdown and resolve JSX dependencies.
        const result = analyzeComponentExamples(
            source,
            registry,
            componentDirectory
        );

        if (result.demos.length === 0) {

            console.warn(
                `\n${BOLD_YELLOW}[${componentDirectory}]\n` +
                `  [Makelier][SKIP] ${componentDirectory}: No Demo headings found.\n` +
                `${RESET}\n`
            );

            continue;
        }

        // Generate TSX files.
        const writtenEntries = await writeDemoEntries(
            componentDirectory,
            result.demos,
            entriesRoot,
            site
        );

        totalDemos += writtenEntries.length;

        for (const entry of writtenEntries) {
            console.log(
                `[WRITE] ${componentDirectory}/${entry.fileName}`
            );
        }
    }

    console.log('\n================================');
    console.log(`[Makelier][PLAYGROUND] Generated ${totalDemos} Playground entries.`);
    console.log('================================\n');
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

