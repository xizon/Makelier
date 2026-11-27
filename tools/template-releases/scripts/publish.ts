/*
!!!IMPORTANT
---------------

Build all templates
        │
        ▼
Generate all ZIP packages locally
        │
        ▼
Read Premium names from .gitignore
        │
        ▼
Filter templates
        │
        ├── Free ──► Upload ZIP to GitHub Release
        │          └──► Include in templates.json
        │
        └── Premium ──► Keep ZIP locally
                       └──► Exclude from Release and Registry

*/


import path from "node:path";
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";

import { buildTemplates } from "./build.ts";

import {
    parsePremiumTemplateNames,
    filterFreeTemplates,
} from "./premium-templates.ts";

const OWNER = "xizon";
const REPO = "makelier";
const REPOSITORY = `${OWNER}/${REPO}`;

const RELEASE_TAG = "templates-latest";

const ROOT = process.cwd();

const PACKAGES_DIR = path.join(ROOT, "tools/template-releases/packages");
const REGISTRY_DIR = path.join(ROOT, "tools/template-releases/registry");
const REGISTRY_PATH = path.join(REGISTRY_DIR, "templates.json");

/**
 * Run a command and inherit stdio.
 */
function run(command: string, args: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            cwd: ROOT,
            stdio: "inherit",
        });

        child.on("error", reject);

        child.on("close", (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(
                    new Error(
                        `${command} ${args.join(" ")} exited with code ${code}`
                    )
                );
            }
        });
    });
}

/**
 * Run a command and capture stdout.
 */
function capture(command: string, args: string[]): Promise<string> {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            cwd: ROOT,
            stdio: ["ignore", "pipe", "pipe"],
        });

        let stdout = "";
        let stderr = "";

        child.stdout.on("data", (data) => {
            stdout += data.toString();
        });

        child.stderr.on("data", (data) => {
            stderr += data.toString();
        });

        child.on("error", reject);

        child.on("close", (code) => {
            if (code === 0) {
                resolve(stdout.trim());
            } else {
                reject(
                    new Error(
                        `${command} ${args.join(" ")} failed:\n${stderr.trim()}`
                    )
                );
            }
        });
    });
}

/**
 * Ensure the current directory is the target repository
 * and GitHub CLI is authenticated.
 */
async function ensureRepository(): Promise<void> {
    const remote = await capture("git", ["remote", "get-url", "origin"]);

    if (!remote.toLowerCase().includes(REPOSITORY.toLowerCase())) {
        throw new Error(
            `[Makelier][Publish] Unexpected Git remote: ${remote}`
        );
    }
    
    await run("gh", ["auth", "status"]);

    console.log(
        "[Makelier][Publish] Repository and GitHub authentication verified."
    );
}

/**
 * Ensure the GitHub Release exists.
 */
async function ensureRelease(): Promise<void> {
    try {
        await capture("gh", [
            "release",
            "view",
            RELEASE_TAG,
            "--repo",
            REPOSITORY,
        ]);

        console.log(
            `[Makelier][Publish] Release "${RELEASE_TAG}" already exists.`
        );
    } catch {
        console.log(
            `[Makelier][Publish] Creating release "${RELEASE_TAG}"...`
        );

        await run("gh", [
            "release",
            "create",
            RELEASE_TAG,
            "--repo",
            REPOSITORY,
            "--title",
            "Template Registry",
            "--notes",
            "Latest downloadable Makelier templates.",
        ]);
    }
}

/**
 * Read Premium template names from the root .gitignore.
 */
async function getPremiumTemplateNames(): Promise<Set<string>> {
    const gitignorePath = path.join(ROOT, ".gitignore");
    const content = await readFile(gitignorePath, "utf8");

    const premiumNames = parsePremiumTemplateNames(content);

    console.log(
        "[Makelier][Publish] Premium templates:",
        [...premiumNames]
    );

    return premiumNames;
}

/**
 * Upload free template ZIP packages to GitHub Release.
 *
 * Premium ZIP packages remain in the local packages directory.
 */
async function uploadTemplates(
    templates: Awaited<ReturnType<typeof buildTemplates>>
): Promise<void> {
    if (templates.length === 0) {
        console.log(
            "[Makelier][Publish] No free templates to upload."
        );

        return;
    }

    for (const template of templates) {
        const packagePath = path.join(PACKAGES_DIR, template.filename);

        console.log(
            `[Makelier][Publish] Uploading ${template.filename}...`
        );

        await run("gh", [
            "release",
            "upload",
            RELEASE_TAG,
            packagePath,
            "--repo",
            REPOSITORY,
            "--clobber",
        ]);
    }

    console.log(
        `[Makelier][Publish] Uploaded ${templates.length} free template package(s).`
    );
}

