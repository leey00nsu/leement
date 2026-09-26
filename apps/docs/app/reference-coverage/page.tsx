import type { Metadata } from "next";
import Link from "next/link";
import { items } from "../../lib/items";

export const metadata: Metadata = { title: "Kibo coverage", description: "Leement's working UI response to the 41 Kibo component cases." };

const groups = [
  { title: "Collaboration and project management", names: ["avatar-stack", "cursor", "calendar", "gantt", "kanban", "list", "table"] },
  { title: "Code and forms", names: ["code-block", "contribution-graph", "sandbox", "snippet", "choicebox", "combobox", "dropzone", "mini-calendar", "tags"] },
  { title: "Images, finance and social", names: ["image-crop", "image-zoom", "credit-card", "ticker", "stories", "reel", "video-player"] },
  { title: "Callouts and complex utilities", names: ["announcement", "banner", "typography", "color-picker", "comparison", "deck", "dialog-stack", "editor", "glimpse", "marquee"] },
  { title: "Other utilities", names: ["pill", "qr-code", "rating", "relative-time", "spinner", "status", "theme-switcher", "tree"] },
] as const;

function displayName(name: string) { return name.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" "); }

export default function CoveragePage() {
  return <article className="space-y-9 pb-16">
    <header className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Reference coverage</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">41 working use cases.</h1><p className="mt-4 text-base leading-8 text-muted-foreground">These items answer the 41 cases in <a href="https://github.com/shadcnblocks/kibo" className="underline underline-offset-4">Kibo</a> with Leement tokens, editable registry source and documented boundaries. They are not API-identical ports. Only Avatar Stack and Cursor incorporate selected Kibo MIT source; the notice is in the repository.</p></header>
    <p className="rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">Product data, persistence, collaboration transport, payments and media encoding remain in the consumer app. Each detail page shows the actual interaction and source. Public CLI commands become usable after the theme package and registry are published.</p>
    {groups.map((group) => <section key={group.title}><h2 className="mb-4 text-2xl font-semibold">{group.title}</h2><div className="grid gap-3 sm:grid-cols-2">{group.names.map((name) => { const item = items[name]; const path = item.type === "Block" ? "blocks" : "components"; return <Link key={name} href={`/${path}/${name}`} className="rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"><span className="font-semibold">{displayName(name)}</span><span className="ml-2 text-xs text-muted-foreground">{item.maturity}</span><p className="mt-2 text-sm text-muted-foreground">{item.overview}</p><p className="mt-2 text-xs text-muted-foreground">Boundary: {item.avoid}</p></Link>; })}</div></section>)}
  </article>;
}
