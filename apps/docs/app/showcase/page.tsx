import { items } from "../../lib/items";
import { hasPreviewMotion } from "../../lib/preview-config";
import type { Metadata } from "next";
import { ShowcaseGallery } from "../../components/showcase-gallery";

export const metadata: Metadata = {
  title: "Explore",
  description: "Preview and inspect every Leement component, pattern, and block.",
};

export default function ShowcasePage() {
  return <div className="space-y-8 pb-16">
    <header className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Explore Leement</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Components for real product work.</h1>
      <p className="mt-4 text-base leading-8 text-muted-foreground">Browse every UI component, pattern, and block. Try the live examples, inspect their source, and install only what you need.</p>
    </header>
    <ShowcaseGallery replayableNames={Object.keys(items).filter((name) => hasPreviewMotion(name))} />
  </div>;
}
