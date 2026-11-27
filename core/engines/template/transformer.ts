import {
    Node,
    SyntaxKind,
    type JsxOpeningElement,
    type JsxSelfClosingElement,
    type SourceFile,
    type TypeNode,
} from 'ts-morph';

import type {
    TransformResult,
} from '../../utils/types.ts';



/**
 * Normalize JSX attributes for native HTML elements.
 *
 * - class -> className
 * - label for -> htmlFor
 * - Preserve attributes on React components and Web Components.
 */
/*
JSX Tag
   │
   ▼
Is it a Web Component?
   │
   ├── Yes → Preserve attributes
   │
   ▼
Is it an imported component?
   │
   ├── Yes → Preserve attributes
   │
   ▼
Is it a locally declared component?
   │
   ├── Yes → Preserve attributes
   │
   ▼
Treat as native HTML
   │
   ▼
class → className
for   → htmlFor
*/

const REACT_ATTRIBUTE_MAP: Record<string, string> = {
    // HTML
    class: 'className',

    // SVG presentation attributes
    'accent-height': 'accentHeight',
    'alignment-baseline': 'alignmentBaseline',
    'baseline-shift': 'baselineShift',
    'clip-path': 'clipPath',
    'clip-rule': 'clipRule',
    'color-interpolation': 'colorInterpolation',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'color-profile': 'colorProfile',
    'color-rendering': 'colorRendering',
    'dominant-baseline': 'dominantBaseline',
    'fill-opacity': 'fillOpacity',
    'fill-rule': 'fillRule',
    'flood-color': 'floodColor',
    'flood-opacity': 'floodOpacity',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-size-adjust': 'fontSizeAdjust',
    'font-stretch': 'fontStretch',
    'font-style': 'fontStyle',
    'font-variant': 'fontVariant',
    'font-weight': 'fontWeight',
    'glyph-name': 'glyphName',
    'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
    'glyph-orientation-vertical': 'glyphOrientationVertical',
    'image-rendering': 'imageRendering',
    'letter-spacing': 'letterSpacing',
    'lighting-color': 'lightingColor',
    'marker-end': 'markerEnd',
    'marker-mid': 'markerMid',
    'marker-start': 'markerStart',
    'overline-position': 'overlinePosition',
    'overline-thickness': 'overlineThickness',
    'paint-order': 'paintOrder',
    'panose-1': 'panose1',
    'pointer-events': 'pointerEvents',
    'rendering-intent': 'renderingIntent',
    'shape-rendering': 'shapeRendering',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'strikethrough-position': 'strikethroughPosition',
    'strikethrough-thickness': 'strikethroughThickness',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity',
    'stroke-width': 'strokeWidth',
    'text-anchor': 'textAnchor',
    'text-decoration': 'textDecoration',
    'text-rendering': 'textRendering',
    'transform-origin': 'transformOrigin',
    'underline-position': 'underlinePosition',
    'underline-thickness': 'underlineThickness',
    'unicode-bidi': 'unicodeBidi',
    'unicode-range': 'unicodeRange',
    'units-per-em': 'unitsPerEm',
    'v-alphabetic': 'vAlphabetic',
    'v-hanging': 'vHanging',
    'v-ideographic': 'vIdeographic',
    'v-mathematical': 'vMathematical',
    'vector-effect': 'vectorEffect',
    'vert-adv-y': 'vertAdvY',
    'vert-origin-x': 'vertOriginX',
    'vert-origin-y': 'vertOriginY',
    'word-spacing': 'wordSpacing',
    'writing-mode': 'writingMode',
    'x-height': 'xHeight',

    // SVG / XML attributes
    'xlink:actuate': 'xlinkActuate',
    'xlink:arcrole': 'xlinkArcrole',
    'xlink:href': 'xlinkHref',
    'xlink:role': 'xlinkRole',
    'xlink:show': 'xlinkShow',
    'xlink:title': 'xlinkTitle',
    'xlink:type': 'xlinkType',
    'xml:base': 'xmlBase',
    'xml:lang': 'xmlLang',
    'xml:space': 'xmlSpace',
};

