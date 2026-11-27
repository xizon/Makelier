/**
 * Cross-Site Component Resolver
 */
import path from 'node:path';
import fs from 'node:fs';
import type { Plugin } from 'vite';
import { loadSite } from '../site/load-site.ts';
import { discoverPages } from '../processors/pages.ts';

import { 
    DEFAULT_SITE,
 } from '../utils/const.ts';


// --------------------------------------------------
// Project & Site
// --------------------------------------------------

const projectRoot = path.resolve(import.meta.dirname, '../..');

const siteTitle = process.env.SITE || DEFAULT_SITE;

const site = loadSite(
    path.resolve(projectRoot, 'sites', siteTitle)
);

// The page is encountered only once
// it is used for the development and build process of the current site.
const pages = discoverPages(site);


//
export function crossSiteResolverPlugin(): Plugin {
    return {
        name: 'cross-site-resolver',

        enforce: 'pre',

        resolveId(source) {

            if (!source.startsWith('@/site/')) {
                return null;
            }

            console.log('[Makelier][CROSS-SITE] Resolve:', source);
            const parts = source.slice('@/site/'.length).split('/');

            if (
                parts.length < 3 ||
                parts.some(part => !part)
            ) {
                throw new Error(
                    `[Makelier] Invalid cross-site import: ${source}`
                );
            }


            const [siteName, resourceType, ...resourcePaths] = parts;


            const targetSiteRoot = path.resolve(
                projectRoot,
                'sites',
                siteName
            );

            const siteConfigPath = path.join(
                targetSiteRoot,
                'site.json'
            );

            if (!fs.existsSync(siteConfigPath)) {
                throw new Error(`[Makelier] Site not found: ${siteName}`);
            }

            const config = JSON.parse(
                fs.readFileSync(siteConfigPath, 'utf-8')
            );

            if (config.name !== siteName) {
                throw new Error(
                    `[Makelier] Invalid site configuration: ${siteName}`
                );
            }

            // --------------------------------------------------
            // Assets
            // --------------------------------------------------
            if (resourceType === 'assets') {
                return null;  // next "cross-site-assets.ts"
            }

            // --------------------------------------------------
            // Components
            // --------------------------------------------------

            if (resourceType === 'components') {
                if (resourcePaths.length === 0) {
                    throw new Error(
                        `[Makelier] Invalid cross-site component: ${source}`
                    );
                }

                const [componentName, ...subPaths] = resourcePaths;

                const componentsRoot = path.resolve(
                    targetSiteRoot,
                    'src',
                    'components'
                );

                const componentRoot = path.resolve(
                    componentsRoot,
                    componentName
                );

                const componentPath = path.resolve(
                    componentRoot,
                    ...subPaths
                );

                const isWithin = (root: string, target: string) => {
                    const relative = path.relative(root, target);

                    return (
                        relative === '' ||
                        (
                            relative !== '..' &&
                            !relative.startsWith(`..${path.sep}`) &&
                            !path.isAbsolute(relative)
                        )
                    );
                };

                if (
                    !isWithin(componentsRoot, componentRoot) ||
                    !isWithin(componentRoot, componentPath)
                ) {
                    throw new Error(
                        `[Makelier] Invalid cross-site component path: ${source}`
                    );
                }

                if (!fs.existsSync(componentRoot)) {
                    throw new Error(
                        `[Makelier] Component not found: ${source}`
                    );
                }

                const entryFile = path.resolve(
                    componentPath,
                    'index.ts'
                );

                if (!fs.existsSync(entryFile)) {
                    throw new Error(
                        `[Makelier] Component entry not found: ${entryFile}`
                    );
                }

                return entryFile;
            }


            throw new Error(
                `[Makelier] Unsupported cross-site resource type: ${resourceType}`
            );

        },
    };
}
