
import { describe, it, expect } from 'vitest';

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';

const options = {
    documentMode: 'document' as const,
    indentUnit: '    ',
    printWidth: 120,
    attributeLayout: 'auto' as const,
    preserveComments: true,
    preserveWhitespace: true,
};

function format(html: string): string {
    return printHtml(parseHtml(html, options), options);
}

describe('printHtml - document-level spacing', () => {
    it('should keep consecutive comments on single lines', () => {
        const result = format(`<!DOCTYPE html>
<!-- comment 1 -->
<!-- comment 2 -->
<html></html>`);

        expect(result).toContain(
            '<!DOCTYPE html>\n<!-- comment 1 -->\n<!-- comment 2 -->'
        );
    });

    it('should keep doctype and html adjacent', () => {
        const result = format(`<!DOCTYPE html>
<html></html>`);

        expect(result).toContain(
            '<!DOCTYPE html>\n<html>'
        );
    });

    it('should keep comments adjacent to surrounding document nodes', () => {
        const result = format(`<!DOCTYPE html>
<!-- comment -->
<html></html>`);

        expect(result).toContain(
            '<!DOCTYPE html>\n<!-- comment -->\n<html>'
        );
    });
});

describe('printHtml - HTML formatting regression', () => {
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
</html>`;

    it('should format the complete HTML document without throwing', () => {
        expect(() => format(html)).not.toThrow();
    });

    it('should preserve the document structure', () => {
        const result = format(html);

        expect(result).toContain('<!DOCTYPE html>');
        expect(result).toContain('<html lang="en-US">');
        expect(result).toContain('<head>');
        expect(result).toContain('<body class="mkl-page mkl-catalog-page">');
        expect(result).toContain('</body>');
        expect(result).toContain('</html>');
    });

    it('should preserve comments', () => {
        const result = format(html);

        expect(result).toContain('<!-- test here -->');
    });

    it('should preserve inline text and inline elements', () => {
        const result = format(html);

        expect(result).toContain(
            '<p>Hello <strong>World</strong>, welcome to <a href="#">Makelier</a>.</p>'
        );

        expect(result).toContain(
            '<p><a href="#">Read</a> more about <strong>Makelier</strong>.</p>'
        );
    });

    it('should preserve special HTML entities', () => {
        const result = format(html);

        expect(result).toContain('Tom &amp; Jerry');
        expect(result).toContain('1 &lt; 2 and 3 &gt; 2');
        expect(result).toContain('Hello&nbsp;World');
        expect(result).toContain('"Hello" and \'World\'');
    });
    

    it('should preserve script and style content', () => {
        const result = format(html);

        expect(result).toContain("console.log('ok');");
        expect(result).toContain('.demo');
        expect(result).toContain('color: #fff;');
        expect(result).toContain('<script src="../demo.js"></script>');
    });

    it('should preserve SVG elements and attributes', () => {
        const result = format(html);

        expect(result).toContain('<svg');
        expect(result).toContain('<g transform="translate(10, 10)">');
        expect(result).toContain('<path d="M0 0 L10 10">');
        expect(result).toContain('stroke-width="1.8"');
    });

    it('should preserve pre and textarea content', () => {
        const result = format(html);

        expect(result).toContain('function hello()');
        expect(result).toContain('console.log("Hello");');
        expect(result).toContain('const message = "Hello";');
        expect(result).toContain('Hello &amp; World');
        expect(result).toContain('placeholder="Enter your message"');
    });

    it('should format multiline opening tags correctly', () => {
        const result = format(html);

        expect(result).toContain(
            'aria-label="Copy command"'
        );

        expect(result).toContain(
            '<svg'
        );
    });

    it('should preserve button attributes and text', () => {
        const result = format(html);

        expect(result).toContain(
            'data-copy="npx makelier add product-story-2"'
        );

        expect(result).toContain('aria-label="Copy command"');
        expect(result).toContain('Button');
    });
});
