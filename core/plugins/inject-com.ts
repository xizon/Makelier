/**
 * Inject Component Attribute
 */
import MagicString from 'magic-string';
import type { Plugin } from 'vite';

import { injectComponentAttribute } from '../engines/template/inject-component-attribute.ts';


/**
 * Vite plugin.
 */
export function injectComponentAttributePlugin(): Plugin {
    return {
        name: 'inject-component-attribute',
        enforce: 'pre',

        transform(source, id) {
            const filePath = id.split('?')[0];

            if (
                !filePath.endsWith('.tsx') ||
                filePath.includes('/node_modules/')
            ) {
                return null;
            }

            // Only transform component templates.
            if (!filePath.endsWith('/template.tsx')) {
                return null;
            }

            const transformed = injectComponentAttribute(
                source,
                filePath
            );

            const magicString = new MagicString(source);

            // Reuse the transformed source and generate a sourcemap.
            // The actual source transformation is performed above.
            magicString.overwrite(
                0,
                source.length,
                transformed
            );

            return {
                code: transformed,
                map: magicString.generateMap({
                    source: filePath,
                    includeContent: true,
                    hires: true,
                }),
            };
        },
    };
}