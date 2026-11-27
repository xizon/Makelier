import path from 'node:path';

import type { DiscoveredSite } from '../../utils/types.ts';
import { runProcess } from "./process.ts";

import { loadSite } from '../../site/load-site.ts';
import { loadSysConfig } from '../../config/load-config.ts';
import { optimizeImages } from '../../engines/image-optimizer/index.ts';

import { generateBlockConfigs } from '../../processors/generate-block-configs.ts';

/*
!!!IMPORTANT:
--------------

Vite Build
     │
     ▼
SSR Rendering
     │
     ▼
Image Optimization Engine (optional)
     │
     ▼
HTML Formatter (optional)
     │
     ▼
Write Production Files

*/

export async function runBuild(sites: DiscoveredSite[]): Promise<void> {


    // System config
    const config = await loadSysConfig(process.cwd());

    // HTML Formatter
    const beautify = config.build?.html?.beautify ?? true;

    // Image Optimizer
    const imageOptions = config.build?.images;
    const imageOptimizationEnabled = imageOptions?.enabled ?? true;
    const imageQuality = imageOptions?.quality ?? 80;

    // CSS Compatibility
    const cssCompatibility = config.build?.css?.compatibility ?? true;


    //------------------------
    // Build sequentially: each Site gets its own SITE and dist directory.
    for (const site of sites) {

        // [STEP 1] Generate index
        await runProcess("npx", ["tsx", "core/agent/generate-index.ts"], site, "Generating indexes");

        // [STEP 2.1] Generate Playground entries
        // !!! === You need to enable "allEntryFiles" and "playgroundEntries" in the Vite configuration. ===
        // await runProcess("npx", ["tsx", "core/playground/generate-entries.ts"], site, "Generate Playground entries");

        // [STEP 2.2] Generate WordPress Block configurations
        const siteContext = loadSite(site.root);
        generateBlockConfigs(siteContext);


        // [STEP 3] Generate Site tsconfig
        await runProcess("npx", ["tsx", "core/ts/generate-site-tsconfig.ts"], site, "Generate TypeScript configurations");

        // [STEP 4] VITE
        console.log('[Makelier][CHECK] =========== [1] VITE BUILD START ===========');
        await runProcess("npx", ["vite", "build"], site, "Building Site", {
            SYS_CSS_COMPATIBILITY: String(cssCompatibility),
        });
        console.log('[Makelier][CHECK] =========== [1] VITE BUILD FINISHED ===========');

        // [STEP 5] SSR
        console.log('[Makelier][CHECK] =========== [2] SSR START ===========');
        await runProcess("npx", ["tsx", "core/processors/render-page.ts"], site, "Rendering pages", {
            SYS_HTML_BEAUTIFY: String(beautify),
        });
        console.log('[Makelier][CHECK] =========== [2] SSR FINISHED ===========');


        // [STEP 6] Image Optimization
        if (imageOptimizationEnabled) {
            console.log('[Makelier][CHECK] =========== [3] IMAGE OPTIMIZATION START ===========');

            const siteContext = loadSite(site.root);

            await optimizeImages(siteContext.paths.dist, {
                quality: imageQuality,
                formats: imageOptions?.formats ?? [
                    'jpeg',
                    'png',
                    'webp',
                    'avif',
                ],
            });

            console.log('[Makelier][CHECK] =========== [3] IMAGE OPTIMIZATION FINISHED ===========');
        }


        // [STEP 7] Render Playground demos
        // !!! === You need to enable "allEntryFiles" and "playgroundEntries" in the Vite configuration. ===
        // console.log('[Makelier][CHECK] =========== [3] PLAYGROUND SSR START ===========');
        // await runProcess("npx", ["tsx", "core/playground/render-playground.ts"], site, "Rendering Playground demos");
        // console.log('[Makelier][CHECK] =========== [3] PLAYGROUND SSR FINISHED ===========');


        // [STEP 8] Generate Playground index
        // !!! === You need to enable "allEntryFiles" and "playgroundEntries" in the Vite configuration. ===
        // console.log('[Makelier][CHECK] =========== [4] PLAYGROUND INDEX START ===========');
        // await runProcess("npx", ["tsx", "core/playground/generate-playground-index.ts"], site, "Generating Playground index");
        // console.log('[Makelier][CHECK] =========== [4] PLAYGROUND INDEX FINISHED ===========');


    }
}
