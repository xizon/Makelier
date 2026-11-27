
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type {
    SiteContext,
    ExportComponentOptions,
} from '../../../core/utils/types.ts';

import { exportComponent } from '../../../core/export/react/component-exporter.ts';

let testRoot: string;
let site: SiteContext;
let outputRoot: string;
let componentSourceDir: string;
let componentOutputDir: string;

function writeFile(
    filePath: string,
    content: string,
): void {
    fs.mkdirSync(path.dirname(filePath), {
        recursive: true,
    });

    fs.writeFileSync(filePath, content, 'utf8');
}

function readFile(filePath: string): string {
    return fs.readFileSync(filePath, 'utf8');
}

function createExportOptions(): ExportComponentOptions {
    return {
        dependency: {
            siteName: site.name,
            componentName: 'hero-demo',
            sourceDir: componentSourceDir,
            outputDir: componentOutputDir,
            site,
        },
        outputRoot,
    };
}

function setupComponent(): void {
    fs.mkdirSync(componentSourceDir, {
        recursive: true,
    });

    // Local dependency required by import rewriting.
    fs.mkdirSync(
        path.join(site.paths.components, 'button'),
        { recursive: true },
    );
}

beforeEach(() => {
    testRoot = fs.mkdtempSync(
        path.join(os.tmpdir(), 'makelier-react-export-'),
    );

    const siteRoot = path.join(testRoot, 'product-elegant');

    const componentsDir = path.join(siteRoot, 'components');
    const publicDir = path.join(siteRoot, 'public');

    outputRoot = path.join(siteRoot, 'dist-react');

    componentSourceDir = path.join(
        componentsDir,
        'hero-demo',
    );

    componentOutputDir = path.join(
        outputRoot,
        'hero-demo',
    );

    site = {
        name: 'product-elegant',
        title: 'Product Elegant',
        root: siteRoot,
        config: {
            name: 'product-elegant',
            version: '1.0.0',
            lang: 'en',
            title: 'Product Elegant',
        },
        paths: {
            src: path.join(siteRoot, 'src'),
            public: publicDir,
            dist: path.join(siteRoot, 'dist'),
            pages: path.join(siteRoot, 'pages'),
            components: componentsDir,
            styles: path.join(siteRoot, 'styles'),
        },
    } as SiteContext;

    fs.mkdirSync(componentsDir, { recursive: true });
    fs.mkdirSync(publicDir, { recursive: true });

    setupComponent();
});

afterEach(() => {
    fs.rmSync(testRoot, {
        recursive: true,
        force: true,
    });
});

