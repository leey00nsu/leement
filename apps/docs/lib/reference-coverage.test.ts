import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import baseline from "../../../docs/features/ASDHZYC4MRGK-docs-reference-parity/artifacts/reference-baseline.json";
import baseMapping from "../../../docs/features/ASDHZYC4MRGK-docs-reference-parity/artifacts/base-reference-correspondence.json";
import blockMapping from "../../../docs/features/ASDHZYC4MRGK-docs-reference-parity/artifacts/block-reference-correspondence.json";
import registry from "../../../registry.json";
import { items } from "./items";
import { getAdditionalExamples } from "./example-catalog";
import { apiReferences } from "./api-reference";
import { usageGuides } from "./usage-guides";
import { chartRecipes, chartCategories } from "./chart-catalog";
import { hasPreviewMotion } from "./preview-config";

describe("fixed public upstream scope", () => {
  it("maps every in-scope Base preview context to actual render/copy source and Usage/API", async () => {
    const pages = baseline.shadcnBaseDocs.filter(
      (page) => page.name !== "native-select",
    );
    expect(pages).toHaveLength(63);
    expect(baseMapping.correspondence).toHaveLength(456);
    expect(
      new Set(baseMapping.correspondence.map((row) => row.file)).size,
    ).toBe(453);
    for (const page of pages) {
      const mappings = baseMapping.correspondence.filter(
        (row) => row.upstreamPage === page.name,
      );
      expect(mappings.map((row) => row.upstreamExample)).toEqual(page.examples);
      for (const row of mappings) {
        const name = row.item as keyof typeof items;
        expect(items[name], page.name).toBeTruthy();
        expect(apiReferences[name]?.parts.length, page.name).toBeGreaterThan(0);
        expect(
          getAdditionalExamples(name).some(
            (example) => example.file === row.file,
          ),
        ).toBe(true);
        const source = await readFile(
          `apps/docs/examples/${row.file}.tsx`,
          "utf8",
        );
        expect(source).toContain("export default");
        expect(source).not.toContain("native-select");
      }
    }
    // Usage is shown once; example-specific instructions belong with that example.
    const normalize = (title: string) =>
      title.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/s$/, "");
    for (const [name, sections] of Object.entries(usageGuides)) {
      const exampleTitles = getAdditionalExamples(name as keyof typeof items)
        .map((example) => normalize(example.title));
      for (const section of sections) {
        expect(["usage", "composition", "compositiontree", "features"])
          .not.toContain(normalize(section.title));
        expect(exampleTitles).not.toContain(normalize(section.title));
        for (const block of section.blocks) {
          expect(block.value).not.toMatch(/@Leement\/react|\/docs\/react\/|\/docs\/utils\/shimmer/);
        }
      }
    }
    for (const name of Object.keys(items) as (keyof typeof items)[]) {
      for (const example of getAdditionalExamples(name)) {
        expect(example.description).not.toMatch(/<ComponentPreview|@Leement\/react|\/docs\/components\/|\/docs\/utils\/shimmer|``/);
      }
    }
  });

  it("maps all 28 public Kibo blocks to real source, APIs and canonical examples", async () => {
    expect(blockMapping).toHaveLength(28);
    expect(new Set(blockMapping.map((row) => row.upstream.name))).toEqual(
      new Set(baseline.kiboBlocks.map((block) => block.name)),
    );
    for (const row of blockMapping) {
      const entry = registry.items.find(
        (item) => item.name === row.registryItem,
      );
      expect(entry?.type).toBe("registry:block");
      expect(entry?.files.some((file) => file.path === row.source)).toBe(true);
      const source = await readFile(row.source, "utf8");
      expect(source).toContain("Permission is hereby granted");
      expect(source).not.toMatch(/from ["']next\//);
      const example = await readFile(row.example, "utf8");
      expect(example).toContain(`/registry/blocks/${row.registryItem}`);
      expect(
        apiReferences[row.registryItem as keyof typeof items]?.parts.length,
      ).toBeGreaterThan(0);
      expect(row.contracts.length).toBeGreaterThan(0);
    }
  });

  it("keeps all 70 distinct chart recipes in seven categories with source/dependencies/Motion/data", async () => {
    expect(chartRecipes.map((recipe) => recipe.name)).toEqual(
      baseline.charts.map((recipe) => recipe.name),
    );
    expect(
      chartCategories.map(
        (category) =>
          chartRecipes.filter((recipe) => recipe.category === category).length,
      ),
    ).toEqual([10, 10, 10, 11, 14, 6, 9]);
    expect(new Set(chartRecipes.map((recipe) => recipe.route)).size).toBe(70);
    for (const recipe of chartRecipes) {
      const entry = registry.items.find((item) => item.name === recipe.name)!;
      expect(entry.type).toBe("registry:block");
      expect(entry.registryDependencies).toContain("@leement/chart");
      expect(entry.registryDependencies).toContain("@leement/chart-data-table");
      expect(entry.dependencies).toContain("recharts@3.8.0");
      expect(hasPreviewMotion(recipe.name)).toBe(true);
      const source = await readFile(recipe.registrySource, "utf8");
      expect(source).toContain(`export function ${recipe.export}`);
      expect(source).toContain("<ChartDataTable");
      for (const tag of source.matchAll(
        /<(?:Area|Bar|Line|Pie|Radar|RadialBar)\s[^>]*>/g,
      )) {
        expect(tag[0], recipe.name).toContain("isAnimationActive={false}");
      }
    }
  });

  it("provides part/prop/type metadata for every existing public docs item", () => {
    expect(Object.keys(apiReferences).length).toBe(Object.keys(items).length);
    for (const name of Object.keys(items) as (keyof typeof items)[]) {
      const api = apiReferences[name]!;
      expect(api.parts.length, name).toBeGreaterThan(0);
      for (const part of api.parts) {
        expect(part.description.trim(), `${name}.${part.name}`).toBeTruthy();
        for (const prop of part.props) {
          expect(
            prop.type.trim(),
            `${name}.${part.name}.${prop.name}`,
          ).toBeTruthy();
          expect(prop.type).not.toMatch(/\/Volumes\/|\/Users\/|node_modules/);
          expect(prop.description.trim()).toBeTruthy();
        }
      }
    }
  });
});
