/*
TEST：

npx tsx tests/html/_examples_s8.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const html = `
<!-- 1. Common Boolean Attributes -->
<input disabled>
<input required>
<input checked>
<button autofocus>Submit</button>

<!-- 2. Multiple Boolean Attributes -->
<input type="checkbox" checked disabled required>
<script defer src="/app.js"></script>

<!-- 3. Boolean Attributes mixed with standard attributes -->
<input type="text" disabled class="form-control" required>
<button disabled class="btn" type="button">Submit</button>

<!-- 4. Attributes with explicit empty values ​​-->
<input disabled="" required="">
<input checked="false">
<div hidden=""></div>

<!-- 5. Boolean Attributes on various elements -->
<select multiple>
    <option selected>Option A</option>
    <option selected disabled>Option B</option>
</select>

<!-- 6. Custom elements (Note: 'disabled' may not be a native Boolean attribute here) -->
<my-widget disabled checked></my-widget>
`;

const ast = parseHtml(html, {
    documentMode: 'fragment'
});

console.log(printHtml(ast, {
    attributeLayout: 'single-line',
    preserveWhitespace: true
}));
