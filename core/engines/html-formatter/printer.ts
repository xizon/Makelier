
import type {
    HtmlNode,
    FormatHtmlOptions,
    LayoutType,
    NodeLike,
    PrintOptions,
} from '../../utils/types.ts';

import { resolveOptions } from './options.ts';

import {
    VOID_TAGS,
    RAW_TEXT_TAGS,
    PRESERVE_WHITESPACE_TAGS,
    INLINE_TAGS,
    SVG_NAMESPACE,
    BOOLEAN_ATTRIBUTES,
    BLOCK_TAGS
} from './constants.ts';

/**
 * Check whether an element is a custom HTML element.
 */
function isCustomElement(node: NodeLike): boolean {
    return Boolean(
        node.tagName &&
        node.namespaceURI !== SVG_NAMESPACE &&
        node.tagName.includes('-')
    );
}


/**
 * Generate indentation.
 */
function indent(depth: number, options: PrintOptions): string {
    return options.indentUnit.repeat(Math.max(0, depth));
}


/**
 * Escape ordinary HTML text.
 */
function escapeText(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\u00A0/g, '&nbsp;');
}

/**
 * Normalize ordinary text whitespace.
 */
function normalizeTextWhitespace(
    value: string,
    options: PrintOptions
): string {
    if (options.preserveWhitespace) {
        return value;
    }

    return value.replace(/\s+/g, ' ');
}


/**
 * Escape HTML attribute values.
 */
/*

&   ==>   Must be escaped as &amp; to avoid ambiguity during entity parsing.
"   ==>   Must be escaped as &quot;, since attribute values ​​are enclosed in double quotes.
<   ==>   Should be escaped as &lt; to prevent the appearance of a raw tag-opening character within an attribute value.
>   ==>   Safe to use within attribute values ​​enclosed in double quotes; no escaping is necessary.
'   ==>   No escaping required, as attribute values ​​are enclosed in double quotes.

*/
function escapeAttribute(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/\u00A0/g, '&nbsp;');
}


/**
 * Check whether a node is an HTML void element.
 */
function isVoidElement(node: NodeLike): boolean {
    return (
        node.namespaceURI !== SVG_NAMESPACE &&
        !!node.tagName &&
        VOID_TAGS.has(node.tagName.toLowerCase())
    );
}


/**
 * Check whether an element preserves its content.
 */
function preservesContent(node: NodeLike): boolean {
    if (!node.tagName) {
        return false;
    }

    const tagName = node.tagName.toLowerCase();

    return (
        RAW_TEXT_TAGS.has(tagName) ||
        PRESERVE_WHITESPACE_TAGS.has(tagName)
    );
}


/**
 * Check whether an element is an inline HTML element.
 */
function isInlineElement(node: NodeLike): boolean {
    if (!node.tagName) {
        return false;
    }

    if (node.namespaceURI === SVG_NAMESPACE) {
        return false;
    }

    return INLINE_TAGS.has(node.tagName.toLowerCase());
}



/**
 * Determine the layout type of an element.
 */
function getLayoutType(node: NodeLike): LayoutType {
    const children = node.childNodes || [];

    const elementChildren = children.filter(
        child => Boolean(child.tagName)
    );

    // Text-only or empty elements follow their HTML display category.
    if (elementChildren.length === 0) {
        const hasText = children.some(
            child => child.nodeName === '#text' && !!child.value?.trim()
        );

        return hasText && BLOCK_TAGS.has(node.tagName?.toLowerCase() || '')
            ? 'block'
            : 'inline';
    }

    // Any structural child requires block layout.
    /*
    Custom elements do not automatically trigger block layout simply because their tag names are absent from `INLINE_TAGS`.
    
    Note: This is merely the default layout strategy used by the Formatter; it does not imply that custom elements
     are necessarily rendered as inline elements within the browser.
    */
    const hasStructuralChild = elementChildren.some(
        child => !isInlineElement(child) && !isCustomElement(child)
    );

    if (hasStructuralChild) {
        return 'block';
    }

    return 'inline';
}




