/*
TEST：

npx tsx tests/html/_examples_s9.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const html = `
<!-- 1. Double quotes -->
<div title="Hello &quot;World&quot;"></div>
<input placeholder="Say &quot;Hello&quot;">

<!-- 2. Special HTML characters -->
<div title="Tom &amp; Jerry"></div>
<div data-value="1 &lt; 2 &amp;&amp; 3 &gt; 2"></div>

<!-- 3. Non-breaking space (NBSP) -->
<div title="Hello World"></div>

<!-- 4. Single quotes -->
<div title="It's a beautiful day"></div>
<div data-message="He said &quot;It's OK&quot;"></div>

<!-- 5. URL attributes -->
<a href="https://example.com/search?q=hello&amp;page=1">Link</a>
<img src="/images/photo.png" alt="A &quot;beautiful&quot; photo">

<!-- 6. data-* attributes -->
<div
    data-name="Tom &amp; Jerry"
    data-description="A &lt; B"
    data-value="100% &amp; more"
></div>
`;

const ast = parseHtml(html, {
    documentMode: 'fragment'
});

console.log(printHtml(ast, {
    attributeLayout: 'single-line',
    preserveWhitespace: true
}));
