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
    for (const role of ["surface-default", "surface-raised", "surface-muted", "status-success", "status-warning", "brand-text", "data-accent", "focus-ring", "media-foreground", "media-scrim", "syntax-keyword", "syntax-string", "syntax-number", "syntax-comment"]) {
      expect(light).toContain(`--lm-color-${role}:`);
      expect(dark).toContain(`--lm-color-${role}:`);
    }
  });

  it("derives shadcn names from Leement roles and supports existing dark-class apps", () => {
    expect(css).toContain("--background: var(--lm-color-background-default)");
    expect(css).toContain("--success: var(--lm-color-status-success)");
    expect(css).toContain("--muted: var(--lm-color-surface-muted)");
    expect(css).toContain("--data-accent: var(--lm-color-data-accent)");
    expect(css).toContain('.dark, [data-lm-theme="dark"]');
    expect(css).toContain("--radius-xl: var(--lm-radius-xl)");
  });

  it("keeps brand overrides connected to focus, data and reduced-motion examples", () => {
    const light = css.split(':root, [data-lm-theme="light"] {')[1].split('color-scheme: light;')[0];
    const dark = css.split('.dark, [data-lm-theme="dark"] {')[1].split('color-scheme: dark;')[0];
    for (const mode of [light, dark]) {
      expect(mode).toContain("--lm-color-focus-ring: var(--lm-color-brand-focus)");
      expect(mode).toContain("--lm-color-data-accent: var(--lm-color-brand-accent)");
      expect(mode).toContain("--lm-color-data-accent-foreground: var(--lm-color-brand-accent-foreground)");
      expect(mode).toContain("--lm-color-brand-gradient-middle:");
    }
    expect(css).toContain(".lm-brand-skeleton");
    expect(css).toContain(".lm-brand-gradient-text");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("@media (forced-colors: active)");
  });
});