function normalizeJsxAttributes(sourceFile: SourceFile): number {
    const attributes = sourceFile.getDescendantsOfKind(
        SyntaxKind.JsxAttribute,
    );

    let changed = 0;

    for (const attribute of attributes) {
        const openingElement = attribute.getFirstAncestor(
            (node): node is JsxOpeningElement =>
                Node.isJsxOpeningElement(node),
        );

        const selfClosingElement = attribute.getFirstAncestor(
            (node): node is JsxSelfClosingElement =>
                Node.isJsxSelfClosingElement(node),
        );

        const element = openingElement ?? selfClosingElement;

        if (!element) {
            continue;
        }

        const tagName = element.getTagNameNode().getText();

        const isReactComponent = /^[A-Z]/.test(tagName);
        const isWebComponent = tagName.includes('-');

        if (isReactComponent || isWebComponent) {
            continue;
        }

        const nameNode = attribute.getNameNode();
        const name = nameNode.getText();

        let replacement: string | undefined;

        if (name === 'for' && tagName === 'label') {
            replacement = 'htmlFor';
        } else {
            replacement = REACT_ATTRIBUTE_MAP[name];
        }

        if (replacement && replacement !== name) {
            nameNode.replaceWithText(replacement);
            changed++;
        }
    }

    return changed;
}

/**
 * Check whether ReactNode is already imported from React.
 */
function hasReactNodeImport(sourceFile: SourceFile): boolean {
    return sourceFile.getImportDeclarations().some(importDeclaration => {
        if (importDeclaration.getModuleSpecifierValue() !== 'react') {
            return false;
        }

        return importDeclaration.getNamedImports().some(namedImport =>
            namedImport.getName() === 'ReactNode',
        );
    });
}

/**
 * Check whether ReactNode is already declared locally.
 */
function hasLocalReactNodeDeclaration(sourceFile: SourceFile): boolean {
    return sourceFile.getStatements().some(statement => {
        if (
            Node.isInterfaceDeclaration(statement) ||
            Node.isTypeAliasDeclaration(statement)
        ) {
            return statement.getName() === 'ReactNode';
        }

        return false;
    });
}

/**
 * Add ReactNode to an existing React import or create a new import.
 */
function addReactNodeImport(sourceFile: SourceFile): void {
    if (
        hasReactNodeImport(sourceFile) ||
        hasLocalReactNodeDeclaration(sourceFile)
    ) {
        return;
    }

    const existingReactImport = sourceFile.getImportDeclaration(
        declaration => declaration.getModuleSpecifierValue() === 'react',
    );

    if (existingReactImport) {
        existingReactImport.addNamedImport({
            name: 'ReactNode',
            isTypeOnly: true,
        });

        return;
    }

    sourceFile.addImportDeclaration({
        isTypeOnly: true,
        namedImports: ['ReactNode'],
        moduleSpecifier: 'react',
    });
}

/**
 * Get the first parameter from the Template component.
 */
function getTemplateParameter(sourceFile: SourceFile) {
    const variable = sourceFile.getVariableDeclaration('Template');

    if (variable) {
        const initializer = variable.getInitializer();

        if (
            Node.isArrowFunction(initializer) ||
            Node.isFunctionExpression(initializer)
        ) {
            return initializer.getParameters()[0];
        }
    }

    return sourceFile.getFunction('Template')?.getParameters()[0];
}

/**
 * Get the JSX.Element type references inside a type node.
 */
function getTypeReferences(typeNode: TypeNode) {
    const references = [
        ...(Node.isTypeReference(typeNode) ? [typeNode] : []),
        ...typeNode.getDescendantsOfKind(SyntaxKind.TypeReference),
    ];

    return references;
}

/**
 * Collect JSX.Element references from the Template Props type.
 *
 * Follow referenced interfaces and type aliases recursively.
 */
