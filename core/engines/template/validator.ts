import type {
    Project,
    SourceFile,
    Diagnostic,
} from 'ts-morph';

import type {
    TemplateDiagnostic,
} from '../../utils/types.ts';

/**
 * Convert a ts-morph diagnostic into a template diagnostic.
 */
function formatDiagnostic(
    diagnostic: Diagnostic,
): TemplateDiagnostic {
    const sourceFile = diagnostic.getSourceFile();
    const start = diagnostic.getStart();

    const position =
        sourceFile && start !== undefined
            ? sourceFile.getLineAndColumnAtPos(start)
            : undefined;

    const message = diagnostic.getMessageText();

    return {
        message:
            typeof message === 'string'
                ? message
                : message.getMessageText(),
        fileName: sourceFile?.getFilePath(),
        line: position?.line,
        column: position?.column,
    };
}

/**
 * Validate TSX syntax.
 */
export function validateSyntax(
    project: Project,
    sourceFile: SourceFile,
): TemplateDiagnostic[] {
    const diagnostics = project.getPreEmitDiagnostics();

    return diagnostics
        .filter(diagnostic => {
            const file = diagnostic.getSourceFile();

            return (
                file?.getFilePath() === sourceFile.getFilePath() &&
                diagnostic.getCode() >= 1000 &&
                diagnostic.getCode() < 2000
            );
        })
        .map(formatDiagnostic);
}

/**
 * Validate TypeScript types.
 */
export function validateTemplate(
    project: Project,
    sourceFile: SourceFile,
): TemplateDiagnostic[] {
    const filePath = sourceFile.getFilePath();

    return project
        .getPreEmitDiagnostics()
        .filter(
            diagnostic =>
                diagnostic.getSourceFile()?.getFilePath() === filePath,
        )
        .map(formatDiagnostic);
}