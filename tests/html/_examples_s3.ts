/*
TEST：

npx tsx tests/html/_examples_s3.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const html = `
<button type="button" class="mkl-copy" data-copy="npx makelier add product-story-2" aria-label="Copy command">Copy</button>
`;

const ast = parseHtml(html);

console.log('\n--- single-line ---');
console.log(printHtml(ast, {
    attributeLayout: 'single-line'
}));

console.log('\n--- multiline ---');
console.log(printHtml(ast, {
    attributeLayout: 'multiline'
}));

console.log('\n--- auto ---');
console.log(printHtml(ast, {
    attributeLayout: 'auto',
    printWidth: 80
}));

console.log('\n--- auto 120 ---');
console.log(printHtml(ast, {
    attributeLayout: 'auto',
    printWidth: 120
}));

console.log('\n--- auto 200 ---');
console.log(printHtml(ast, {
    attributeLayout: 'auto',
    printWidth: 200
}));