import type { Metadata } from "next";
import { ShowcaseGallery } from "../../components/showcase-gallery";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Preview every Leement component, pattern, and block.",
};

export default function ShowcasePage() {
  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Live showcase
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Explore every piece.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Every preview uses the source distributed by the Leement registry.
          Try the controls, switch themes, and open each item for its design rules.
        </p>
      </header>
      <ShowcaseGallery />
    </div>
  );
}
