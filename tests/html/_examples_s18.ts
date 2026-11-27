/*
TEST：

npx tsx tests/html/_examples_s18.ts
*/

/*

Test Items （s3 ~ s17）:
------


HTML Formatting Regression Test Items
------

1. Complete HTML Document Structure                   =>   Passed
2. Deeply Nested Elements                             =>   Passed
3. Mixed Text and Inline Elements                     =>   Passed
4. Nested Block Elements                              =>   Passed
5. Attribute Layout and Print Width                   =>   Passed
6. Boolean Attributes and Special Characters          =>   Passed
7. Consecutive BR Elements and Custom Elements        =>   Passed
8. Nested SVG Elements                                =>   Passed
9. PRE and TEXTAREA Whitespace Preservation           =>   Passed
10. SCRIPT and STYLE Content Formatting               =>   Passed
11. Comments and DOCTYPE Handling                     =>   Passed
12. Preserve Whitespace Configuration                 =>   Passed
13. Combined Formatting Options                       =>   Passed
14. HTML Fragment Formatting                          =>   Passed
15. Empty Elements and Edge Cases                     =>   Passed

*/
import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';



const testCases = [
    {
        title: '1. Complete HTML Document Structure',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Makelier</title>
</head>
<body>
<header>
<h1>Welcome to Makelier</h1>
</header>
<main>
<p>HTML Formatter Regression Test</p>
</main>
<footer>
Copyright 2026
</footer>
</body>
</html>`
    },
    {
        title: '2. Deeply Nested Elements',
        html: `<div class="app">
<section class="container">
<div class="content">
<article>
<div class="inner">
<p>Deeply nested content</p>
</div>
</article>
</div>
</section>
</div>`
    },
    {
        title: '3. Mixed Text and Inline Elements',
        html: `<p>Hello <strong>World</strong>, welcome to <a href="#">Makelier</a>!</p>
<p><span>First</span> <span>Second</span> <em>Third</em></p>
<p>Text before <code>const value = 10;</code> text after.</p>`
    },
    {
        title: '4. Nested Block Elements',
        html: `<div>
Text before
<section>
<h2>Section Title</h2>
<div>
<p>Nested paragraph</p>
</div>
</section>
Text after
</div>`
    },
    {
        title: '5. Attribute Layout and Print Width',
        html: `<div id="app" class="container primary" data-component="hero" data-theme="dark" aria-label="Main application">
<img src="assets/product.png" alt="Product image" width="800" height="600">
</div>`
    },
    {
        title: '6. Boolean Attributes and Special Characters',
        html: `<input type="text" disabled checked="false" required>
<button disabled="">Submit</button>
<div data-value="A &amp; B" title="A &quot;quoted&quot; value" aria-label="A < B"></div>
<a href="https://example.com/?a=1&amp;b=2">Visit website</a>`
    },
    {
        title: '7. Consecutive BR Elements and Custom Elements',
        html: `<br>
<br>
<br>
<custom-card data-id="1">
<custom-title>Custom Component</custom-title>
</custom-card>
<my-widget active>
<span>Widget content</span>
</my-widget>`
    },
    {
        title: '8. Nested SVG Elements',
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<g transform="translate(10 10)">
<circle cx="50" cy="50" r="40" fill="red"/>
<rect x="100" y="10" width="50" height="50"/>
<path d="M10 100 L100 100 Z"/>
</g>
</svg>`
    },
    {
        title: '9. PRE and TEXTAREA Whitespace Preservation',
        html: `<pre>    function hello() {
        console.log("Hello");

        return true;
    }</pre>
<textarea>
    First line

    Second line
</textarea>`
    },
    {
        title: '10. SCRIPT and STYLE Content Formatting',
        html: `<script>
const message = "Hello < World & Everyone";
function hello() {
    console.log(message);
}
</script>
<script>console.log("Single-line script");</script>
<style>
.container {
    width: calc(100% - 20px);
    content: "A < B";
}
</style>
<style>body { margin: 0; }</style>`
    },
    {
        title: '11. Comments and DOCTYPE Handling',
        html: `<!DOCTYPE html>
<!-- Main document -->
<div>
<!-- Container comment -->
<section>
<!-- Content comment -->
<p>Hello World</p>
</section>
</div>`
    },
    {
        title: '12. Preserve Whitespace Configuration',
        html: `<p>Hello     World</p>
<div>
<span>First</span>     
<span>Second</span>
</div>
<p>
    Text with
    multiple lines
</p>`
    },
    {
        title: '13. Combined Formatting Options',
        html: `<div id="app" class="container" data-component="scene">
<header>
<h1>Product Story</h1>
</header>
<main>
<p>Discover <strong>interactive</strong> experiences.</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="40"/>
</svg>
</main>
</div>`
    },
    {
        title: '14. HTML Fragment Formatting',
        html: `<header>
<h1>Makelier</h1>
</header>
<main>
<p>Hello <strong>World</strong></p>
</main>
<footer>
Copyright 2026
</footer>`
    },
    {
        title: '15. Empty Elements and Edge Cases',
        html: `<div></div>
<span></span>
<p></p>
<img src="image.png" alt="">
<input type="text">
<custom-element></custom-element>
<div>
<!-- Empty container -->
</div>`
    }
];


function runTest(
    html: string,
    options: Record<string, unknown> = {}
): string {
    const ast = parseHtml(html, {
        documentMode: 'fragment'
    });

    return printHtml(ast, options);
}


console.log('========================================');
console.log('S18 - HTML Formatting Regression Tests');
console.log('========================================');


for (const test of testCases) {
    console.log(`\n--- ${test.title} ---`);

    console.log('\n[ preserveWhitespace: true ]');

    console.log(
        runTest(test.html, {
            preserveWhitespace: true
        })
    );

    console.log('\n[ preserveWhitespace: false ]');

    console.log(
        runTest(test.html, {
            preserveWhitespace: false
        })
    );
}


// Additional option combinations.

console.log('\n========================================');
console.log('S18 - Additional Formatting Options');
console.log('========================================');


const layoutTest = `
<div id="app" class="container primary" data-component="hero" data-theme="dark" aria-label="Main application">
    <p>Hello <strong>World</strong></p>
</div>
`;


console.log('\n--- Attribute Layout: single-line ---');

console.log(
    runTest(layoutTest, {
        attributeLayout: 'single-line',
        printWidth: 80
    })
);


console.log('\n--- Attribute Layout: multiline ---');

console.log(
    runTest(layoutTest, {
        attributeLayout: 'multiline',
        printWidth: 80
    })
);


console.log('\n--- Attribute Layout: auto / printWidth 80 ---');

console.log(
    runTest(layoutTest, {
        attributeLayout: 'auto',
        printWidth: 80
    })
);


console.log('\n--- Attribute Layout: auto / printWidth 120 ---');

console.log(
    runTest(layoutTest, {
        attributeLayout: 'auto',
        printWidth: 120
    })
);


console.log('\n--- Custom Indentation: 2 spaces ---');

console.log(
    runTest(testCases[1].html, {
        indentUnit: '  '
    })
);


console.log('\n========================================');
console.log('S18 - Regression Tests Completed');
console.log('========================================');
