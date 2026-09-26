import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";

const buildPath = resolve(process.cwd(), "packages/theme/build.mjs");
const cssPath = resolve(process.cwd(), "packages/theme/dist/index.css");
let css;

beforeAll(() => {
  execFileSync(process.execPath, [buildPath]);
  css = readFileSync(cssPath, "utf8");
});

describe("Leement web theme contract", () => {
  it("provides the same semantic roles in light and dark", () => {
    const light = css.split(':root, [data-lm-theme="light"] {')[1].split('color-scheme: light;')[0];
    const dark = css.split('.dark, [data-lm-theme="dark"] {')[1].split('color-scheme: dark;')[0];
    for (const role of ["surface-default", "surface-raised", "status-success", "status-warning", "data-accent", "focus-ring"]) {
      expect(light).toContain(`--lm-color-${role}:`);
      expect(dark).toContain(`--lm-color-${role}:`);
    }
  });

  it("derives shadcn names from Leement roles and supports existing dark-class apps", () => {
    expect(css).toContain("--background: var(--lm-color-background-default)");
    expect(css).toContain("--success: var(--lm-color-status-success)");
    expect(css).toContain("--data-accent: var(--lm-color-data-accent)");
    expect(css).toContain('.dark, [data-lm-theme="dark"]');
    expect(css).toContain("--radius-xl: var(--lm-radius-xl)");
  });
});
