
import {
    parse,
    parseFragment
} from 'parse5';

import type {
    FormatHtmlOptions,
    ResolvedFormatHtmlOptions,
    HtmlDocument,
    HtmlFragment
} from '../../utils/types.ts';

import { resolveOptions } from './options.ts';


/**
 * Parse HTML source into an AST.
 */

/*

Usage:
=========

// Format a complete HTML document.
const ast = parseHtml(html, {
    documentMode: 'document'
});

// Format an HTML fragment.
const ast = parseHtml(html, {
    documentMode: 'fragment'
});

*/
export function parseHtml(
    html: string,
    options: FormatHtmlOptions | ResolvedFormatHtmlOptions = {}
): HtmlDocument | HtmlFragment {
    const resolved = resolveOptions(options);

    if (resolved.documentMode === 'fragment') {
        return parseFragment(html);
    }

    return parse(html);
}
