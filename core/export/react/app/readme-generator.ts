import type { SiteContext } from '../../../utils/types.ts';




export function generateReactReadme(site: SiteContext, pageSlugs: string[]): string {
    const pageList = pageSlugs.map((slug) =>
        `- \`${slug === 'home' ? '/' : `/${slug}`}\` — \`${slug}\``
    ).join('\n');

    return `# ${site.title} — React App

This is a standalone React application exported from the Site \`${site.name}\`.

## Requirements

- Node.js 22.12.0 or later
- npm

## Install

\`\`\`bash
npm install
\`\`\`

## Development

\`\`\`bash
npm run dev
\`\`\`

## Production build

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Exported routes

${pageList}

## Project structure

- \`src/pages/\` — exported page entry files
- \`src/components/\` — components used by exported pages and their dependencies
- \`src/styles/\` — Site stylesheets
- \`public/\` — Site public assets
- \`vite.config.ts\` — standalone Vite configuration

## Notes

- Page components are retained as TSX and their component aliases are rewritten to local imports.
- Only components referenced by the exported pages, plus their recursive component dependencies, are exported.
- Site public assets and styles are copied into this application.
- Review any runtime asset URLs or external integrations that depend on the original development server.
`;
}
