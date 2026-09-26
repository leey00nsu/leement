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
      <p className="text-muted-foreground">The <Link href="/reference-coverage" className="font-medium text-foreground underline underline-offset-4">Kibo coverage</Link> page lists 41 advanced cases and their boundaries.</p>
    </section>
    <AdoptionCompositions />
  </main>;
}
