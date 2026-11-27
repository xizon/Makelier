/**
 * Renders the complete HTML document string
 */

import fs from 'node:fs';
import type {
    PageDefinition,
    RenderDocumentOptions,
    SiteContext,
} from '../utils/types.ts';

import { escapeHtml, pageHref } from '../utils/helper.ts';
import { formatHtml} from '../utils/renderer.ts';

import { GENERATED_HTML_HEADER } from '../utils/const.ts';

/** Indentation unit used when assembling the document */
const INDENT = '    ';


/**
 * When TSX contains {`<!-- Primary Menu -->`}, the renderer escapes the text to
 * `&lt;!-- Primary Menu --&gt;` (or `&lt;!-- Primary Menu -->` when the renderer
 * leaves ">" alone). This turns it back into a real HTML comment.
 *
 * Note: a JSX comment like {/* ... *\/} is a JS comment that is dropped at
 * compile time, so it cannot be restored.
 * Also, text that is meant to show a literal "<!-- xx -->" on the page will be
 * turned into a comment too. That is rare; use &amp;lt; style escaping to avoid it.
 */

// HTML comment support     
const ENTITIES: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#x27;': "'",
    '&#60;': '<',
    '&#62;': '>',
    '&#x3c;': '<',
    '&#x3e;': '>',
};


