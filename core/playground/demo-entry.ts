/*
[!!!Important!!!]
Component registration and `mountComponents()` use different module instances.

[!!!Solution!!!] 
Ensure that each generated demo entry point also exports `mountComponents`, so that PJAX can retrieve it directly from the demo entry point.
*/

import fs from 'node:fs';
import path from 'node:path';
import type { AnalyzedDemo, SiteContext } from '../utils/types.ts';

/**
 * Indent source code.
 */
function indent(source: string, spaces: number): string {
    const prefix = ' '.repeat(spaces);

    return source
        .split('\n')
        .map((line) => `${prefix}${line}`)
        .join('\n');
}

/**
 * Generate a standalone TSX entry for a Playground demo.
 *
 * The Demo entry and its imported components share
 * the same Runtime module instance.
 */
/*
!!! STEP: 

"generate-entries" 
     │
     ▼
"writeDemoEntries"
     │
     ▼
"generateDemoEntry"
     │
     ▼ 
*/
export function generateDemoEntry(
    demo: AnalyzedDemo,
    site?: SiteContext
): string {
    const imports: string[] = [];

    // 1. Prioritize importing `src/styles/tailwind.css` from the current site (if it exists).
    if (site) {
        const tailwindCssPath = path.join(site.root, 'src/styles/tailwind.css');

        if (fs.existsSync(tailwindCssPath)) {

            // Depending on your project alias configuration, you can use either 
            // relative paths or aliases for imports—for example:
            imports.push(`import '@/styles/tailwind.css';`);
        }
    }

    // 2. Import components
    for (const { name, directory } of demo.components) {
        imports.push(`import ${name} from '@/components/${directory}';`);
    }

    const importBlock = imports.join('\n');
    const content = indent(demo.code, 6);

    return `${importBlock}

import {
    mountComponents,
} from '@/runtime/bridge/register';

// Export mountComponents from the same Runtime instance
// used by the imported component registration modules.
export {
    mountComponents,
};

export default function PlaygroundDemo() {
  return (
    <>
${content}
    </>
  );
}
`;
}
