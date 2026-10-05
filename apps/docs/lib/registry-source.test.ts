import { readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import {
  getAdditionalExampleCodes,
  toConsumerExampleCode,
} from "./example-source";
import { additionalExamples } from "./example-catalog";

describe("copyable docs example source", () => {
  it("reads the exact source file rendered by the named preview", async () => {
    const docsPath = path.resolve("apps/docs");
    const original = await readFile(
      path.join(docsPath, "examples/select-groups.tsx"),
      "utf8",
    );
    const cwd = vi.spyOn(process, "cwd").mockReturnValue(docsPath);
    try {
      const examples = await getAdditionalExampleCodes("select");
      const groups = examples.find(
        (example) => example.file === "select-groups",
      );
      expect(groups?.exampleCode).toBe(
        original.replaceAll("../../../registry/ui/", "@/components/ui/"),
      );
      expect(groups?.exampleCode).toContain("SelectGroup");
      expect(groups?.installCommand).toBe(
        "npx shadcn@latest add @leement/label @leement/select",
      );
    } finally {
      cwd.mockRestore();
    }
  });
  it("rewrites only quoted registry imports while preserving code and other paths", () => {
    const source = `import { Input } from "../../../registry/ui/input";\nimport { PageHeader } from '../../../registry/patterns/page-header';\nimport { SettingsSection } from "../../../registry/blocks/settings-section";\nimport { cn } from "../../../registry/lib/utils";\nconst message = "registry/ui/input";`;
    expect(toConsumerExampleCode(source)).toBe(
      `import { Input } from "@/components/ui/input";\nimport { PageHeader } from '@/components/patterns/page-header';\nimport { SettingsSection } from "@/components/blocks/settings-section";\nimport { cn } from "@/lib/utils";\nconst message = "registry/ui/input";`,
    );
  });
  it("does not read files for an item without additional examples", async () => {
    expect(await getAdditionalExampleCodes("settings-section")).toEqual([]);
  });
  it("rejects a catalog path outside the examples directory", async () => {
    additionalExamples.kbd = [
      {
        id: "unsafe",
        title: "Invalid",
        description: "Invalid",
        file: "../package",
      },
    ];
    try {
      await expect(getAdditionalExampleCodes("kbd")).rejects.toThrow(
        "Invalid example file",
      );
    } finally {
      delete additionalExamples.kbd;
    }
  });
});

it("ships a complete source dependency graph without the removed native selector", async () => {
  type Entry = { name: string; dependencies?: string[]; registryDependencies?: string[]; files: { path: string }[] };
  const registry = JSON.parse(await readFile("registry.json", "utf8")) as { items: Entry[] };
  const byName = new Map(registry.items.map((entry) => [entry.name, entry]));
  expect(byName.has("native-select")).toBe(false);
  function hasMotion(entry: Entry, visited = new Set<string>()): boolean {
    if (visited.has(entry.name)) return false;
    visited.add(entry.name);
    return Boolean(entry.dependencies?.some((dependency) => /^motion(?:@|$)/.test(dependency))) ||
      Boolean(entry.registryDependencies?.some((dependency) => {
        const child = byName.get(dependency.replace("@leement/", ""));
        return child && hasMotion(child, visited);
      }));
  }
  for (const entry of registry.items) {
    for (const file of entry.files) {
      const source = await readFile(file.path, "utf8");
      for (const match of source.matchAll(/from\s+["']@\/(?:components\/(?:ui|patterns|blocks)|lib)\/([a-z0-9-]+)["']/g)) {
        if (match[1] && match[1] !== entry.name && byName.has(match[1])) {
          expect(entry.registryDependencies, `${entry.name} requires ${match[1]}`).toContain(`@leement/${match[1]}`);
        }
      }
      if (/from\s+["']motion(?:\/react)?["']/.test(source)) {
        expect(hasMotion(entry), `${entry.name} requires Motion at installation`).toBe(true);
      }
      expect(source).not.toContain("native-select");
    }
  }
});
