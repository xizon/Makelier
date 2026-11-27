
import fs from 'node:fs';
import path from 'node:path';

import type {
    BlockConfig,
} from '../../utils/types.ts';

import {
    GENERATED_META,
} from '../../utils/const.ts';

/**
 * Generate a formatted block configuration JSON string.
 */
export function generateBlockConfig(
    config: BlockConfig,
): string {
    const blockConfig = {
        _meta: GENERATED_META,
        ...config,
    };

    return `${JSON.stringify(blockConfig, null, 4)}\n`;
}

/**
 * Write a block configuration JSON file.
 */
export function writeBlockConfig(
    config: BlockConfig,
    outputPath: string,
): void {
    const outputDir = path.dirname(outputPath);

    fs.mkdirSync(outputDir, {
        recursive: true,
    });

    fs.writeFileSync(
        outputPath,
        generateBlockConfig(config),
        'utf8',
    );
}
