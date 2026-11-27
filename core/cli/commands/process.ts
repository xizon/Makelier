import { spawn } from "node:child_process";
import { DiscoveredSite } from '../../utils/types.ts';

export const projectRoot = process.cwd();

export function siteEnv(site: DiscoveredSite): NodeJS.ProcessEnv {
    return { ...process.env, SITE: site.name };
}

export function runProcess(
    executable: string,
    args: string[],
    site: DiscoveredSite,
    label: string,
    extraEnv: NodeJS.ProcessEnv = {},
): Promise<void> {
    return new Promise((resolve, reject) => {
        console.log(`\n[Makelier] ${label}: ${site.name}`);

        // console.log('[Makelier] +++++++ Extra Env: +++++++', extraEnv);

        const child = spawn(executable, args, {
            cwd: projectRoot,
            env: {
                ...siteEnv(site),
                ...extraEnv,
            },
            stdio: "inherit",
            shell: process.platform === "win32",
        });

        child.once("error", reject);
        child.once("exit", (code, signal) => {
            if (code === 0) return resolve();
            reject(new Error(
                `[Makelier] ${label} failed for "${site.name}" (exit code: ${code ?? "null"}, signal: ${signal ?? "none"}).`,
            ));
        });
    });
}