/**
 * Format an element attribute.
 */
function formatAttribute(
    attr: NonNullable<NodeLike['attrs']>[number]
): string {
    const { name, value } = attr;

    if (
        BOOLEAN_ATTRIBUTES.has(name.toLowerCase()) &&
        value === ''
    ) {
        return name;
    }

    return `${name}="${escapeAttribute(value)}"`;
}

/**
 * Get element attributes.
 */
function printAttributes(node: NodeLike): string {
    if (!node.attrs?.length) {
        return '';
    }

    return node.attrs
        .map(attr => ` ${formatAttribute(attr)}`)
        .join('');
}


/**
 * Print an opening tag.
 *
 * Supports:
 * - single-line
 * - multiline
 * - auto (based on printWidth)
 *
 * The closing > always stays after the last attribute.
 */
function printOpeningTag(
    node: NodeLike,
    depth: number,
    options: PrintOptions
): string {
    const tagName = node.tagName || node.nodeName;
    const attrs = node.attrs || [];

    if (attrs.length === 0) {
        return `<${tagName}>`;
    }

    const singleLine = `<${tagName}${printAttributes(node)}>`;

    const layout = options.attributeLayout;

    if (layout === 'single-line') {
        return singleLine;
    }

    const shouldMultiline =
        layout === 'multiline' ||
        (
            layout === 'auto' &&
            indent(depth, options).length + singleLine.length >
                options.printWidth
        );

    if (!shouldMultiline) {
        return singleLine;
    }

    const attributes = attrs.map(attr => {
        return `${indent(depth + 1, options)}${formatAttribute(attr)}`;
    });

    // Keep > on the same line as the last attribute.
    const lastIndex = attributes.length - 1;

    attributes[lastIndex] += '>';

    return [
        `<${tagName}`,
        ...attributes,
    ].join('\n');
}


/**
 * Print a closing tag.
 */
function printClosingTag(node: NodeLike): string {
    return `</${node.tagName}>`;
}


/**
 * Print a comment.
 */
function printComment(
    node: NodeLike,
    options: PrintOptions
): string {
    if (!options.preserveComments) {
        return '';
    }

    return `<!--${node.data || ''}-->`;
}


/**
 * Print inline children while preserving meaningful spaces.
 */
function printInlineChildren(
    children: NodeLike[],
    depth: number,
    options: PrintOptions
): string {
    if (options.preserveWhitespace) {
        return children
            .map(child => printInlineNode(child, depth, options))
            .join('');
    }

    return children.map((child, index) => {
        if (child.nodeName !== '#text') {
            return printInlineNode(child, depth, options);
        }

        const value = child.value || '';

        // Ignore whitespace-only text at the beginning and end.
        if (!value.trim()) {
            const hasPreviousContent = children
                .slice(0, index)
                .some(item => item.nodeName !== '#text' || !!item.value?.trim());

            const hasNextContent = children
                .slice(index + 1)
                .some(item => item.nodeName !== '#text' || !!item.value?.trim());

            return hasPreviousContent && hasNextContent ? ' ' : '';
        }

        let normalized = normalizeTextWhitespace(value, options);

        // Remove leading whitespace from the first text node.
        if (index === 0) {
            normalized = normalized.trimStart();
        }

        // Remove trailing whitespace from the last text node.
        if (index === children.length - 1) {
            normalized = normalized.trimEnd();
        }

        return escapeText(normalized);
    }).join('');
}


/**
 * Print an element and all its children inline.
 *
 * Used for mixed text and inline content.
 */
