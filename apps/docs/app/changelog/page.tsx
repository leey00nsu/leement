const changes = [
  { title: "Motion standardization · 0.2.0", details: "All Leement visual transitions use Motion: controls, popups, disclosure height, repeated decoration and docs previews. Theme CSS remains static and framework independent. Spin, pulse and marquee cycles are editable tokens. Tokens/theme 0.2.0 and the updated registry are prepared locally; npm publication and production deployment are pending." },
  { title: "One selection UI", details: "Removes NativeSelect from new registry installations. Field, ColorPicker, CodeBlock, Foundations and examples use the existing Base UI Select, including labels, groups and form values. Existing consumer files are not deleted." },
  { title: "Core controls and navigation", details: "Adds experimental Checkbox, RadioGroup, Field, InputGroup, Select, Toggle/ToggleGroup, Accordion, Breadcrumb, Pagination, Command, ButtonGroup, Kbd, AspectRatio and HoverCard with editable registry source and live examples." },
  { title: "Data and dates", details: "Table now exports native compound parts while keeping the existing DataTable API. AdvancedDataTable adds client-side filtering, sorting, selection, pagination and column visibility. Calendar supports bounded range selection, and DatePicker composes it with Popover. Glimpse keeps its link-preview API and reuses HoverCard." },
  { title: "Shared motion", details: "Adds experimental TextReveal, MediaReveal, BrandAction and RotatingContent registry sources. RevealContent and Collapsible use motion roles; Foundations now edits easing, stagger and cycles with actual source previews. Automatic effects support reduced motion and explicit pause." },
  { title: "Audio and video players", details: "AudioPlayer brings CopySinger-inspired waveform playback with neutral or optional brand colors, keyboard seek, volume, speed and native fallback. VideoPlayer preserves its API and adds source-safe state, media errors/retry, shared controls, captions language/toggle and available fullscreen. Both use local playable examples and native controls before hydration or without JavaScript." },
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
  "NativeSelect: install @leement/select and compose Select, SelectTrigger, SelectValue, SelectContent and SelectItem. Supply items for display labels, pass name for form submission and use onValueChange instead of a native change event. Existing source is not overwritten automatically.",
  "CSS-only brand effects: lm-brand-gradient-text and lm-brand-surface retain static styling. For animation, install BrandGradientText or BrandAction. Remove old keyframes and animated utilities in the migrated area; registry dependencies install Motion and leement-motion together.",
  "New motion: use animate from motion or motion/AnimatePresence from motion/react. Read --lm-motion-* duration/easing/cycle roles through the installed helper; it converts milliseconds to seconds. Explicit time props keep their documented units. Dispatch leement:motion-change after runtime token changes. Reduced motion and pause take precedence. Chart series must set isAnimationActive=false; ChartContainer supplies the Motion entrance.",
  "Table: the existing DataTable stays in ui/table. Install @leement/data-table for AdvancedDataTable and TanStack v8 column definitions.",
  "Calendar: existing single-date props stay valid. Range mode uses range/defaultRange/onRangeChange; excluded dates cannot occur inside a completed range.",
  "ToggleGroup: Base UI values are arrays for both exclusive and multiple selection; use multiple rather than the Radix type prop.",
  "Motion: existing RevealContent ms props remain valid. Omitting duration now reads the reveal role; remount with a new key to replay. Theme changes leave original text visible before hydration.",
  "Brand effects: animated/paused are explicit, with local lifecycle handling instead of a global DOM scanner. Keep generation/fetch/audio code in the app.",
  "Calendar: choose variant=\"date\" for a compact date picker; the default is a schedule calendar.",
  "ColorPicker: an opaque value remains #RRGGBB; opacity below 100% returns #RRGGBBAA.",
  "Stories: the default presentation starts with thumbnail triggers. Use presentation=\"viewer\" for an already open embedded viewer.",
  "Ticker: the default is an inline summary. Use layout=\"card\" for the former card surface.",
  "Banner: the default tone is prominent. Use tone=\"subtle\" for a quieter page message.",
  "Sandbox: the console tab is included by default. Set showConsole={false} to omit it.",
  "Brand overrides: set --lm-color-brand-text separately from the foreground used on a filled brand accent surface.",
];

export default function Page() {
  return <article className="min-w-0 max-w-3xl space-y-8 pb-16">
    <header><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Project</p><h1 className="mt-2 text-4xl font-semibold">Changelog</h1></header>
    <section aria-labelledby="unreleased-heading" className="space-y-5 rounded-2xl bg-muted p-5 sm:p-6 [&_p]:text-foreground [&>ol]:text-foreground [&>ul]:text-foreground"><h2 id="unreleased-heading" className="text-2xl font-semibold">Unreleased · 0.2.0</h2><p className="text-sm leading-7 text-muted-foreground">The source-owned registry remains the installation path. These changes are available in the repository and will be included in the next published registry build.</p>{changes.map((change) => <div key={change.title}><h3 className="font-semibold">{change.title}</h3><p className="mt-1 text-sm leading-7 text-muted-foreground">{change.details}</p></div>)}</section>
    <section aria-labelledby="migration-heading" className="space-y-4 rounded-2xl bg-muted p-5 sm:p-6 [&_p]:text-foreground [&>ol]:text-foreground [&>ul]:text-foreground"><h2 id="migration-heading" className="text-xl font-semibold">Migration notes</h2><ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">{migrations.map((note) => <li key={note}>{note}</li>)}</ul><pre className="overflow-x-auto rounded-xl bg-background p-4 text-xs"><code>{`npx shadcn@latest add @leement/select

const options = [
  { label: "Member", value: "member" },
  { label: "Admin", value: "admin" },
];

<Select name="role" items={options} defaultValue="member">
  <SelectTrigger aria-label="Role"><SelectValue /></SelectTrigger>
  <SelectContent>
    {options.map(({ label, value }) => (
      <SelectItem key={value} value={value}>{label}</SelectItem>
    ))}
  </SelectContent>
</Select>`}</code></pre></section>
    <section aria-labelledby="initial-heading" className="rounded-2xl bg-muted p-5 sm:p-6 [&_p]:text-foreground [&>ol]:text-foreground [&>ul]:text-foreground"><h2 id="initial-heading" className="text-xl font-semibold">0.1.0 · Initial candidate</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">Introduced framework-agnostic tokens, a CSS theme, source-owned shadcn registry components, patterns and blocks.</p></section>
  </article>;
}
