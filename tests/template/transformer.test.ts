
import { describe, expect, it } from 'vitest';

import { parseTemplate } from '../../core/engines/template/parser.ts';
import { transformToReact } from '../../core/engines/template/transformer.ts';

describe('transformToReact', () => {
    it('should convert JSX.Element to ReactNode', () => {
        const { sourceFile } = parseTemplate({
            source: `
                type Props = {
                    children: JSX.Element;
                };

                function Template(props: Props) {
                    return <div>{props.children}</div>;
                }
            `,
        });

        const result = transformToReact(sourceFile);

        expect(result.changed).toBe(true);
        expect(result.replacedElementTypes).toBe(1);
        expect(result.code).toContain('children: ReactNode');
        expect(result.code).toMatch(/from ['"]react['"]/);
    });

    it('should not change source without JSX.Element', () => {
        const { sourceFile } = parseTemplate({
            source: `
                function Template() {
                    return <div>Hello</div>;
                }
            `,
        });

        const result = transformToReact(sourceFile);

        expect(result.changed).toBe(false);
        expect(result.replacedElementTypes).toBe(0);
        expect(result.code).not.toContain('ReactNode');
    });

    it('should not add duplicate ReactNode imports', () => {
        const { sourceFile } = parseTemplate({
            source: `
                import type { ReactNode } from 'react';

                type Props = {
                    children: JSX.Element;
                };

                function Template(props: Props) {
                    return <div>{props.children}</div>;
                }
            `,
        });

        const result = transformToReact(sourceFile);

        const matches = result.code.match(/ReactNode/g) ?? [];
        const reactImports = result.code.match(/from ['"]react['"]/g) ?? [];

        expect(result.changed).toBe(true);
        expect(result.replacedElementTypes).toBe(1);
        expect(matches.length).toBe(2);
        expect(reactImports.length).toBe(1);
    });


    it('should not duplicate ReactNode import when it already exists', () => {
        const source = `
            import type { ReactNode } from 'react';

            type Props = {
                children: JSX.Element;
            };

            const Template = (props: Props) => {
                return <div>{props.children}</div>;
            };
        `;

        const { sourceFile } = parseTemplate({ source });

        const result = transformToReact(sourceFile);

        // JSX.Element should be replaced.
        expect(result.code).toContain('children: ReactNode');

        // ReactNode import should only appear once.
        const reactNodeImports = sourceFile
            .getImportDeclarations()
            .filter(declaration =>
                declaration.getModuleSpecifierValue() === 'react',
            )
            .flatMap(declaration =>
                declaration.getNamedImports(),
            )
            .filter(namedImport =>
                namedImport.getName() === 'ReactNode',
            );

        expect(reactNodeImports).toHaveLength(1);

        // No duplicate ReactNode import should be added.
        expect(result.code.match(/ReactNode/g)).toHaveLength(2);
    });


    it('should transform JSX.Element[] to ReactNode[]', () => {
        const source = `
        type Props = {
            items: JSX.Element[];
        };
    `;

        const { sourceFile } = parseTemplate({ source });
        const result = transformToReact(sourceFile);

        expect(result.code).toContain('items: ReactNode[]');
        expect(result.code).toMatch(/import type \{ ReactNode \} from ["']react["'];/,);
        expect(result.replacedElementTypes).toBe(1);
    });

    it('should transform JSX.Element | null to ReactNode | null', () => {
        const source = `
        type Props = {
            children: JSX.Element | null;
        };
    `;

        const { sourceFile } = parseTemplate({ source });
        const result = transformToReact(sourceFile);

        expect(result.code).toContain('children: ReactNode | null');
        expect(result.code).toMatch(/import type \{ ReactNode \} from ["']react["'];/,);
        expect(result.replacedElementTypes).toBe(1);
    });

    it('should preserve React.ReactNode without modification', () => {
        const source = `
        import type React from 'react';

        type Props = {
            children: React.ReactNode;
        };
    `;

        const { sourceFile } = parseTemplate({ source });
        const result = transformToReact(sourceFile);

        expect(result.code).toContain('children: React.ReactNode');
        expect(result.code).not.toContain('import type { ReactNode }');
        expect(result.replacedElementTypes).toBe(0);
        expect(result.changed).toBe(false);
    });

    it('should convert class and for JSX attributes to React-compatible names', () => {
        const source = `
        export function Template() {
            return (
                <div class="container">
                    <label for="username">Username</label>
                    <input id="username" className="field" />
                </div>
            );
        }
    `;

        const { sourceFile } = parseTemplate({
            source,
            fileName: 'jsx-attributes.tsx',
        });

        transformToReact(sourceFile);

        const result = sourceFile.getFullText();

        expect(result).toContain('className="container"');
        expect(result).toContain('htmlFor="username"');
        expect(result).toContain('className="field"');

        expect(result).not.toContain('class="container"');
        expect(result).not.toContain('for="username"');
    });


    //===============================


  function transform(source: string): string {
        const parsed = parseTemplate({
            source,
            fileName: 'jsx-attributes.tsx',
        });

        transformToReact(parsed.sourceFile);

        return parsed.sourceFile.getFullText();
    }

    it('should convert class to className on native HTML elements', () => {
        const result = transform(`
            export function Template() {
                return (
                    <div class="container">
                        <section class="content" />
                        <span class="text" />
                    </div>
                );
            }
        `);

        expect(result).toContain('className="container"');
        expect(result).toContain('className="content"');
        expect(result).toContain('className="text"');

        expect(result).not.toContain('class="container"');
    });

    it('should convert for to htmlFor on label elements', () => {
        const result = transform(`
            export function Template() {
                return (
                    <label for="username">
                        Username
                    </label>
                );
            }
        `);

        expect(result).toContain('htmlFor="username"');
        expect(result).not.toContain('for="username"');
    });

    it('should preserve class on React components', () => {
        const result = transform(`
            import Logo from './logo';

            export function Template() {
                return <Logo class="logo" />;
            }
        `);

        expect(result).toContain('<Logo class="logo" />');
        expect(result).not.toContain('<Logo className=');
    });

    it('should preserve class on namespaced React components', () => {
        const result = transform(`
            import * as UI from './ui';

            export function Template() {
                return <UI.Button class="button" />;
            }
        `);

        expect(result).toContain('<UI.Button class="button" />');
        expect(result).not.toContain('<UI.Button className=');
    });

    it('should preserve class on Web Components', () => {
        const result = transform(`
            export function Template() {
                return <my-element class="custom-element" />;
            }
        `);

        expect(result).toContain('class="custom-element"');
        expect(result).not.toContain('className="custom-element"');
    });

    it('should preserve class on locally declared React components', () => {
        const result = transform(`
            function LocalWidget() {
                return <div />;
            }

            export function Template() {
                return <LocalWidget class="widget" />;
            }
        `);

        expect(result).toContain('<LocalWidget class="widget" />');
        expect(result).not.toContain('<LocalWidget className=');
    });

    it('should not convert an existing className attribute', () => {
        const result = transform(`
            export function Template() {
                return <div className="container" />;
            }
        `);

        expect(result).toContain('className="container"');
        expect(result).not.toContain('classNameName');
    });

    it('should not convert for on elements other than label', () => {
        const result = transform(`
            export function Template() {
                return <div for="username" />;
            }
        `);

        expect(result).toContain('for="username"');
        expect(result).not.toContain('htmlFor="username"');
    });

    it('should not modify class and for inside text content', () => {
        const result = transform(`
            export function Template() {
                return (
                    <div class="container">
                        <span>class="text"</span>
                        <span>for="username"</span>
                    </div>
                );
            }
        `);

        expect(result).toContain('className="container"');
        expect(result).toContain('class="text"');
        expect(result).toContain('for="username"');
    }); 


    // ================

  it('should normalize a custom children type alias', () => {
        const result = transform(`
            declare namespace JSX {
                interface Element {
                    type: unknown;
                    props: Record<string, unknown>;
                }
            }

            type Children = string | JSX.Element | Array<string | JSX.Element>;

            interface Props {
                children?: Children;
            }
        `);

        expect(result).toMatch( /import\s+(?:type\s+)?\{\s*type\s+ReactNode\s*\}\s*from\s*["']react["']/,);
        expect(result).toContain('children?: ReactNode');
        expect(result).not.toContain('type Children =');
    });

    it('should detect children aliases with different names', () => {
        const result = transform(`
            declare namespace JSX {
                interface Element {}
            }

            type Content = string | JSX.Element;
            type ChildContent = string | JSX.Element[];

            interface Props {
                content?: Content;
                children?: ChildContent;
            }
        `);

        expect(result).toContain('content?: ReactNode');
        expect(result).toContain('children?: ReactNode');
        expect(result).not.toContain('type Content =');
        expect(result).not.toContain('type ChildContent =');
    });

    it('should support Array generic syntax', () => {
        const result = transform(`
            declare namespace JSX {
                interface Element {}
            }

            type SlotContent = string | Array<JSX.Element>;

            interface Props {
                children?: SlotContent;
            }
        `);

        expect(result).toContain('children?: ReactNode');
        expect(result).not.toContain('type SlotContent =');
    });

    it('should preserve standalone JSX.Element aliases', () => {
        const result = transform(`
            declare namespace JSX {
                interface Element {}
            }

            type IconElement = JSX.Element;

            interface Props {
                icon?: IconElement;
            }
        `);

        expect(result).toContain('type IconElement = JSX.Element');
        expect(result).toContain('icon?: IconElement');
    });

    it('should preserve unrelated type aliases', () => {
        const result = transform(`
            type ButtonSize = 'small' | 'medium' | 'large';
            type ButtonVariant = 'primary' | 'secondary';

            interface Props {
                size?: ButtonSize;
                variant?: ButtonVariant;
            }
        `);

        expect(result).toContain('type ButtonSize');
        expect(result).toContain('type ButtonVariant');
        expect(result).toContain('size?: ButtonSize');
        expect(result).toContain('variant?: ButtonVariant');
        expect(result).not.toContain('ReactNode');
    });

    it('should not duplicate an existing ReactNode import', () => {
        const result = transform(`
            import type { ReactNode } from 'react';

            declare namespace JSX {
                interface Element {}
            }

            type Content = string | JSX.Element;

            interface Props {
                children?: Content;
            }
        `);

        const imports = result.match(/ReactNode/g) ?? [];

        // One import + one type reference.
        expect(imports).toHaveLength(2);
    });    
    

});
