
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import type { SiteContext } from '../../../core/utils/types.ts';

export function createTestRoot(): string {
    return fs.mkdtempSync(
        path.join(os.tmpdir(), 'makelier-react-exporter-'),
    );
}

export function createSite(
    root: string,
    name: string,
): SiteContext {
    const components = path.join(root, name, 'components');
    const publicDir = path.join(root, name, 'public');

    fs.mkdirSync(components, { recursive: true });
    fs.mkdirSync(publicDir, { recursive: true });

    return {
        name,
        title: name,
        root: path.join(root, name),
        config: {
            name,
            version: '1.0.0',
            lang: 'en',
            title: name,
        },
        paths: {
            src: path.join(root, name, 'src'),
            public: publicDir,
            dist: path.join(root, name, 'dist'),
            pages: path.join(root, name, 'pages'),
            components,
            styles: path.join(root, name, 'styles'),
        },
    } as SiteContext;
}

export function createComponent(
    site: SiteContext,
    componentName: string,
    files: Record<string, string> = {},
): string {
    const componentDir = path.join(
        site.paths.components,
        componentName,
    );

    fs.mkdirSync(componentDir, { recursive: true });

    for (const [fileName, content] of Object.entries(files)) {
        const filePath = path.join(componentDir, fileName);

        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, content, 'utf8');
    }

    return componentDir;
}

export function removeTestRoot(root: string): void {
    fs.rmSync(root, {
        recursive: true,
        force: true,
    });
}
