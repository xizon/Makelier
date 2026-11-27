import fs from 'node:fs';
import path from 'node:path';

import type { SiteContext, SitePackageJson } from '../../../utils/types.ts';

const REACT_APP_DEPENDENCIES = {
    gsap: '^3.15.1',
    react: '^19.3.1',
    'react-dom': '^19.3.1',
    'react-router-dom': '^7.18.7',
    three: '^0.177.0',
};

const REACT_APP_DEV_DEPENDENCIES = {
    '@tailwindcss/vite': '^4.3.5',
    '@types/react': '^19.3.3',
    '@types/react-dom': '^19.3.0',
    '@types/three': '^0.177.0',
    '@vitejs/plugin-react': '^6.3.0',
    'postcss-nesting': '^14.0.3',
    tailwindcss: '^4.3.5',
    typescript: '^7.0.2',
    vite: '^8.4.0',
};

export function generateReactMain(): string {
    return `import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '@/styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <App />
    </React.StrictMode>,
);
`;
}

function readSitePackage(site: SiteContext): SitePackageJson {
    const packagePath = path.join(site.root, 'package.json');

    if (!fs.existsSync(packagePath)) return {};

    try {
        return JSON.parse(fs.readFileSync(packagePath, 'utf8')) as SitePackageJson;
    } catch (error) {
        throw new Error(`[Makelier] Failed to parse Site package.json: ${packagePath}`, {
            cause: error,
        });
    }
}

export function generateReactPackageJson(
    site: SiteContext,
    discoveredDependencies: Record<string, string>,
): string {
    const sitePackage = readSitePackage(site);

    const dependencies: Record<string, string> = {
        ...REACT_APP_DEPENDENCIES,
        ...(sitePackage.dependencies ?? {}),
        ...discoveredDependencies,
    };

    const devDependencies: Record<string, string> = {
        ...REACT_APP_DEV_DEPENDENCIES,
        ...(sitePackage.devDependencies ?? {}),
    };

    for (const name of Object.keys(devDependencies)) {
        delete dependencies[name];
    }

    return `${JSON.stringify({
        name: `${site.name}-react-app`,
        private: true,
        version: site.config.version || '1.0.0',
        type: 'module',
        scripts: {
            dev: 'vite',
            build: 'tsc --noEmit && vite build',
            preview: 'vite preview',
        },
        dependencies,
        devDependencies,
    }, null, 4)}\n`;
}


export function generateReactTsConfig(): string {
    return `${JSON.stringify({
        compilerOptions: {
            target: 'ES2022',
            useDefineForClassFields: true,
            lib: ['ES2022', 'DOM', 'DOM.Iterable'],
            module: 'ESNext',
            skipLibCheck: true,
            moduleResolution: 'bundler',
            allowImportingTsExtensions: true,
            verbatimModuleSyntax: true,
            moduleDetection: 'force',
            noEmit: true,
            jsx: 'react-jsx',
            strict: true,
            noUnusedLocals: false,
            noUnusedParameters: false,
            baseUrl: '.',
            paths: {
                '@/*': ['src/*'],
                '@/components/*': ['src/components/*'],
                '@/pages/*': ['src/pages/*'],
                '@/styles/*': ['src/styles/*'],
            },
        },
        include: ['src'],
    }, null, 4)}\n`;
}


export function generateReactViteConfig(): string {
    return `import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import postcssNesting from 'postcss-nesting';

const root = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(root, 'src');

export default defineConfig({
    root,
    base: './',
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: [
            { find: '@/components', replacement: path.resolve(src, 'components') },
            { find: '@/pages', replacement: path.resolve(src, 'pages') },
            { find: '@/styles', replacement: path.resolve(src, 'styles') },
            { find: '@/', replacement: src + '/' },
        ],
    },
    css: {
        postcss: {
            plugins: [
                postcssNesting({ noIsPseudoSelector: true }),
            ],
        },
    },
    build: {
        outDir: path.resolve(root, 'dist'),
        emptyOutDir: true,
    },
});
`;
}
