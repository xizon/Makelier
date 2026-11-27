/*
TEST：

npx tsx tests/html/_examples_s12.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const examples = [
    {
        title: '1. Consecutive BR Elements',
        html: `
<br><br>
<br><br><br>
        `
    },
    {
        title: '2. BR Elements inside Paragraph',
        html: `
<p>Hello<br><br>World</p>
<p>Line 1<br>Line 2<br>Line 3</p>
        `
    },
    {
        title: '3. BR Elements with Inline Elements',
        html: `
<p>
    Hello <strong>World</strong><br>
    <span>Another line</span><br><br>
    <em>Last line</em>
</p>
        `
    },
    {
        title: '4. Custom Elements',
        html: `
<my-card>
    <span>Hello</span>
    <span>World</span>
</my-card>
        `
    },
    {
        title: '5. Nested Custom Elements',
        html: `
<my-page>
    <my-header>
        <span>Logo</span>
        <my-menu>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </my-menu>
    </my-header>
    <my-content>
        <p>Hello World</p>
    </my-content>
</my-page>
        `
    },
    {
        title: '6. Custom Elements with Attributes',
        html: `
<my-button
    type="primary"
    disabled
    data-size="large"
>
    Click Me
</my-button>
        `
    },
];

for (const example of examples) {
    console.log(`\n<!-- ${example.title} -->\n`);

    const ast = parseHtml(example.html, {
        documentMode: 'fragment'
    });

    console.log(printHtml(ast));
}