function collectPropsElementReferences(
    sourceFile: SourceFile,
    propsType: TypeNode,
) {
    const visitedDeclarations = new Set<Node>();
    const references = new Set<Node>();

    function visitTypeNode(typeNode: TypeNode): void {
        for (const reference of getTypeReferences(typeNode)) {
            const typeName = reference.getTypeName().getText();

            if (typeName === 'JSX.Element') {
                references.add(reference);
                continue;
            }

            // Follow generic type arguments.
            for (const argument of reference.getTypeArguments()) {
                visitTypeNode(argument);
            }

            // Resolve referenced interfaces and type aliases.
            const symbol = reference.getTypeName().getSymbol();

            if (!symbol) continue;

            for (const declaration of symbol.getDeclarations()) {
                visitDeclaration(declaration);
            }
        }
    }

    function visitDeclaration(declaration: Node): void {
        if (declaration.getSourceFile() !== sourceFile) {
            return;
        }

        if (visitedDeclarations.has(declaration)) {
            return;
        }

        visitedDeclarations.add(declaration);

        if (Node.isTypeAliasDeclaration(declaration)) {
            const typeNode = declaration.getTypeNode();

            if (!typeNode) return;

            // Preserve standalone JSX.Element aliases.
            if (
                Node.isTypeReference(typeNode) &&
                typeNode.getTypeName().getText() === 'JSX.Element'
            ) {
                return;
            }

            visitTypeNode(typeNode);
            return;
        }

        if (Node.isInterfaceDeclaration(declaration)) {
            for (const member of declaration.getMembers()) {
                if (Node.isPropertySignature(member)) {
                    const typeNode = member.getTypeNode();

                    if (typeNode) {
                        visitTypeNode(typeNode);
                    }
                } else if (
                    Node.isMethodSignature(member) ||
                    Node.isCallSignatureDeclaration(member) ||
                    Node.isConstructSignatureDeclaration(member)
                ) {
                    for (const parameter of member.getParameters()) {
                        const typeNode = parameter.getTypeNode();

                        if (typeNode) {
                            visitTypeNode(typeNode);
                        }
                    }

                    const returnType = member.getReturnTypeNode();

                    if (returnType) {
                        visitTypeNode(returnType);
                    }
                } else if (Node.isIndexSignatureDeclaration(member)) {
                    const returnType = member.getReturnTypeNode();

                    if (returnType) {
                        visitTypeNode(returnType);
                    }
                }
            }
        }
    }

    // The Props type itself may be a type reference.
    visitTypeNode(propsType);

    return [...references];
}


/**
 * Normalize JSX children types for React.
 *
 * Detects type aliases containing JSX.Element combined with
 * React-renderable primitive types and arrays, then replaces
 * their references with ReactNode.
 */
/*

declare namespace JSX {
    interface Element {
        type: unknown;
        props: Record<string, unknown>;
    }
}

type MakelierChildren = string | JSX.Element | Array<string | JSX.Element>;

export const PricingLine = (props: {
    premium?: boolean;
    children?: MakelierChildren;
}) => (
    <span>{props.children}</span>
);

=======>

import type { ReactNode } from 'react';

export const PricingLine = (props: {
    premium?: boolean;
    children?: ReactNode;
}) => (
    <span>{props.children}</span>
);
*/