describe('exportComponent', () => {
    it('should generate a React entry and template', () => {
        writeFile(
            path.join(componentSourceDir, 'template.tsx'),
            `
export function Template({ title }: { title: string }) {
    return <div>{title}</div>;
}
`,
        );

        exportComponent(createExportOptions());

        const templatePath = path.join(
            componentOutputDir,
            'template.tsx',
        );

        const indexPath = path.join(
            componentOutputDir,
            'index.tsx',
        );

        expect(fs.existsSync(templatePath)).toBe(true);
        expect(fs.existsSync(indexPath)).toBe(true);

        const indexCode = readFile(indexPath);

        expect(indexCode).toContain('export type HeroDemoProps');
        expect(indexCode).toContain('React.ComponentProps<typeof Template>');
        expect(indexCode).toContain("import { Template } from './template'");
    });

    it('should transform template.ts as TSX', () => {
        writeFile(
            path.join(componentSourceDir, 'template.ts'),
            `
export function Template({ title }: { title: string }) {
    return <div>{title}</div>;
}
`,
        );

        exportComponent(createExportOptions());

        expect(
            fs.existsSync(
                path.join(componentOutputDir, 'template.tsx'),
            ),
        ).toBe(true);

        expect(
            fs.existsSync(
                path.join(componentOutputDir, 'template.ts'),
            ),
        ).toBe(false);
    });

    it('should throw when both template.ts and template.tsx exist', () => {
        writeFile(
            path.join(componentSourceDir, 'template.ts'),
            'export function Template() { return <div />; }',
        );

        writeFile(
            path.join(componentSourceDir, 'template.tsx'),
            'export function Template() { return <div />; }',
        );

        expect(() => {
            exportComponent(createExportOptions());
        }).toThrow('Both template.ts and template.tsx exist');
    });

    it('should generate a default template when no template exists', () => {
        exportComponent(createExportOptions());

        const templateCode = readFile(
            path.join(componentOutputDir, 'template.tsx'),
        );

        expect(templateCode).toContain('export function Template');
        expect(templateCode).toContain("import './style.css'");
    });

    it('should rewrite imports in TSX files', () => {
        writeFile(
            path.join(componentSourceDir, 'template.tsx'),
            `
import Button from '@/components/button';

export function Template() {
    return <Button />;
}
`,
        );

        exportComponent(createExportOptions());

        const templateCode = readFile(
            path.join(componentOutputDir, 'template.tsx'),
        );

        expect(templateCode).toContain("from '../button'");
        expect(templateCode).not.toContain('@/components/button');
    });

    it('should rewrite imports in JSX files without TS transformation', () => {
        writeFile(
            path.join(componentSourceDir, 'example.jsx'),
            `
import Button from '@/components/button';

export default function Example() {
    return <Button />;
}
`,
        );

        exportComponent(createExportOptions());

        const outputPath = path.join(
            componentOutputDir,
            'example.jsx',
        );

        const outputCode = readFile(outputPath);

        expect(outputCode).toContain("from '../button'");
        expect(outputCode).not.toContain('@/components/button');
        expect(outputCode).toContain('export default function Example');
    });

    it('should copy ordinary TS and JS files unchanged', () => {
        const tsCode = 'export const value: string = "hello";';
        const jsCode = 'export const value = "hello";';

        writeFile(
            path.join(componentSourceDir, 'utils.ts'),
            tsCode,
        );

        writeFile(
            path.join(componentSourceDir, 'utils.js'),
            jsCode,
        );

        exportComponent(createExportOptions());

        expect(
            readFile(path.join(componentOutputDir, 'utils.ts')),
        ).toBe(tsCode);

        expect(
            readFile(path.join(componentOutputDir, 'utils.js')),
        ).toBe(jsCode);
    });

    it('should copy controller.ts unchanged', () => {
        const controllerCode = `
export function mount(element: HTMLElement | null) {
    console.log(element);

    return () => {
        console.log('cleanup');
    };
}
`;

        writeFile(
            path.join(componentSourceDir, 'controller.ts'),
            controllerCode,
        );

        exportComponent(createExportOptions());

        expect(
            readFile(
                path.join(componentOutputDir, 'controller.ts'),
            ),
        ).toBe(controllerCode);

        expect(
            readFile(
                path.join(componentOutputDir, 'index.tsx'),
            ),
        ).toContain("import { mount } from './controller'");
    });

    it('should not import controller when controller.ts does not exist', () => {
        writeFile(
            path.join(componentSourceDir, 'template.tsx'),
            'export function Template() { return <div />; }',
        );

        exportComponent(createExportOptions());

        const indexCode = readFile(
            path.join(componentOutputDir, 'index.tsx'),
        );

        expect(indexCode).not.toContain("from './controller'");
        expect(indexCode).toContain("from './template'");
    });

    it('should copy nested files recursively', () => {
        const nestedCode = 'export const value = 123;';

        writeFile(
            path.join(componentSourceDir, 'utils/helpers/data.ts'),
            nestedCode,
        );

        exportComponent(createExportOptions());

        expect(
            readFile(
                path.join(
                    componentOutputDir,
                    'utils/helpers/data.ts',
                ),
            ),
        ).toBe(nestedCode);
    });

    it('should exclude root-level original entry files', () => {
        writeFile(
            path.join(componentSourceDir, 'index.ts'),
            'export const original = true;',
        );

        writeFile(
            path.join(componentSourceDir, 'index.tsx'),
            'export const original = true;',
        );

        writeFile(
            path.join(componentSourceDir, 'template.tsx'),
            'export function Template() { return <div />; }',
        );

        exportComponent(createExportOptions());

        const indexCode = readFile(
            path.join(componentOutputDir, 'index.tsx'),
        );

        expect(indexCode).not.toContain('original');
        expect(indexCode).toContain('export default function HeroDemo');
    });

    it('should copy manifest and its public assets', () => {
        writeFile(
            path.join(componentSourceDir, 'manifest.json'),
            JSON.stringify({
                name: 'hero-demo',
                version: '1.0.0',
                assets: [
                    'images/hero.webp',
                    'models/scene.glb',
                ],
            }),
        );

        writeFile(
            path.join(site.paths.public, 'images/hero.webp'),
            'image-data',
        );

        writeFile(
            path.join(site.paths.public, 'models/scene.glb'),
            'model-data',
        );

        exportComponent(createExportOptions());

        const manifestPath = path.join(
            componentOutputDir,
            'manifest.json',
        );

        expect(fs.existsSync(manifestPath)).toBe(true);

        expect(
            JSON.parse(readFile(manifestPath)).name,
        ).toBe('hero-demo');

        expect(
            readFile(
                path.join(componentOutputDir, 'images/hero.webp'),
            ),
        ).toBe('image-data');

        expect(
            readFile(
                path.join(componentOutputDir, 'models/scene.glb'),
            ),
        ).toBe('model-data');
    });

    it('should reject manifest asset paths escaping the public directory', () => {
        writeFile(
            path.join(componentSourceDir, 'manifest.json'),
            JSON.stringify({
                assets: ['../../outside.txt'],
            }),
        );

        expect(() => {
            exportComponent(createExportOptions());
        }).toThrow('Manifest asset is outside public directory');
    });

    it('should reject invalid manifest structures', () => {
        writeFile(
            path.join(componentSourceDir, 'manifest.json'),
            JSON.stringify({
                assets: 'images/hero.webp',
            }),
        );

        expect(() => {
            exportComponent(createExportOptions());
        }).toThrow('Invalid manifest assets');
    });

    it('should throw when the component directory does not exist', () => {
        fs.rmSync(componentSourceDir, {
            recursive: true,
            force: true,
        });

        expect(() => {
            exportComponent(createExportOptions());
        }).toThrow('Component directory not found');
    });
});
