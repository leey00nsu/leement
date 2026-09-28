"use client";

import { useEffect, useId, useState } from "react";
import { Button } from "../../../registry/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../registry/ui/card";
import { Input } from "../../../registry/ui/input";
import { Skeleton } from "../../../registry/ui/skeleton";
import { BrandGradientText } from "../../../registry/ui/brand-gradient-text";
import { useFoundationPreview } from "./foundation-preview-provider";
import {
  colorFields,
  previewChangeCount,
  previewCss,
  sharedFields,
  validPreviewValue,
  type ColorField,
  type FoundationCategory,
  type FoundationMode,
  type SharedField,
} from "../lib/foundation-preview";

const colorGroups = [...new Set(colorFields.map((field) => field.group))];
const familyOptions = [
  ...sharedFields.filter((field) => field.kind === "family").map((field) => field.defaultValue),
  "system-ui, sans-serif",
  "Georgia, Cambria, serif",
  "ui-monospace, monospace",
];

function useCurrentMode(): FoundationMode {
  const [mode, setMode] = useState<FoundationMode>("light");
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setMode(root.dataset.lmTheme === "dark" || root.classList.contains("dark") ? "dark" : "light");
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["data-lm-theme", "class"] });
    return () => observer.disconnect();
  }, []);
  return mode;
}

function setDocsMode(mode: FoundationMode) {
  document.documentElement.dataset.lmTheme = mode;
  try { window.localStorage.setItem("leement-docs-theme", mode); } catch { /* Preview still works without storage. */ }
}

