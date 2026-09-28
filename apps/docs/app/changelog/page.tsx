const changes = [
  {
    title: "Design language and previews",
    details: "All public items were rechecked in light and dark at desktop and mobile widths. The theme adds semantic roles for muted surfaces, media overlays, syntax highlighting and contrast-safe brand text. Component pages use the distributed registry source in their live previews.",
  },
  {
    title: "Component source",
    details: "Calendar now offers a schedule view and a compact date view. ColorPicker exposes saturation, brightness, hue and opacity. Stories opens from thumbnails, Reel plays app-supplied video, CodeBlock highlights common languages, and Sandbox separates code, preview and console into tabs. Data, form, media and content examples now show realistic states.",
  },
  {
    title: "Patterns and blocks",
    details: "SearchField and FilterToolbar examples connect controls to a result list. SettingsSection demonstrates multiple fields and a save result. ProductPageIntro and selected filters use brand text that remains legible on the page surface.",
  },
];

const migrations = [
  "Calendar: choose variant=\"date\" for a compact date picker; the default is a schedule calendar.",
  "ColorPicker: an opaque value remains #RRGGBB; opacity below 100% returns #RRGGBBAA.",
  "Stories: the default presentation starts with thumbnail triggers. Use presentation=\"viewer\" for an already open embedded viewer.",
  "Ticker: the default is an inline summary. Use layout=\"card\" for the former card surface.",
  "Banner: the default tone is prominent. Use tone=\"subtle\" for a quieter page message.",
  "Sandbox: the console tab is included by default. Set showConsole={false} to omit it.",
  "Brand overrides: set --lm-color-brand-text separately from the foreground used on a filled brand accent surface.",
];

export default function Page() {
  return <article className="max-w-3xl space-y-8 pb-16">
    <header><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Project</p><h1 className="mt-2 text-4xl font-semibold">Changelog</h1></header>
    <section aria-labelledby="unreleased-heading" className="space-y-5"><h2 id="unreleased-heading" className="text-2xl font-semibold">Unreleased · Visual audit</h2><p className="text-sm leading-7 text-muted-foreground">The source-owned registry remains the installation path. These changes are available in the repository and will be included in the next published registry build.</p>{changes.map((change) => <div key={change.title}><h3 className="font-semibold">{change.title}</h3><p className="mt-1 text-sm leading-7 text-muted-foreground">{change.details}</p></div>)}</section>
    <section aria-labelledby="migration-heading" className="space-y-4"><h2 id="migration-heading" className="text-xl font-semibold">Migration notes</h2><ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">{migrations.map((note) => <li key={note}>{note}</li>)}</ul></section>
    <section aria-labelledby="initial-heading" className="border-t border-border pt-8"><h2 id="initial-heading" className="text-xl font-semibold">0.1.0 · Initial candidate</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">Introduced framework-agnostic tokens, a CSS theme, source-owned shadcn registry components, patterns and blocks.</p></section>
  </article>;
}
