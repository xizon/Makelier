

/*
npx vitest run tests/template/block-config-generator.test.ts
*/

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

import {
    generateBlockConfig,
    writeBlockConfig,
} from '../../core/export/wordpress/block-config-generator.ts';

import type {
    BlockConfig,
} from '../../core/utils/types.ts';

import { GENERATED_META } from '../../core/utils/const.ts';

describe('generateBlockConfig', () => {
    it('should generate formatted JSON', () => {
        const config: BlockConfig = {
            name: 'pricing-table',
            attributes: {
                title: {
                    type: 'string',
                },
                count: {
                    type: 'number',
                    optional: true,
                },
                rows: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            feature: {
                                type: 'string',
                            },
                            enabled: {
                                type: 'boolean',
                            },
                        },
                    },
                },
            },
        };

        const result = generateBlockConfig(config);

        const expected = {
            _meta: GENERATED_META,
            ...config,
        };

        expect(result).toBe(
            `${JSON.stringify(expected, null, 4)}\n`,
        );

        expect(JSON.parse(result)).toEqual({
            _meta: GENERATED_META,
            ...config,
        });
    });

    it('should generate an empty attributes object', () => {
        const config: BlockConfig = {
            name: 'empty-component',
            attributes: {},
        };

        expect(JSON.parse(generateBlockConfig(config))).toEqual({
            _meta: GENERATED_META,
            ...config,
        });
    });
});

describe('writeBlockConfig', () => {
    let tempDir: string;

    afterEach(() => {
        if (tempDir && fs.existsSync(tempDir)) {
            fs.rmSync(tempDir, {
                recursive: true,
                force: true,
            });
        }
    });

    it('should write block.config.json', () => {
        tempDir = fs.mkdtempSync(
            path.join(os.tmpdir(), 'makelier-'),
        );

        const outputPath = path.join(
            tempDir,
            'pricing-table',
            'block.config.json',
        );

        const config: BlockConfig = {
            name: 'pricing-table',
            attributes: {
                title: {
                    type: 'string',
                },
            },
        };

        writeBlockConfig(config, outputPath);

        expect(fs.existsSync(outputPath)).toBe(true);

        const content = fs.readFileSync(
            outputPath,
            'utf8',
        );

        expect(JSON.parse(content)).toEqual({
            _meta: GENERATED_META,
            ...config,
        });
        expect(content.endsWith('\n')).toBe(true);
    });

    it('should overwrite an existing configuration', () => {
        tempDir = fs.mkdtempSync(
            path.join(os.tmpdir(), 'makelier-'),
        );

        const outputPath = path.join(
            tempDir,
            'block.config.json',
        );

        const firstConfig: BlockConfig = {
            name: 'test-component',
            attributes: {},
        };

        const secondConfig: BlockConfig = {
            name: 'test-component',
            attributes: {
                title: {
                    type: 'string',
                },
            },
        };

        writeBlockConfig(firstConfig, outputPath);
        writeBlockConfig(secondConfig, outputPath);

        expect(
            JSON.parse(fs.readFileSync(outputPath, 'utf8')),
        ).toEqual({
            _meta: GENERATED_META,
            ...secondConfig,
        });
    });
});
