
import {
    Node,
    type SourceFile,
    type Type,
    type ParameterDeclaration,
} from 'ts-morph';

import type {
    BlockAttributeConfig,
    BlockConfig,
} from '../../utils/types.ts';

const MAX_DEPTH = 5;

/**
 * Get Boolean Literal Union
 */
function getBooleanLiteralUnion(
    declaration: Node,
): boolean[] | null {
    if (!Node.isPropertySignature(declaration)) return null;

    const typeNode = declaration.getTypeNode();
    if (!typeNode || !Node.isUnionTypeNode(typeNode)) return null;

    const values = typeNode.getTypeNodes().map(node => {
        const text = node.getText().trim();

        if (text === 'true') return true;
        if (text === 'false') return false;

        return null;
    });

    if (
        values.length === 2 &&
        values.includes(true) &&
        values.includes(false)
    ) {
        return values as boolean[];
    }

    return null;
}

/**
 * Find the top-level Template declaration.
 */
function findTemplateDeclaration(sourceFile: SourceFile) {
    const variable = sourceFile.getVariableDeclaration('Template');

    if (variable) {
        return variable;
    }

    return sourceFile.getFunction('Template');
}

/**
 * Get the first parameter from a Template declaration.
 */
function getTemplateParameter(
    declaration: ReturnType<typeof findTemplateDeclaration>,
): ParameterDeclaration | undefined {
    if (!declaration) return undefined;

    if (Node.isFunctionDeclaration(declaration)) {
        return declaration.getParameters()[0];
    }

    if (Node.isVariableDeclaration(declaration)) {
        const initializer = declaration.getInitializer();

        if (
            initializer &&
            (
                Node.isArrowFunction(initializer) ||
                Node.isFunctionExpression(initializer)
            )
        ) {
            return initializer.getParameters()[0];
        }
    }

    return undefined;
}

/**
 * Check whether a type should be excluded from block attributes.
 */
function isUnsupportedType(type: Type): boolean {
    if (
        type.isAny() ||
        type.isUnknown() ||
        type.isNever() ||
        type.isVoid() ||
        type.isNull() ||
        type.isUndefined()
    ) {
        return true;
    }

    const symbolName = (
        type.getAliasSymbol()?.getName() ??
        type.getSymbol()?.getName()
    );

    return (
        symbolName === 'Element' ||
        symbolName === 'ReactNode' ||
        symbolName === 'ReactElement' ||
        symbolName === 'Function'
    );
}

/**
 * Get a supported primitive type.
 */
function getPrimitiveType(
    type: Type,
): 'string' | 'number' | 'boolean' | null {
    if (type.isString() || type.isStringLiteral()) {
        return 'string';
    }

    if (type.isNumber() || type.isNumberLiteral()) {
        return 'number';
    }

    if (type.isBoolean() || type.isBooleanLiteral()) {
        return 'boolean';
    }

    return null;
}

/**
 * Get a literal value from a TypeScript literal type.
 */
function getLiteralValue(
    type: Type,
): string | number | boolean | null {
    if (type.isStringLiteral()) {
        return type.getLiteralValue() as string;
    }

    if (type.isNumberLiteral()) {
        return type.getLiteralValue() as number;
    }

    if (type.isBooleanLiteral()) {
        return type.getText() === 'true';
    }

    return null;
}


/**
 * Resolve a union into its supported attribute types.
 *
 * Unsupported members are ignored.
 */
/**
 * Resolve a union into its supported attribute types.
 *
 * Literal unions become enum attributes.
 * Other unions retain their primitive type information.
 */
function resolveUnion(
    type: Type,
    depth: number,
    visited: Set<Type>,
): BlockAttributeConfig | null {

    const members = type.getUnionTypes()
        .filter(member => !isUnsupportedType(member));

    if (members.length === 0) return null;

    // A regular boolean should not become an enum.
    const isBooleanUnion = members.every(member => (
        member.isBooleanLiteral()
    ));

    if (isBooleanUnion && members.length === 2) {
        const values = members.map(member => member.getText() === 'true');

        if (values.includes(true) && values.includes(false)) {
            return { type: 'boolean' };
        }
    }

    if (members.length === 0) return null;

    // Check whether all members are literals of the same primitive type.
    const literalValues = members.map(member => ({
        type: getPrimitiveType(member),
        value: getLiteralValue(member),
    }));

    const firstType = literalValues[0]?.type;

    const isLiteralUnion = (
        firstType !== null &&
        firstType !== undefined &&
        literalValues.every(item => (
            item.type === firstType &&
            item.value !== null
        ))
    );


    
    if (isLiteralUnion) {
        return {
            type: firstType,
            enum: [
                ...new Set(
                    literalValues.map(item => item.value as string | number | boolean),
                ),
            ],
        };
    }

    // Handle ordinary unions.
    const types = members
        .map(member => resolveAttributeType(
            member,
            depth,
            visited,
        ))
        .filter(
            (item): item is BlockAttributeConfig => item !== null,
        );

    if (types.length === 0) return null;

    const uniqueTypes = new Map<string, BlockAttributeConfig>();

    for (const item of types) {
        uniqueTypes.set(JSON.stringify(item), item);
    }

    const unique = [...uniqueTypes.values()];

    if (unique.length === 1) {
        return unique[0];
    }

    const primitiveTypes = unique.map(item => item.type);

    if (
        primitiveTypes.every(
            item => (
                item === 'string' ||
                item === 'number' ||
                item === 'boolean'
            ),
        )
    ) {
        return {
            type: [...new Set(primitiveTypes.flat())] as (
                'string' | 'number' | 'boolean'
            )[],
        };
    }

    return null;
}

