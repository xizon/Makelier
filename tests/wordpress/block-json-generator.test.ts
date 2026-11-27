

/*
npx vitest run tests/wordpress/block-json-generator.test.ts
*/

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import {
    afterEach,
    describe,
    expect,
    it,
} from 'vitest';

import {
    generateBlockJson,
    writeBlockJson,
} from '../../core/export/wordpress/block-json-generator.ts';

import {
    GENERATED_META,
    PLUGIN_BLOCK_TITLE_PREFIX
} from '../../core/utils/const.ts';

import type {
    BlockAttributeConfig,
} from '../../core/utils/types.ts';

const metadata = {
    apiVersion: 3,
    name: 'makelier/pricing-table',
    title: 'Pricing Table',
    category: 'widgets',
};

const attributes = {
    eyebrow: {
        type: 'string',
    },
    title: {
        type: 'string',
    },
    rows: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                feature: {
                    type: 'string',
                },
                same: {
                    type: 'boolean',
                },
            },
        },
    },
} as const;

const extendedAttributes: Record<string, BlockAttributeConfig> = {
    label: {
        type: 'textarea',
        optional: true,
    },
    size: {
        type: 'string',
        enum: ['small', 'large'],
    },
    enabled: {
        type: 'boolean',
    },
    rows: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
            },
        },
    },
    settings: {
        type: 'object',
        properties: {
            theme: {
                type: 'string',
            },
        },
    },
};

let tempDir: string;

afterEach(() => {
    if (tempDir && fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, {
            recursive: true,
            force: true,
        });
    }
});

describe('generateBlockJson', () => {

    it('should convert attributes into WordPress schema', () => {
        const result = generateBlockJson(
            metadata,
            extendedAttributes,
        );

        const parsed = JSON.parse(result);

        expect(parsed.attributes).toEqual({
            label: {
                type: 'string',
            },
            size: {
                type: 'string',
                enum: ['small', 'large'],
            },
            enabled: {
                type: 'boolean',
            },
            rows: {
                type: 'array',
            },
            settings: {
                type: 'object',
            },
        });
    });

    it('should not mutate the original attributes', () => {
        const original = structuredClone(extendedAttributes);

        generateBlockJson(
            metadata,
            extendedAttributes,
        );

        expect(extendedAttributes).toEqual(original);
    });    

    it('should generate formatted WordPress block JSON', () => {
        const result = generateBlockJson(
            metadata,
            attributes,
        );

        const parsed = JSON.parse(result);

        expect(parsed.apiVersion).toBe(3);
        expect(parsed.name).toBe('makelier/pricing-table');
        expect(parsed.title).toBe(PLUGIN_BLOCK_TITLE_PREFIX + 'Pricing Table');

        expect(parsed.attributes).toEqual({
            eyebrow: {
                type: 'string',
            },
            title: {
                type: 'string',
            },
            rows: {
                type: 'array',
            },
        });

        expect(result).toContain('\n    "apiVersion"');
        expect(result.endsWith('\n')).toBe(true);
    });

    it('should include the Auto-generated marker', () => {
        const result = generateBlockJson(
            metadata,
            attributes,
        );

        const parsed = JSON.parse(result);

        expect(parsed._meta).toEqual(GENERATED_META);
    });

    it('should generate an empty attributes object', () => {
        const result = generateBlockJson(
            metadata,
            {},
        );

        const parsed = JSON.parse(result);

        expect(parsed.attributes).toEqual({});
    });

    it('should not allow metadata to override generated fields', () => {
        const result = generateBlockJson(
            {
                ...metadata,
                _meta: {
                    generated: false,
                },
                attributes: {
                    invalid: {
                        type: 'string',
                    },
                },
            },
            attributes,
        );

        const parsed = JSON.parse(result);

        expect(parsed._meta.generated).toBe(true);
        expect(parsed.attributes).toEqual({
            eyebrow: {
                type: 'string',
            },
            title: {
                type: 'string',
            },
            rows: {
                type: 'array',
            },
        });
    });
});

describe('writeBlockJson', () => {
    it('should write block.json and create the wp directory', () => {
        tempDir = fs.mkdtempSync(
            path.join(os.tmpdir(), 'makelier-'),
        );

        const outputPath = path.join(
            tempDir,
            'wp',
            'block.json',
        );

        writeBlockJson(
            metadata,
            attributes,
            outputPath,
        );

        expect(fs.existsSync(outputPath)).toBe(true);

        const parsed = JSON.parse(
            fs.readFileSync(outputPath, 'utf8'),
        );

        expect(parsed.name).toBe('makelier/pricing-table');
        expect(parsed.attributes).toEqual({
            eyebrow: {
                type: 'string',
            },
            title: {
                type: 'string',
            },
            rows: {
                type: 'array',
            },
        });
        expect(parsed._meta.generated).toBe(true);
    });

    it('should overwrite an existing block.json', () => {
        tempDir = fs.mkdtempSync(
            path.join(os.tmpdir(), 'makelier-'),
        );

        const outputPath = path.join(
            tempDir,
            'wp',
            'block.json',
        );

        fs.mkdirSync(path.dirname(outputPath), {
            recursive: true,
        });

        fs.writeFileSync(
            outputPath,
            '{"old": true}',
            'utf8',
        );

        writeBlockJson(
            metadata,
            attributes,
            outputPath,
        );

        const parsed = JSON.parse(
            fs.readFileSync(outputPath, 'utf8'),
        );

        expect(parsed.old).toBeUndefined();
        expect(parsed.name).toBe('makelier/pricing-table');
        expect(parsed._meta.generated).toBe(true);
    });
});
