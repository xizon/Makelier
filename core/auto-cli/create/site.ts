
/**
 * Creates a new "SITE" with its default component and page.
 *
/*
Usage:

npm run create:site -- my-site
npm run create:site -- my-site --prefix myprefix

*/

import fs from 'node:fs';
import path from 'node:path';
import {
    parseArgs,
    toKebabCase,
    writeFile,
} from '../../utils/helper.ts';

import { 
    CONSOLE_COLORS,
    DEFAULT_GSAP_VERSION,
    DEFAULT_THREE_VERSION
} from '../../utils/const.ts';

import { DEFAULT_PREFIX } from '../../utils/const.ts';

import {
    runNpmScript
} from '../../utils/run-command.ts';



const {
    GREEN,
    RESET
} = CONSOLE_COLORS;




function createSiteFiles(siteRoot: string, name: string, prefix: string) {
    const siteConfig = {
        name,
        version: '1.0.0',
        lang: 'en-US',
        title: 'My Site',
        description: 'This is a site automatically created by the CLI..',
        author: {
            name: 'Your Name',
            website: 'https://example.com',
            email: 'hello@example.com',
        },
        template: './site.html',
        paths: {
            src: './src',
            public: './public',
            dist: './dist',
        },
        entries: {
            pages: './src/pages',
            components: './src/components',
            styles: './src/styles',
        },
    };

    const sitePackage = {
        name,
        private: true,
        version: '1.0.0',
        dependencies: {
            gsap: DEFAULT_GSAP_VERSION,
            three: DEFAULT_THREE_VERSION,
        },
        devDependencies: {
            '@types/three': DEFAULT_THREE_VERSION,
        },
        build: {
            externals: {},
        },
        'x-build-externals-description':
            'To exclude dependencies from the bundle, add them to build.externals and specify their global variable names.',
    };

    const tailwindCss = `@import "tailwindcss" prefix(${prefix});

@layer base {
    body {
        background-color: #111111;
    }
}
`;

    writeFile(
        path.join(siteRoot, 'site.json'),
        JSON.stringify(siteConfig, null, 4) + '\n'
    );

    writeFile(
        path.join(siteRoot, 'package.json'),
        JSON.stringify(sitePackage, null, 4) + '\n'
    );

    writeFile(
        path.join(siteRoot, 'src/styles/tailwind.css'),
        tailwindCss
    );

    // Create the required Site directories.
    fs.mkdirSync(path.join(siteRoot, 'src/components'), { recursive: true });
    fs.mkdirSync(path.join(siteRoot, 'src/pages'), { recursive: true });
    fs.mkdirSync(path.join(siteRoot, 'public'), { recursive: true });
}


function main() {
    try {
        const { name: inputName, prefixOverride } = parseArgs(process.argv.slice(2));
        
        if (!inputName) {
            throw new Error('Component name is required.');
        }

        const name = toKebabCase(inputName);

        const prefix = prefixOverride || DEFAULT_PREFIX;

        if (!name) {
            throw new Error('Site name must contain letters or numbers.');
        }

        if (!/^[a-zA-Z][\w-]*$/.test(prefix)) {
            throw new Error(`Invalid Tailwind prefix: ${prefix}`);
        }

        const projectRoot = process.cwd();
        const sitesRoot = path.join(projectRoot, 'sites');
        const siteRoot = path.join(sitesRoot, name);

        if (fs.existsSync(siteRoot)) {
            throw new Error(`Site already exists: ${siteRoot}`);
        }


        // 1. Create Site directories and configuration files.
        fs.mkdirSync(siteRoot, { recursive: true });
        createSiteFiles(siteRoot, name, prefix);

        console.log(
            `${GREEN}[Makelier] Site files created: ${path.relative(projectRoot, siteRoot)}${RESET}`
        );

        // Pass the target Site to the existing CLI commands.
        const siteEnv = {
            ...process.env,
            SITE: name,
        };

        // 2. Create the default component.
        runNpmScript(
            projectRoot,
            'create:component',
            ['MyComponent', '--prefix', prefix],
            siteEnv
        );

        // 3. Create the default page.
        runNpmScript(
            projectRoot,
            'create:page',
            ['MyPage', '--prefix', prefix],
            siteEnv
        );

        // 4. Build the specified Site and generate its indexes and tsconfig.
        runNpmScript(
            projectRoot,
            'build',
            [name],
            siteEnv
        );

        console.log(
            `${GREEN}[Makelier] Site created successfully: sites/${name}${RESET}`
        );

        console.log(
            `${GREEN}[Makelier] Tailwind prefix: ${prefix}${RESET}`
        );

    } catch (error) {
        console.error(
            `[Makelier] ${error instanceof Error ? error.message : error}`
        );

        process.exitCode = 1;
    }
}

main();