function printInlineNode(
    node: NodeLike,
    depth: number,
    options: PrintOptions
): string {
    if (node.nodeName === '#text') {
        const value = normalizeTextWhitespace(
            node.value || '',
            options
        );

        return escapeText(value);
    }

    if (node.nodeName === '#comment') {
        return printComment(node, options);
    }

    if (!node.tagName) {
        return '';
    }

    const opening = printOpeningTag(node, depth, options);

    if (isVoidElement(node)) {
        return opening;
    }

    // Preserve special element contents.
    if (preservesContent(node)) {
        return printPreservedElement(node, depth, options);
    }

    const content = printInlineChildren(
        node.childNodes || [],
        depth,
        options
    );

    return `${opening}${content}${printClosingTag(node)}`;
}


/**
 * Re-indent preserved raw text content.
 *
 * Removes the common leading indentation and applies
 * the current HTML nesting depth.
 */
function reindentRawText(
    value: string,
    depth: number,
    options: PrintOptions
): string {
    // Keep single-line raw text unchanged.
    if (!value.includes('\n')) {
        return value;
    }

    const lines = value.split('\n');
    const nonEmptyLines = lines.filter(line => line.trim());

    if (nonEmptyLines.length === 0) {
        return value;
    }

    const indentLengths = nonEmptyLines.map(line => {
        return line.match(/^[\t ]*/)?.[0].length || 0;
    });

    const minIndent = Math.min(...indentLengths);
    const baseIndent = indent(depth + 1, options);

    return lines.map(line => {
        if (!line.trim()) return line;

        return baseIndent + line.slice(minIndent);
    }).join('\n');
}

/**
 * Print preserved-content elements.
 *
 * script/style:
 * Preserve raw text without HTML escaping.
 *
 * pre/textarea:
 * Preserve whitespace while escaping HTML text.
 */
function printPreservedElement(
    node: NodeLike,
    depth: number,
    options: PrintOptions
): string {
    const opening = printOpeningTag(node, depth, options);
    const tagName = node.tagName?.toLowerCase() || '';

    const isRawText = RAW_TEXT_TAGS.has(tagName);

    const content = (node.childNodes || [])
        .map(child => {
            if (child.nodeName === '#text') {
                const value = child.value || '';

                return isRawText
                    ? reindentRawText(value, depth, options)
                    : escapeText(value);
            }

            if (child.nodeName === '#comment') {
                return printComment(child, options);
            }

            return printInlineNode(child, depth, options);
        })
        .join('');


    const closing = printClosingTag(node);

    // Raw text with single-line content stays on the same line.
    if (isRawText && !content.trim().includes('\n')) {
        return `${opening}${content.trim()}${closing}`;
    }

    if (!content.trim()) {
        return `${opening}${closing}`;
    }

    const formattedContent = content.replace(/\s+$/, '');

    return `${opening}${formattedContent}\n${indent(depth, options)}${closing}`;

}

/**
 * Print a block-structured element.
 */
function printElement(
    node: NodeLike,
    depth: number,
    options: PrintOptions
): string {
    const opening = printOpeningTag(node, depth, options);
    const prefix = indent(depth, options);

    if (isVoidElement(node)) {
        return `${prefix}${opening}`;
    }

    // Preserve the original content of special elements.
    if (preservesContent(node)) {
        return `${prefix}${printPreservedElement(node, depth, options)}`;
    }

    const children = node.childNodes || [];

    if (children.length === 0) {
        return `${prefix}${opening}${printClosingTag(node)}`;
    }


    // Keep text-flow elements inline when they contain only inline content.
    const hasTextContent = children.some(
        child => child.nodeName === '#text' && !!child.value?.trim()
    );

    const hasTrailingLineWhitespace = children.some(
        child =>
            child.nodeName === '#text' &&
            /[\r\n][\t ]*$/.test(child.value || '')
    );

    const isMultilineBlockText =
        children.every(child => child.nodeName === '#text') &&
        BLOCK_TAGS.has(node.tagName?.toLowerCase() || '') &&
        hasTrailingLineWhitespace;


    const hasOnlyInlineChildren = children.every(child => {
        return (
            child.nodeName === '#text' ||
            child.nodeName === '#comment' ||
            isInlineElement(child) ||
            isVoidElement(child)
        );
    });

    if (
        hasTextContent &&
        hasOnlyInlineChildren &&
        !isMultilineBlockText
    ) {
        return `${prefix}${printInlineNode(node, depth, options)}`;
    }

    //=======


    const layout = getLayoutType(node);

    // Inline layout.
    if (layout === 'inline') {
        return `${prefix}${printInlineNode(node, depth, options)}`;
    }


    // Block layout: discard indentation-only text between children.
    const meaningfulChildren = children.filter(child => {
        return !(
            child.nodeName === '#text' &&
            !child.value?.trim()
        );
    });

    const content = meaningfulChildren
        .map(child => {
            const childIndent = indent(depth + 1, options);

            if (child.nodeName === '#text') {
                const value = child.value || '';

                const normalized = options.preserveWhitespace
                    ? value.trim()
                    : normalizeTextWhitespace(value, options).trim();

                if (!normalized) return '';

                return `${childIndent}${escapeText(normalized)}`;
            }

            if (child.nodeName === '#comment') {
                const comment = printComment(child, options);

                return comment
                    ? `${childIndent}${comment}`
                    : '';
            }

            return printNode(child, depth + 1, options);
        })
        .filter(Boolean)
        .join('\n');


    return [
        `${prefix}${opening}`,
        content,
        `${prefix}${printClosingTag(node)}`,
    ].join('\n');
}


