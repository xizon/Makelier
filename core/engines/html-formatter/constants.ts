/**
 * HTML void elements.
 *
 * These elements must not have closing tags.
 * Output format: <img>, not <img />.
 */

export const BOOLEAN_ATTRIBUTES = new Set([
    'allowfullscreen',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'inert',
    'ismap',
    'itemscope',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);

export const TEXT_FLOW_TAGS = new Set([
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'address',
    'blockquote',
    'figcaption',
    'label',
    'legend',
    'summary',
    'dt',
    'dd',
    'caption',
    'option',
]);

export const VOID_TAGS = new Set([
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
]);

/**
 * Raw text elements.
 *
 * Their content must not be formatted as ordinary HTML.
 */
export const RAW_TEXT_TAGS = new Set([
    'script',
    'style'
]);

/**
 * Elements whose whitespace must be preserved.
 */
export const PRESERVE_WHITESPACE_TAGS = new Set([
    'pre',
    'textarea'
]);

/**
 * Block-level HTML elements.
 *
 * Used for layout decisions, not for changing DOM semantics.
 */
export const BLOCK_TAGS = new Set([
    'address',
    'article',
    'aside',
    'blockquote',
    'body',
    'caption',
    'dd',
    'details',
    'dialog',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'html',
    'legend',
    'li',
    'main',
    'menu',
    'nav',
    'ol',
    'optgroup',
    'option',
    'p',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'tr',
    'ul'
]);

/**
 * Inline HTML elements.
 *
 * Used to identify mixed inline content.
 */
export const INLINE_TAGS = new Set([
    'a',
    'abbr',
    'b',
    'bdi',
    'bdo',
    'cite',
    'code',
    'data',
    'del',
    'dfn',
    'em',
    'i',
    'ins',
    'kbd',
    'mark',
    'q',
    's',
    'samp',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'time',
    'u',
    'var'
]);

/**
 * SVG namespace.
 */
export const SVG_NAMESPACE =
    'http://www.w3.org/2000/svg';

/**
 * MathML namespace.
 */
export const MATHML_NAMESPACE =
    'http://www.w3.org/1998/Math/MathML';