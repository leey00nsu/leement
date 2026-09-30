import { tokens } from "@leement/tokens";

export type FoundationMode = "light" | "dark";
export type FoundationCategory = "color" | "typography" | "spacing" | "radius" | "shadow" | "motion";
export type PreviewOverrides = {
  shared: Record<string, string>;
  light: Record<string, string>;
  dark: Record<string, string>;
};

export const PREVIEW_STORAGE_KEY = "leement-foundation-preview-v1";

export const emptyPreview = (): PreviewOverrides => ({ shared: {}, light: {}, dark: {} });

type FieldKind = "family" | "size" | "weight" | "line-height" | "spacing" | "radius" | "shadow" | "duration";
export type SharedField = {
  key: string;
  label: string;
  category: Exclude<FoundationCategory, "color">;
  kind: FieldKind;
  defaultValue: string;
};

const primitive = tokens.primitive;
const shared = (key: string, label: string, category: SharedField["category"], kind: FieldKind, defaultValue: string): SharedField => ({ key, label, category, kind, defaultValue });

export const sharedFields: SharedField[] = [
  shared("--lm-typography-family-sans", "Body font", "typography", "family", primitive.typography.family.sans),
  shared("--lm-typography-family-brand", "Brand font", "typography", "family", primitive.typography.family.brand),
  shared("--lm-typography-family-mono", "Mono font", "typography", "family", primitive.typography.family.mono),
  ...Object.entries(primitive.typography.size).map(([name, value]) => shared(`--lm-typography-size-${name}`, `${name} size`, "typography", "size", value)),
  ...Object.entries(primitive.typography.weight).map(([name, value]) => shared(`--lm-typography-weight-${name}`, `${name} weight`, "typography", "weight", value)),
  ...Object.entries(primitive.typography.lineHeight).map(([name, value]) => shared(`--lm-typography-line-height-${name}`, `${name} line height`, "typography", "line-height", value)),
  shared("--lm-spacing-1", "Base spacing step", "spacing", "spacing", primitive.spacing["1"]),
  ...(["sm", "md", "lg", "xl"] as const).map((name) => shared(`--lm-radius-${name}`, `${name} radius`, "radius", "radius", primitive.radius[name])),
  ...(["sm", "md", "lg"] as const).map((name) => shared(`--lm-shadow-${name}`, `${name} shadow`, "shadow", "shadow", primitive.shadow[name])),
  ...(["fast", "normal", "slow"] as const).map((name) => shared(`--lm-motion-duration-${name}`, `${name} duration`, "motion", "duration", primitive.motion.duration[name])),
];

const sharedByKey = new Map(sharedFields.map((field) => [field.key, field]));

