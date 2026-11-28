
import { describe, expect, it } from 'vitest';
import { Project } from 'ts-morph';

/*
npx vitest run tests/template/block-config-analyzer2.test.ts
*/

import { analyzeBlockConfig } from '../../core/engines/template/block-config-analyzer.ts';

function analyze(source: string) {
    const project = new Project({
        useInMemoryFileSystem: true,
        compilerOptions: {
            strict: true,
        },
    });

    const sourceFile = project.createSourceFile(
        '/template.tsx',
        source,
    );

    return analyzeBlockConfig(sourceFile, 'test-component');
}

describe('analyzeBlockConfig', () => {
    describe('primitive types', () => {
        it('should resolve basic primitive attributes', () => {
            const result = analyze(`
                interface Props {
                    title: string;
                    count: number;
                    enabled: boolean;
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes).toEqual({
                title: { type: 'string' },
                count: { type: 'number' },
                enabled: { type: 'boolean' },
            });
        });
    });

    describe('literal unions', () => {
        it('should resolve string literal unions as enums', () => {
            const result = analyze(`
                interface Props {
                    size: 'small' | 'medium' | 'large';
                    variant: 'primary' | 'secondary';
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes).toEqual({
                size: {
                    type: 'string',
                    enum: ['small', 'medium', 'large'],
                },
                variant: {
                    type: 'string',
                    enum: ['primary', 'secondary'],
                },
            });
        });

        it('should resolve number literal unions as enums', () => {
            const result = analyze(`
                interface Props {
                    columns: 1 | 2 | 3 | 4;
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes.columns).toEqual({
                type: 'number',
                enum: [1, 2, 3, 4],
            });
        });

        it('should resolve boolean literal unions as enums', () => {
            const result = analyze(`
                interface Props {
                    enabled: true | false;
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes.enabled).toEqual({
                type: 'boolean',
                enum: [true, false],
            });
        });
    });

    describe('ordinary unions', () => {
        it('should preserve primitive union types', () => {
            const result = analyze(`
                interface Props {
                    value: string | number;
                    status: string | boolean;
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes).toEqual({
                value: {
                    type: ['string', 'number'],
                },
                status: {
                    type: ['string', 'boolean'],
                },
            });
        });
    });

    describe('optional attributes', () => {
        it('should preserve optional literal union attributes', () => {
            const result = analyze(`
                interface Props {
                    variant?: 'primary' | 'secondary';
                    size?: 'small' | 'large';
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes).toEqual({
                variant: {
                    type: 'string',
                    enum: ['primary', 'secondary'],
                    optional: true,
                },
                size: {
                    type: 'string',
                    enum: ['small', 'large'],
                    optional: true,
                },
            });
        });

        it('should preserve optional primitive attributes', () => {
            const result = analyze(`
                interface Props {
                    title?: string;
                    count?: number;
                    enabled?: boolean;
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes).toEqual({
                title: {
                    type: 'string',
                    optional: true,
                },
                count: {
                    type: 'number',
                    optional: true,
                },
                enabled: {
                    type: 'boolean',
                    optional: true,
                },
            });
        });
    });

    describe('nested structures', () => {
        it('should resolve object properties with literal unions', () => {
            const result = analyze(`
                interface Props {
                    settings: {
                        size: 'small' | 'large';
                        enabled: boolean;
                    };
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes.settings).toEqual({
                type: 'object',
                properties: {
                    size: {
                        type: 'string',
                        enum: ['small', 'large'],
                    },
                    enabled: {
                        type: 'boolean',
                    },
                },
            });
        });

        it('should resolve arrays containing objects with literal unions', () => {
            const result = analyze(`
                interface Props {
                    items: {
                        label: string;
                        variant: 'primary' | 'secondary';
                    }[];
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes.items).toEqual({
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        label: {
                            type: 'string',
                        },
                        variant: {
                            type: 'string',
                            enum: ['primary', 'secondary'],
                        },
                    },
                },
            });
        });
    });

    describe('unsupported attributes', () => {
        it('should exclude unsupported types', () => {
            const result = analyze(`
                interface Props {
                    title: string;
                    callback: () => void;
                    content: unknown;
                    children: unknown;
                }

                export function Template(props: Props) {
                    return null;
                }
            `);

            expect(result.attributes).toEqual({
                title: {
                    type: 'string',
                },
                children: {
                    type: 'html',
                },
            });

        });
    });
});