/**
 * Check whether a type represents a plain object.
 */
function isPlainObjectType(type: Type): boolean {
    return type.getProperties().some(property => {
        const declaration = property.getDeclarations()[0];

        return (
            declaration !== undefined &&
            (
                Node.isPropertySignature(declaration) ||
                Node.isPropertyDeclaration(declaration)
            )
        );
    });
}

/**
 * Resolve an object type into serializable properties.
 */
function resolveObjectType(
    type: Type,
    depth: number,
    visited: Set<Type>,
): BlockAttributeConfig | null {
    if (depth >= MAX_DEPTH || visited.has(type)) {
        return null;
    }

    if (!isPlainObjectType(type)) {
        return null;
    }

    const nextVisited = new Set(visited);
    nextVisited.add(type);

    const properties: Record<string, BlockAttributeConfig> = {};

    for (const property of type.getProperties()) {
        const name = property.getName();

        if (name === 'children') continue;

        const declaration = property.getDeclarations()[0];

        if (
            !declaration ||
            !(
                Node.isPropertySignature(declaration) ||
                Node.isPropertyDeclaration(declaration)
            )
        ) {
            continue;
        }

        const propertyType = declaration.getType();

        // 
        const booleanEnum = getBooleanLiteralUnion(declaration);

        const config = booleanEnum
            ? {
                type: 'boolean' as const,
                enum: booleanEnum,
            }
            : resolveAttributeType(
                propertyType,
                depth + 1,
                nextVisited,
            );

        if (!config) continue;

        if (property.isOptional()) {
            config.optional = true;
        }

        properties[name] = config;
    }

    if (Object.keys(properties).length === 0) {
        return null;
    }

    return {
        type: 'object',
        properties,
    };
}

/**
 * Resolve a TypeScript type into a block attribute configuration.
 */
function resolveAttributeType(
    type: Type,
    depth = 0,
    visited = new Set<Type>(),
): BlockAttributeConfig | null {
    if (isUnsupportedType(type)) {
        return null;
    }

    if (type.isUnion()) {
        return resolveUnion(type, depth, visited);
    }

    const primitiveType = getPrimitiveType(type);

    if (primitiveType) {
        return {
            type: primitiveType,
        };
    }

    if (type.isArray()) {
        const elementType = type.getArrayElementType();

        if (!elementType) return null;

        const itemConfig = resolveAttributeType(
            elementType,
            depth + 1,
            visited,
        );

        if (!itemConfig) return null;

        return {
            type: 'array',
            items: itemConfig,
        };
    }

    if (type.isObject()) {
        return resolveObjectType(type, depth, visited);
    }

    return null;
}

/**
 * Analyze serializable Template props for block configuration.
 */
export function analyzeBlockConfig(
    sourceFile: SourceFile,
    componentName: string,
): BlockConfig {
    const declaration = findTemplateDeclaration(sourceFile);
    const parameter = getTemplateParameter(declaration);

    const attributes: Record<string, BlockAttributeConfig> = {};

    if (!parameter) {
        return {
            name: componentName,
            attributes,
        };
    }

    const propsType = parameter.getType();

    for (const property of propsType.getProperties()) {
        const name = property.getName();

        // HTML content
        if (name === 'children') {
            attributes.children = {
                type: 'html',
                ...(property.isOptional() && {
                    optional: true,
                }),
            };

            continue;
        }
        /*
        if (name === 'children') {
            attributes.children = {
                type: 'textarea',
                ...(property.isOptional() && {
                    optional: true,
                }),
            };

            continue;
        }
        */

        const propertyDeclaration = property.getDeclarations()[0];

        if (!propertyDeclaration) continue;

        //
        const booleanEnum = getBooleanLiteralUnion(propertyDeclaration);

        const config = booleanEnum
            ? {
                type: 'boolean' as const,
                enum: booleanEnum,
            }
            : resolveAttributeType(
                property.getTypeAtLocation(propertyDeclaration),
            );

        if (!config) continue;

        if (property.isOptional()) {
            config.optional = true;
        }

        attributes[name] = config;
    }

    return {
        name: componentName,
        attributes,
    };
}
