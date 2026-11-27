
import { spawnSync } from 'node:child_process';
import { CONSOLE_COLORS } from '../utils/const.ts';

const { GREEN, RESET } = CONSOLE_COLORS;

function runCommand(
    command: string,
    args: string[],
    projectRoot: string,
    env: NodeJS.ProcessEnv = process.env
) {
    console.log(
        `${GREEN}[Makelier] Running: ${command} ${args.join(' ')}${RESET}`
    );

    const result = spawnSync(command, args, {
        cwd: projectRoot,
        env,
        stdio: 'inherit',
    });

    if (result.error) {
        throw result.error;
    }

    if (result.status !== 0) {
        throw new Error(
            `[Makelier] Command failed: ${command} ${args.join(' ')}`
        );
    }
}


export function runNpmScript(
    projectRoot: string,
    script: string,
    args: string[] = [],
    env: NodeJS.ProcessEnv = process.env
) {
    runCommand(
        'npm',
        ['run', script, ...(args.length ? ['--', ...args] : [])],
        projectRoot,
        env
    );
}

export function runTypeScriptScript(
    projectRoot: string,
    scriptPath: string,
    env: NodeJS.ProcessEnv = process.env
) {
    runCommand(
        'npx',
        ['tsx', scriptPath],
        projectRoot,
        env
    );
}