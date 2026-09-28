import { describe, expect, it } from "vitest";
import {
  colorFields,
  defaultValue,
  emptyPreview,
  parsePreview,
  previewChangeCount,
  previewCss,
  validPreviewValue,
  withPreviewValue,
} from "./foundation-preview";

describe("Foundations preview overrides", () => {
  const brand = colorFields.find((field) => field.key === "--lm-color-brand-accent");
  if (!brand) throw new Error("Missing brand accent token");

  it("keeps light and dark edits independent and exports changed values only", () => {
    const light = withPreviewValue(emptyPreview(), "light", brand.key, "#123456");
    expect(light).not.toBeNull();
    const dark = withPreviewValue(light!, "dark", brand.key, "#abcdef")!;
    expect(previewChangeCount(dark)).toBe(2);
    const css = previewCss(dark);
    expect(css).toContain(':root:not(.dark):not([data-lm-theme="dark"])');
    expect(css).toContain('#123456');
    expect(css).toContain('.dark, [data-lm-theme="dark"]');
    expect(css).toContain('#abcdef');
    expect(css).not.toContain("--lm-color-background-default");
    expect(withPreviewValue(dark, "light", brand.key, defaultValue("light", brand.key)!)?.light).toEqual({});
    expect(withPreviewValue(dark, "light", brand.key, defaultValue("light", brand.key)!)?.dark[brand.key]).toBe("#abcdef");
  });

  it("rejects unknown keys, CSS injection and corrupted stored data", () => {
    expect(validPreviewValue("light", brand.key, "red; } body { display:none")).toBe(false);
    expect(validPreviewValue("shared", "--unknown", "12px")).toBe(false);
    expect(parsePreview("not json")).toEqual(emptyPreview());
    const parsed = parsePreview(JSON.stringify({
      light: { [brand.key]: "#123456", "--unknown": "#123456" },
      dark: { [brand.key]: "#123456; color:red" },
      shared: { "--lm-spacing-1": "100rem" },
    }));
    expect(parsed.light).toEqual({ [brand.key]: "#123456" });
    expect(parsed.dark).toEqual({});
    expect(parsed.shared).toEqual({});
  });

  it("bridges editable values to the actual Tailwind utilities", () => {
    let state = emptyPreview();
    for (const [key, value] of [
      ["--lm-spacing-1", "0.375rem"],
      ["--lm-typography-size-sm", "1rem"],
      ["--lm-radius-md", "1rem"],
      ["--lm-shadow-sm", "0 4px 12px rgb(0 0 0 / 0.10)"],
      ["--lm-motion-duration-normal", "300ms"],
    ] as Array<[string, string]>) state = withPreviewValue(state, "shared", key, value)!;
    const css = previewCss(state);
    expect(css).toContain("--spacing: var(--lm-spacing-1)");
    expect(css).toContain("--lm-spacing-4: calc(var(--lm-spacing-1) * 4)");
    expect(css).toContain("--text-sm: var(--lm-typography-size-sm)");
    expect(css).toContain("--lm-radius-md: 1rem");
    expect(css).toContain("--shadow-sm: var(--lm-shadow-sm)");
    expect(css).toContain("--default-transition-duration: var(--lm-motion-duration-normal)");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("--default-transition-duration: 0ms");
  });
});
