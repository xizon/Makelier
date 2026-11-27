
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
    rewriteComponentImports,
} from '../../../core/export/react/import-rewriter.ts';

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

describe('rewriteComponentImports', () => {
    let root: string;
    let outputRoot: string;
    let currentSite: ReturnType<typeof createSite>;
    let externalSite: ReturnType<typeof createSite>;
    let importerOutputPath: string;

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

        importerOutputPath = path.join(
            outputRoot,
            'hero',
            'template.tsx',
        );

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

    function rewrite(source: string): string {
        return rewriteComponentImports({
            source,
            fileName: importerOutputPath,
            importerOutputPath,
            site: currentSite,
            outputRoot,
        });
    }

    it('rewrites current-site component imports', () => {
        const result = rewrite(
            `import Button from '@/components/button';`,
        );

        expect(result).toContain(
            `import Button from '../button';`,
        );
    });

    it('rewrites cross-site component imports', () => {
        const result = rewrite(
            `import Logo from '@/site/product-elegant/components/logo';`,
        );

        expect(result).toContain(
            `import Logo from '../product-elegant/logo';`,
        );
    });

    it('rewrites component submodule imports', () => {
        const result = rewrite(
            `import Icon from '@/site/product-elegant/components/logo/icon';`,
        );

        expect(result).toContain(
            `import Icon from '../product-elegant/logo/icon';`,
        );
    });

    it('rewrites multiple component imports in one file', () => {
        const result = rewrite(`
            import Button from '@/components/button';
            import Logo from '@/site/product-elegant/components/logo';
        `);

        expect(result).toContain(
            `import Button from '../button';`,
        );

        expect(result).toContain(
            `import Logo from '../product-elegant/logo';`,
        );
    });

    it('preserves unrelated imports', () => {
        const source = `
            import React from 'react';
            import gsap from 'gsap';
            import Button from '@/components/button';
        `;

        const result = rewrite(source);

        expect(result).toContain(`from 'react'`);
        expect(result).toContain(`from 'gsap'`);
        expect(result).toContain(`from '../button'`);
    });

    it('preserves relative imports', () => {
        const source = `
            import './style.css';
            import helper from './helper';
        `;

        const result = rewrite(source);

        expect(result).toContain(`'./style.css'`);
        expect(result).toContain(`'./helper'`);
    });

    it('does not rewrite imports when there are no aliases', () => {
        const source = `
            import React from 'react';
            import gsap from 'gsap';
        `;

        const result = rewrite(source);

        expect(result).toContain(`from 'react'`);
        expect(result).toContain(`from 'gsap'`);
        expect(mockedLoadSite).not.toHaveBeenCalled();
    });
});
