/*
TEST：

npx tsx tests/html/_examples_s4.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';

const nestedHtml = `
<div class="container">
    <section class="content">
        <button type="button" class="mkl-copy" data-copy="npx makelier add product-story-2" aria-label="Copy command">Copy</button>
    </section>
</div>
`;

const nestedAst = parseHtml(nestedHtml, {
    documentMode: 'fragment'
});

console.log('\n--- nested auto 120 ---');
console.log(printHtml(nestedAst, {
    attributeLayout: 'auto',
    printWidth: 120
}));

console.log('\n--- nested auto 200 ---');
console.log(printHtml(nestedAst, {
    attributeLayout: 'auto',
    printWidth: 200
}));

console.log('\n--- nested auto 100 ---');
console.log(printHtml(nestedAst, {
    attributeLayout: 'auto',
    printWidth: 100
}));

console.log('\n--- nested auto 110 ---');
console.log(printHtml(nestedAst, {
    attributeLayout: 'auto',
    printWidth: 110
}));