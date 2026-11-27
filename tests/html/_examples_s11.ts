/*
TEST：

npx tsx tests/html/_examples_s11.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const html = `
<!-- 1. Common HTML Void Elements -->
<img src="photo.png" alt="Product Photo">
<br>
<hr>
<input type="text">
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">

<!-- 2. Void Elements with Multiple Attributes -->
<img
    src="product.png"
    alt="Product Image"
    width="300"
    height="200"
>
<input
    type="checkbox"
    checked
    disabled
>

<!-- 3. Void Elements inside Containers -->
<div>
    <p>Hello<br>World</p>
    <img src="logo.png" alt="Company Logo">
    <hr>
</div>

<!-- 4. Incorrect Closing Tags -->
<img src="photo.png"></img>
<br></br>
<input type="text"></input>

<!-- 5. SVG Self-Closing Elements -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" />
    <path d="M10 10 L90 90" />
    <rect x="10" y="10" width="80" height="80" />
</svg>

<!-- 6. Nested SVG Elements -->
<svg xmlns="http://www.w3.org/2000/svg">
    <g>
        <circle cx="20" cy="20" r="10"></circle>
        <path d="M0 0 L20 20"></path>
    </g>
</svg>
`;

const ast = parseHtml(html, {
    documentMode: 'fragment'
});

console.log(printHtml(ast, {
    preserveComments: true,
    attributeLayout: 'single-line'
}));
