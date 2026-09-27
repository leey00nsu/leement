import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "../../../registry/ui/button";
import { Input } from "../../../registry/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../registry/ui/card";
import { PageHeader } from "../../../registry/patterns/page-header";
import { Skeleton } from "../../../registry/ui/skeleton";
import { BrandGradientText } from "../../../registry/ui/brand-gradient-text";

export default function Home() {
  return <div id="leement-home" className="pb-24">
    <section className="mx-auto max-w-6xl px-5 pt-24 text-center sm:px-8 sm:pt-32">
      <h1 className="text-[clamp(3rem,7vw,6.25rem)] font-semibold leading-[1.08] tracking-[-.055em] text-balance">
        Components built from<br className="hidden sm:block" /> a <BrandGradientText animated={false}>design language.</BrandGradientText>
      </h1>
      <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-muted-foreground sm:text-xl">
        Leement turns design tokens and rules into composable UI. Set your brand colors, then install editable component source in your own project.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg"><Link href="/showcase">Browse components <ArrowRight aria-hidden="true" size={16} /></Link></Button>
        <Button asChild size="lg" variant="outline"><a href="https://github.com/leey00nsu/leement" target="_blank" rel="noreferrer"><Github aria-hidden="true" size={16} />GitHub</a></Button>
      </div>
    </section>

    <section aria-label="Live Leement interface preview" className="home-preview-glow mx-auto mt-20 max-w-[1660px] px-4 pb-10 pt-14 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-3 text-xs text-muted-foreground sm:px-8"><span>Leement · Live registry source</span><span>Workspace preview</span></div>
        <div className="space-y-7 p-5 sm:p-8">
          <PageHeader>
            <PageHeader.Content><h2 className="text-2xl font-semibold tracking-tight">Members</h2><PageHeader.Description>Manage people in your workspace.</PageHeader.Description></PageHeader.Content>
            <PageHeader.Actions><Button>Add member</Button></PageHeader.Actions>
          </PageHeader>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
            <Card><CardHeader><CardTitle>Team directory</CardTitle><CardDescription>One shared language for content and controls.</CardDescription></CardHeader><CardContent className="space-y-4"><Input aria-label="Search members" placeholder="Search members..." /><div className="flex items-center justify-between rounded-lg border border-border p-3"><span className="text-sm">Alex Kim</span><span className="text-xs text-muted-foreground">Admin</span></div><div className="flex items-center justify-between rounded-lg border border-border p-3"><span className="text-sm">Taylor Park</span><span className="text-xs text-muted-foreground">Member</span></div></CardContent></Card>
            <Card><CardHeader><CardTitle>Loading state</CardTitle><CardDescription>Neutral by default, brand when useful.</CardDescription></CardHeader><CardContent className="space-y-3" aria-busy="true" aria-label="Example loading state"><Skeleton className="h-4 w-2/3" /><Skeleton className="h-4 w-full" /><Skeleton variant="brand" className="h-4 w-1/2" /><span className="sr-only" role="status">Example content loading</span></CardContent></Card>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><h2 className="text-3xl font-semibold tracking-tight">Functional and composable</h2><p className="mt-3 max-w-2xl text-muted-foreground">Pick a primitive, build a pattern, or start with a block. Every example uses the source distributed by the registry.</p></div><Link href="/showcase" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--lm-color-brand-focus)] hover:underline">Explore the catalog <ArrowRight aria-hidden="true" size={16} /></Link></div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link href="/foundations/color" className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><p className="text-xs text-muted-foreground">01 · Foundations</p><h3 className="mt-5 text-xl font-semibold">Your brand, one theme</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Override semantic color roles in light and dark without forking component source.</p></Link>
        <Link href="/components/button" className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><p className="text-xs text-muted-foreground">02 · Components</p><h3 className="mt-5 text-xl font-semibold">Editable UI</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Install only the controls you need and keep their source in your application.</p></Link>
        <Link href="/patterns/page-header" className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><p className="text-xs text-muted-foreground">03 · Patterns</p><h3 className="mt-5 text-xl font-semibold">Product structure</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Compose repeatable page problems from the same accessible building blocks.</p></Link>
      </div>
    </section>

    <section className="mx-auto mt-24 max-w-4xl px-5 text-center sm:px-8"><h2 className="text-3xl font-semibold tracking-tight">Start with the theme. Own the source.</h2><p className="mt-4 text-muted-foreground">A small install path keeps design decisions shared and component code close to your product.</p><pre className="mx-auto mt-8 max-w-xl overflow-x-auto rounded-xl border border-border bg-muted/40 p-5 text-left text-sm leading-7"><code>{`pnpm add @leement/theme\nnpx shadcn@latest add @leement/button`}</code></pre><Link href="/getting-started" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--lm-color-brand-focus)] hover:underline">Get started <ArrowRight aria-hidden="true" size={16} /></Link></section>
  </div>;
}
