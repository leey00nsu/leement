import { AdoptionCompositions } from "../../components/adoption-compositions";

export const metadata = { title: "Adopting Leement UI" };

export default function AdoptionPage() {
  return <main className="mx-auto max-w-6xl space-y-8 px-6 py-12">
    <header className="space-y-3"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Getting started</p><h1 className="text-4xl font-semibold tracking-tight">Adopting existing UI</h1><p className="max-w-3xl text-muted-foreground">These live compositions use the same registry source as the catalog. They show how source-project form fields, date entry, choice controls, code previews and expandable text can be assembled today. Dedicated calendar, choicebox and code-block items are also in the catalog roadmap.</p></header>
    <AdoptionCompositions />
  </main>;
}