function ColorControl({ field, mode }: { field: ColorField; mode: FoundationMode }) {
  const { preview, setValue } = useFoundationPreview();
  const id = useId();
  const value = preview[mode][field.key] ?? field[mode];
  const [draft, setDraft] = useState(value);
  const [touched, setTouched] = useState(false);
  useEffect(() => { setDraft(value); setTouched(false); }, [value, mode]);
  const valid = validPreviewValue(mode, field.key, draft);
  return <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-1 rounded-lg border border-border bg-background p-3">
    <span aria-hidden="true" className="row-span-2 size-10 rounded-md border border-border" style={{ backgroundColor: valid ? draft : value }} />
    <label htmlFor={id} className="truncate text-xs font-medium capitalize text-foreground">{field.label}</label>
    <input id={id} value={draft} onChange={(event) => {
      const next = event.target.value;
      setDraft(next);
      if (validPreviewValue(mode, field.key, next)) setValue(mode, field.key, next);
    }} onBlur={() => setTouched(true)} spellCheck={false} aria-invalid={touched && !valid || undefined} aria-describedby={touched && !valid ? `${id}-error` : undefined}
      className="min-w-0 rounded-md border border-input bg-background px-2 py-1 font-mono text-xs text-foreground outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30" />
    {touched && !valid && <p id={`${id}-error`} className="col-span-2 text-xs text-destructive">Enter a valid CSS color, such as #7554c8 or oklch(0.69 0.135 284).</p>}
  </div>;
}

function numericDetails(field: SharedField): { min: number; max: number; step: number; unit: string } {
  switch (field.kind) {
    case "size": return { min: 8, max: 64, step: 1, unit: "px" };
    case "spacing": return { min: 2, max: 12, step: 1, unit: "px" };
    case "radius": return { min: 0, max: 48, step: 1, unit: "px" };
    case "weight": return { min: 100, max: 900, step: 100, unit: "" };
    case "line-height": return { min: 1, max: 2.5, step: 0.05, unit: "" };
    case "duration": return { min: 0, max: 1000, step: 10, unit: "ms" };
    default: throw new Error(`Not a numeric field: ${field.kind}`);
  }
}

function numericValue(value: string, unit: string): number {
  if (unit === "px" && value.endsWith("rem")) return Number.parseFloat(value) * 16;
  if (unit === "ms" && value.endsWith("s") && !value.endsWith("ms")) return Number.parseFloat(value) * 1000;
  return Number.parseFloat(value);
}

function SharedControl({ field }: { field: SharedField }) {
  const { preview, setValue } = useFoundationPreview();
  const id = useId();
  const value = preview.shared[field.key] ?? field.defaultValue;
  if (field.kind === "family") return <div className="rounded-lg border border-border bg-background p-3">
    <label htmlFor={id} className="mb-2 block text-sm font-medium">{field.label}</label>
    <select id={id} value={value} onChange={(event) => setValue("shared", field.key, event.target.value)} className="w-full min-w-0 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {familyOptions.map((option) => <option key={option} value={option}>{option === familyOptions[0] ? "Pretendard / system" : option === familyOptions[1] ? "System mono" : option}</option>)}
    </select>
    <code className="mt-2 block break-all text-xs text-muted-foreground">{value}</code>
  </div>;
  if (field.kind === "shadow") {
    const choices = [...new Set([field.defaultValue, "none", "0 2px 8px rgb(0 0 0 / 0.08)", "0 4px 12px rgb(0 0 0 / 0.10)", "0 12px 36px rgb(0 0 0 / 0.18)"])];
    return <div className="rounded-lg border border-border bg-background p-3">
      <label htmlFor={id} className="mb-2 block text-sm font-medium capitalize">{field.label}</label>
      <select id={id} value={value} onChange={(event) => setValue("shared", field.key, event.target.value)} className="w-full min-w-0 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {choices.map((choice) => <option key={choice} value={choice}>{choice === field.defaultValue ? `Default · ${choice}` : choice}</option>)}
      </select>
    </div>;
  }
  const { min, max, step, unit } = numericDetails(field);
  const number = numericValue(value, unit);
  return <div className="rounded-lg border border-border bg-background p-3">
    <div className="flex items-baseline justify-between gap-3"><label htmlFor={id} className="text-sm font-medium capitalize">{field.label}</label><output htmlFor={id} className="font-mono text-sm tabular-nums text-muted-foreground">{Number.isFinite(number) ? number : min}{unit}</output></div>
    <input id={id} type="range" min={min} max={max} step={step} value={Number.isFinite(number) ? number : min} aria-valuetext={`${Number.isFinite(number) ? number : min}${unit}`} onChange={(event) => setValue("shared", field.key, `${event.target.value}${unit}`)}
      className="mt-3 w-full accent-[var(--lm-color-brand-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" />
    <div className="mt-1 flex justify-between text-xs text-muted-foreground"><span>{min}{unit}</span><span>{max}{unit}</span></div>
  </div>;
}

function rgba(value: string): [number, number, number] | null {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return null;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 1, 1);
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);
  const data = context.getImageData(0, 0, 1, 1).data;
  return [data[0] ?? 0, data[1] ?? 0, data[2] ?? 0];
}

function luminance(color: [number, number, number]): number {
  const linear = color.map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * (linear[0] ?? 0) + 0.7152 * (linear[1] ?? 0) + 0.0722 * (linear[2] ?? 0);
}

function contrastRatio(first: string, second: string): number | null {
  const a = rgba(first);
  const b = rgba(second);
  if (!a || !b) return null;
  const high = Math.max(luminance(a), luminance(b));
  const low = Math.min(luminance(a), luminance(b));
  return (high + 0.05) / (low + 0.05);
}

function ContrastWarning({ mode, values }: { mode: FoundationMode; values: Record<string, string> }) {
  const [ratio, setRatio] = useState<number | null>(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const style = getComputedStyle(document.documentElement);
      setRatio(contrastRatio(style.getPropertyValue("--lm-color-foreground-default").trim(), style.getPropertyValue("--lm-color-background-default").trim()));
    });
    return () => cancelAnimationFrame(frame);
  }, [mode, values]);
  if (ratio === null || ratio >= 4.5) return null;
  return <p role="status" className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-foreground">Text and page background contrast is {ratio.toFixed(1)}:1 in {mode} mode. Aim for at least 4.5:1 for normal text.</p>;
}

