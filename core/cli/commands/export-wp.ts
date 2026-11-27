import path from 'node:path';
import fs from 'node:fs';
import { loadSite } from '../../site/load-site.ts';
import { 
    runBuildWordPressEditor,
    runBuildWordPressView,
    runBuildWordPressTailwind
} from '../../export/wordpress/build-editor-runner.ts';
import { exportWordPressPlugin } from '../../export/wordpress/plugin-exporter.ts';
import type { DiscoveredSite } from '../../utils/types.ts';
import {
    generateBlockConfigs,
} from '../../processors/generate-block-configs.ts';

import { PLUGIN_NAME } from '../../utils/const.ts';

/*
The Tailwind build process must be executed after `exportWordPressPlugin()`; otherwise, 
the newly generated `assets/tailwind.css` file will be deleted by `exportWordPressPlugin()`.
*/


export async function runExportWP(sites: DiscoveredSite[]): Promise<void> {
    for (const item of sites) {
        console.log(`\n[Makelier] Exporting WordPress blocks: ${item.name}`);

        const site = loadSite(item.root);

        // STEP 0] Clean temporary WordPress entries
        const wpEntryDir = path.join(
            site.root,
            '.makelier',
            'wp',
            '__entries__',
        );

        fs.rmSync(wpEntryDir, {
            recursive: true,
            force: true,
        });


        // STEP 1] Generate block configs and entries
        generateBlockConfigs(site);

        // STEP 2] Editor files
        await runBuildWordPressEditor(site.root);

        // STEP 3] View files
        await runBuildWordPressView(site.root);

        // STEP 4] Plugin files
        exportWordPressPlugin(site.root);


        // STEP 5] Shared Tailwind CSS
        const pluginDir = path.join(
            site.root,
            'dist-wp',
            PLUGIN_NAME,
        );

        await runBuildWordPressTailwind(
            site.root,
            pluginDir,
        );
    }
}