function cssName(path: string): string {
  return path.replaceAll(".", "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function get(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => (current as Record<string, unknown> | undefined)?.[key], source);
}

function resolveColor(value: string, mode: FoundationMode, depth = 0): string {
  if (!value.startsWith("{") || !value.endsWith("}")) return value;
  if (depth > 8) throw new Error(`Circular color token reference: ${value}`);
  const path = value.slice(1, -1);
  const next = get(tokens.primitive, path) ?? get(tokens.semantic[mode], path);
  if (typeof next !== "string") throw new Error(`Unknown color token reference: ${value}`);
  return resolveColor(next, mode, depth + 1);
}

function flattenColors(source: unknown, prefix: string[] = []): Array<[string, string]> {
  if (typeof source === "string") return [[`--lm-color-${cssName(prefix.join("."))}`, source]];
  if (!source || typeof source !== "object") return [];
  return Object.entries(source).flatMap(([key, value]) => flattenColors(value, [...prefix, key]));
}

export type ColorField = { key: string; label: string; group: string; light: string; dark: string };
const lightColors = new Map(flattenColors(tokens.semantic.light.color));
const darkColors = new Map(flattenColors(tokens.semantic.dark.color));
export const colorFields: ColorField[] = [...lightColors].map(([key, light]) => {
  const dark = darkColors.get(key);
  if (!dark) throw new Error(`Missing dark color token: ${key}`);
  const path = key.slice("--lm-color-".length);
  const group = path.split("-")[0] ?? "other";
  return { key, label: path.replaceAll("-", " "), group, light: resolveColor(light, "light"), dark: resolveColor(dark, "dark") };
});
const colorByKey = new Map(colorFields.map((field) => [field.key, field]));

export function defaultValue(mode: FoundationMode | "shared", key: string): string | undefined {
  if (mode === "shared") return sharedByKey.get(key)?.defaultValue;
  return colorByKey.get(key)?.[mode];
}

function validLength(value: string, minPx: number, maxPx: number): boolean {
  const match = /^(\d+(?:\.\d+)?)(rem|px)$/.exec(value);
  if (!match) return false;
  const px = Number(match[1]) * (match[2] === "rem" ? 16 : 1);
  return Number.isFinite(px) && px >= minPx && px <= maxPx;
}

// A bounded list of family names only: no CSS functions, escapes or declarations.
function validFamily(value: string): boolean {
  const name = '(?:[\\p{L}_-][\\p{L}\\p{N}_ -]*|"[\\p{L}\\p{N}_ -]+"|\'[\\p{L}\\p{N}_ -]+\')';
  const syntax = new RegExp(`^${name}(?:\\s*,\\s*${name})*$`, "u");
  return syntax.test(value) && (typeof CSS === "undefined" || !CSS.supports || CSS.supports("font-family", value));
}

export function validPreviewValue(mode: FoundationMode | "shared", key: string, value: string): boolean {
  if (value.length > 160 || value !== value.trim()) return false;
  if (mode !== "shared") {
    if (!colorByKey.has(key)) return false;
    const syntax = /^(?:#[\da-fA-F]{3,4}|#[\da-fA-F]{6}|#[\da-fA-F]{8}|(?:rgb|rgba|hsl|hsla|oklch)\([\d.% ,/+-]+\))$/.test(value);
    return syntax && (typeof CSS === "undefined" || !CSS.supports || CSS.supports("color", value));
  }
  const field = sharedByKey.get(key);
  if (!field) return false;
  if (field.kind === "family") return validFamily(value);
  if (field.kind === "size") return validLength(value, 8, 64);
  if (field.kind === "spacing") return validLength(value, 2, 12);
  if (field.kind === "radius") return validLength(value, 0, 48) || value === "0";
  if (field.kind === "weight") return /^(?:[1-9]00)$/.test(value);
  if (field.kind === "line-height") return /^(?:1(?:\.\d{1,2})?|2(?:\.[0-5]\d?)?)$/.test(value);
  if (field.kind === "duration") {
    const match = /^(\d{1,4})(ms|s)$/.exec(value);
    return !!match && Number(match[1]) * (match[2] === "s" ? 1000 : 1) <= 2000;
  }
  if (field.kind === "shadow") return value === "none" || /^(?:0|-?\d+px)\s+-?\d+px\s+\d+px\s+rgb\(0 0 0 \/ (?:0(?:\.\d+)?|1(?:\.0+)?)\)$/.test(value);
  return false;
}

export function withPreviewValue(previous: PreviewOverrides, mode: FoundationMode | "shared", key: string, value: string): PreviewOverrides | null {
  if (!validPreviewValue(mode, key, value)) return null;
  const next = { ...previous, [mode]: { ...previous[mode] } };
  if (value === defaultValue(mode, key)) delete next[mode][key];
  else next[mode][key] = value;
  return next;
}

export function parsePreview(raw: string | null): PreviewOverrides {
  if (!raw) return emptyPreview();
  try {
    const source: unknown = JSON.parse(raw);
    if (!source || typeof source !== "object") return emptyPreview();
    const result = emptyPreview();
    for (const mode of ["shared", "light", "dark"] as const) {
      const entries = (source as Record<string, unknown>)[mode];
      if (!entries || typeof entries !== "object" || Array.isArray(entries)) continue;
      for (const [key, value] of Object.entries(entries)) {
        if (typeof value === "string" && validPreviewValue(mode, key, value) && value !== defaultValue(mode, key)) result[mode][key] = value;
      }
    }
    return result;
  } catch {
    return emptyPreview();
  }
}

export function previewChangeCount(preview: PreviewOverrides): number {
  return Object.values(preview).reduce((sum, values) => sum + Object.keys(values).length, 0);
}

function sharedDeclarations(values: Record<string, string>): Array<[string, string]> {
  const declarations: Array<[string, string]> = Object.entries(values);
  for (const key of Object.keys(values)) {
    if (key === "--lm-spacing-1") {
      for (const name of Object.keys(primitive.spacing)) {
        if (name !== "0" && name !== "1") declarations.push([`--lm-spacing-${name}`, `calc(var(--lm-spacing-1) * ${name})`]);
      }
      declarations.push(["--spacing", "var(--lm-spacing-1)"]);
    } else if (key.startsWith("--lm-typography-size-")) {
      declarations.push([key.replace("--lm-typography-size-", "--text-"), `var(${key})`]);
    } else if (key.startsWith("--lm-typography-family-")) {
      declarations.push([key.replace("--lm-typography-family-", "--font-"), `var(${key})`]);
    } else if (key.startsWith("--lm-typography-weight-")) {
      const name = key.replace("--lm-typography-weight-", "");
      declarations.push([`--font-weight-${name === "regular" ? "normal" : name}`, `var(${key})`]);
    } else if (key.startsWith("--lm-typography-line-height-")) {
      declarations.push([key.replace("--lm-typography-line-height-", "--leading-"), `var(${key})`]);
    } else if (key.startsWith("--lm-shadow-")) {
      declarations.push([key.replace("--lm-shadow-", "--shadow-"), `var(${key})`]);
    } else if (key === "--lm-motion-duration-normal") {
      declarations.push(["--default-transition-duration", "var(--lm-motion-duration-normal)"]);
    }
  }
  return declarations;
}

function block(selector: string, entries: Array<[string, string]>): string {
  return `${selector} {\n${entries.map(([name, value]) => `  ${name}: ${value};`).join("\n")}\n}`;
}

export function previewCss(preview: PreviewOverrides): string {
  const blocks: string[] = [];
  const common = sharedDeclarations(preview.shared);
  if (common.length) blocks.push(block(":root", common));
  if (Object.keys(preview.light).length) blocks.push(block(':root:not(.dark):not([data-lm-theme="dark"]), [data-lm-theme="light"]', Object.entries(preview.light)));
  if (Object.keys(preview.dark).length) blocks.push(block('.dark, [data-lm-theme="dark"]', Object.entries(preview.dark)));
  if (Object.keys(preview.shared).some((key) => key.startsWith("--lm-motion-duration-"))) {
    blocks.push(`@media (prefers-reduced-motion: reduce) {\n${block(":root", [
      ["--lm-motion-duration-fast", "0ms"],
      ["--lm-motion-duration-normal", "0ms"],
      ["--lm-motion-duration-slow", "0ms"],
      ["--default-transition-duration", "0ms"],
    ]).split("\n").map((line) => `  ${line}`).join("\n")}\n}`);
  }
  return blocks.join("\n\n");
}
