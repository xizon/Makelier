
import { describe, expect, it } from 'vitest';
import postcss from 'postcss';

import { colorMixFallback } from '../../core/engines/css-compatibility/color-mix-fallback.ts';

/*
Test Items:

------

Tailwind opacity                      =>   	Splitting of combined selectors
Arbitrary opacity	                  =>   /[0.06]
HEX	                                  =>   Color parsing
RGB	                                  =>   RGB color parsing
Variable alias	                      =>   Recursive resolution of CSS variables
Unsupported color                     =>   	No incorrect replacement for unsupported colors
Ordinary declarations                 =>   	No impact on standard CSS
Original alpha                        =>   	Handling of colors with inherent alpha values
Scope                                 =>   	No incorrect matching across media queries

*/

async function processCss(css: string) {
    const result = await postcss([
        colorMixFallback,
    ]).process(css, {
        from: undefined,
    });

    return result;
}

function getDeclaration(
    css: string,
    selector: string,
    property = 'background-color',
): string | undefined {
    const root = postcss.parse(css);

    let value: string | undefined;

    root.walkRules(selector, (rule) => {
        if (rule.parent?.type === 'atrule') {
            return;
        }

        rule.walkDecls(property, (declaration) => {
            value = declaration.value;
        });
    });

    return value;
}

describe('CSS Compatibility - color-mix fallback', () => {
    it('should convert Tailwind opacity utilities', async () => {
        const css = String.raw`
            :root {
                --color-cyan: #22f0ff;
            }

            .bg-cyan,
            .bg-cyan\/10 {
                background-color: var(--color-cyan);
            }

            @supports (color: color-mix(in lab, red, red)) {
                .bg-cyan\/10 {
                    background-color: color-mix(
                        in oklab,
                        var(--color-cyan) 10%,
                        transparent
                    );
                }
            }
        `;

        const result = await processCss(css);

        expect(
            getDeclaration(result.css, '.bg-cyan'),
        ).toBe('var(--color-cyan)');

        expect(
            getDeclaration(result.css, String.raw`.bg-cyan\/10`),
        ).toBe('rgba(34, 240, 255, 0.1)');

        expect(result.css).toContain('@supports');
        expect(result.css).toMatch(
            /color-mix\s*\(\s*in oklab/i,
        );
    });

    it('should support arbitrary opacity values', async () => {
        const css = String.raw`
            :root {
                --color-cyan: #22f0ff;
            }

            .bg-cyan\/\[0\.06\] {
                background-color: var(--color-cyan);
            }

            @supports (color: color-mix(in lab, red, red)) {
                .bg-cyan\/\[0\.06\] {
                    background-color: color-mix(
                        in oklab,
                        var(--color-cyan) 6%,
                        transparent
                    );
                }
            }
        `;

        const result = await processCss(css);

        expect(
            getDeclaration(
                result.css,
                String.raw`.bg-cyan\/\[0\.06\]`,
            ),
        ).toBe('rgba(34, 240, 255, 0.06)');
    });

    it('should support HEX color variables', async () => {
        const css = `
            :root {
                --theme-primary: #ff3ea5;
            }

            .bg-primary {
                background-color: var(--theme-primary);
            }

            @supports (color: color-mix(in lab, red, red)) {
                .bg-primary {
                    background-color: color-mix(
                        in oklab,
                        var(--theme-primary) 20%,
                        transparent
                    );
                }
            }
        `;

        const result = await processCss(css);

        expect(
            getDeclaration(result.css, '.bg-primary'),
        ).toBe('rgba(255, 62, 165, 0.2)');
    });

    it('should support RGB color variables', async () => {
        const css = `
            :root {
                --theme-primary: rgb(34, 240, 255);
            }

            .bg-primary {
                background-color: var(--theme-primary);
            }

            @supports (color: color-mix(in lab, red, red)) {
                .bg-primary {
                    background-color: color-mix(
                        in oklab,
                        var(--theme-primary) 50%,
                        transparent
                    );
                }
            }
        `;

        const result = await processCss(css);

        expect(
            getDeclaration(result.css, '.bg-primary'),
        ).toBe('rgba(34, 240, 255, 0.5)');
    });

    it('should resolve CSS variable aliases', async () => {
        const css = `
            :root {
                --base-color: #22f0ff;
                --theme-primary: var(--base-color);
            }

            .bg-primary {
                background-color: var(--theme-primary);
            }

            @supports (color: color-mix(in lab, red, red)) {
                .bg-primary {
                    background-color: color-mix(
                        in oklab,
                        var(--theme-primary) 25%,
                        transparent
                    );
                }
            }
        `;

        const result = await processCss(css);

        expect(
            getDeclaration(result.css, '.bg-primary'),
        ).toBe('rgba(34, 240, 255, 0.25)');
    });

    it('should preserve the original declaration for unsupported colors', async () => {
        const css = `
            :root {
                --theme-primary: oklch(0.7 0.2 200);
            }

            .bg-primary {
                background-color: var(--theme-primary);
            }

            @supports (color: color-mix(in lab, red, red)) {
                .bg-primary {
                    background-color: color-mix(
                        in oklab,
                        var(--theme-primary) 20%,
                        transparent
                    );
                }
            }
        `;

        const result = await processCss(css);

        expect(
            getDeclaration(result.css, '.bg-primary'),
        ).toBe('var(--theme-primary)');

        expect(result.warnings()).toHaveLength(1);
    });

    it('should preserve ordinary color declarations', async () => {
        const css = `
            .text-primary {
                color: #22f0ff;
            }

            .bg-primary {
                background-color: red;
            }
        `;

        const result = await processCss(css);

        expect(result.css).toContain('color: #22f0ff');
        expect(result.css).toContain('background-color: red');
    });

    it('should preserve original colors without opacity', async () => {
        const css = `
            :root {
                --theme-primary: #22f0ff;
            }

            .bg-primary {
                background-color: var(--theme-primary);
            }
        `;

        const result = await processCss(css);

        expect(
            getDeclaration(result.css, '.bg-primary'),
        ).toBe('var(--theme-primary)');
    });

    it('should respect alpha already present in the source color', async () => {
        const css = `
            :root {
                --theme-primary: #22f0ff80;
            }

            .bg-primary {
                background-color: var(--theme-primary);
            }

            @supports (color: color-mix(in lab, red, red)) {
                .bg-primary {
                    background-color: color-mix(
                        in oklab,
                        var(--theme-primary) 50%,
                        transparent
                    );
                }
            }
        `;

        const result = await processCss(css);

        expect(
            getDeclaration(result.css, '.bg-primary'),
        ).toBe('rgba(34, 240, 255, 0.251)');
    });

    it('should not modify declarations outside the matching scope', async () => {
        const css = `
            :root {
                --theme-primary: #22f0ff;
            }

            @media (min-width: 768px) {
                .bg-primary {
                    background-color: var(--theme-primary);
                }
            }

            @supports (color: color-mix(in lab, red, red)) {
                .bg-primary {
                    background-color: color-mix(
                        in oklab,
                        var(--theme-primary) 20%,
                        transparent
                    );
                }
            }
        `;

        const result = await processCss(css);

        expect(result.css).toContain(
            'background-color: var(--theme-primary)',
        );
    });
});
