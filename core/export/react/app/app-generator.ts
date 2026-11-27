import fs from 'node:fs';
import path from 'node:path';

import type { SiteContext, DiscoveredReactPage } from '../../../utils/types.ts';
import {
    generateReactApp,
} from './route-generator.ts';
import {
    generateReactMain,
    generateReactPackageJson,
    generateReactTsConfig,
    generateReactViteConfig,
} from './package-generator.ts';
import { generateReactReadme } from './readme-generator.ts';



function writeFile(root: string, relativePath: string, content: string): void {
    const filePath = path.join(root, relativePath);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
}

export function generateReactApplicationFiles(
    site: SiteContext,
    appRoot: string,
    pages: DiscoveredReactPage[],
    dependencies: Record<string, string>,
): void {
    writeFile(appRoot, 'index.html', `<!doctype html>
<html lang="${site.config.lang || 'en'}">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${(site.config.description ?? '').replace(/"/g, '&quot;')}" />
        <title>${site.title.replace(/</g, '&lt;')}</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
    </body>
</html>
`);

    writeFile(appRoot, 'src/App.tsx', generateReactApp(pages));
    writeFile(appRoot, 'src/main.tsx', generateReactMain());
    writeFile(appRoot, 'src/vite-env.d.ts', `/// <reference types="vite/client" />\n`);
    writeFile(appRoot, 'package.json', generateReactPackageJson(site, dependencies));
    writeFile(appRoot, 'tsconfig.json', generateReactTsConfig());
    writeFile(appRoot, 'vite.config.ts', generateReactViteConfig());
    writeFile(appRoot, 'README.md', generateReactReadme(site, pages.map((page) => page.slug)));
}