// Opening "<" is always escaped by the renderer. The closing ">" is escaped by
// some renderers (React) and left as-is by others, so both forms are accepted.
const ESCAPED_COMMENT = /&(?:lt|#60|#x3c);!--([\s\S]*?)--(?:&(?:gt|#62|#x3e);|>)/gi;

function restoreComments(html: string): string {
    return html.replace(ESCAPED_COMMENT, (_match, inner: string) => {
        const text = inner
            .replace(/&(?:amp|lt|gt|quot|#39|#x27|#60|#62|#x3c|#x3e);/gi, (e) => ENTITIES[e.toLowerCase()] ?? e)
            .replace(/-{2,}/g, '-') // "--" is not allowed inside an HTML comment
            .trim();
        return text ? `<!-- ${text} -->` : '';
    });
}


/**
 * Render a complete HTML document.
 *
 * Site-specific configuration and custom HTML template
 * are resolved through SiteContext.
 */
/* 
-----
FOR: "ssr-dev" and "render-page"
-----
*/
export function renderDocument(
    options: RenderDocumentOptions,
    site?: SiteContext
): string {
    const beautify = options.beautify ?? true;
    const { seo } = options;

    const bodyClass = options.bodyClass?.trim() || 'page';
    const siteTitle = site?.config.title?.trim() || '';
    const seoTitle = seo.title?.trim() || '';

    let finalTitle = '';
    let indexWarningComment = '';

    if (options.isIndex === true || typeof options.isIndex === 'undefined') {
        // Index page
        finalTitle = siteTitle || seoTitle;

        indexWarningComment = GENERATED_HTML_HEADER;
    } else {
        // Normal page
        finalTitle = [seoTitle, siteTitle]
            .filter(Boolean)
            .join(' - ');
    }


    // 1. Prepare individual snippet strings to be injected
    const metaTags: string[] = [
        `${INDENT}<meta charset="UTF-8" />`,
        `${INDENT}<meta name="viewport" content="width=device-width, initial-scale=1" />`,
    ];

    const cssHrefs = options.cssHrefs ?? [];

    const canonicalTags = seo.canonical?.trim()
        ? `${INDENT}<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`
        : '';

    const cssTags = cssHrefs.map(
        href => `${INDENT}<link rel="stylesheet" href="${escapeHtml(href)}" />`
    );

    // Dynamically iterate through all fields in the SEO configuration
    for (const [key, rawValue] of Object.entries(seo)) {
        if (!rawValue) continue;

        if (['lang', 'title', 'canonical', 'keywords', 'description', 'author'].includes(key)) {
            if (key === 'description') {
                metaTags.push(
                    `${INDENT}<meta name="description" content="${escapeHtml(String(rawValue))}" />`
                );
            } else if (key === 'keywords' && Array.isArray(rawValue) && rawValue.length > 0) {
                metaTags.push(
                    `${INDENT}<meta name="keywords" content="${escapeHtml(rawValue.join(', '))}" />`
                );
            } else if (key === 'author') {
                metaTags.push(
                    `${INDENT}<meta name="author" content="${escapeHtml(String(rawValue))}" />`
                );
            }

            continue;
        }

        // Support arbitrary SEO attributes
        const valStr = Array.isArray(rawValue)
            ? rawValue.join(', ')
            : String(rawValue);

        if (!valStr.trim()) continue;

        // Use property only for Open Graph attributes
        const isProperty = key.startsWith('og:');
        const attrName = isProperty ? 'property' : 'name';

        metaTags.push(
            `${INDENT}<meta ${attrName}="${escapeHtml(key)}" content="${escapeHtml(valStr)}" />`
        );
    }

    const extraHead = options.extraHead?.trim()
        ? [options.extraHead]
        : [];

    const scripts: string[] = [];

    if (options.viteClient) {
        scripts.push(`${INDENT}<script type="module" src="/@vite/client"></script>`);
    }

    for (const href of options.jsHrefs ?? []) {
        scripts.push(
            `${INDENT}<script type="module" src="${escapeHtml(href)}"></script>`
        );
    }

    const appBody = options.body.trim()
        ? `${INDENT}\n${restoreComments(options.body)}\n${INDENT}`
        : `${INDENT}`;

    // 2. Resolve custom Site HTML template through SiteContext
    const customTemplatePath = site?.paths.template;

    let html = '';

    if (customTemplatePath && fs.existsSync(customTemplatePath)) {
        // Read the user-defined Site template
        const templateContent = fs.readFileSync(customTemplatePath, 'utf-8');

        // Perform placeholder replacements
        html = templateContent
            .replace(/\$\{lang\}/g, escapeHtml(seo.lang))
            .replace(/\$\{title\}/g, escapeHtml(seo.title))
            .replace(/\$\{description\}/g, escapeHtml(seo.description || ''))
            .replace(/\$\{keywords\}/g, escapeHtml(seo.keywords?.join(', ') || ''))
            .replace(/\$\{bodyClass\}/g, escapeHtml(bodyClass))
            .replace(/\$\{siteTitle\}/g, escapeHtml(siteTitle))
            .replace(/<!--app-canonical-->/g, canonicalTags)
            .replace(/<!--app-meta-->/g, metaTags.join('\n'))
            .replace(/<!--app-styles-->/g, [...cssTags, ...extraHead].join('\n'))
            .replace(/<!--app-container-->/g, appBody)
            .replace(/<!--app-scripts-->/g, scripts.join('\n'));

    } else {
        // 3. Use the built-in standard HTML structure
        const head = [
            ...metaTags,
            canonicalTags,
            '',
            `${INDENT}<title>${escapeHtml(finalTitle)}</title>`,
            ...(cssTags.length ? ['', ...cssTags] : []),
            ...(extraHead.length ? ['', ...extraHead] : []),
        ];

        html = [
            '<!DOCTYPE html>',
            `<html lang="${escapeHtml(seo.lang)}">`,
            '<head>',
            ...head,
            '</head>',
            `<body class="${escapeHtml(bodyClass)}">`,
            appBody,
            ...(scripts.length ? ['', ...scripts] : []),
            '</body>',
            '</html>',
            '',
        ].join('\n');
    }

    if (indexWarningComment && html.includes('<!DOCTYPE html>')) {
        html = html.replace(
            '<!DOCTYPE html>',
            `<!DOCTYPE html>${indexWarningComment}`
        );
    }

    return beautify ? formatHtml(html) + '\n' : html;
}


// --------------------------------------------------
// Project Catalog
// --------------------------------------------------

function getPlaygroundIcon(): string {
    return `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            <path d="m12 3 9 5-9 5-9-5 9-5Z"/>
            <path d="m3 12 9 5 9-5"/>
            <path d="m3 16 9 5 9-5"/>
        </svg>
    `;
}


/**
 * Icon for normal website pages.
 * Different from the Playground layered icon.
 */
function getPageIcon(): string {
    return `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path d="M14 2v6h6"/>
            <path d="M8 13h8"/>
            <path d="M8 17h8"/>
        </svg>
    `;
}


// Inline styling definition for the project catalog overview page
const CATALOG_STYLES = `

/* ----------------------------------------
   Base
---------------------------------------- */

:root {
    color-scheme: light;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    color: #1f2937;
    background: #ffffff;
}

.mkl-catalog {
    width: min(1100px, calc(100% - 48px));
    margin: 0 auto;
    padding: 80px 0 64px;
}


/* ----------------------------------------
   Layout
---------------------------------------- */

.mkl-catalog__playground-section {
    margin-bottom: 64px;
}

.mkl-catalog__pages-section {
    margin-top: 0;
}

.mkl-catalog__section-title {
    margin: 0 0 24px;
    font-size: 24px;
    font-weight: 600;
    color: #1f2937;
}

.mkl-catalog__list {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}


/* ----------------------------------------
   Playground Entry
---------------------------------------- */

.mkl-catalog__playground {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 22px 24px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #ffffff;
    color: #1f2937;
    text-decoration: none;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
}

.mkl-catalog__playground.disabled {
    background: #f5f5f5;
    cursor: not-allowed;
}


.mkl-catalog__playground:hover {
    border-color: #a78bfa;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
}

.mkl-catalog__playground-main {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
    min-width: 0;
}

.mkl-catalog__playground-icon {
    display: grid;
    place-items: center;
    flex: 0 0 42px;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    color: #6b7280;
    background: #f3f4f6;
}

.mkl-catalog__playground-icon svg {
    width: 23px;
    height: 23px;
}

.mkl-catalog__playground-content {
    flex: 1;
    min-width: 0;
}

.mkl-catalog__playground-content h2 {
    margin: 0 0 8px;
    color: #1f2937;
    font-size: 17px;
    font-weight: 600;
}

.mkl-catalog__playground-content p {
    margin: 0;
    color: #6b7280;
    font-size: 14px;
    line-height: 1.6;
}

.mkl-catalog__playground-action {
    flex: 0 0 auto;
    color: #9ca3af;
    font-size: 20px;
    transition:
        color 0.2s ease,
        transform 0.2s ease;
}

.mkl-catalog__playground:hover .mkl-catalog__playground-action {
    color: #8b5cf6;
    transform: translate(2px, -2px);
}


/* ----------------------------------------
   Pages Section
---------------------------------------- */

.mkl-catalog__page {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    min-width: 0;
    padding: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    color: #1f2937;
    text-decoration: none;
    background: #ffffff;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
}

.mkl-catalog__page:hover {
    border-color: #a78bfa;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
}

.mkl-catalog__page-main {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
    flex: 1;
}

.mkl-catalog__page-icon {
    display: grid;
    place-items: center;
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    color: #6b7280;
    background: #f3f4f6;
}

.mkl-catalog__page-icon svg {
    width: 21px;
    height: 21px;
}

.mkl-catalog__page-content {
    min-width: 0;
}

.mkl-catalog__page-title {
    display: block;
    margin: 0 0 7px;
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
}

.mkl-catalog__page-description {
    display: block;
    color: #6b7280;
    font-size: 13px;
    line-height: 1.6;
}

.mkl-catalog__page-action {
    flex: 0 0 auto;
    color: #9ca3af;
    font-size: 19px;
    transition:
        color 0.2s ease,
        transform 0.2s ease;
}

.mkl-catalog__page:hover .mkl-catalog__page-action {
    color: #8b5cf6;
    transform: translate(2px, -2px);
}


/* ----------------------------------------
   Responsive
---------------------------------------- */

@media (max-width: 1024px) {
    .mkl-catalog__list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .mkl-catalog {
        width: calc(100% - 32px);
        padding: 48px 0;
    }

    .mkl-catalog__playground-section {
        margin-bottom: 48px;
    }

    .mkl-catalog__section-title {
        font-size: 21px;
    }

    .mkl-catalog__list {
        grid-template-columns: 1fr;
    }

    .mkl-catalog__playground {
        gap: 12px;
        padding: 18px 16px;
    }

    .mkl-catalog__playground-main {
        gap: 12px;
    }

    .mkl-catalog__page {
        padding: 18px 16px;
    }
}
`;


/**
 * Renders the project catalog (index) HTML page.
 *
 * Playground:
 * - Development: links to /playground/.
 * - Non-development: links to http://localhost:3000/playground.
 *
 * Normal Pages:
 * - Each page has a document icon and a link arrow.
 */
export function renderCatalogHtml(
    site: SiteContext,
    pages: PageDefinition[],
    playgroundEnabled = false,
    beautify = true
): string {

    // ----------------------------------------
    // Playground Entry
    // ----------------------------------------

    const playgroundHref = playgroundEnabled
        ? 'http://localhost:3000/playground'
        : '#';

    const playgroundDescription = 'Only available with `npm run dev`';

    const playgroundEntry = `
        <a
            class="mkl-catalog__playground ${playgroundEnabled ? '' : 'disabled'}"
            href="${playgroundHref}"
            target="${playgroundEnabled ? '_blank' : '_self'}"
        >
            <div class="mkl-catalog__playground-main">

                <span class="mkl-catalog__playground-icon">
                    ${getPlaygroundIcon()}
                </span>

                <div class="mkl-catalog__playground-content">
                    <h2>Component Preview</h2>
                    <p>${playgroundDescription}</p>
                </div>

            </div>


            ${playgroundEnabled ? `<span
                class="mkl-catalog__playground-action"
                aria-hidden="true"
            >
                ↗
            </span>` : ''}
            
        </a>
    `;


    // ----------------------------------------
    // Normal Page Cards
    // ----------------------------------------

    const cards = pages
        .map((page) => {
            const description = page.seo.description || '';

            return `
                <a
                    class="mkl-catalog__page"
                    href="${escapeHtml(pageHref(page))}"
                    target="_blank"
                >
                    <div class="mkl-catalog__page-main">

                        <span
                            class="mkl-catalog__page-icon"
                            aria-hidden="true"
                        >
                            ${getPageIcon()}
                        </span>

                        <div class="mkl-catalog__page-content">
                            <strong class="mkl-catalog__page-title">
                                ${escapeHtml(page.seo.title)}
                            </strong>

                            <span class="mkl-catalog__page-description">
                                ${escapeHtml(description)}
                            </span>
                        </div>

                    </div>

                    <span
                        class="mkl-catalog__page-action"
                        aria-hidden="true"
                    >
                        ↗
                    </span>
                </a>
            `;
        })
        .join('');


    // ----------------------------------------
    // Complete Catalog Body
    // ----------------------------------------

    const body = `
        <main class="mkl-catalog">

            <!-- Playground Section -->
            <section
                class="mkl-catalog__playground-section"
            >

                <h2
                    id="mkl-catalog-pages-title"
                    class="mkl-catalog__section-title"
                >
                    Components
                </h2>

                ${playgroundEntry}
            </section>

            <!-- Normal Pages Section -->
            <section
                class="mkl-catalog__pages-section"
            >
                <h2
                    id="mkl-catalog-pages-title"
                    class="mkl-catalog__section-title"
                >
                    Pages
                </h2>

                <div class="mkl-catalog__list">
                    ${cards}
                </div>
            </section>

        </main>
    `;

    return renderDocument(
        {
            seo: {
                lang: site.config.lang,
                title: site.config.title,
                description: site.config.description,
            },
            bodyClass: 'mkl-page mkl-catalog-page',
            body,
            extraHead: `<style>${CATALOG_STYLES}</style>`,
            beautify,
        },
        site
    );
}


/**
 * Matches an incoming request URL to determine if it points to the catalog index,
 * a specific registered page, or should be bypassed (static assets).
 */
export function matchRequestPath(
    url: string | undefined,
    pages: PageDefinition[]
): { type: 'catalog' } | { type: 'page'; page: PageDefinition } | null {
    const pathname = (url ?? '/').split('?')[0] ?? '/';

    if (
        pathname.startsWith('/src/') ||
        pathname.startsWith('/@') ||
        pathname.startsWith('/node_modules/') ||
        pathname.startsWith('/assets/')
    ) {
        return null;
    }

    if (pathname === '/' || pathname === '/index.html') {
        return { type: 'catalog' };
    }

    const fileMatch = pathname.match(/^\/([^/]+)$/);
    const slugOrFile = fileMatch?.[1];

    if (!slugOrFile) {
        return null;
    }

    const page = pages.find(
        (item) =>
            item.htmlFileName === slugOrFile ||
            item.slug === slugOrFile ||
            item.htmlFileName === `${slugOrFile}.html`
    );

    return page ? { type: 'page', page } : null;
}