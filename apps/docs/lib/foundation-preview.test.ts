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
  it("supports bounded cycles and safe easing while preserving old saved duration values", () => {
    let state = withPreviewValue(emptyPreview(), "shared", "--lm-motion-cycle-brand-surface", "4.5s")!;
    state = withPreviewValue(state, "shared", "--lm-motion-easing-reveal", "cubic-bezier(0.22, 1, 0.36, 1)")!;
    const css = previewCss(state);
    expect(parsePreview(JSON.stringify(state))).toEqual(state);
    expect(css).toContain("--lm-motion-cycle-brand-surface: 4.5s");
    expect(css).toContain("--lm-motion-duration-expand: 0ms");
    expect(css).not.toContain("--lm-motion-cycle-brand-surface: 0ms");
    expect(validPreviewValue("shared", "--lm-motion-cycle-brand-text", "0ms")).toBe(false);
    expect(validPreviewValue("shared", "--lm-motion-cycle-rotate", "11s")).toBe(false);
    expect(validPreviewValue("shared", "--lm-motion-cycle-marquee", "24s")).toBe(true);
    expect(validPreviewValue("shared", "--lm-motion-cycle-marquee", "61s")).toBe(false);
    expect(validPreviewValue("shared", "--lm-motion-easing-reveal", "cubic-bezier(2, 1, 0.36, 1)")).toBe(false);
    expect(validPreviewValue("shared", "--lm-motion-easing-reveal", "linear; } body { display:none")).toBe(false);
    expect(parsePreview(JSON.stringify({ shared: { "--lm-motion-duration-normal": "300ms" } })).shared).toEqual({ "--lm-motion-duration-normal": "300ms" });
  });
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
      ["--lm-typography-weight-regular", "500"],
      ["--lm-radius-md", "1rem"],
      ["--lm-shadow-sm", "0 4px 12px rgb(0 0 0 / 0.10)"],
      ["--lm-motion-duration-normal", "300ms"],
    ] as Array<[string, string]>) state = withPreviewValue(state, "shared", key, value)!;
    const css = previewCss(state);
    expect(css).toContain("--spacing: var(--lm-spacing-1)");
    expect(css).toContain("--lm-spacing-4: calc(var(--lm-spacing-1) * 4)");
    expect(css).toContain("--text-sm: var(--lm-typography-size-sm)");
    expect(css).toContain("--font-weight-normal: var(--lm-typography-weight-regular)");
    expect(css).toContain("--lm-radius-md: 1rem");
    expect(css).toContain("--shadow-sm: var(--lm-shadow-sm)");
    expect(css).toContain("--default-transition-duration: var(--lm-motion-duration-normal)");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("--default-transition-duration: 0ms");
  });

  it("persists custom body and brand families independently and exports their aliases", () => {
    const body = "\"My Body Font\", sans-serif";
    const brand = "Georgia, Cambria, serif";
    let state = withPreviewValue(emptyPreview(), "shared", "--lm-typography-family-sans", body)!;
    state = withPreviewValue(state, "shared", "--lm-typography-family-brand", brand)!;
    const restored = parsePreview(JSON.stringify(state));
    expect(restored.shared["--lm-typography-family-sans"]).toBe(body);
    expect(restored.shared["--lm-typography-family-brand"]).toBe(brand);
    expect(previewCss(restored)).toContain("--font-brand: var(--lm-typography-family-brand)");
    expect(previewCss(restored)).toContain("--font-sans: var(--lm-typography-family-sans)");
    expect(defaultValue("shared", "--lm-typography-family-brand")).toContain("Paperlogy");
    expect(withPreviewValue(restored, "shared", "--lm-typography-family-brand", defaultValue("shared", "--lm-typography-family-brand")!)?.shared).toEqual({ "--lm-typography-family-sans": body });
    // Old preview data has no brand key and still restores unchanged.
    expect(parsePreview(JSON.stringify({ shared: { "--lm-spacing-1": "0.375rem" } })).shared).toEqual({ "--lm-spacing-1": "0.375rem" });
  });

  it("accepts named custom families and rejects CSS functions or injected rules", () => {
    const key = "--lm-typography-family-brand";
    expect(validPreviewValue("shared", key, "\"나의 브랜드\", sans-serif")).toBe(true);
    expect(validPreviewValue("shared", key, "'Acme Font', system-ui")).toBe(true);
    for (const value of ["Arial; color: red", "Arial} body {display:none}", "url(https://example.com/font)", "var(--other)", "Arial\\3b color:red", "\"Unclosed", "", "Arial/*comment*/"]) {
      expect(validPreviewValue("shared", key, value)).toBe(false);
      expect(parsePreview(JSON.stringify({ shared: { [key]: value } })).shared).toEqual({});
    }
  });
});
