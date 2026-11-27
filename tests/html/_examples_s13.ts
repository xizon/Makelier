/*
TEST：

npx tsx tests/html/_examples_s13.ts
*/

import {
    parseHtml,
    printHtml
} from '../../core/engines/html-formatter/index.ts';


const examples = [
    {
        title: '1. Basic HTML Document',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Makelier</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Welcome to Makelier.</p>
</body>
</html>`,
        mode: 'document' as const
    },
    {
        title: '2. HTML Document with Multiple Head Elements',
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="HTML Formatter">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <main>
        <h1>Makelier</h1>
    </main>
</body>
</html>`,
        mode: 'document' as const
    },
    {
        title: '3. Script and Style',
        html: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <script>
        const message = "Hello World";
        console.log(message);
    </script>
</body>
</html>`,
        mode: 'document' as const
    },
    {
        title: '4. External Scripts',
        html: `<!DOCTYPE html>
<html>
<head>
    <script src="app.js" defer></script>
    <script type="module" src="main.js"></script>
</head>
<body>
    <div id="app"></div>
</body>
</html>`,
        mode: 'document' as const
    },
    {
        title: '5. Fragment Mode',
        html: `<header>
    <h1>Makelier</h1>
</header>
<main>
    <p>Hello World</p>
</main>
<footer>
    Copyright 2026
</footer>`,
        mode: 'fragment' as const
    },
    {
        title: '6. Document Mode with Incomplete HTML',
        html: `<title>Makelier</title>
<h1>Hello World</h1>
<p>Welcome.</p>`,
        mode: 'document' as const
    }
];

for (const example of examples) {
    console.log(`\n<!-- ${example.title} -->\n`);

    const ast = parseHtml(example.html, {
        documentMode: example.mode
    });

    console.log(printHtml(ast));
}
