import fs from 'node:fs';
import path from 'node:path';

/*
TEST: npx tsx tests/wordpress/test-inject.ts
*/

import {
    injectComponentAttribute,
} from '../../core/engines/template/inject-component-attribute.ts';

const templatePath = path.resolve(
    'sites/_official/src/components/pricing-table/template.tsx',
);

const source = fs.readFileSync(templatePath, 'utf-8');

const transformed = injectComponentAttribute(
    source,
    templatePath,
);

console.log(transformed);