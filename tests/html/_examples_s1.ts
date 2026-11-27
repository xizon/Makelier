/*
TEST：

npx tsx tests/html/_examples_s1.ts
*/

import { parseHtml } from '../../core/engines/html-formatter/index.ts';

const html = `
<div class="container">
    <a href="/about">About</a>
    <svg viewBox="0 0 100 100">
        <g transform="translate(10, 10)">
            <path d="M0 0 L10 10"></path>
        </g>
    </svg>
</div>
`;

const ast = parseHtml(html, {
    documentMode: 'fragment'
});


function inspect(node: any, depth = 0) {
    const indent = '  '.repeat(depth);

    if (node.tagName) {
        console.log(
            `${indent}<${node.tagName}>`,
            `namespace: ${node.namespaceURI}`
        );

        if (node.attrs?.length) {
            for (const attr of node.attrs) {
                console.log(
                    `${indent}  @${attr.name}="${attr.value}"`
                );
            }
        }
    } else if (node.nodeName === '#text') {
        console.log(
            `${indent}TEXT:`,
            JSON.stringify(node.value)
        );
    } else {
        console.log(`${indent}${node.nodeName}`);
    }

    if (node.childNodes) {
        for (const child of node.childNodes) {
            inspect(child, depth + 1);
        }
    }
}

inspect(ast);
