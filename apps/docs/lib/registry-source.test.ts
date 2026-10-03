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
    expect(await getAdditionalExampleCodes("kbd")).toEqual([]);
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