function normalizeJsxTypes(sourceFile: SourceFile): void {
    const isJsxElementType = (type: TypeNode): boolean => {
        if (Node.isParenthesizedTypeNode(type)) {
            return isJsxElementType(type.getTypeNode());
        }

        return (
            Node.isTypeReference(type) &&
            type.getTypeName().getText() === 'JSX.Element'
        );
    };

    const containsJsxElement = (type: TypeNode): boolean => {
        if (isJsxElementType(type)) {
            return true;
        }

        if (Node.isParenthesizedTypeNode(type)) {
            return containsJsxElement(type.getTypeNode());
        }

        if (Node.isArrayTypeNode(type)) {
            return containsJsxElement(type.getElementTypeNode());
        }

        if (Node.isUnionTypeNode(type)) {
            return type.getTypeNodes().some(containsJsxElement);
        }

        if (Node.isTypeReference(type)) {
            const name = type.getTypeName().getText();
            const args = type.getTypeArguments();

            return (
                name === 'Array' &&
                args.length === 1 &&
                args[0] !== undefined &&
                containsJsxElement(args[0])
            );
        }

        return false;
    };

    const isChildrenType = (type: TypeNode): boolean => {
        if (Node.isParenthesizedTypeNode(type)) {
            return isChildrenType(type.getTypeNode());
        }

        if (!Node.isUnionTypeNode(type)) {
            return false;
        }

        const members = type.getTypeNodes();

        return (
            members.length > 1 &&
            members.some(containsJsxElement) &&
            members.every(isChildrenMember)
        );
    };


    const isChildrenMember = (type: TypeNode): boolean => {
        if (Node.isParenthesizedTypeNode(type)) {
            return isChildrenMember(type.getTypeNode());
        }

        if (Node.isUnionTypeNode(type)) {
            return type.getTypeNodes().every(isChildrenMember);
        }

        if (isJsxElementType(type)) {
            return true;
        }

        if (Node.isArrayTypeNode(type)) {
            return isChildrenMember(type.getElementTypeNode());
        }

        if (Node.isTypeReference(type)) {
            const name = type.getTypeName().getText();

            if (name === 'Array') {
                const args = type.getTypeArguments();

                return args.length === 1 &&
                    args[0] !== undefined &&
                    isChildrenMember(args[0]);
            }

            return false;
        }

        return [
            SyntaxKind.StringKeyword,
            SyntaxKind.NumberKeyword,
            SyntaxKind.BooleanKeyword,
            SyntaxKind.NullKeyword,
            SyntaxKind.UndefinedKeyword,
        ].includes(type.getKind());
    };


    const childrenTypes = sourceFile
        .getTypeAliases()
        .filter((declaration) => {
            const typeNode = declaration.getTypeNode();

            return typeNode !== undefined && isChildrenType(typeNode);
        });

        // const allAliases = sourceFile.getTypeAliases();

        // console.log(
        //     '[Makelier] Type aliases:',
        //     allAliases.map((declaration) => {
        //         const typeNode = declaration.getTypeNode();

        //         return {
        //             name: declaration.getName(),
        //             kind: typeNode?.getKindName() ?? 'undefined',
        //             text: typeNode?.getText() ?? '',
        //             isChildren: typeNode ? isChildrenType(typeNode) : false,
        //         };
        //     }),
        // );

    if (childrenTypes.length === 0) {
        return;
    }

    // console.log(
    //     '[Makelier] Before replacement:',
    //     sourceFile.getFullText(),
    // );

    const childrenTypeNames = new Set(
        childrenTypes.map((declaration) => declaration.getName()),
    );

    // Replace references to children aliases.
    for (const typeReference of sourceFile.getDescendantsOfKind(
        SyntaxKind.TypeReference,
    )) {
        const typeName = typeReference.getTypeName().getText();

        if (childrenTypeNames.has(typeName)) {
            typeReference.replaceWithText('ReactNode');
        }
    }


    // Remove the original aliases.
    for (const declaration of childrenTypes) {
        declaration.remove();
    }

    // Ensure ReactNode is imported.
    const reactImports = sourceFile
        .getImportDeclarations()
        .filter((declaration) =>
            declaration.getModuleSpecifierValue() === 'react',
        );

    const hasReactNode = reactImports.some((declaration) =>
        declaration.getNamedImports().some(
            (item) =>
                item.getName() === 'ReactNode' ||
                item.getAliasNode()?.getText() === 'ReactNode',
        ),
    );

    if (!hasReactNode) {
        const existingImport = reactImports[0];

        if (existingImport) {
            existingImport.addNamedImport({
                name: 'ReactNode',
                isTypeOnly: true,
            });
        } else {
            sourceFile.addImportDeclaration({
                moduleSpecifier: 'react',
                namedImports: [{
                    name: 'ReactNode',
                    isTypeOnly: true,
                }],
            });
        }
    }
}



/**
 * Transform JSX.Element references inside Template Props.
 */
export function transformToReact(
    sourceFile: SourceFile,
): TransformResult {
    normalizeJsxTypes(sourceFile);

    const normalizedAttributes = normalizeJsxAttributes(sourceFile);

    const parameter = getTemplateParameter(sourceFile);
    const propsType = parameter?.getTypeNode();

    let references: Node[] = [];

    if (propsType) {
        references = collectPropsElementReferences(
            sourceFile,
            propsType,
        );
    } else {
        const propsDeclaration = sourceFile.getInterface('Props');
        const propsTypeAlias = sourceFile.getTypeAlias('Props');

        const fallbackType = propsTypeAlias?.getTypeNode()
            ?? propsDeclaration?.getProperties()
                .map(property => property.getTypeNode())
                .filter((type): type is TypeNode => type !== undefined);

        references = fallbackType
            ? Array.isArray(fallbackType)
                ? fallbackType.flatMap(type =>
                    collectPropsElementReferences(sourceFile, type),
                )
                : collectPropsElementReferences(sourceFile, fallbackType)
            : [];
    }

    for (const reference of references) {
        reference.replaceWithText('ReactNode');
    }

    if (references.length > 0) {
        addReactNodeImport(sourceFile);
    }

    return {
        code: sourceFile.getFullText(),
        changed: normalizedAttributes > 0 || references.length > 0,
        replacedElementTypes: references.length,
    };
}