/*
TEST：

npx tsx tests/html/_examples_s6.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';

const edgeCases = `
<p>
    Hello
    <strong>World</strong>
    !
</p>

<div>
    <span>Hello</span>
    <span>World</span>
</div>

<p>Hello
World</p>

<p>Hello
    <strong>World</strong></p>
`;

for (const preserveWhitespace of [true, false]) {
    const ast = parseHtml(edgeCases, {
        documentMode: 'fragment'
    });

    console.log(`\n--- edge cases: ${preserveWhitespace} ---`);

    console.log(
        printHtml(ast, {
            preserveWhitespace
        })
    );
}