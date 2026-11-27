
import fs from 'node:fs';
import path from 'node:path';

import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    vi,
} from 'vitest';

import { loadSite } from '../../../core/site/load-site.ts';
import {
    resolveComponentImport,
} from '../../../core/export/react/dependency-resolver.ts';

import {
    createComponent,
    createSite,
    createTestRoot,
    removeTestRoot,
} from './test-helpers.ts';

vi.mock('../../../core/site/load-site.ts', () => ({
    loadSite: vi.fn(),
}));

const mockedLoadSite = vi.mocked(loadSite);

describe('resolveComponentImport', () => {
    let root: string;
    let outputRoot: string;
    let currentSite: ReturnType<typeof createSite>;
    let externalSite: ReturnType<typeof createSite>;

    beforeEach(() => {
        root = createTestRoot();
        outputRoot = path.join(root, 'dist-react');

        currentSite = createSite(root, 'product-demo');
        externalSite = createSite(root, 'product-elegant');

        createComponent(currentSite, 'hero');
        createComponent(currentSite, 'button', {
            'template.tsx': 'export default function Button() {}',
        });

        createComponent(externalSite, 'logo', {
            'template.tsx': 'export default function Logo() {}',
            'icon.tsx': 'export default function Icon() {}',
        });

        mockedLoadSite.mockImplementation((siteRoot) => {
            if (path.resolve(siteRoot) === externalSite.root) {
                return externalSite;
            }

            throw new Error(`Unexpected site: ${siteRoot}`);
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
        removeTestRoot(root);
    });

    it('resolves a component from the current site', () => {
        const result = resolveComponentImport(
            currentSite,
            '@/components/button',
            outputRoot,
        );

        expect(result).not.toBeNull();
        expect(result?.dependency.siteName).toBe('product-demo');
        expect(result?.dependency.componentName).toBe('button');
        expect(result?.dependency.sourceDir).toBe(
            path.join(currentSite.paths.components, 'button'),
        );
        expect(result?.outputPath).toBe(
            path.join(outputRoot, 'button'),
        );
    });

    it('resolves a component from another site', () => {
        const result = resolveComponentImport(
            currentSite,
            '@/site/product-elegant/components/logo',
            outputRoot,
        );

        expect(result).not.toBeNull();
        expect(result?.dependency.siteName).toBe('product-elegant');
        expect(result?.dependency.componentName).toBe('logo');
        expect(result?.dependency.outputDir).toBe(
            path.join(outputRoot, 'product-elegant', 'logo'),
        );

        expect(mockedLoadSite).toHaveBeenCalledWith(
            externalSite.root,
        );
    });

    it('resolves a component submodule', () => {
        const result = resolveComponentImport(
            currentSite,
            '@/site/product-elegant/components/logo/icon',
            outputRoot,
        );

        expect(result).not.toBeNull();
        expect(result?.internalPath).toBe('icon');
        expect(result?.outputPath).toBe(
            path.join(outputRoot, 'product-elegant', 'logo', 'icon'),
        );
    });

    it('resolves a directory index module', () => {
        const iconDir = path.join(
            externalSite.paths.components,
            'logo',
            'icons',
        );

        fs.mkdirSync(iconDir, { recursive: true });
        fs.writeFileSync(
            path.join(iconDir, 'index.tsx'),
            'export default function Icons() {}',
        );

        const result = resolveComponentImport(
            currentSite,
            '@/site/product-elegant/components/logo/icons',
            outputRoot,
        );

        expect(result?.outputPath).toBe(
            path.join(outputRoot, 'product-elegant', 'logo', 'icons'),
        );
    });

    it('returns null for unrelated imports', () => {
        const result = resolveComponentImport(
            currentSite,
            'react',
            outputRoot,
        );

        expect(result).toBeNull();
    });

    it('throws when the requested site does not exist', () => {
        expect(() => {
            resolveComponentImport(
                currentSite,
                '@/site/unknown-site/components/logo',
                outputRoot,
            );
        }).toThrow('[Makelier] Site not found: unknown-site');
    });

    it('throws when the component does not exist', () => {
        expect(() => {
            resolveComponentImport(
                currentSite,
                '@/components/unknown-component',
                outputRoot,
            );
        }).toThrow('[Makelier] Component not found');
    });

    it('throws when the requested module does not exist', () => {
        expect(() => {
            resolveComponentImport(
                currentSite,
                '@/components/button/unknown',
                outputRoot,
            );
        }).toThrow('[Makelier] Component module not found');
    });
});
