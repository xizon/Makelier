/*
TEST：

npx tsx tests/html/_examples_s5.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const html = `
<!-- 1. Consecutive spaces in plain text -->
<p>Hello     World</p>

<!-- 2. Spaces before and after inline elements -->
<p>Hello <strong>World</strong> !</p>

<!-- 3. Adjacent inline elements (no automatic space should be added) -->
<div><span>Hello</span><span>World</span></div>

<!-- 4. A mix of inline elements and text -->
<p>Hello <strong>World</strong>, welcome to <a href="#">Makelier</a>.</p>

<!-- 5. <pre> preserves original whitespace -->
<pre>
    function hello() {
        console.log("Hello");
    }
</pre>

<!-- 6. <textarea> preserves original whitespace -->
<textarea>
    Hello
    World
</textarea>
`;

function testWhitespace(preserveWhitespace: boolean) {
    const ast = parseHtml(html, {
        documentMode: 'fragment'
    });

    console.log(`\n--- preserveWhitespace: ${preserveWhitespace} ---`);

    console.log(
        printHtml(ast, {
            preserveWhitespace,
            attributeLayout: 'auto',
            printWidth: 120
        })
    );
}

testWhitespace(true);
testWhitespace(false);