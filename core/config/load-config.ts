import path from 'node:path';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

import type { SysConfig } from '../utils/types.ts';

/**
 * Load the root System configuration.
 */
export async function loadSysConfig(
    projectRoot: string
): Promise<SysConfig> {
    const configPath = path.resolve(
        projectRoot,
        'makelier.config.ts'
    );

    if (!existsSync(configPath)) {
        return {};
    }

    const { default: config } = await import(
        pathToFileURL(configPath).href
    );

    if (
        !config ||
        typeof config !== 'object' ||
        Array.isArray(config)
    ) {
        throw new Error(
            '[Makelier] Invalid makelier.config.ts: expected a configuration object.'
        );
    }

    return config as SysConfig;
}