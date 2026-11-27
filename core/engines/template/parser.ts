
import path from 'node:path';

import {
    Project,
    ScriptTarget,
    type SourceFile,
} from 'ts-morph';

import type {
    ParseTemplateOptions,
    ParsedTemplate,
} from '../../utils/types.ts';

/**
 * Create a ts-morph project.
 */
function createProject(options: ParseTemplateOptions): Project {
    if (options.tsConfigFilePath) {
        return new Project({
            tsConfigFilePath: path.resolve(options.tsConfigFilePath),
            skipAddingFilesFromTsConfig: false,
        });
    }

    return new Project({
        compilerOptions: {
            target: ScriptTarget.ESNext,
            jsx: 1, // JsxEmit.Preserve
            allowJs: false,
            noEmit: true,
            strict: true,
        },
        useInMemoryFileSystem: true,
    });
}

/**
 * Resolve the template file path.
 */
function resolveTemplatePath(
    options: ParseTemplateOptions,
): string {
    if (!options.tsConfigFilePath) {
        return options.fileName ?? '/__makelier__/template.tsx';
    }

    const projectDirectory = path.dirname(
        path.resolve(options.tsConfigFilePath),
    );

    const fileName = options.fileName ?? '__makelier__/template.tsx';

    return path.isAbsolute(fileName)
        ? fileName
        : path.resolve(projectDirectory, fileName);
}

/**
 * Parse a TSX template.
 */
export function parseTemplate(
    options: ParseTemplateOptions,
): ParsedTemplate {
    const project = createProject(options);
    const fileName = resolveTemplatePath(options);

    let sourceFile: SourceFile | undefined =
        project.getSourceFile(fileName);

    if (sourceFile) {
        sourceFile.replaceWithText(options.source);
    } else {
        sourceFile = project.createSourceFile(
            fileName,
            options.source,
            {
                overwrite: true,
            },
        );
    }

    return {
        project,
        sourceFile,
    };
}
