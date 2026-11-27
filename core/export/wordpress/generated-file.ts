
import fs from 'node:fs';
import path from 'node:path';


import {
    GENERATED_JS_HEADER
} from '../../utils/const.ts';



/**
 * Write an automatically generated JavaScript file.
 */
export function writeGeneratedJavaScript(
    source: string,
    outputPath: string,
): void {
    const outputDir = path.dirname(outputPath);

    fs.mkdirSync(outputDir, {
        recursive: true,
    });

    fs.writeFileSync(
        outputPath,
        `${GENERATED_JS_HEADER}${source.trimStart()}\n`,
        'utf8',
    );
}
