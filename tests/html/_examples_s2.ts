/*
TEST：

npx tsx tests/html/_examples_s2.ts
*/

/*
Test Items:

------
1. `div` containing inline child elements	            =>   Passed
2. `p` with mixed text and inline tags	                =>   Passed
3. Whitespace between inline tags	                    =>   Passed
4. HTML comments	                                    =>   Passed
5. `script` / `style` content                           =>   Passed
6. SVG hierarchical indentation	                        =>   Passed
7. SVG and `span` inside a `button`	                    =>   Passed
8. Void elements / start and end tag formatting         =>   Passed
9. Empty lines between top-level elements	            =>   Passed
10. HTML Document Structure	                            =>   Passed
11. Block / Inline Layout	                            =>   Passed
12. SVG Hierarchy	                                    =>   Passed
13. Comments	                                        =>   Passed
14. Void Elements	                                    =>   Passed
15. lain Text Escaping	                                =>   Passed
16. HTML Entities	                                    =>   Passed
17. Raw-text Content Preservation	                    =>   Passed
18. Whitespace Preservation in `<pre>` / `<textarea>`   =>   Passed


------


*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const html = `<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body class="mkl-page mkl-catalog-page">


        <div class="container"><a href="/about">About</a><span>Hello</span></div>

        <p>Hello <strong>World</strong>, welcome to <a href="#">Makelier</a>.</p>

        <!-- test here -->

        <script>
        console.log('ok');
        </script>

        <style>
        .demo {
            color: #fff;
        }
        </style>

        <svg viewBox="0 0 100 100"><g transform="translate(10, 10)"><path d="M0 0 L10 10"></path></g></svg>

        <p><span>Hello</span> <span>World</span></p>

        <p><a href="#">Read</a> more about <strong>Makelier</strong>.</p>

        <div>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </div>

        <button type="button" class="mkl-copy" data-copy="npx makelier add product-story-2">
            <svg
                    class="mkl-copy__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true">
                <rect x="9" y="9" width="12" height="12" rx="2"></rect><path d="M5 15V5a2 2 0 0 1 2-2h10"></path>
            </svg
            >
            <span class="mkl-copy__label">Copy</span
                >
        </button
        >


        <p>Tom &amp; Jerry</p>

        <p>1 &lt; 2 and 3 &gt; 2</p>

        <p>Hello&nbsp;World</p>

        <div title="Tom &amp; Jerry">A &lt; B &amp; C</div>

        <p>&quot;Hello&quot; and &#39;World&#39;</p>



        <pre>
            function hello() {
                console.log("Hello");
            }
        </pre>

        <pre><code>const message = "Hello";
            console.log(message);</code></pre>

        <textarea>
            Hello
                World
        </textarea>

        <textarea placeholder="Enter your message">Hello &amp; World</textarea>

        < wde > dw 
        <pre>A < B & C</pre>

        <pre>A &lt; B &amp; C</pre>


        <button type="button" class="mkl-copy" data-copy="npx makelier add product-story-2" aria-label="Copy command">Button</button>

        <button 
            type="button" 
            class="mkl-copy" 
            data-copy="npx makelier add product-story-2" 
            aria-label="Copy command"
        > 
            Button
         </button>



    <script src="../demo.js"></script>
    </body>
</html>

`;

const ast = parseHtml(html, {
    documentMode: 'document',
});

console.log(
    JSON.stringify(
        (ast as any).childNodes.map((node: any) => ({
            nodeName: node.nodeName,
            tagName: node.tagName,
            children: node.childNodes?.map((child: any) => ({
                nodeName: child.nodeName,
                tagName: child.tagName,
            })),
        })),
        null,
        4
    )
);

const output = printHtml(ast);

console.log(output);