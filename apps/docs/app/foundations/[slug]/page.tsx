import { notFound } from "next/navigation";
import { tokens } from "@leement/tokens";
import { FoundationEditor } from "../../../components/foundation-editor";

const content = {
  color: { rule: "Use semantic roles for background, surface, foreground, border, action, brand, focus, status and data accent. Palette names stay in primitive tokens.", detail: "Surface.muted is the visible control and loading placeholder surface in both modes; background.subtle is a quieter page background. CopySinger light and Leesfield dark provide example brand defaults. Your product sets its own brand values without editing component source." },
  typography: { rule: "Use Pretendard for readable body text, Paperlogy Bold for brand wordmarks, and a small type scale for hierarchy.", detail: "The theme includes and loads Pretendard Variable and Paperlogy 700 locally. Body and brand families can be changed independently; custom fonts are loaded by your app." },
  spacing: { rule: "Use a 4px base rhythm and keep control heights consistent at 36, 40 and 44px.", detail: "Choose spacing based on content relationship. Tighter within one control, wider between independent sections." },
  radius: { rule: "Use 8px for controls, 12px for cards and fully rounded shapes for badges and pills.", detail: "Radius expresses containment. Keep surface hierarchy consistent across light and dark." },
  shadow: { rule: "Prefer borders for static cards and inputs. Add shadow when elevation helps explain layering.", detail: "Use the shadow scale for floating menus and dialogs. A basic Card has no shadow." },
  motion: { rule: "Use quick, calm state transitions. Motion should communicate response.", detail: "Fast/normal/slow are 120/180/260ms, reveal is 700ms, expand/media are 400ms and stagger is 70ms. Edit role-based durations, easing and positive repeat cycles below. Reduced motion removes transitions and stops repetition." },
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
  return <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_190px] xl:gap-12"><article className="min-w-0 pb-16">
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Foundations</p>
    <h1 className="mt-2 text-4xl font-semibold capitalize">{slug}</h1>
    <p className="mt-6 text-lg leading-8">{item.rule}</p>
    <p className="mt-3 text-muted-foreground">{item.detail}</p>
    <FoundationEditor category={slug as keyof typeof content} />
    {slug === "typography" && <section id="font-roles" className="mt-10 scroll-mt-24 rounded-2xl bg-muted p-5 sm:p-6 [&>p]:text-foreground [&>ol]:text-foreground [&>ul]:text-foreground" aria-labelledby="font-roles-heading">
      <h2 id="font-roles-heading" className="text-xl font-semibold">Body and brand fonts</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">Importing the theme loads Pretendard Variable for body text and controls, and Paperlogy Bold (700) for brand wordmarks. Use <code>font-brand</code> or the <a href="/patterns/brand-logo" className="underline underline-offset-4">BrandLogo pattern</a> for an icon and product name. Both defaults include their OFL notices in the theme package.</p>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">Body font and Brand font in the editor affect the whole site independently. Copy CSS after editing, or override these variables after the theme import. Custom font names do not download files: load your own fonts with <code>@font-face</code> or your app’s font loader. Keep a readable fallback and a 700 face for the wordmark.</p>
      <pre className="mt-5 overflow-x-auto rounded-xl bg-background p-4 text-xs leading-6"><code>{`@import "@leement/theme";

/* Load these custom families with your app's font loader. */
:root {
  --lm-typography-family-sans: "My Body", system-ui, sans-serif;
  --lm-typography-family-brand: "My Brand", sans-serif;
}`}</code></pre>
    </section>}
    {slug === "color" && <section id="brand-colors" className="mt-10 scroll-mt-24 rounded-2xl bg-muted p-5 sm:p-6 [&>p]:text-foreground [&>ol]:text-foreground [&>ul]:text-foreground" aria-labelledby="brand-colors-heading">
      <h2 id="brand-colors-heading" className="text-xl font-semibold">Set your brand colors</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">CopySinger uses violet, blue and pink for animated highlights; Leesfield uses blue for its gradient and branded loading surface. Both keep ordinary Skeletons neutral. Override these roles after importing the theme in your app CSS. Set brand text separately from the foreground used on a filled accent surface: small eyebrows and selected filters need contrast against the page. Focus and data accent follow the brand roles automatically. Check both themes with your own palette.</p>
      <pre className="mt-5 overflow-x-auto rounded-xl bg-background p-4 text-xs leading-6"><code>{`@import "@leement/theme";

:root {
  --lm-color-brand-accent: #7c3aed;
  --lm-color-brand-accent-foreground: #ffffff;
  --lm-color-brand-text: #6d28d9;
  --lm-color-brand-focus: #6d28d9;
  --lm-color-brand-gradient-start: var(--lm-color-brand-accent);
  --lm-color-brand-gradient-middle: #3b82f6;
  --lm-color-brand-gradient-end: #ec4899;
}

.dark, [data-lm-theme="dark"] {
  --lm-color-brand-accent: #9f7aea;
  --lm-color-brand-accent-foreground: #111113;
  --lm-color-brand-text: #b794f4;
  --lm-color-brand-focus: #b794f4;
  --lm-color-brand-gradient-start: var(--lm-color-brand-accent);
  --lm-color-brand-gradient-middle: #a4d8ff;
  --lm-color-brand-gradient-end: var(--lm-color-brand-accent);
}`}</code></pre>
      <p className="mt-4 text-sm text-muted-foreground">Use <code>Skeleton variant="brand"</code> only when brand emphasis helps; use <code>BrandGradientText</code> for short display copy. Both stop repeating motion when reduced motion is requested.</p>
    </section>}
    {semantic.map(({ mode, entries }) => <section key={mode} id={`${mode}-roles`} aria-label={`${mode} semantic colors`} className="mt-10 scroll-mt-24 rounded-2xl bg-muted p-5 sm:p-6 [&>p]:text-foreground [&>ol]:text-foreground [&>ul]:text-foreground"><h2 className="mb-2 text-xl font-semibold capitalize">{mode} semantic roles</h2><p className="mb-4 text-sm text-muted-foreground">Canonical defaults from @leement/tokens. Temporary preview edits appear in the editor above.</p><div className="grid gap-2 sm:grid-cols-2">{entries.map(([name, value]) => <div key={name} className="flex items-center gap-3 rounded-lg bg-background p-3"><span aria-hidden="true" className="size-9 shrink-0 rounded-md border border-border" style={{ backgroundColor: value }} /><div className="min-w-0"><code className="block break-all text-xs">--lm-color-{name.replace(/([a-z])([A-Z])/g, "$1-$2").replaceAll(".", "-").toLowerCase()}</code><span className="text-xs text-muted-foreground">{value}</span></div></div>)}</div></section>)}
    <section id="primitive-tokens" className="mt-10 scroll-mt-24 rounded-2xl bg-muted p-5 sm:p-6 [&>p]:text-foreground [&>ol]:text-foreground [&>ul]:text-foreground"><h2 className="mb-2 text-xl font-semibold">Primitive tokens</h2><p className="mb-4 text-sm text-muted-foreground">Canonical Leement defaults. Editing the preview does not change these source values.</p><div className="overflow-x-auto rounded-xl bg-background"><table className="w-full text-left text-sm"><caption className="sr-only">{slug} primitive token values</caption><thead className="bg-background"><tr><th scope="col" className="px-4 py-3">Token</th><th scope="col" className="px-4 py-3">Value</th></tr></thead><tbody>{primitive.map(([name, value]) => <tr key={name} className="border-t border-border"><th scope="row" className="px-4 py-3 font-mono text-xs font-normal">{slug}.{name}</th><td className="px-4 py-3 font-mono text-xs">{value}</td></tr>)}</tbody></table></div></section>
    {slug === "motion" && <section className="mt-8 space-y-3 rounded-2xl bg-muted p-5 sm:p-6 [&>p]:text-foreground [&>ol]:text-foreground [&>ul]:text-foreground"><h2 className="text-xl font-semibold">Choose motion by purpose</h2><p className="text-sm leading-7 text-muted-foreground">Fast/normal/slow (120/180/260ms) are control responses. Reveal (700ms) and its easing come from the two product titles and existing RevealContent. Expand (400ms) comes from Leesfield result disclosure; media (400ms) reconciles CopySinger waveform fade/scale with image readiness. Stagger is 70ms. Explicit component time props use milliseconds and override theme defaults.</p><p className="text-sm leading-7 text-muted-foreground">Brand text/surface cycles are 1500/3500ms; decorative rotation is 1800ms. Cycles are separate from response durations. New extracted APIs are experimental. Keep product generation, audio analysis and fetch logic in your app; Orb and Shader are outside this feature.</p><p className="text-sm leading-7 text-muted-foreground">Original content is visible before hydration and with JavaScript disabled. Repeating decoration pauses offscreen, in a hidden document, under reduced motion, or on request. Copy CSS after editing and apply it after the theme import. One-shot examples expose Replay so you can compare the current values.</p></section>}
    {slug === "motion" && <p className="mt-4 text-sm text-muted-foreground">Under <code>prefers-reduced-motion: reduce</code>, duration and stagger variables resolve to <code>0ms</code>. Repeating effects stop; cycle variables remain valid positive times.</p>}
  </article><aside aria-label="On this page" className="hidden xl:block"><div className="sticky top-24 border-l border-border pl-4"><h2 className="text-sm font-medium">On this page</h2><nav aria-label="Page sections" className="mt-4 space-y-2 text-sm text-muted-foreground"><a className="block hover:text-[var(--lm-color-brand-text)]" href="#live-editor">Live editor</a>{slug === "color" && <><a className="block hover:text-[var(--lm-color-brand-text)]" href="#brand-colors">Brand colors</a><a className="block hover:text-[var(--lm-color-brand-text)]" href="#light-roles">Light roles</a><a className="block hover:text-[var(--lm-color-brand-text)]" href="#dark-roles">Dark roles</a></>}{slug === "typography" && <a className="block hover:text-[var(--lm-color-brand-text)]" href="#font-roles">Font roles</a>}<a className="block hover:text-[var(--lm-color-brand-text)]" href="#primitive-tokens">Primitive tokens</a></nav></div></aside></div>;
}
