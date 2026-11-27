/*
TEST：

npx tsx tests/html/_examples_s14.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const cases = [
    {
        title: '1. PRE - Multiline code and blank lines',
        html: `<pre>
    function hello() {
        console.log("Hello");

        return true;
    }
</pre>`
    },
    {
        title: '2. PRE - Tabs and consecutive spaces',
        html: `<pre>
\tfunction hello() {
\t\tconst message = "Hello     World";
\t\treturn message;
\t}
</pre>`
    },
    {
        title: '3. TEXTAREA - Default value',
        html: `<textarea>
    Hello

    World
</textarea>`
    },
    {
        title: '4. TEXTAREA - Leading and trailing whitespace',
        html: `<textarea>  
    Hello World
     
</textarea>`
    },
    {
        title: '5. SCRIPT - Multiline JavaScript',
        html: `<script>
const message = "Hello World";

function hello() {
    console.log(message);
}
</script>`
    },
    {
        title: '6. SCRIPT - Special characters in strings',
        html: `<script>
const html = '<div class="app">Hello & Welcome</div>';
const text = "A < B && B > C";
console.log(html, text);
</script>`
    },
    {
        title: '7. STYLE - Multiline CSS',
        html: `<style>
body {
    margin: 0;
    padding: 0;

    background: #fff;
}

.container {
    width: 100%;
}
</style>`
    },
    {
        title: '8. STYLE - Comments and special characters',
        html: `<style>
/* Main container */
.container {
    width: calc(100% - 20px);
    content: "A < B";
}
</style>`
    },
    {
        title: '9. Empty special elements',
        html: `<pre></pre>
<textarea></textarea>
<script></script>
<style></style>`
    },
    {
        title: '10. SCRIPT - Single-line content',
        html: `<script>console.log("Hello");</script>`
    },
    {
        title: '11. STYLE - Single-line content',
        html: `<style>body { margin: 0; }</style>`
    },
    {
        title: '12. SCRIPT / STYLE - Nested in body',
        html: `<div>
        <script>const message = "Hello";</script>
        <style>.container { width: 100%; }</style>
    </div>`
    }
];

for (const preserveWhitespace of [true, false]) {
    console.log(`\n--- preserveWhitespace: ${preserveWhitespace} ---`);

    for (const test of cases) {
        console.log(`\n<!-- ${test.title} -->`);

        const ast = parseHtml(test.html);

        const result = printHtml(ast, {
            preserveWhitespace
        });

        console.log(result);
    }
}