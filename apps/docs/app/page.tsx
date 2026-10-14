import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../registry/ui/button";
import { HomeExamples } from "../components/home-examples";
import { HomeReveal } from "../components/home-reveal";
import { BrandLogo } from "../../../registry/patterns/brand-logo";
import { DocsMobileNavigation } from "../components/docs-top-navigation";

export default function Home() {
  return (
    <div id="leement-home" className="w-full">
      <div className="mx-4 pt-4 md:hidden">
        <details className="rounded-lg border border-border px-3 py-2 text-sm">
          <summary className="cursor-pointer rounded-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Browse documentation</summary>
          <div className="pt-3"><DocsMobileNavigation /></div>
        </details>
      </div>
      <section aria-labelledby="home-title" className="relative z-10 mx-auto max-w-5xl px-4 py-12 text-center sm:py-16 lg:py-20">
        <HomeReveal>
        <div data-home-reveal="logo" className="mb-5 flex justify-center">
          <BrandLogo
            name="Leement"
            variant="full"
            size="lg"
            className="gap-3 sm:gap-4"
            markClassName="size-16 sm:size-20"
            textClassName="text-3xl sm:text-4xl"
            mark={<Image src="/leement-mark.svg" alt="" width={80} height={80} priority />}
          />
        </div>
        <h1 data-home-reveal="title" id="home-title" className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[40px]">Build with a shared design language.</h1>
        <p data-home-reveal="description" className="mx-auto mt-4 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-base">Components and blocks with consistent tokens, accessible interactions, and source you can make your own.</p>
        <div data-home-reveal="actions" className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="sm"><Link href="/getting-started">Get started <ArrowRight aria-hidden="true" /></Link></Button>
          <Button asChild variant="secondary" size="sm"><Link href="/components/button">View components</Link></Button>
        </div>
        </HomeReveal>
      </section>
      <section aria-labelledby="home-examples-title" className="home-examples relative isolate">
        <h2 id="home-examples-title" className="sr-only">Explore the components</h2>
        <div className="home-gallery-viewport">
          <HomeReveal gallery className="home-gallery-tilt">
            <HomeExamples />
          </HomeReveal>
        </div>
        <div aria-hidden="true" className="home-examples-fade pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[360px]" />
      </section>
      <footer className="px-4 py-8 text-center text-xs text-muted-foreground">Built with Leement. <a href="https://github.com/leey00nsu/leement" className="underline underline-offset-4">Source on GitHub</a>.</footer>
    </div>
  );
}