/**
 * Update the public template registry.
 *
 * Only free templates are included.
 */
async function updateRegistry(
    templates: Awaited<ReturnType<typeof buildTemplates>>
): Promise<void> {
    await mkdir(REGISTRY_DIR, { recursive: true });

    const updatedAt = new Date().toISOString();

    const registry = {
        version: 1,
        updatedAt,
        templates: templates.map((template) => ({
            name: template.name,
            description: template.description,
            downloadUrl:
                `https://github.com/${REPOSITORY}/releases/download/` +
                `${RELEASE_TAG}/${template.filename}`,
            checksum: template.checksum,
            size: template.size,
            updatedAt,
        })),
    };

    await writeFile(
        REGISTRY_PATH,
        JSON.stringify(registry, null, 4) + "\n",
        "utf8"
    );

    console.log(
        `[Makelier][Publish] Registry updated: ${registry.templates.length} free template(s).`
    );
}

/**
 * Commit and push the updated Registry.
 *
 * Only templates.json will be staged.
 */
async function commitAndPushRegistry(): Promise<void> {
    // Prevent accidentally including unrelated staged files.
    const staged = await capture("git", [
        "diff",
        "--cached",
        "--name-only",
    ]);

    if (staged) {
        throw new Error(
            "[Makelier][Publish] Staging area is not empty. " +
                "Please commit or unstage existing changes first."
        );
    }

    await run("git", ["add", REGISTRY_PATH]);

    const stagedFiles = await capture("git", [
        "diff",
        "--cached",
        "--name-only",
    ]);

    if (!stagedFiles) {
        console.log(
            "[Makelier][Publish] Registry has no changes. Skipping commit."
        );

        return;
    }

    if (stagedFiles !== "tools/template-releases/registry/templates.json") {
        throw new Error(
            `[Makelier][Publish] Unexpected staged files:\n${stagedFiles}`
        );
    }

    await run("git", [
        "commit",
        "-m",
        "chore: update template registry",
    ]);

    const branch = await capture("git", [
        "branch",
        "--show-current",
    ]);

    if (!branch) {
        throw new Error(
            "[Makelier][Publish] Unable to determine current Git branch."
        );
    }

    await run("git", ["push", "origin", branch]);

    console.log(
        "[Makelier][Publish] Registry committed and pushed successfully."
    );
}

/**
 * Main publishing process.
 */
async function main(): Promise<void> {
    console.log("\n[Makelier][Publish] Starting template publishing...\n");

    // 1. Verify repository and GitHub authentication.
    await ensureRepository();

    // 2. Build all templates and generate all ZIP packages locally.
    console.log("\n[Makelier][Publish] Building templates...\n");

    await run("npm", ["run", "build", "--", "all"]);

    const templates = await buildTemplates();

    if (templates.length === 0) {
        throw new Error(
            "[Makelier][Publish] No template packages were generated."
        );
    }

    console.log(
        `[Makelier][Publish] Built ${templates.length} template package(s).`
    );

    // 3. Read Premium template names from .gitignore.
    const premiumNames = await getPremiumTemplateNames();

    // 4. Filter Premium templates from the publishing list.
    const freeTemplates = filterFreeTemplates(
        templates,
        premiumNames
    );

    const premiumTemplates = templates.filter(
        (template) => premiumNames.has(template.name)
    );

    console.log(
        `[Makelier][Publish] Free templates: ${freeTemplates.length}`
    );

    console.log(
        `[Makelier][Publish] Premium templates excluded: ${premiumTemplates.length}`
    );

    if (premiumTemplates.length > 0) {
        console.log(
            "[Makelier][Publish] Excluded Premium templates:",
            premiumTemplates.map((template) => template.name)
        );
    }

    // 5. Publish free templates only.
    if (freeTemplates.length > 0) {
        await ensureRelease();
        await uploadTemplates(freeTemplates);
    } else {
        console.log(
            "[Makelier][Publish] No free templates. Skipping Release upload."
        );
    }

    // 6. Update public Registry with free templates only.
    await updateRegistry(freeTemplates);

    // 7. Commit and push Registry changes.
    await commitAndPushRegistry();

    console.log(
        "\n[Makelier][Publish] Publishing completed successfully.\n"
    );
}

main().catch((error) => {
    console.error("\n[Makelier][Publish] Publishing failed:\n");
    console.error(error);
    process.exitCode = 1;
});
