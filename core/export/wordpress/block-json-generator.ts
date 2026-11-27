
import fs from 'node:fs';
import path from 'node:path';

import type {
    BlockAttributeConfig,
    WordPressBlockMetadata
} from '../../utils/types.ts';

import {
    GENERATED_META,
    PLUGIN_BLOCK_TITLE_PREFIX
} from '../../utils/const.ts';


/**
 * Convert attribute configuration
 * into a WordPress-compatible attribute definition.
 */
function convertAttributeConfig(
    config: BlockAttributeConfig,
) {
    const type = Array.isArray(config.type)
        ? 'string'
        : config.type === 'textarea'
            ? 'string'
            : config.type;

    return {
        type,
        ...(config.enum && {
            enum: config.enum,
        }),
    };
}

/**
 * Convert attributes into WordPress attributes.
 */
function convertAttributes(
    attributes: Record<string, BlockAttributeConfig>,
) {
    return Object.fromEntries(
        Object.entries(attributes).map(([name, config]) => [
            name,
            convertAttributeConfig(config),
        ]),
    );
}

/**
 * Generate a formatted WordPress block.json string.
 */
export function generateBlockJson(
    metadata: WordPressBlockMetadata,
    attributes: Record<string, BlockAttributeConfig>,
): string {
    const {
        _meta: _ignoredMeta,
        attributes: _ignoredAttributes,
        ...blockMetadata
    } = metadata;

    const blockJson = {
        _meta: GENERATED_META,

        ...blockMetadata,
        title: `${PLUGIN_BLOCK_TITLE_PREFIX}${metadata.title}`,

        attributes: convertAttributes(attributes),
    };

    return `${JSON.stringify(blockJson, null, 4)}\n`;
}

/**
 * Write a generated WordPress block.json file.
 */
export function writeBlockJson(
    metadata: WordPressBlockMetadata,
    attributes: Record<string, BlockAttributeConfig>,
    outputPath: string,
): void {
    const outputDir = path.dirname(outputPath);

    fs.mkdirSync(outputDir, {
        recursive: true,
    });

    fs.writeFileSync(
        outputPath,
        generateBlockJson(metadata, attributes),
        'utf8',
    );
}
