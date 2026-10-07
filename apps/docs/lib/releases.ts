import manifest from "../../../package.json";

// Newest published release first. Keep historical entries unchanged.
export type ReleaseChange = { title: string; details: string };
export type Release = {
  version: string;
  summary: string;
  changes: ReleaseChange[];
  migrations?: string[];
  migrationExample?: string;
};

export const repositoryVersion = manifest.version;
export const unreleasedChanges: ReleaseChange[] = [
  { title: "Consistent component surfaces and controls", details: "Sidebar uses Leement semantic theme colors, shared control sizes and stable skeleton rendering. Menus preserve destructive colors; inputs, navigation and table controls inherit common surfaces, focus and sizing. Blocks and interactive charts use consistent borders, card insets and typography. Field layouts keep labels and inputs readable, table scrolling contains hidden labels, and responsive examples reserve space for external navigation. Chart axes and radar labels remain readable in dark mode; Questionnaire restores semantic colors when its theme or state changes. To adopt the source changes, review and reinstall the affected registry items and update the theme together; existing application-owned source is not overwritten automatically." },
  { title: "Real media examples and credits", details: "Image, video and music previews use appropriate free Pixabay media in place of generated placeholders. Photos, posters, titles and alternative text match the content; fictional sample profiles remain consistent. Detail pages link the original media, creators and license information, including music Content ID status. Media licensing is separate from the MIT component source." },
  { title: "Complete AudioPlayer loading skeleton", details: "AudioPlayer shows skeletons for both the waveform and all playback controls while decoding, including source changes and retries. Native controls appear on failure or timeout and remain available without JavaScript. Successful decoding reveals the Leement waveform and controls without changing the player height." },
  { title: "Media playback lifecycle fixes", details: "Stories starts the first video after the modal mounts and stops old media when switching or closing. Reel pauses outside the viewport and preserves the user's pause choice when it returns. Reduced-motion preferences and explicit playback controls remain supported." },
  { title: "Alphabetical documentation menus", details: "Components, Blocks and Patterns navigation items are sorted A–Z by their displayed names within the existing sections. Desktop and mobile menus share the order, links and current-page selection." },
  { title: "Package license files", details: "The theme and tokens npm packages include the MIT license text. The theme also retains the bundled font license and attribution files." },
];

const changes = [
  { title: "Motion standardization", details: "All Leement visual transitions use Motion: controls, popups, disclosure height, repeated decoration and docs previews. Theme CSS remains static and framework independent. Spin, pulse and marquee cycles are editable tokens. Tokens/theme and the source registry are published for 0.2.0." },
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

  {
    title: "Base component examples and API",
    details: "Adds the missing input, navigation, overlay and message components, and completes examples and API Reference for 63 shadcn Base documentation pages against the October 5, 2026 baseline. NativeSelect remains excluded. Avatar gains badge, group, count and sizes; Field, InputGroup, Combobox and other compound APIs are expanded.",
  },
  {
    title: "Public application and website blocks",
    details: "Adds 28 blocks from the Kibo public baseline: 3 application blocks and 25 website blocks. Codebase, Collaborative Canvas and Roadmap join marketing, content and form layouts. Existing blocks remain available. Data and service callbacks belong to the application; these examples do not supply collaboration, authentication, storage or payment backends.",
  },
  {
    title: "Charts",
    details: "Adds top-level Charts navigation with 70 installable recipes across Area, Bar, Line, Pie, Radar, Radial and Tooltips. Recipes include responsive previews, source, dependencies and accessible data tables. Semantic data-series tokens support light/dark themes and Foundations editing.",
  },
  {
    title: "Documentation and responsive previews",
    details: "Replaces repeated design-reference sections with Usage, Examples and detailed API Reference. Duplicate folded guides are merged into their examples; provider setup and longer recipes remain. Preview resize handles, pixel widths, Replay and theme synchronization are preserved. Animated components are grouped under Animations.",
  },
  {
    title: "Fonts, branding and Foundations",
    details: "The theme includes Pretendard Variable for body text, Paperlogy Bold for wordmarks and D2Coding for code. BrandLogo composes an application icon and name. Foundations supports color pickers, typography and other live token edits with CSS copying across the documentation UI.",
  },
];

