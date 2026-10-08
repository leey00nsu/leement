import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../registry/ui/button";
import { HomeExamples } from "../components/home-examples";
import { DocsMobileNavigation } from "../components/docs-top-navigation";

export default function Home() {
  return (
    <div id="leement-home" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="pt-4 md:hidden">
        <details className="rounded-lg border border-border px-3 py-2 text-sm">
          <summary className="cursor-pointer rounded-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Browse documentation</summary>
          <div className="pt-3"><DocsMobileNavigation /></div>
        </details>
      </div>
      <section aria-labelledby="home-title" className="mx-auto max-w-3xl py-10 text-center sm:py-14 lg:py-16">
        <h1 id="home-title" className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Build with a shared design language.</h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">Components and blocks with consistent tokens, accessible interactions, and source you can make your own.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild><Link href="/getting-started">Get started <ArrowRight aria-hidden="true" /></Link></Button>
          <Button asChild variant="outline"><Link href="/components/button">View components</Link></Button>
        </div>
      </section>
      <section aria-labelledby="home-examples-title">
        <h2 id="home-examples-title" className="sr-only">Explore the components</h2>
        <HomeExamples />
      </section>
    </div>
  );
}
