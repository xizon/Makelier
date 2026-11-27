/*
TEST：

npx tsx tests/html/_examples_s16.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const cases = [
    {
        title: '1. Basic HTML entities',
        html: `<p>&amp; &lt; &gt; &quot; &apos;</p>`
    },
    {
        title: '2. Entities in text content',
        html: `<p>Tom &amp; Jerry</p>
<p>1 &lt; 2 &gt; 0</p>
<p>&quot;Hello World&quot;</p>`
    },
    {
        title: '3. Entities in attributes',
        html: `<div title="Tom &amp; Jerry" data-value="1 &lt; 2" aria-label="&quot;Hello&quot;"></div>`
    },
    {
        title: '4. Numeric character references',
        html: `<p>&#65; &#66; &#67;</p>
<p>&#x41; &#x42; &#x43;</p>`
    },
    {
        title: '5. Special symbols',
        html: `<p>&copy; &reg; &trade; &euro; &pound;</p>`
    },
    {
        title: '6. Chinese and Unicode text',
        html: `<p>HTML 格式化工具</p>
<p>你好，世界！</p>
<p>こんにちは世界</p>`
    },
    {
        title: '7. Emoji',
        html: `<p>😀 🚀 🌍 🎨</p>
<p>👨‍💻 ❤️ ✨</p>`
    },
    {
        title: '8. Ampersands in plain text',
        html: `<p>R&D</p>
<p>AT&T</p>
<p>A & B & C</p>`
    },
    {
        title: '9. Less-than and greater-than symbols',
        html: `<p>5 < 10</p>
<p>10 > 5</p>
<p>A < B && C > D</p>`
    },
    {
        title: '10. Already escaped entities',
        html: `<p>&amp;amp;</p>
<p>&amp;lt;</p>
<p>&amp;gt;</p>`
    },
    {
        title: '11. Mixed entities and normal text',
        html: `<p>Hello &amp; welcome to &lt;HTML Formatter&gt;!</p>`
    },
    {
        title: '12. Entities in inline elements',
        html: `<p><strong>A &amp; B</strong> <span>1 &lt; 2</span></p>`
    },
    {
        title: '13. NBSP',
        html: `<p>Hello&nbsp;World</p>
<p>A&nbsp;&nbsp;B</p>`
    },
    {
        title: '14. Entity-like strings in code',
        html: `<code>&amp; &lt; &gt;</code>
<pre>&amp; &lt; &gt;</pre>`
    },
    {
        title: '15. Entity in script and style',
        html: `<script>
const value = "A & B";
const entity = "&amp;";
</script>
<style>
.example::after {
    content: "A & B";
}
</style>`
    }
];

for (const test of cases) {
    console.log(`\n<!-- ${test.title} -->`);

    const ast = parseHtml(test.html, {
        documentMode: 'fragment'
    });

    console.log(printHtml(ast));
}
