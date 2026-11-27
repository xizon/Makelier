

/*
npx vitest run tests/template/block-config-analyzer.test.ts
*/

import { describe, expect, it } from 'vitest';
import { Project } from 'ts-morph';

import { analyzeBlockConfig } from '../../core/engines/template/block-config-analyzer.ts';

function analyze(source: string) {
    const project = new Project({
        useInMemoryFileSystem: true,
        compilerOptions: {
            strict: true,
            jsx: 4,
        },
    });

    const sourceFile = project.createSourceFile(
        '/template.tsx',
        source,
    );

    return analyzeBlockConfig(sourceFile, 'test-component');
}

describe('analyzeBlockConfig', () => {

    it('should preserve supported members of primitive unions', () => {
        const result = analyze(`
        declare namespace JSX {
            interface Element {
                type: string;
            }
        }

        interface Props {
            title: string | JSX.Element;
            value: string | number;
            status: 'success' | 'error';
        }

        export function Template(props: Props) {
            return <div />;
        }
    `);

        expect(result.attributes).toEqual({
            title: { type: 'string' },
            value: {
                type: ['string', 'number'],
            },
            status: {
                type: 'string',
                enum: ['success', 'error'],
            },
        });
    });

    it('should analyze primitive props', () => {
        const result = analyze(`
            interface Props {
                title: string;
                count: number;
                active: boolean;
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        expect(result).toEqual({
            name: 'test-component',
            attributes: {
                title: { type: 'string' },
                count: { type: 'number' },
                active: { type: 'boolean' },
            },
        });
    });

    it('should analyze optional props', () => {
        const result = analyze(`
            interface Props {
                title?: string;
                count?: number;
            }

            export function Template(props: Props) {
                return <div />;
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
        });
    });

    it('should analyze primitive arrays', () => {
        const result = analyze(`
            interface Props {
                tags: string[];
                prices: number[];
                enabled: boolean[];
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({
            tags: {
                type: 'array',
                items: { type: 'string' },
            },
            prices: {
                type: 'array',
                items: { type: 'number' },
            },
            enabled: {
                type: 'array',
                items: { type: 'boolean' },
            },
        });
    });

    it('should analyze object arrays', () => {
        const result = analyze(`
            interface PricingRow {
                feature: string;
                price: number;
                enabled: boolean;
            }

            interface Props {
                rows: PricingRow[];
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({
            rows: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        feature: { type: 'string' },
                        price: { type: 'number' },
                        enabled: { type: 'boolean' },
                    },
                },
            },
        });
    });

    it('should analyze nested objects', () => {
        const result = analyze(`
            interface Settings {
                autoplay: boolean;
                duration: number;
            }

            interface Props {
                settings: Settings;
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({
            settings: {
                type: 'object',
                properties: {
                    autoplay: { type: 'boolean' },
                    duration: { type: 'number' },
                },
            },
        });
    });

    it('should analyze nested object arrays', () => {
        const result = analyze(`
            interface Metadata {
                label: string;
                visible: boolean;
            }

            interface PricingRow {
                feature: string;
                metadata: Metadata;
            }

            interface Props {
                rows: PricingRow[];
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({
            rows: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        feature: { type: 'string' },
                        metadata: {
                            type: 'object',
                            properties: {
                                label: { type: 'string' },
                                visible: { type: 'boolean' },
                            },
                        },
                    },
                },
            },
        });
    });

    it('should exclude children and function props', () => {
        const result = analyze(`
            interface Props {
                title: string;
                children?: JSX.Element;
                onChange?: (value: string) => void;
                callback: Function;
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({
            title: { type: 'string' },
        });
    });


    it('should exclude unsupported object unions', () => {
        const result = analyze(`
            interface Props {
                value: string | { label: string };
                content: JSX.Element | (() => void);
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({});
    });

    it('should exclude unsupported props', () => {
        const result = analyze(`
            interface Props {
                element: JSX.Element;
                content: React.ReactNode;
                callback: () => void;
                anything: any;
                data: unknown;
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({});
    });

    it('should analyze destructured Template parameters', () => {
        const result = analyze(`
            interface Props {
                title: string;
                count: number;
            }

            export function Template({ title, count }: Props) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({
            title: { type: 'string' },
            count: { type: 'number' },
        });
    });

    it('should analyze arrow function Template declarations', () => {
        const result = analyze(`
            interface Props {
                title: string;
                active: boolean;
            }

            export const Template = (props: Props) => {
                return <div />;
            };
        `);

        expect(result.attributes).toEqual({
            title: { type: 'string' },
            active: { type: 'boolean' },
        });
    });

    it('should analyze inline props types', () => {
        const result = analyze(`
            export function Template(props: {
                title: string;
                count?: number;
            }) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({
            title: { type: 'string' },
            count: {
                type: 'number',
                optional: true,
            },
        });
    });

    it('should return empty attributes when Template has no props', () => {
        const result = analyze(`
            export function Template() {
                return <div />;
            }
        `);

        expect(result).toEqual({
            name: 'test-component',
            attributes: {},
        });
    });

    it('should respect the maximum recursion depth', () => {
        const result = analyze(`
            interface Level5 {
                value: string;
            }

            interface Level4 {
                nested: Level5;
            }

            interface Level3 {
                nested: Level4;
            }

            interface Level2 {
                nested: Level3;
            }

            interface Level1 {
                nested: Level2;
            }

            interface Props {
                data: Level1;
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        // Deeply nested properties should not cause infinite recursion.
        expect(result.name).toBe('test-component');
        expect(result.attributes).toEqual({
            data: {
                type: 'object',
                properties: {
                    nested: {
                        type: 'object',
                        properties: {
                            nested: {
                                type: 'object',
                                properties: {
                                    nested: {
                                        type: 'object',
                                        properties: {
                                            nested: {
                                                type: 'object',
                                                properties: {
                                                    value: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    });

    it('should exclude children from nested objects', () => {
        const result = analyze(`
            interface Item {
                label: string;
                children: Item[];
            }

            interface Props {
                items: Item[];
            }

            export function Template(props: Props) {
                return <div />;
            }
        `);

        expect(result.attributes).toEqual({
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        label: { type: 'string' },
                    },
                },
            },
        });
    });
});
