
import { describe, expect, it } from 'vitest';

import { parseTemplate } from '../../core/engines/template/parser.ts';
import { analyzeTemplate } from '../../core/engines/template/analyzer.ts';

describe('analyzeTemplate', () => {
    it('should identify a function Template', () => {
        const { sourceFile } = parseTemplate({
            source: `
                function Template() {
                    return <div>Hello</div>;
                }
            `,
        });

        const result = analyzeTemplate(sourceFile);

        expect(result.componentName).toBe('Template');
        expect(result.declarationKind).toBe('function');
        expect(result.hasParameter).toBe(false);
    });

    it('should identify an arrow function Template', () => {
        const { sourceFile } = parseTemplate({
            source: `
                const Template = ({ title }: { title: string }) => {
                    return <h1>{title}</h1>;
                };
            `,
        });

        const result = analyzeTemplate(sourceFile);

        expect(result.componentName).toBe('Template');
        expect(result.declarationKind).toBe('variable');
        expect(result.hasParameter).toBe(true);
        expect(result.hasCustomProps).toBe(true);
    });

    it('should detect children in props', () => {
        const { sourceFile } = parseTemplate({
            source: `
                interface Props {
                    title: string;
                    children: string;
                }

                function Template({ title, children }: Props) {
                    return <div>{title}{children}</div>;
                }
            `,
        });

        const result = analyzeTemplate(sourceFile);

        expect(result.hasChildren).toBe(true);
        expect(result.hasCustomProps).toBe(true);
        expect(result.propsType).toBe('Props');
        expect(result.childrenType).toBe('string');
    });
});
