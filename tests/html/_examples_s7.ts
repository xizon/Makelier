/*
TEST：

npx tsx tests/html/_examples_s7.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';

const boundaryCases = `
<div>
    <span>Hello</span>
</div>

<div>
    <span>Hello</span>
    <span>World</span>
</div>

<p>
    Hello
    <strong>World</strong>
</p>

<p><strong>Hello</strong> <strong>World</strong></p>

<p> Hello </p>

<div>   </div>
`;

const ast = parseHtml(boundaryCases, {
    documentMode: 'fragment'
});

console.log(
    printHtml(ast, {
        preserveWhitespace: false
    })
);