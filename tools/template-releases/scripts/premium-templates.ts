
/**
 * Premium template utilities.
 */

/**
 * Extract Premium template names from .gitignore content.
 *
 * Everything after the "# Premium" marker is considered
 * part of the Premium section until EOF.
 */
export function parsePremiumTemplateNames(content: string): Set<string> {
    const lines = content.split(/\r?\n/);

    const premiumIndex = lines.findIndex((line) =>
        /^\s*#\s*premium\s*$/i.test(line)
    );

    if (premiumIndex === -1) {
        return new Set();
    }

    const premiumNames = new Set<string>();

    for (const line of lines.slice(premiumIndex + 1)) {
        const trimmed = line.trim();

        // Ignore empty lines and comments.
        if (!trimmed || trimmed.startsWith("#")) {
            continue;
        }

        // Match sites/<template-name>/...
        const match = trimmed.match(/^\/?sites\/([^/*?]+)(?:\/|$)/);

        if (match) {
            premiumNames.add(match[1]);
        }
    }

    return premiumNames;
}

/**
 * Filter Premium templates from a template list.
 */
export function filterFreeTemplates<T extends { name: string }>(
    templates: T[],
    premiumNames: Set<string>
): T[] {
    return templates.filter(
        (template) => !premiumNames.has(template.name)
    );
}
