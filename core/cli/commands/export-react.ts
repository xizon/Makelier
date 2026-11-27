import { loadSite } from '../../site/load-site.ts';
import { exportSiteToReact } from '../../export/react/index.ts';
import type { DiscoveredSite } from '../../utils/types.ts';

export async function runExportReact(sites: DiscoveredSite[]): Promise<void> {
    for (const item of sites) {
        console.log(`\n[Makelier] Exporting standalone React App: ${item.name}`);

        const site = loadSite(item.root);
        await exportSiteToReact(site);
    }
}
