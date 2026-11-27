import type {
    FormatHtmlOptions,
    ResolvedFormatHtmlOptions
} from '../../utils/types.ts';

export const DEFAULT_OPTIONS: ResolvedFormatHtmlOptions = {
    indentUnit: '    ',
    printWidth: 120,
    attributeLayout: 'auto',
    preserveComments: true,
    preserveWhitespace: true,
    documentMode: 'document'
};

export function resolveOptions(
    options: FormatHtmlOptions = {}
): ResolvedFormatHtmlOptions {
    return {
        ...DEFAULT_OPTIONS,
        ...options
    };
}