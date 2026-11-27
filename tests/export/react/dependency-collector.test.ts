
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
    collectComponentDependencies,
} from '../../../core/export/react/dependency-collector.ts';

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

describe('collectComponentDependencies', () => {
    let root: string;
    let outputRoot: string;
    let currentSite: ReturnType<typeof createSite>;
    let externalSite: ReturnType<typeof createSite>;

    beforeEach(() => {
        root = createTestRoot();
        outputRoot = path.join(root, 'dist-react');

        currentSite = createSite(root, 'product-demo');
        externalSite = createSite(root, 'product-elegant');

        createComponent(currentSite, 'hero', {
            'template.tsx': `
                import Button from '@/components/button';
                import Logo from '@/site/product-elegant/components/logo';

                export default function Template() {
                    return <div />;
                }
            `,
            'sections/hero-content.tsx': `
                import Button from '@/components/button';

                export default function HeroContent() {
                    return <div />;
                }
            `,
            'controller.ts': `
                import UnusedCard from '@/components/unused-card';
            `,
        });

        createComponent(currentSite, 'button', {
            'template.tsx': `
                import Icon from '@/components/icon';

                export default function Button() {
                    return <button />;
                }
            `,
        });

        createComponent(currentSite, 'icon', {
            'template.tsx': `
                export default function Icon() {
                    return <span />;
                }
            `,
        });

        createComponent(currentSite, 'unused-card', {
            'template.tsx': `
                export default function UnusedCard() {
                    return <div />;
                }
            `,
        });

        createComponent(externalSite, 'logo', {
            'template.tsx': `
                import Icon from '@/site/product-elegant/components/logo/icon';

                export default function Logo() {
                    return <div />;
                }
            `,
            'icon.tsx': `
                export default function LogoIcon() {
                    return <span />;
                }
            `,
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

    function collect(componentName = 'hero') {
        return collectComponentDependencies({
            site: currentSite,
            componentName,
            outputRoot,
        });
    }

    it('collects direct dependencies', () => {
        const result = collect();

        const ids = result.dependencies.map(
            item => `${item.siteName}/${item.componentName}`,
        );

        expect(ids).toContain('product-demo/button');
        expect(ids).toContain('product-elegant/logo');
    });

    it('collects transitive dependencies', () => {
        const result = collect();

        const ids = result.dependencies.map(
            item => `${item.siteName}/${item.componentName}`,
        );

        expect(ids).toContain('product-demo/icon');
    });

    it('collects dependencies from nested TSX files', () => {
        const result = collect();

        const ids = result.dependencies.map(
            item => `${item.siteName}/${item.componentName}`,
        );

        expect(ids).toContain('product-demo/button');
    });

    it('does not collect dependencies imported only by controller.ts', () => {
        const result = collect();

        const ids = result.dependencies.map(
            item => `${item.siteName}/${item.componentName}`,
        );

        expect(ids).not.toContain('product-demo/unused-card');
    });

    it('does not collect unrelated components', () => {
        const result = collect();

        const ids = result.dependencies.map(
            item => `${item.siteName}/${item.componentName}`,
        );

        expect(ids).not.toContain('product-demo/unused-card');
    });

    it('does not include the root component in dependencies', () => {
        const result = collect();

        const ids = result.dependencies.map(
            item => `${item.siteName}/${item.componentName}`,
        );

        expect(ids).not.toContain('product-demo/hero');
    });

    it('deduplicates repeated dependencies', () => {
        const result = collect();

        const ids = result.dependencies.map(
            item => `${item.siteName}/${item.componentName}`,
        );

        expect(ids.filter(id => id === 'product-demo/button')).toHaveLength(1);
    });

    it('handles circular dependencies', () => {
        createComponent(currentSite, 'icon', {
            'template.tsx': `
                import Button from '@/components/button';

                export default function Icon() {
                    return <span />;
                }
            `,
        });

        expect(() => collect()).not.toThrow();

        const result = collect();

        const ids = result.dependencies.map(
            item => `${item.siteName}/${item.componentName}`,
        );

        expect(ids.filter(id => id === 'product-demo/button')).toHaveLength(1);
        expect(ids.filter(id => id === 'product-demo/icon')).toHaveLength(1);
    });

    it('collects imports from the root template.ts file', () => {
        const templatePath = path.join(
            currentSite.paths.components,
            'hero',
            'template.ts',
        );

        fs.rmSync(
            path.join(
                currentSite.paths.components,
                'hero',
                'template.tsx',
            ),
        );

        fs.writeFileSync(
            templatePath,
            `
                import Button from '@/components/button';

                export default function Template() {
                    return <div />;
                }
            `,
            'utf8',
        );

        const result = collect();

        const ids = result.dependencies.map(
            item => `${item.siteName}/${item.componentName}`,
        );

        expect(ids).toContain('product-demo/button');
    });
});
