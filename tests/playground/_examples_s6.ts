/*
TEST：

npx tsx tests/playground/_examples_s6.ts
*/

import {
    discoverPlaygroundEntries,
} from '../../core/playground/discover-entries.ts';

const siteRoot = 'sites/product-elegant';

const entries = discoverPlaygroundEntries(siteRoot);

console.log('\n========== Playground Entries ==========\n');

console.log(entries);

console.log('\nTotal:', Object.keys(entries).length);