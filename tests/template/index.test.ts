
import { describe, expect, it } from 'vitest';

import { transformTemplate } from '../../core/engines/template/index.ts';


describe('transformTemplate', () => {

    it('should transform a complete template to React TSX', () => {
        const source = `
            type Props = {
                title: string;
                children?: JSX.Element;
            };

            export function Template({
                title,
                children,
            }: Props): JSX.Element {
                return (
                    <main>
                        <h1>{title}</h1>
                        {children}
                    </main>
                );
            }
        `;

        const result = transformTemplate({
            source,
            fileName: 'template.tsx',
            target: 'react',
        });

        // Transformation result
        expect(result.success).toBe(true);
        expect(result.errors).toHaveLength(0);

        // Template analysis
        expect(result.analysis.componentName).toBe('Template');
        expect(result.analysis.declarationKind).toBe('function');

        // Type transformation
        expect(result.code).toContain('children?: ReactNode');
        expect(result.code).toContain('): JSX.Element');

        // React import
        expect(result.code).toMatch(
            /import type \{ ReactNode \} from ["']react["'];/,
        );

        // JSX structure should remain unchanged
        expect(result.code).toContain('<main>');
        expect(result.code).toContain('<h1>{title}</h1>');
    });


    it('should transform a const Template component', () => {
        const source = `
            type Props = {
                title: string;
            };

            const Template = ({ title }: Props): JSX.Element => {
                return <h1>{title}</h1>;
            };
        `;

        const result = transformTemplate({
            source,
            fileName: 'template.tsx',
            target: 'react',
        });

        expect(result.success).toBe(true);
        expect(result.errors).toHaveLength(0);

        expect(result.analysis.componentName).toBe('Template');
        expect(result.analysis.declarationKind).toBe('variable');
        expect(result.code).not.toContain('ReactNode');
        expect(result.code).toContain('): JSX.Element');
        expect(result.code).toContain('<h1>{title}</h1>');
        expect(result.code).toContain('<h1>{title}</h1>');
    });


    it('should reuse an existing React import', () => {
        const source = `
            import React from 'react';

            type Props = {
                children: JSX.Element;
            };

            export function Template({ children }: Props): JSX.Element {
                return <main>{children}</main>;
            }
        `;

        const result = transformTemplate({
            source,
            fileName: 'template.tsx',
            target: 'react',
        });

        expect(result.success).toBe(true);
        expect(result.errors).toHaveLength(0);

        expect(result.code).toContain(
            "import React, { type ReactNode } from 'react'",
        );

        expect(result.code.match(/from ['"]react['"]/g)).toHaveLength(1);
        expect(result.code).toContain('children: ReactNode');
    });


    it('should transform a valid React template', () => {
        const result = transformTemplate({
            target: 'react',
            source: `
                declare namespace JSX {
                    interface Element {}
                    interface IntrinsicElements {
                        div: any;
                    }
                }

                type ReactNode = JSX.Element | string | number;

                type Props = {
                    children: JSX.Element;
                };

                function Template({ children }: Props) {
                    return <div>{children}</div>;
                }
            `,
        });

        expect(result.success).toBe(true);
        expect(result.code).toContain('children: ReactNode');
        expect(result.errors).toHaveLength(0);
    });

    it('should report missing Template declaration', () => {
        const result = transformTemplate({
            target: 'react',
            source: `
                function App() {
                    return <div>Hello</div>;
                }
            `,
        });

        expect(result.success).toBe(false);
        expect(result.errors.length).toBeGreaterThan(0);
    });


    it('should transform JSX.Element with local JSX declarations', () => {
        const result = transformTemplate({
            target: 'react',
            source: `
                type Props = {
                    children: JSX.Element;
                };

                function Template({ children }: Props) {
                    return <div>{children}</div>;
                }
            `,
        });

        expect(result.success).toBe(true);
        expect(result.code).toContain('ReactNode');
        expect(result.errors).toHaveLength(0);
    });


    it('should not duplicate an existing ReactNode import', () => {
        const result = transformTemplate({
            target: 'react',
            source: `
            import type { ReactNode } from 'react';

            type Props = {
                children: JSX.Element;
            };

            function Template({ children }: Props) {
                return <div>{children}</div>;
            }
        `,
        });

        expect(result.success).toBe(true);

        const imports = result.code.match(/ReactNode/g) ?? [];

        // One import + one type reference.
        expect(imports).toHaveLength(2);
    });


    it('should return an error when tsconfig does not exist', () => {
        const result = transformTemplate({
            target: 'react',
            tsConfigFilePath: './invalid-tsconfig.json',
            source: `
                function Template() {
                    return <div>Hello</div>;
                }
            `,
        });

        expect(result.success).toBe(false);
        expect(result.errors.length).toBeGreaterThan(0);
        expect(result.analysis.componentName).toBeNull();
    });


    it('should return an error when TSX source is invalid', () => {
        const result = transformTemplate({
            target: 'react',
            source: `
                function Template() {
                    return (
                        <div>
                }
            `,
        });

        expect(result).toHaveProperty('success');
        expect(result).toHaveProperty('code');
        expect(result).toHaveProperty('analysis');
        expect(result).toHaveProperty('warnings');
        expect(result).toHaveProperty('errors');
    });


    it('should detect invalid TSX syntax', () => {
        const result = transformTemplate({
            target: 'react',
            source: `
                function Template() {
                    return (
                        <div>
                }
            `,
        });

        expect(result.success).toBe(false);
        expect(result.errors.length).toBeGreaterThan(0);
        expect(result.errors.some(error =>
            error.message.length > 0,
        )).toBe(true);
    });


    it('should not report missing React types in standalone mode', () => {
        const result = transformTemplate({
            target: 'react',
            source: `
                type Props = {
                    children: JSX.Element;
                };

                function Template({ children }: Props) {
                    return <div>{children}</div>;
                }
            `,
        });

        expect(result.success).toBe(true);
        expect(result.errors).toHaveLength(0);
    });


    it('should return syntax errors for invalid TSX', () => {
        const result = transformTemplate({
            source: `
                const Template = () => {
                    return (
                        <div>
                    );
                };
            `,
            target: 'react',
        });

        expect(result.success).toBe(false);
        expect(result.errors.length).toBeGreaterThan(0);

        expect(result.errors[0].message).toBeTruthy();
        expect(result.errors[0].line).toBeDefined();
        expect(result.errors[0].column).toBeDefined();
    });

    it('should return an error when Template declaration is missing', () => {
        const source = `
            const App = () => {
                return <div>Hello</div>;
            };
        `;

        const result = transformTemplate({
            source,
            target: 'react',
        });

        expect(result.success).toBe(false);

        expect(
            result.errors.some(error =>
                error.message.includes('Template'),
            ),
        ).toBe(true);
    });    


    it('should transform TSX without tsconfig', () => {
        const result = transformTemplate({
            source: `
                const Template = () => {
                    return <div>Hello</div>;
                };
            `,
            target: 'react',
        });

        expect(result.success).toBe(true);
        expect(result.errors).toHaveLength(0);
    });
    

    it('should preserve original source when validation fails', () => {
        const source = `
            const App = () => {
                return <div>Hello</div>;
            };
        `;

        const result = transformTemplate({
            source,
            target: 'react',
        });

        expect(result.success).toBe(false);
        expect(result.code).toBe(source);
    });

});


