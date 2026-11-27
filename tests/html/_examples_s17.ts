/*
TEST：

npx tsx tests/html/_examples_s17.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const cases = [
    {
        name: '1. Deeply Nested Elements',
        html: `
<div>
<section>
<article>
<header>
<h2>Title</h2>
</header>
<div>
<p>Content</p>
</div>
</article>
</section>
</div>
`
    },
    {
        name: '2. Empty Containers',
        html: `
<div></div>
<section></section>
<article></article>
<ul></ul>
<table></table>
`
    },
    {
        name: '3. Empty Nested Containers',
        html: `
<div>
    <section>
        <article></article>
    </section>
</div>
`
    },
    {
        name: '4. Block Element Inside Paragraph',
        html: `
<p>
    Text before
    <div>Block content</div>
    Text after
</p>
`
    },
    {
        name: '5. Nested Paragraphs',
        html: `
<p>First paragraph
    <p>Second paragraph</p>
</p>
`
    },
    {
        name: '6. Nested Lists',
        html: `
<ul>
    <li>Item 1
        <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
        </ul>
    </li>
    <li>Item 2</li>
</ul>
`
    },
    {
        name: '7. Consecutive List Items',
        html: `
<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>
`
    },
    {
        name: '8. Table Structure',
        html: `
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alex</td>
            <td>28</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>32</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Total: 2</td>
        </tr>
    </tfoot>
</table>
`
    },
    {
        name: '9. Table With Implicit Elements',
        html: `
<table>
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
    </tr>
</table>
`
    },
    {
        name: '10. Table With Invalid Nesting',
        html: `
<table>
    <div>Outside table content</div>
    <tr>
        <td>Cell</td>
    </tr>
</table>
`
    },
    {
        name: '11. Mixed Inline and Block Elements',
        html: `
<div>
    <p>
        Hello <strong>World</strong>
        <span>Inline text</span>
    </p>
    <section>
        <h2>Heading</h2>
        <p>Paragraph</p>
    </section>
</div>
`
    },
    {
        name: '12. Inline Elements Nested Deeply',
        html: `
<p>
    <strong>
        <em>
            <span>
                <a href="#">Nested inline text</a>
            </span>
        </em>
    </strong>
</p>
`
    },
    {
        name: '13. Mixed Text and Nested Containers',
        html: `
<div>
    Text before
    <section>
        <p>Inner text</p>
    </section>
    Text after
</div>
`
    },
    {
        name: '14. Custom Elements Nesting',
        html: `
<my-layout>
    <my-header>
        <my-logo>Logo</my-logo>
    </my-header>
    <my-content>
        <my-card>
            <my-title>Title</my-title>
            <my-description>Description</my-description>
        </my-card>
    </my-content>
</my-layout>
`
    },
    {
        name: '15. Nested Details and Summary',
        html: `
<details>
    <summary>First section</summary>
    <div>
        <details>
            <summary>Nested section</summary>
            <p>Nested content</p>
        </details>
    </div>
</details>
`
    }
];

for (const test of cases) {
    console.log(`\n--- ${test.name} ---\n`);

    const ast = parseHtml(test.html, {
        documentMode: 'fragment'
    });

    // if (test.name.indexOf('4.') >= 0 || test.name.indexOf('5.') >= 0 ) {
    //     console.dir(ast, { depth: null });
    // }

    

    console.log(printHtml(ast));
}

//================

const debugHtml = `
<div>
    Text before
    <section>
        <p>Inner text</p>
    </section>
    Text after
</div>
`;

const ast = parseHtml(debugHtml, {
    documentMode: 'fragment'
});

function inspect(node: any, depth = 0) {
    const prefix = '    '.repeat(depth);

    if (node.nodeName === '#text') {
        console.log(
            `${prefix}#text:`,
            JSON.stringify(node.value)
        );
        return;
    }

    console.log(
        `${prefix}${node.tagName || node.nodeName}`
    );


    for (const child of node.childNodes || []) {
        inspect(child, depth + 1);
    }
}

// inspect(ast);
