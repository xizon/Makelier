import type { DiscoveredReactPage } from '../../../utils/types.ts';

function toPascalCase(value: string): string {
    return value
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}

function toImportIdentifier(slug: string): string {
    return `${toPascalCase(slug)}Page`;
}

export function generateReactApp(pages: DiscoveredReactPage[]): string {
    const imports = pages.map((page) =>
        `import ${toImportIdentifier(page.slug)} from './pages/${page.slug}/index';`
    );

    const routes = pages.map((page) =>
        `            <Route path="${page.route}" element={<${toImportIdentifier(page.slug)} />} />`
    );

    const fallback = pages.some((page) => page.route === '/')
        ? '            <Route path="*" element={<Navigate to="/" replace />} />'
        : `            <Route path="*" element={<Navigate to="${pages[0].route}" replace />} />`;

    return `import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
${imports.join('\n')}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
${routes.join('\n')}
${fallback}
            </Routes>
        </BrowserRouter>
    );
}
`;
}
