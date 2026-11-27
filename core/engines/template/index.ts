
/**
 * Template Engine
 *
 * Required dependency: "ts-morph"
 *
 * Pipeline:
 *
 * template.tsx
 *     │
 *     ▼
 *   Parser
 *     │
 *     ▼
 *  Analyzer
 *     │
 *     ├── Template Component
 *     ├── Props
 *     ├── Children
 *     ├── Type References
 *     └── JSX Declarations
 *     │
 *     ▼
 * Structural Validation
 *     │
 *     ▼
 * Transformer
 *     │
 *     ├── Convert JSX.Element → ReactNode
 *     ├── Add ReactNode type import when needed
 *     ├── Preserve Custom Props
 *     └── Preserve Existing Imports
 *     │
 *     ▼
 *  Validator (optional TypeScript diagnostics)
 *     │
 *     ▼
 * React template.tsx
 */



import { parseTemplate } from './parser.ts';
import { analyzeTemplate } from './analyzer.ts';
import { transformToReact } from './transformer.ts';

import type {
    TemplateDiagnostic,
    TransformTemplateOptions,
    TransformTemplateResult,
    TemplateAnalysis
} from '../../utils/types.ts';

import {
    validateSyntax,
    validateTemplate,
} from './validator.ts';

export type { 
    ParsedTemplate, 
    TransformResult 
} from '../../utils/types.ts';



/**
 * Create a template diagnostic.
 */
function createDiagnostic(
    message: string,
    fileName?: string,
): TemplateDiagnostic {
    return {
        message,
        fileName,
    };
}

/**
 * Create an empty template analysis result.
 */
function createEmptyAnalysis(): TemplateAnalysis {
    return {
        componentName: null,
        declarationKind: null,
        propsType: null,
        hasParameter: false,
        hasCustomProps: false,
        hasChildren: false,
        childrenType: null,
        jsxNamespaceDeclarations: 0,
        jsxElementTypeReferences: 0,
    };
}

/**
 * Transform a template into a target framework.
 *
 * Always returns TransformTemplateResult.
 */
export function transformTemplate(
    options: TransformTemplateOptions,
): TransformTemplateResult {
    const warnings: TemplateDiagnostic[] = [];
    const errors: TemplateDiagnostic[] = [];

    let analysis = createEmptyAnalysis();

    try {
        const { project, sourceFile } = parseTemplate(options);

        analysis = analyzeTemplate(sourceFile);


        // Always validate TSX syntax.
        errors.push(...validateSyntax(project, sourceFile));

        if (errors.length > 0) {
            return {
                success: false,
                code: options.source,
                analysis,
                warnings,
                errors,
            };
        }

        // Validate template declaration.
        if (!analysis.componentName) {
            errors.push(
                createDiagnostic(
                    'Could not find a top-level Template component declaration.',
                    options.fileName,
                ),
            );
        }

        // Validate target.
        if (options.target !== 'react') {
            errors.push(
                createDiagnostic(
                    `Unsupported target: ${options.target}`,
                    options.fileName,
                ),
            );
        }

        // Stop transformation when structural validation fails.
        if (errors.length > 0) {
            return {
                success: false,
                code: options.source,
                analysis,
                warnings,
                errors,
            };
        }

        // Transform source.
        const transformed = transformToReact(sourceFile);

        if (transformed.replacedElementTypes > 0) {
            warnings.push(
                createDiagnostic(
                    `Converted ${transformed.replacedElementTypes} JSX.Element type reference(s) to ReactNode.`,
                    options.fileName,
                ),
            );
        }

        // Run TypeScript diagnostics only when a tsconfig is provided.
        if (options.tsConfigFilePath) {
            errors.push(...validateTemplate(project, sourceFile));
        }

        return {
            success: errors.length === 0,
            code: transformed.code,
            analysis,
            warnings,
            errors,
        };
    } catch (error) {
        const message =
            error instanceof Error
                ? error.message
                : String(error);

        errors.push(
            createDiagnostic(
                `Template transformation failed: ${message}`,
                options.fileName,
            ),
        );

        return {
            success: false,
            code: options.source,
            analysis,
            warnings,
            errors,
        };
    }
}