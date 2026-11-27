/*
TEST：

npx tsx tests/template/_examples_s1.ts
*/

import { Project, SyntaxKind } from 'ts-morph';

const project = new Project({
    useInMemoryFileSystem: true,
});

const sourceFile = project.createSourceFile(
    'test.tsx',
    'const Template = () => <div>Hello</div>;',
);

const template = sourceFile.getVariableDeclaration('Template');

console.log('Parsed:', template?.getName());
console.log('Initializer:', template?.getInitializer()?.getKindName());

console.log(
    'JSX Elements:',
    sourceFile.getDescendantsOfKind(SyntaxKind.JsxOpeningElement).length,
);
