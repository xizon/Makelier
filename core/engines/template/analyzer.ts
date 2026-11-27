
import {
    Node,
    SyntaxKind,
    type SourceFile,
    type Type,
    type ParameterDeclaration,
} from 'ts-morph';

import type {
    TemplateAnalysis,
} from '../../utils/types.ts';

function findTemplateDeclaration(sourceFile: SourceFile) {
    const variable = sourceFile.getVariableDeclaration('Template');

    if (variable) {
        return {
            declaration: variable,
            kind: 'variable' as const,
        };
    }

    const fn = sourceFile.getFunction('Template');

    if (fn) {
        return {
            declaration: fn,
            kind: 'function' as const,
        };
    }

    return {
        declaration: undefined,
        kind: null,
    };
}

/**
 * Get the first parameter from a Template declaration.
 */
function getTemplateParameter(
    declaration: ReturnType<typeof findTemplateDeclaration>['declaration'],
): ParameterDeclaration | undefined {
    if (!declaration) return undefined;

    if (Node.isFunctionDeclaration(declaration)) {
        return declaration.getParameters()[0];
    }

    if (Node.isVariableDeclaration(declaration)) {
        const initializer = declaration.getInitializer();

        if (
            Node.isArrowFunction(initializer) ||
            Node.isFunctionExpression(initializer)
        ) {
            return initializer.getParameters()[0];
        }
    }

    return undefined;
}

function typeNameFromParameter(
    parameter: ParameterDeclaration | undefined,
): string | null {
    return parameter?.getTypeNode()?.getText() ?? null;
}

function hasChildrenProperty(type: Type): boolean {
    return type.getProperties().some(
        property => property.getName() === 'children',
    );
}

function getChildrenType(type: Type): string | null {
    const property = type.getProperty('children');

    if (!property) return null;

    const declaration = property.getDeclarations()[0];

    if (!declaration) return null;

    return declaration.getType().getText(declaration);
}

export function analyzeTemplate(
    sourceFile: SourceFile,
): TemplateAnalysis {
    const found = findTemplateDeclaration(sourceFile);

    const declaration = found.declaration;
    const parameter = getTemplateParameter(declaration);

    let propsType: string | null = null;
    let hasChildren = false;
    let hasCustomProps = false;
    let childrenType: string | null = null;

    if (parameter) {
        propsType = typeNameFromParameter(parameter);
        hasCustomProps = Boolean(parameter.getTypeNode());

        const parameterType = parameter.getType();

        hasChildren = hasChildrenProperty(parameterType);
        childrenType = getChildrenType(parameterType);

        const parameterName = parameter.getNameNode();

        if (Node.isObjectBindingPattern(parameterName)) {
            const bindings = parameterName.getElements();

            const destructuresChildren = bindings.some(element => {
                const name = element.getNameNode();

                return (
                    Node.isIdentifier(name) &&
                    name.getText() === 'children'
                );
            });

            hasChildren ||= destructuresChildren;

            hasCustomProps ||= bindings.some(element => {
                const name = element.getNameNode();

                return (
                    Node.isIdentifier(name) &&
                    name.getText() !== 'children'
                );
            });
        }
    }

    const jsxNamespaceDeclarations = sourceFile
        .getDescendantsOfKind(SyntaxKind.ModuleDeclaration)
        .filter(node => node.getName() === 'JSX')
        .length;

    const jsxElementTypeReferences = sourceFile
        .getDescendantsOfKind(SyntaxKind.TypeReference)
        .filter(node =>
            node.getTypeName().getText() === 'JSX.Element',
        ).length;

    return {
        componentName: declaration ? 'Template' : null,
        declarationKind: found.kind,
        propsType,
        hasParameter: Boolean(parameter),
        hasCustomProps,
        hasChildren,
        childrenType,
        jsxNamespaceDeclarations,
        jsxElementTypeReferences,
    };
}
