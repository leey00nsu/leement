import { notFound } from "next/navigation";
import { tokens } from "@leement/tokens";

const content = {
  color: { rule: "Use semantic roles for background, surface, foreground, border, action, brand, focus, status and data accent. Palette names stay in primitive tokens.", detail: "CopySinger light and Leesfield dark provide example brand defaults. Your product sets its own brand values without editing component source." },
  typography: { rule: "Use one readable sans family, a small type scale and weight for hierarchy before introducing display styles.", detail: "The theme declares a Pretendard-first stack. Consumer apps load the font file or CDN stylesheet; fallback remains available." },
  spacing: { rule: "Use a 4px base rhythm and keep control heights consistent at 36, 40 and 44px.", detail: "Choose spacing based on content relationship. Tighter within one control, wider between independent sections." },
  radius: { rule: "Use 8px for controls, 12px for cards and fully rounded shapes for badges and pills.", detail: "Radius expresses containment. Keep surface hierarchy consistent across light and dark." },
  shadow: { rule: "Prefer borders for static cards and inputs. Add shadow when elevation helps explain layering.", detail: "Use the shadow scale for floating menus and dialogs. A basic Card has no shadow." },
  motion: { rule: "Use quick, calm state transitions. Motion should communicate response.", detail: "Fast, normal and slow durations are 120, 180 and 260ms. Reduced motion maps them to zero." },
} as const;

function flatten(value: unknown, prefix: string[] = []): Array<[string, string]> {
  if (typeof value !== "object" || value === null) return [[prefix.join("."), String(value)]];
  return Object.entries(value).flatMap(([key, child]) => flatten(child, [...prefix, key]));
}
function resolve(value: string, mode: "light" | "dark"): string {
  if (!value.startsWith("{") || !value.endsWith("}")) return value;
  const path = value.slice(1, -1).split(".");
  const lookup = (source: unknown) => path.reduce<unknown>((current, key) => (current as Record<string, unknown> | undefined)?.[key], source);
  const referenced = lookup(tokens.primitive) ?? lookup(tokens.semantic[mode]);
  if (typeof referenced !== "string") throw new Error(`Unknown token reference: ${value}`);
  return resolve(referenced, mode);
}

export function generateStaticParams() { return Object.keys(content).map((slug) => ({ slug })); }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in content)) notFound();
  const item = content[slug as keyof typeof content];
  const source = tokens.primitive[slug as keyof typeof tokens.primitive];
  const primitive = flatten(source);
  const semantic = slug === "color" ? (["light", "dark"] as const).map((mode) => ({ mode, entries: flatten(tokens.semantic[mode].color).map(([name, value]) => [name, resolve(value, mode)] as const) })) : [];
  return <article className="max-w-5xl pb-16">
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Foundations</p>
    <h1 className="mt-2 text-4xl font-semibold capitalize">{slug}</h1>
    <p className="mt-6 text-lg leading-8">{item.rule}</p>
    <p className="mt-3 text-muted-foreground">{item.detail}</p>
    {slug === "color" && <section className="mt-10 rounded-xl border border-border bg-card p-5 sm:p-7" aria-labelledby="brand-colors-heading">
      <h2 id="brand-colors-heading" className="text-xl font-semibold">Set your brand colors</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">CopySinger uses violet, blue and pink for animated highlights; Leesfield uses blue for its gradient and branded loading surface. Both keep ordinary Skeletons neutral. Override these roles after importing the theme in your app CSS. Focus and data accent follow the brand roles automatically. Check focus visibility and text contrast with your own palette.</p>
      <pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-background p-4 text-xs leading-6"><code>{`@import "@leement/theme";

:root {
  --lm-color-brand-accent: #7c3aed;
  --lm-color-brand-accent-foreground: #ffffff;
  --lm-color-brand-focus: #6d28d9;
  --lm-color-brand-gradient-start: var(--lm-color-brand-accent);
  --lm-color-brand-gradient-middle: #3b82f6;
  --lm-color-brand-gradient-end: #ec4899;
}

.dark, [data-lm-theme="dark"] {
  --lm-color-brand-accent: #9f7aea;
  --lm-color-brand-accent-foreground: #111113;
  --lm-color-brand-focus: #b794f4;
  --lm-color-brand-gradient-start: var(--lm-color-brand-accent);
  --lm-color-brand-gradient-middle: #a4d8ff;
  --lm-color-brand-gradient-end: var(--lm-color-brand-accent);
}`}</code></pre>
      <p className="mt-4 text-sm text-muted-foreground">Use <code>Skeleton variant="brand"</code> only when brand emphasis helps; use <code>BrandGradientText</code> for short display copy. Both stop repeating motion when reduced motion is requested.</p>
    </section>}
    {semantic.map(({ mode, entries }) => <section key={mode} aria-label={`${mode} semantic colors`} className="mt-10"><h2 className="mb-4 text-xl font-semibold capitalize">{mode} semantic roles</h2><div className="grid gap-2 sm:grid-cols-2">{entries.map(([name, value]) => <div key={name} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"><span aria-hidden="true" className="size-9 shrink-0 rounded-md border border-border" style={{ backgroundColor: value }} /><div className="min-w-0"><code className="block break-all text-xs">--lm-color-{name.replace(/([a-z])([A-Z])/g, "$1-$2").replaceAll(".", "-").toLowerCase()}</code><span className="text-xs text-muted-foreground">{value}</span></div></div>)}</div></section>)}
    <section className="mt-10"><h2 className="mb-4 text-xl font-semibold">Primitive tokens</h2><div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-left text-sm"><caption className="sr-only">{slug} primitive token values</caption><thead className="bg-muted/50"><tr><th scope="col" className="px-4 py-3">Token</th><th scope="col" className="px-4 py-3">Value</th></tr></thead><tbody>{primitive.map(([name, value]) => <tr key={name} className="border-t border-border"><th scope="row" className="px-4 py-3 font-mono text-xs font-normal">{slug}.{name}</th><td className="px-4 py-3 font-mono text-xs">{value}</td></tr>)}</tbody></table></div></section>
    {slug === "motion" && <p className="mt-4 text-sm text-muted-foreground">Under <code>prefers-reduced-motion: reduce</code>, all three duration variables resolve to <code>0ms</code>.</p>}
  </article>;
}
