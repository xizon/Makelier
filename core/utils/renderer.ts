
import {
    parseHtml,
    printHtml,
} from '../engines/html-formatter/index.ts';

/**
 * Format a complete HTML document.
 */
export function formatHtml(html: string): string {
    const ast = parseHtml(html, {
        documentMode: 'document',
    });

    return printHtml(ast);
}
