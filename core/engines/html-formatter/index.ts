/**
 * HTML Formatter
 * 
 * Required dependency: "parse5"
 * 
## Why System Uses Its Own HTML Formatter

System uses a custom HTML formatter instead of Prettier because it needs more than general-purpose code formatting. It needs precise control over how HTML is parsed, structured, and generated during the build process.

## Key Advantages

- **Full control over output:** Custom formatting rules for indentation, attribute wrapping, comments, whitespace, and document-level spacing.
- **Built for HTML:** Focused specifically on HTML parsing, AST processing, and printing, without the overhead of supporting multiple programming languages.
- **Predictable results:** Consistent output across templates and production builds, with formatting behavior defined by Makelier.
- **HTML-aware handling:** Supports SVG, script/style content, comments, special entities, and whitespace-sensitive elements such as `pre` and `textarea`.
- **Seamless integration:** Works directly within the System build pipeline without relying on an external formatting engine.
- **Easy to customize and maintain:** Formatting rules can evolve alongside System without depending on third-party behavior or plugins.


 */
/*
!!! IMPORTANT (DO NOT USE "prettier")
---------

HTML Template
     │
     ▼
  parse5
     │
     ▼
   HTML AST
     │
     ▼
 HTML Printer
     │
     ▼
Formatted HTML

*/

export { parseHtml } from './parser.ts';
export { printHtml } from './printer.ts';

export type {
    HtmlNode,
    HtmlDocument,
    HtmlFragment
} from '../../utils/types.ts';

export type {
    FormatHtmlOptions,
    ResolvedFormatHtmlOptions
} from '../../utils/types.ts';
