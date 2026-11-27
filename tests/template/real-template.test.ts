
import { describe, expect, it } from 'vitest';

import { transformTemplate } from '../../core/engines/template/index.ts';

describe('transformToReact', () => {
    it('should transform the SceneItem template with a custom JSX namespace', () => {
        const source = `
        import './style.css';

        declare namespace JSX {
            interface Element {
                type: unknown;
                props: Record<string, unknown>;
            }

            interface ElementChildrenAttribute {
                children: {};
            }

            interface IntrinsicElements {
                [element: string]: Record<string, unknown>;
            }
        }

        /**
         * coveredOpacity fades only the covered part of the previous SceneItem.
         * This SceneItem stays at opacity 1.
         * coverOffset is the travel of this covering layer (px, vh, or %).
         * Omit either prop to use the value set on Scenes.
         */
        export function Template({
            children,
            id,
            coveredOpacity,
            coverOffset,
        }: {
            children?: JSX.Element;
            id?: string;
            coveredOpacity?: number;
            coverOffset?: number | string;
        }) {
            return (
                <div
                    id={id}
                    className="mkl-scene-item"
                    data-scene-item=""
                    data-covered-opacity={coveredOpacity}
                    data-cover-offset={coverOffset}
                >
                    <div className="mkl-scene-item__panel">
                        {children}
                    </div>
                </div>
            );
        }
    `;

        const result = transformTemplate({
            source,
            fileName: 'scene-item.tsx',
            target: 'react',
        });

        // Transformation
        expect(result.success).toBe(true);
        expect(result.errors).toHaveLength(0);

        // Template analysis
        expect(result.analysis.componentName).toBe('Template');
        expect(result.analysis.declarationKind).toBe('function');
        expect(result.analysis.hasParameter).toBe(true);
        expect(result.analysis.hasCustomProps).toBe(true);
        expect(result.analysis.hasChildren).toBe(true);

        // JSX.Element should become ReactNode
        expect(result.code).toContain('children?: ReactNode');
        expect(result.code).not.toContain('children?: JSX.Element');

        // ReactNode import should be generated
        expect(result.code).toMatch(
            /import type \{ ReactNode \} from ["']react["'];/,
        );

        // Custom JSX namespace should be preserved
        expect(result.code).toContain('declare namespace JSX');
        expect(result.code).toContain('interface Element {');
        expect(result.code).toContain('interface ElementChildrenAttribute');
        expect(result.code).toContain('interface IntrinsicElements');

        // JSX structure and attributes should be preserved
        expect(result.code).toContain('className="mkl-scene-item"');
        expect(result.code).toContain('data-scene-item=""');
        expect(result.code).toContain('data-covered-opacity={coveredOpacity}');
        expect(result.code).toContain('data-cover-offset={coverOffset}');

        // CSS import and documentation should be preserved
        expect(result.code).toContain("import './style.css'");
        expect(result.code).toContain(
            'coveredOpacity fades only the covered part',
        );
    });




});
