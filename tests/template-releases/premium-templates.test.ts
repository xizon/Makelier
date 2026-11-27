
import { describe, expect, it } from "vitest";

import {
    parsePremiumTemplateNames,
    filterFreeTemplates,
} from "../../tools/template-releases/scripts/premium-templates.ts";

describe("parsePremiumTemplateNames", () => {
    it.each([
        "# Premium",
        "#Premium",
        "# premium",
        "#   PREMIUM",
    ])("recognizes marker: %s", (marker) => {
        const result = parsePremiumTemplateNames(
            `${marker}\nsites/template-pro/`
        );

        expect([...result]).toEqual(["template-pro"]);
    });

    it("extracts template names from sites paths", () => {
        const content = `
# Premium
sites/_official/
sites/product-epic/public/
sites/product-epic/src/
sites/template-pro/
`;

        const result = parsePremiumTemplateNames(content);

        expect([...result].sort()).toEqual([
            "_official",
            "product-epic",
            "template-pro",
        ]);
    });

    it("continues reading until EOF, including after other comments", () => {
        const content = `
# Premium
sites/template-a/

# Other settings
sites/template-b/src/
`;

        const result = parsePremiumTemplateNames(content);

        expect([...result].sort()).toEqual([
            "template-a",
            "template-b",
        ]);
    });

    it("ignores empty lines and comments", () => {
        const content = `
# Premium

# This is a comment
sites/template-a/

   
# Another comment
`;

        const result = parsePremiumTemplateNames(content);

        expect([...result]).toEqual(["template-a"]);
    });

    it("does not extract paths outside the sites directory", () => {
        const content = `
# Premium
dist/
packages/template-a/
sites/template-b/src/
`;

        const result = parsePremiumTemplateNames(content);

        expect([...result]).toEqual(["template-b"]);
    });

    it("returns an empty set when Premium marker is missing", () => {
        const content = `
node_modules/
sites/template-a/
`;

        const result = parsePremiumTemplateNames(content);

        expect(result.size).toBe(0);
    });

    it("does not match paths with wildcard template names", () => {
        const content = `
# Premium
sites/*/
sites/template-a/
`;

        const result = parsePremiumTemplateNames(content);

        expect([...result]).toEqual(["template-a"]);
    });
});

describe("filterFreeTemplates", () => {
    const templates = [
        { name: "template-a", filename: "template-a.zip" },
        { name: "template-b", filename: "template-b.zip" },
        { name: "product-epic", filename: "product-epic.zip" },
    ];

    it("filters Premium templates by exact name", () => {
        const result = filterFreeTemplates(
            templates,
            new Set(["product-epic"])
        );

        expect(result.map((template) => template.name)).toEqual([
            "template-a",
            "template-b",
        ]);
    });

    it("does not filter templates with partial name matches", () => {
        const result = filterFreeTemplates(
            [
                { name: "product-epic", filename: "product-epic.zip" },
                {
                    name: "product-epic-lite",
                    filename: "product-epic-lite.zip",
                },
            ],
            new Set(["product-epic"])
        );

        expect(result.map((template) => template.name)).toEqual([
            "product-epic-lite",
        ]);
    });

    it("returns all templates when there are no Premium names", () => {
        const result = filterFreeTemplates(
            templates,
            new Set()
        );

        expect(result).toEqual(templates);
    });

    it("returns an empty array when all templates are Premium", () => {
        const result = filterFreeTemplates(
            templates,
            new Set([
                "template-a",
                "template-b",
                "product-epic",
            ])
        );

        expect(result).toEqual([]);
    });
});
