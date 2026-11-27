/*
TEST：

npx tsx tests/html/_examples_s10.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const html = `
<!DOCTYPE html>

<!-- 1. Standard HTML comment -->
<div>Hello</div>

<!-- 2. Comments inside an element -->
<section>
    <!-- Section title -->
    <h1>Hello World</h1>
    <!-- Section content -->
    <p>Welcome to Makelier.</p>
</section>

<!-- 3. Special characters in comments -->
<!-- HTML & CSS < JavaScript > TypeScript -->

<!-- 4. Empty comment -->
<!---->

<!-- 5. Consecutive comments -->
<!-- First comment -->
<!-- Second comment -->
<div>Content</div>

<!-- 6. Conditional comments -->
<!--[if IE]>
    <script src="legacy.js"></script>
<![endif]-->

<!-- 7. Special content within comments -->
<!--
    Copyright © 2026
    Author: Makelier
    Website: https://makelier.com
-->
`;

const ast = parseHtml(html, {
    documentMode: 'document'
});

function inspectComments(node: any) {
    if (node.nodeName === '#comment') {
        console.log('COMMENT DATA:', JSON.stringify(node.data));
    }

    node.childNodes?.forEach(inspectComments);
}


console.log('--- preserveComments: true ---');

console.log(printHtml(ast, {
    preserveComments: true
}));

console.log('\n--- preserveComments: false ---');

console.log(printHtml(ast, {
    preserveComments: false
}));



inspectComments(ast);