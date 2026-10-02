import Link from "next/link";
import { AdoptionCompositions } from "../../components/adoption-compositions";

export const metadata = { title: "Adopting Leement UI" };

export default function AdoptionPage() {
  return <main className="mx-auto max-w-6xl space-y-8 px-6 py-12">
    <header className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Getting started</p>
      <h1 className="text-4xl font-semibold tracking-tight">Adopting existing UI</h1>
      <p className="max-w-3xl text-muted-foreground">These live compositions use registry source from the catalog. Calendar, Choicebox and Code Block also have their own installable items. Start with a small screen and keep product-specific behavior in the application.</p>
    </header>
    <section className="max-w-3xl space-y-3 rounded-xl border border-border bg-card p-6 text-sm leading-7">
      <h2 className="text-lg font-semibold">Bring Leement into an existing app</h2>
      <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
        <li>Import <code>@leement/theme</code> after Tailwind and before <code>shadcn/tailwind.css</code> if that stylesheet is present.</li>
        <li>Check existing <code>:root</code> and <code>.dark</code> aliases. They may override Leement&apos;s shadcn compatibility variables. Use <code>data-lm-theme</code> on a pilot area, then migrate global aliases deliberately.</li>
        <li>Install only the registry items the screen needs. Keep application wrappers for domain logic, localization and existing API mappings such as <code>default → primary</code> or <code>isLoading → loading</code>.</li>
      </ol>
      <p className="text-muted-foreground">Browse the <Link href="/showcase" className="font-medium text-foreground underline underline-offset-4">component catalog</Link> for each item&apos;s live preview, source and installation command.</p>
    </section>
    <section className="max-w-3xl space-y-4 rounded-xl border border-border bg-card p-6 text-sm leading-7">
      <h2 className="text-lg font-semibold">CopySinger and Leesfield migration</h2>
      <p className="text-muted-foreground">Install a screen&apos;s shared controls first, then retain a small app wrapper for its existing props and product styles. The registry installs editable source, so the app owns any extra size or variant it needs.</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[38rem] border-collapse text-left">
          <thead><tr className="border-b border-border"><th className="py-2 pr-4 font-semibold">Existing usage</th><th className="py-2 pr-4 font-semibold">Leement route</th></tr></thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border"><td className="py-2 pr-4">CopySinger Button <code>default</code>, <code>link</code></td><td className="py-2 pr-4">Map <code>default</code> to <code>primary</code>. Use a native link or a link styled with <code>asChild</code> for navigation; keep link styling in the app.</td></tr>
            <tr className="border-b border-border"><td className="py-2 pr-4">CopySinger <code>render</code> / <code>nativeButton</code></td><td className="py-2 pr-4">Use <code>asChild</code> with a child link for navigation. Base UI trigger composition must be adapted at each call site; the two libraries use different composition contracts.</td></tr>
            <tr className="border-b border-border"><td className="py-2 pr-4">Leesfield <code>isLoading</code>, <code>loadingText</code></td><td className="py-2 pr-4">Map <code>isLoading</code> to <code>loading</code>. Render the pending label as children in the app wrapper.</td></tr>
            <tr><td className="py-2 pr-4">Leesfield <code>AppButton</code> variants and <code>AppCard</code> styles</td><td className="py-2 pr-4">Map shared roles to Leement variants. Keep generation, auth, editorial, extra sizes, and other product-specific styles in app-owned wrappers.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-muted-foreground">This is a screen-by-screen migration path. The existing application wrappers and Base UI trigger call sites need deliberate adaptation before a full app replacement.</p>
    </section>
    <section className="max-w-3xl space-y-4 rounded-xl border border-border bg-card p-6 text-sm leading-7"><h2 className="text-lg font-semibold">Bring over shared motion</h2><p className="text-muted-foreground">Use TextReveal.Item for the explicit Korean or English title fragments your app owns. Keep headings and translations outside the source. RevealContent retains its variants and millisecond props, while missing time props read theme roles.</p><p className="text-muted-foreground">Drive MediaReveal with your existing loading/ready/error state and keep the image alt or audio player inside. Reserve geometry with aspect ratio or min-height. In SSR apps, check cached image.complete/naturalWidth or media readyState as well as load events; the app owns readiness. Supply ready content for static or no-JavaScript views rather than leaving the initial loading state indefinitely. A controlled Collapsible can reveal generation results without importing generation logic. Use BrandAction for the existing emphasized action and retain domain callbacks. BrandAction asChild can decorate an existing Base UI button while its app wrapper retains render/nativeButton, functional styles and pending labels; remove that migrated button from any legacy generation-action scanner. RotatingContent is a decorative, pausable inline slot; its accessible label stays fixed. In a decorative heading, use controls=false with controlled paused state and place a keyboard reachable pause button outside the aria-hidden title.</p><pre className="overflow-x-auto rounded-lg border border-border bg-background p-4 text-xs"><code>{`npx shadcn@latest add @leement/text-reveal
npx shadcn@latest add @leement/media-reveal
npx shadcn@latest add @leement/brand-action
npx shadcn@latest add @leement/rotating-content`}</code></pre><p className="text-muted-foreground">Import the theme and remove duplicate global motion scanners only in the pilot area you migrate. Local brand variables and explicit paused props remain app-owned. The registry uses canonical components/ui, components/patterns and lib targets. Match those aliases for a pilot installation, then move and adapt the owned source if your app uses another folder layout. New APIs are experimental; the examples show the migration shape, while representative two-app validation is recorded with the Feature. This does not mean the entire apps have been migrated.</p></section>
    <section className="max-w-3xl space-y-3 rounded-xl border border-border bg-card p-6 text-sm leading-7">
      <h2 className="text-lg font-semibold">Audio and video playback</h2>
      <p className="text-muted-foreground">Install <code>@leement/audio-player</code> or <code>@leement/video-player</code>. Media controls and their Button, Slider and Popover sources install together. The renderer dependency is included only for audio.</p>
      <p className="text-muted-foreground">Map CopySinger&apos;s <code>label → title</code>, <code>waveformPeaks → peaks</code>, <code>waveformDuration → duration</code>. The duration is in seconds. Keep reference-band analysis and preview Blob URL creation in the app, then pass each preview URL to an AudioPlayer. Select <code>brand</code> only for branded playback. Localize the installed control labels in your own source.</p>
      <p className="text-muted-foreground">VideoPlayer keeps src/title/poster/captionsSrc and adds captionsLang/captionsLabel. Supply a transcript for speech audio and captions for video. Native controls remain available without JavaScript or when waveform decoding fails. CORS/authentication, large-file peaks and URL lifetime are app responsibilities.</p>
      <p className="text-muted-foreground">The registry currently targets canonical components/ui and lib paths. If your app uses shared/ui or another folder structure, align aliases first or move the installed source and imports deliberately. Runtime stylesheet replacement can dispatch <code>leement:theme-change</code> to redraw waveform colors without resetting playback.</p>
    </section>
    <AdoptionCompositions />
  </main>;
}