function ActualPreview({ category }: { category: FoundationCategory }) {
  const [moved, setMoved] = useState(false);
  return <div className="space-y-5" data-testid="foundation-actual-preview">
    {category === "typography" && <div className="space-y-2 border-b border-border pb-4">
      <p className="font-mono text-xs text-muted-foreground">Sans and type scale</p>
      <p className="text-2xl font-bold leading-tight">Design that feels familiar.</p>
      <p className="text-lg font-semibold leading-normal">A clear hierarchy for every screen.</p>
      <p className="text-base font-normal leading-relaxed">The quick brown fox jumps over the lazy dog.</p>
      <p className="text-sm text-muted-foreground">Small supporting text stays readable.</p>
      <code className="font-mono text-xs">const leement = true;</code>
    </div>}
    {category === "spacing" && <div className="flex flex-wrap gap-4 border-b border-border pb-4"><span className="rounded-md bg-muted p-3 text-xs">gap-4</span><span className="rounded-md bg-muted p-3 text-xs">padding-3</span><span className="rounded-md bg-muted p-3 text-xs">rhythm</span></div>}
    {category === "radius" && <div className="grid grid-cols-4 gap-2 border-b border-border pb-4">{(["sm", "md", "lg", "xl"] as const).map((size) => <div key={size} className={`flex h-14 items-center justify-center border border-border bg-muted text-xs ${({ sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", xl: "rounded-xl" })[size]}`}>{size}</div>)}</div>}
    {category === "shadow" && <div className="grid gap-3 border-b border-border pb-5 sm:grid-cols-3">{(["sm", "md", "lg"] as const).map((size) => <Card key={size} className={({ sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg" })[size]}><CardContent className="text-center text-xs font-medium">{size} shadow</CardContent></Card>)}</div>}
    {category === "motion" && <div className="space-y-4 border-b border-border pb-4">
      <Button variant="outline" size="sm" onClick={() => setMoved((value) => !value)} aria-pressed={moved}>Move preview</Button>
      <div className="space-y-2">{(["fast", "normal", "slow"] as const).map((speed) => <div key={speed} className="flex items-center gap-3 text-xs"><span className="w-12 shrink-0 capitalize">{speed}</span><div className="h-7 flex-1 overflow-hidden rounded-md bg-muted p-1"><div className="size-5 rounded-sm bg-primary transition-[margin-left]" style={{ marginLeft: moved ? "calc(100% - 1.25rem)" : "0", transitionDuration: `var(--lm-motion-duration-${speed})` }} /></div></div>)}</div>
      <p className="text-xs text-muted-foreground">Reduced motion disables transition timing.</p>
    </div>}
    {category === "color" && <div className="space-y-3 border-b border-border pb-4"><p><BrandGradientText className="text-xl font-semibold">Make something your own.</BrandGradientText></p><Skeleton variant="brand" className="h-4 w-3/4" /><p className="text-xs text-muted-foreground">Brand gradient and loading surface use the current palette.</p></div>}
    <Card className="shadow-sm"><CardHeader><CardTitle>Workspace settings</CardTitle><CardDescription>Manage the details people see.</CardDescription></CardHeader><CardContent className="space-y-4"><label className="block space-y-2 text-sm font-medium">Workspace name<Input placeholder="Acme Studio" /></label><div className="flex flex-wrap gap-2"><Button size="sm">Save changes</Button><Button size="sm" variant="outline">Cancel</Button></div></CardContent></Card>
  </div>;
}

export function FoundationEditor({ category }: { category: FoundationCategory }) {
  const { preview, loaded, reset } = useFoundationPreview();
  const mode = useCurrentMode();
  const [copyStatus, setCopyStatus] = useState("");
  const [openGroups, setOpenGroups] = useState(() => new Set(["background", "surface", "foreground", "brand"]));
  const count = previewChangeCount(preview);
  const fields = sharedFields.filter((field) => field.category === category);

  async function copyCss() {
    if (!count) return;
    try {
      await navigator.clipboard.writeText(`/* Paste after @import "@leement/theme"; */\n${previewCss(preview)}`);
      setCopyStatus("CSS overrides copied.");
    } catch {
      setCopyStatus("Copy failed. Check clipboard permission and try again.");
    }
  }

  if (!loaded) return <section id="live-editor" aria-label="Live editor" className="mt-10 rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground" role="status">Loading saved preview…</section>;

  return <section id="live-editor" aria-labelledby="live-editor-heading" className="mt-10 scroll-mt-24">
    <div className="mb-5 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-widest text-[var(--lm-color-brand-text)]">Live editor</p><h2 id="live-editor-heading" className="mt-1 text-2xl font-semibold">Try the {category} rules</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Changes apply across this documentation site. They stay in this browser until you reset them. The token reference below shows Leement defaults.</p></div><span className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground" role="status">{count} {count === 1 ? "change" : "changes"}</span></div>
    <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.9fr)]">
      <div className="min-w-0 space-y-4 rounded-xl border border-border bg-card p-4 sm:p-5">
        {category === "color" ? <>
          <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-base font-semibold">Semantic colors</h3><div role="group" aria-label="Preview theme" className="inline-flex rounded-lg border border-border bg-muted p-1">{(["light", "dark"] as const).map((option) => <button key={option} type="button" onClick={() => setDocsMode(option)} aria-pressed={mode === option} className="rounded-md px-3 py-1.5 text-xs font-medium capitalize text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm">{option}</button>)}</div></div>
          <p className="text-xs leading-5 text-muted-foreground">Editing {mode} colors. Switch mode to edit its own values; other foundation values are shared.</p>
          <div className="space-y-3">{colorGroups.map((group) => <details key={group} open={openGroups.has(group)} onToggle={(event) => {
            const isOpen = event.currentTarget.open;
            setOpenGroups((current) => {
              if (current.has(group) === isOpen) return current;
              const next = new Set(current);
              if (isOpen) next.add(group);
              else next.delete(group);
              return next;
            });
          }} className="group rounded-lg border border-border bg-muted/30"><summary className="cursor-pointer px-3 py-2.5 text-sm font-medium capitalize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{group} <span className="text-xs font-normal text-muted-foreground">({colorFields.filter((field) => field.group === group).length})</span></summary><div className="grid gap-2 border-t border-border p-2 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">{colorFields.filter((field) => field.group === group).map((field) => <ColorControl key={`${mode}-${field.key}`} field={field} mode={mode} />)}</div></details>)}</div>
        </> : <><h3 className="text-base font-semibold capitalize">{category} values</h3><div className="grid gap-3">{fields.map((field) => <SharedControl key={field.key} field={field} />)}</div></>}
      </div>
      <div className="min-w-0 space-y-4 lg:sticky lg:top-24">
        <div className="rounded-xl border border-border bg-background p-4 sm:p-5"><div className="mb-4 flex items-center justify-between gap-2"><h3 className="text-base font-semibold">Actual components</h3><span className="text-xs capitalize text-muted-foreground">{mode} mode</span></div><ActualPreview category={category} /></div>
        {category === "color" && <ContrastWarning mode={mode} values={preview[mode]} />}
        <div className="rounded-xl border border-border bg-card p-4"><div className="flex flex-wrap gap-2"><Button type="button" variant="outline" size="sm" onClick={copyCss} disabled={!count}>Copy CSS</Button><Button type="button" variant="ghost" size="sm" onClick={() => { reset(); setCopyStatus("All preview changes were reset."); }} disabled={!count}>Reset all</Button></div><p className="mt-3 text-xs leading-5 text-muted-foreground">Paste copied overrides after <code>@import "@leement/theme";</code> in your app CSS. Only changed values are included.</p><p role="status" aria-live="polite" className="mt-2 min-h-5 text-xs text-foreground">{copyStatus}</p></div>
      </div>
    </div>
  </section>;
}
