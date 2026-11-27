
/*
npx vitest run tests/export/react/index.test.ts
*/
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { SiteContext } from '../../../core/utils/types.ts';
import type { ComponentDependency } from '../../../core/utils/types.ts';

import { collectComponentDependencies } from '../../../core/export/react/dependency-collector.ts';
import { exportComponent } from '../../../core/export/react/component-exporter.ts';
import { exportComponentsToReact } from '../../../core/export/react/index.ts';

vi.mock('../../../core/export/react/dependency-collector.ts', () => ({
    collectComponentDependencies: vi.fn(),
}));

vi.mock('../../../core/export/react/component-exporter.ts', () => ({
    exportComponent: vi.fn(),
}));

const mockedCollectDependencies = vi.mocked(collectComponentDependencies);
const mockedExportComponent = vi.mocked(exportComponent);

let tempDir: string;
let site: SiteContext;
let componentsDir: string;
let outputRoot: string;

function createSite(name = 'product-main'): SiteContext {
    const root = path.join(tempDir, name);

    const paths = {
        src: path.join(root, 'src'),
        public: path.join(root, 'public'),
        dist: path.join(root, 'dist'),
        pages: path.join(root, 'src/pages'),
        components: path.join(root, 'components'),
        styles: path.join(root, 'src/styles'),
    };

    return {
        name,
        title: name,
        root,
        config: {
            name,
            version: '1.0.0',
            lang: 'en',
            title: name,
        },
        paths,
    } as SiteContext;
}

function createDependency(
    siteContext: SiteContext,
    componentName: string,
    outputRootPath = outputRoot,
): ComponentDependency {
    const isCurrentSite = siteContext.name === site.name;

    return {
        siteName: siteContext.name,
        componentName,
        sourceDir: path.join(
            siteContext.paths.components,
            componentName,
        ),
        outputDir: isCurrentSite
            ? path.join(outputRootPath, componentName)
            : path.join(outputRootPath, siteContext.name, componentName),
        site: siteContext,
    };
}

function createComponentDirectory(name: string): void {
    fs.mkdirSync(path.join(componentsDir, name), {
        recursive: true,
    });
}

beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'makelier-react-'));

    site = createSite();
    componentsDir = site.paths.components;
    outputRoot = path.join(site.root, 'dist-react');

    fs.mkdirSync(componentsDir, { recursive: true });

    mockedCollectDependencies.mockReset();
    mockedExportComponent.mockReset();

    mockedCollectDependencies.mockReturnValue({
        dependencies: [],
    });
});

afterEach(() => {
    fs.rmSync(tempDir, {
        recursive: true,
        force: true,
    });

    vi.restoreAllMocks();
});

describe('exportComponentsToReact', () => {
    it('should throw when the components directory does not exist', async () => {
        fs.rmSync(componentsDir, {
            recursive: true,
            force: true,
        });

        await expect(
            exportComponentsToReact(site),
        ).rejects.toThrow();
    });

    it('should exit when no component directories exist', async () => {
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

        await exportComponentsToReact(site);

        expect(mockedCollectDependencies).not.toHaveBeenCalled();
        expect(mockedExportComponent).not.toHaveBeenCalled();
        expect(warnSpy).toHaveBeenCalled();
    });

    it('should export a single component', async () => {
        createComponentDirectory('hero');

        await exportComponentsToReact(site);

        expect(mockedCollectDependencies).toHaveBeenCalledTimes(1);
        expect(mockedCollectDependencies).toHaveBeenCalledWith({
            site,
            componentName: 'hero',
            outputRoot,
        });

        expect(mockedExportComponent).toHaveBeenCalledTimes(1);
        expect(mockedExportComponent).toHaveBeenCalledWith({
            dependency: createDependency(site, 'hero'),
            outputRoot,
        });
    });

    it('should export all current-site components', async () => {
        createComponentDirectory('hero');
        createComponentDirectory('logo');
        createComponentDirectory('button');

        await exportComponentsToReact(site);

        expect(mockedCollectDependencies).toHaveBeenCalledTimes(3);
        expect(mockedExportComponent).toHaveBeenCalledTimes(3);

        const exportedNames = mockedExportComponent.mock.calls.map(
            ([options]) => options.dependency.componentName,
        );

        expect(exportedNames).toEqual([
            'button',
            'hero',
            'logo',
        ]);
    });

    it('should export shared dependencies only once', async () => {
        createComponentDirectory('hero');
        createComponentDirectory('header');

        const sharedDependency = createDependency(site, 'button');

        mockedCollectDependencies.mockImplementation(({ componentName }) => {
            if (componentName === 'hero' || componentName === 'header') {
                return {
                    dependencies: [sharedDependency],
                };
            }

            return { dependencies: [] };
        });

        await exportComponentsToReact(site);

        const exportedNames = mockedExportComponent.mock.calls.map(
            ([options]) => options.dependency.componentName,
        );

        expect(exportedNames).toHaveLength(3);
        expect(exportedNames).toContain('header');
        expect(exportedNames).toContain('hero');

        expect(
            exportedNames.filter((name) => name === 'button'),
        ).toHaveLength(1);
    });

    it('should export cross-site dependencies to their site directories', async () => {
        createComponentDirectory('hero');

        const externalSite = createSite('product-elegant');
        const externalDependency = createDependency(
            externalSite,
            'logo',
        );

        mockedCollectDependencies.mockReturnValue({
            dependencies: [externalDependency],
        });

        await exportComponentsToReact(site);

        expect(mockedExportComponent).toHaveBeenCalledWith({
            dependency: externalDependency,
            outputRoot,
        });

        expect(externalDependency.outputDir).toBe(
            path.join(outputRoot, 'product-elegant', 'logo'),
        );
    });

    it('should export nested dependencies', async () => {
        createComponentDirectory('hero');

        const button = createDependency(site, 'button');
        const icon = createDependency(site, 'icon');

        mockedCollectDependencies.mockReturnValue({
            dependencies: [button, icon],
        });

        await exportComponentsToReact(site);

        expect(mockedExportComponent).toHaveBeenCalledTimes(3);

        const exportedNames = mockedExportComponent.mock.calls.map(
            ([options]) => options.dependency.componentName,
        );

        expect(exportedNames).toEqual([
            'hero',
            'button',
            'icon',
        ]);
    });

    it('should deduplicate dependencies using site and component identity', async () => {
        createComponentDirectory('hero');

        const currentSiteButton = createDependency(site, 'button');

        const externalSite = createSite('product-common');
        const externalButton = createDependency(
            externalSite,
            'button',
        );

        mockedCollectDependencies.mockReturnValue({
            dependencies: [
                currentSiteButton,
                externalButton,
            ],
        });

        await exportComponentsToReact(site);

        expect(mockedExportComponent).toHaveBeenCalledTimes(3);

        const exportedIds = mockedExportComponent.mock.calls.map(
            ([options]) => {
                const dependency = options.dependency;

                return `${dependency.siteName}/${dependency.componentName}`;
            },
        );

        expect(exportedIds).toContain('product-main/hero');
        expect(exportedIds).toContain('product-main/button');
        expect(exportedIds).toContain('product-common/button');

        expect(new Set(exportedIds).size).toBe(3);
    });

    it('should propagate component export errors', async () => {
        createComponentDirectory('hero');

        mockedExportComponent.mockImplementation(() => {
            throw new Error('Export failed');
        });

        await expect(
            exportComponentsToReact(site),
        ).rejects.toThrow('Export failed');
    });
});