const migrations = [
  "NativeSelect: install @leement/select and compose Select, SelectTrigger, SelectValue, SelectContent and SelectItem. Supply items for display labels, pass name for form submission and use onValueChange instead of a native change event. Existing source is not overwritten automatically.",
  "CSS-only brand effects: lm-brand-gradient-text and lm-brand-surface retain static styling. For animation, install BrandGradientText or BrandAction. Remove old keyframes and animated utilities in the migrated area; registry dependencies install Motion and leement-motion together.",
  "New motion: use animate from motion or motion/AnimatePresence from motion/react. Read --lm-motion-* duration/easing/cycle roles through the installed helper; it converts milliseconds to seconds. Explicit time props keep their documented units. Dispatch leement:motion-change after runtime token changes. Reduced motion and pause take precedence. Chart series must set isAnimationActive=false; ChartContainer supplies the Motion entrance.",
  "Table: the existing DataTable stays in ui/table. Install @leement/data-table for AdvancedDataTable and TanStack v8 column definitions.",
  "Calendar: the default implementation uses react-day-picker props such as selected/onSelect and mode. Existing value/defaultValue/onValueChange and range/defaultRange/onRangeChange select the compatible legacy implementation; excluded dates cannot occur inside a completed legacy range.",
  "ToggleGroup: Base UI values are arrays for both exclusive and multiple selection; use multiple rather than the Radix type prop.",
  "Motion: existing RevealContent ms props remain valid. Omitting duration now reads the reveal role; remount with a new key to replay. Theme changes leave original text visible before hydration.",
  "Brand effects: animated/paused are explicit, with local lifecycle handling instead of a global DOM scanner. Keep generation/fetch/audio code in the app.",
  "Calendar: an unconfigured <Calendar /> uses DayPicker. The legacy schedule view is selected by events, value, variant or other legacy props. Use variant=\"date\" for the legacy compact view, or selected/onSelect for DayPicker selection.",
  "ColorPicker: an opaque value remains #RRGGBB; opacity below 100% returns #RRGGBBAA.",
  "Stories: the default presentation starts with thumbnail triggers. Use presentation=\"viewer\" for an already open embedded viewer.",
  "Ticker: the default is an inline summary. Use layout=\"card\" for the former card surface.",
  "Banner: the default tone is prominent. Use tone=\"subtle\" for a quieter page message.",
  "Sandbox: the console tab is included by default. Set showConsole={false} to omit it.",
  "Brand overrides: set --lm-color-brand-text separately from the foreground used on a filled brand accent surface.",
  "Base UI: Button, Input, Avatar and several overlays now use Base UI primitives. Existing documented compatibility props remain supported; check the component API Reference for render, state callbacks and event contracts before replacing locally modified source. Toast uses Base UI provider/manager and compound parts; Sonner-only options are not interchangeable.",
  "Charts: use @leement/theme 0.2.0 or newer for --chart-1 through --chart-5 and semantic data-series colors. Keep the accessible data table connected to the same chart data.",
  "Source updates: updating the theme does not replace installed component files. Review local changes before reinstalling registry items; the component source remains owned by your project.",
];

export const releases: [Release, ...Release[]] = [
  {
    version: "0.2.0",
    summary: "Expanded components, blocks and charts with editable source, detailed examples and a shared Motion system.",
    changes,
    migrations,
    migrationExample: `npx shadcn@latest add @leement/select

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
</Select>`,
  },
  {
    version: "0.1.0",
    summary: "Initial candidate: framework-independent tokens, a CSS theme, and editable shadcn registry components, patterns and blocks.",
    changes: [],
  },
];

// Update published history only after confirming npm publication and registry deployment.
export const publishedVersion = releases[0].version;
