
import path from 'node:path';

import { parseArgs } from '../../utils/helper.ts';
import { runBuildWordPressEditor } from './build-editor-runner.ts';

const {
    name: siteName,
} = parseArgs(process.argv.slice(2));

if (!siteName) {
    throw new Error('Missing Site name.');
}

const siteRoot = path.resolve(
    process.cwd(),
    'sites',
    siteName,
);

await runBuildWordPressEditor(siteRoot);
