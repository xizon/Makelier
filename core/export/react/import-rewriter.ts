
/**
 * Rewrites component imports to relative output paths.
 */

/*
dist-react/
├── hero-demo/
│   └── template.tsx
└── product-elegant/
    └── logo/
        └── index.tsx


-----------

import Logo from '@/site/product-elegant/components/logo'; ===>   import Logo from '../product-elegant/logo';
import Button from '@/components/button';  ===>    import Button from '../button';
*/

import path from 'node:path';

import type { RewriteComponentImportsOptions } from '../../utils/types.ts';

import { parseTemplate } from '../../engines/template/parser.ts';

import { resolveComponentImport } from './dependency-resolver.ts';



/**
 * Rewrite component aliases to relative paths.
 *
 * Examples:
 *   @/components/logo
 *     -> ../logo
 *
 *   @/site/product-elegant/components/logo
 *     -> ../product-elegant/logo
 *
 * The actual relative path is calculated from the importer's
 * output location to the dependency's output location.
 */
export function rewriteComponentImports(
    options: RewriteComponentImportsOptions,
): string {
    const {
        source,
        fileName,
        importerOutputPath,
        site,
        outputRoot,
    } = options;

    const parsed = parseTemplate({
        source,
        fileName,
    });

    const sourceFile = parsed.sourceFile;

    for (const declaration of sourceFile.getImportDeclarations()) {
        const specifier = declaration.getModuleSpecifierValue();

        const resolved = resolveComponentImport(
            site,
            specifier,
            outputRoot,
        );

        if (!resolved) continue;

        const targetOutputPath = resolved.outputPath;

        let relativePath = path.relative(
            path.dirname(importerOutputPath),
            targetOutputPath,
        );

        relativePath = relativePath.split(path.sep).join('/');

        if (!relativePath.startsWith('.')) {
            relativePath = `./${relativePath}`;
        }

        declaration.setModuleSpecifier(relativePath);
    }

    return sourceFile.getFullText();
}
