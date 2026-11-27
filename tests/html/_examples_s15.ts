/*
TEST：

npx tsx tests/html/_examples_s15.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const cases = [
    {
        title: '1. Boolean attributes',
        html: `<input disabled checked required readonly multiple>`
    },
    {
        title: '2. Boolean attributes with explicit values',
        html: `<input disabled="" checked="checked" required="false" readonly="true">`
    },
    {
        title: '3. Empty attributes',
        html: `<div id="" class="" title="" data-value="" aria-label=""></div>`
    },
    {
        title: '4. Attributes with special characters',
        html: `<div title="A & B" data-value="A < B" aria-label="Say &quot;Hello&quot;"></div>`
    },
    {
        title: '5. Single and double quotes',
        html: `<div title="It's a test" data-message='Hello "World"'></div>`
    },
    {
        title: '6. Data attributes',
        html: `<div data-id="123" data-user-name="John" data-value="A & B" data-enabled="true"></div>`
    },
    {
        title: '7. ARIA attributes',
        html: `<button aria-label="Close dialog" aria-expanded="false" aria-hidden="true" aria-controls="dialog-1"></button>`
    },
    {
        title: '8. URL attributes',
        html: `<a href="https://example.com/path?a=1&amp;b=2" target="_blank" rel="noopener noreferrer">Link</a>`
    },
    {
        title: '9. Attributes with whitespace',
        html: `<div title="  Hello   World  " data-text="Line 1&#10;Line 2"></div>`
    },
    {
        title: '10. Mixed-case attributes',
        html: `<div ID="app" CLASS="container" DATA-Value="123" ARIA-Label="Example"></div>`
    },
    {
        title: '11. Duplicate attributes',
        html: `<div id="first" id="second" class="one" class="two"></div>`
    },
    {
        title: '12. Custom element attributes',
        html: `<my-widget disabled="" checked="" data-id="123" aria-label="Widget"></my-widget>`
    },
    {
        title: '13. Attributes with equals signs',
        html: `<input value="a=b=c" data-expression="x === y" title="A = B">`
    },
    {
        title: '14. NBSP in attributes',
        html: `<div title="Hello&nbsp;World"></div>`
    }
];

for (const test of cases) {
    console.log(`\n<!-- ${test.title} -->`);

    const ast = parseHtml(test.html, {
        documentMode: 'fragment'
    });

    console.log(printHtml(ast));
}