/**
 * Print an individual AST node.
 */
function printNode(
    node: NodeLike,
    depth: number,
    options: PrintOptions
): string {

    if (node.nodeName === '#text') {
        const originalValue = node.value || '';

        if (!originalValue.trim()) {
            return '';
        }

        const value = normalizeTextWhitespace(
            originalValue,
            options
        );

        return `${indent(depth, options)}${escapeText(value)}`;
    }

    // Document type declaration.
    if (node.nodeName === '#documentType') {
        return '<!DOCTYPE html>';
    }

    if (node.nodeName === '#comment') {
        const comment = printComment(node, options);

        if (!comment) {
            return '';
        }

        return `${indent(depth, options)}${comment}`;
    }

    if (node.tagName) {
        return printElement(node, depth, options);
    }

    // Document and DocumentFragment nodes.
    if (node.childNodes) {
        return node.childNodes
            .map(child => printNode(child, depth, options))
            .filter(Boolean)
            .join('\n');
    }

    return '';
}

/**
 * Format an HTML AST into a string.
 */
/**
 * Format an HTML AST into a string.
 */
export function printHtml(
    ast: HtmlNode,
    options: FormatHtmlOptions | PrintOptions = {}
): string {
    const resolved = resolveOptions(options);
    const root = ast as NodeLike;

    const children = (root.childNodes || [])
        .filter(child => !(
            child.nodeName === '#text' &&
            !child.value?.trim()
        ));

    const output: string[] = [];
    let previousOutputNode: NodeLike | undefined;

    for (const child of children) {
        let current = '';

        // Normalize top-level text nodes.
        if (child.nodeName === '#text') {
            const value = normalizeTextWhitespace(
                child.value || '',
                resolved
            ).trim();

            if (!value) continue;

            current = escapeText(value);
        } else {
            current = printNode(child, 0, resolved);
        }

        if (!current) continue;

        if (output.length === 0) {
            output.push(current);
            previousOutputNode = child;
            continue;
        }

        const isConsecutiveBr =
            previousOutputNode?.tagName === 'br' &&
            child.tagName === 'br';

        const isDoctypeHtml =
            previousOutputNode?.nodeName === '#documentType' &&
            child.tagName === 'html';

        // Comments should stay adjacent to surrounding document nodes.
        const isCommentBoundary =
            previousOutputNode?.nodeName === '#comment' ||
            child.nodeName === '#comment';

        const separator =
            isConsecutiveBr ||
            isDoctypeHtml ||
            isCommentBoundary
                ? '\n'
                : '\n\n';

        output.push(`${separator}${current}`);
        previousOutputNode = child;
    }

    return output.join('');
}