import { readFile, writeFile, mkdir } from "node:fs/promises";
import { URL } from "node:url";
const { primitive, semantic } = JSON.parse(await readFile(new URL("../tokens/src/tokens.json", import.meta.url), "utf8"));
const get = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);
const cssName = (path) => path.replaceAll(".", "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
const resolve = (value, mode) => {
  if (typeof value !== "string" || !value.startsWith("{") || !value.endsWith("}")) return value;
  const path = value.slice(1, -1);
  const primitiveValue = get(primitive, path);
  if (typeof primitiveValue === "string") return primitiveValue;
  if (mode && typeof get(semantic[mode], path) === "string") return `var(--lm-${cssName(path)})`;
  throw new Error(`Unknown token reference: ${value}`);
};
const flatten = (object, prefix = [], mode) => Object.entries(object).flatMap(([key, value]) => typeof value === "object" ? flatten(value, [...prefix, key], mode) : [[cssName([...prefix, key].join(".")), resolve(value, mode)]]);
const lines = (entries, prefix) => entries.map(([key, value]) => `  --${prefix}-${key}: ${value};`).join("\n");
const common = Object.entries(primitive).filter(([key]) => key !== "color").flatMap(([key, value]) => flatten(value, [key]));
const colors = (mode) => flatten(semantic[mode].color, ["color"], mode);
const compatibility = `  /* shadcn compatibility: aliases only */
  --background: var(--lm-color-background-default);
  --foreground: var(--lm-color-foreground-default);
  --card: var(--lm-color-surface-default);
  --card-foreground: var(--lm-color-foreground-default);
  --popover: var(--lm-color-surface-raised);
  --popover-foreground: var(--lm-color-foreground-default);
  --primary: var(--lm-color-action-primary);
  --primary-foreground: var(--lm-color-foreground-inverse);
  --secondary: var(--lm-color-action-secondary);
  --secondary-foreground: var(--lm-color-foreground-default);
  --muted: var(--lm-color-background-subtle);
  --muted-foreground: var(--lm-color-foreground-muted);
  --accent: var(--lm-color-action-secondary);
  --accent-foreground: var(--lm-color-foreground-default);
  --destructive: var(--lm-color-action-danger);
  --success: var(--lm-color-status-success);
  --success-foreground: var(--lm-color-status-success-foreground);
  --warning: var(--lm-color-status-warning);
  --warning-foreground: var(--lm-color-status-warning-foreground);
  --data-accent: var(--lm-color-data-accent);
  --data-accent-foreground: var(--lm-color-data-accent-foreground);
  --border: var(--lm-color-border-default);
  --input: var(--lm-color-border-default);
  --ring: var(--lm-color-focus-ring);
  --radius: var(--lm-radius-md);`;
const sheet = `/* Generated from @leement/tokens. Edit packages/tokens/src/tokens.json. */
:root, [data-lm-theme="light"] {\n${lines([...common, ...colors("light")], "lm")}\n${compatibility}\n  color-scheme: light;\n}
.dark, [data-lm-theme="dark"] {\n${lines(colors("dark"), "lm")}\n${compatibility}\n  color-scheme: dark;\n}
@media (prefers-reduced-motion: reduce) {\n  :root { --lm-motion-duration-fast: 0ms; --lm-motion-duration-normal: 0ms; --lm-motion-duration-slow: 0ms; }\n}
@theme inline {
  --color-background: var(--background); --color-foreground: var(--foreground);
  --color-card: var(--card); --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover); --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary); --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary); --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted); --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent); --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive); --color-border: var(--border);
  --color-success: var(--success); --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning); --color-warning-foreground: var(--warning-foreground);
  --color-data-accent: var(--data-accent); --color-data-accent-foreground: var(--data-accent-foreground);
  --color-brand-accent: var(--lm-color-brand-accent);
  --color-input: var(--input); --color-ring: var(--ring);
  --radius-sm: var(--lm-radius-sm); --radius-md: var(--lm-radius-md);
  --radius-lg: var(--lm-radius-lg); --radius-xl: var(--lm-radius-xl);
  --font-sans: var(--lm-typography-family-sans);
  --shadow-sm: var(--lm-shadow-sm); --shadow-md: var(--lm-shadow-md);
}
@layer base {
  *, ::before, ::after { box-sizing: border-box; }
  body { margin: 0; background: var(--lm-color-background-default); color: var(--lm-color-foreground-default); font-family: var(--lm-typography-family-sans); }
  :focus-visible { outline-color: var(--lm-color-focus-ring); }
}
@layer components {
  .lm-brand-skeleton {
    background-image: linear-gradient(90deg, color-mix(in srgb, var(--lm-color-brand-gradient-start) 16%, var(--lm-color-background-subtle)), color-mix(in srgb, var(--lm-color-brand-gradient-middle) 32%, var(--lm-color-background-subtle)), color-mix(in srgb, var(--lm-color-brand-gradient-end) 16%, var(--lm-color-background-subtle)));
    background-size: 220% 100%;
    animation: lm-brand-sweep 3.5s ease-in-out infinite alternate;
  }
  .lm-brand-gradient-text {
    background-image: linear-gradient(90deg, var(--lm-color-brand-gradient-start), var(--lm-color-brand-gradient-middle), var(--lm-color-brand-gradient-end));
    background-size: 200% 100%;
    background-clip: text;
    color: transparent;
  }
  .lm-brand-gradient-text[data-animated="true"] { animation: lm-brand-sweep 3s linear infinite alternate; }
  @keyframes lm-brand-sweep { from { background-position: 0% 50%; } to { background-position: 100% 50%; } }
  @media (prefers-reduced-motion: reduce) {
    .lm-brand-skeleton, .lm-brand-gradient-text[data-animated="true"] { animation: none; background-position: 50% 50%; }
  }
  @media (forced-colors: active) {
    .lm-brand-gradient-text { background-image: none; color: CanvasText; }
  }
}
`;
await mkdir(new URL("./dist/", import.meta.url), { recursive: true });
await writeFile(new URL("./dist/index.css", import.meta.url), sheet);
