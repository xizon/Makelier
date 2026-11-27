import { loadSite } from '../../site/load-site.ts';
import { 
    runBuildWordPressEditor,
    runBuildWordPressView
} from '../../export/wordpress/build-editor-runner.ts';
import { exportWordPressPlugin } from '../../export/wordpress/plugin-exporter.ts';
import type { DiscoveredSite } from '../../utils/types.ts';
import {
    generateBlockConfigs,
} from '../../processors/generate-block-configs.ts';

export async function runExportWP(sites: DiscoveredSite[]): Promise<void> {
    for (const item of sites) {
        console.log(`\n[Makelier] Exporting WordPress blocks: ${item.name}`);

        const site = loadSite(item.root);


        // STEP 1] Generate block configs and entries
        generateBlockConfigs(site);

        // STEP 2] Editor files
        await runBuildWordPressEditor(site.root);

        // STEP 3] View files
        await runBuildWordPressView(site.root);

        // STEP 4] Plugin files
        exportWordPressPlugin(site.root);
    }
}