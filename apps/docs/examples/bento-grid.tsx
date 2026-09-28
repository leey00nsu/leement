import { BentoGrid, BentoGridItem } from "../../../registry/blocks/bento-grid";

export default function BentoGridExample() {
  return <BentoGrid className="w-full">
    <BentoGridItem className="md:col-span-4" eyebrow="Plan" title="Keep a clear view of the week">
      <div className="w-4/5 max-w-xs space-y-2 rounded-lg border border-border bg-background p-3 shadow-sm">
        <p className="text-xs font-medium text-muted-foreground">This week</p>
        {["Review proposals", "Share the roadmap", "Prepare launch"].map((item, index) => <div key={item} className="flex items-center gap-2 rounded-md bg-muted px-2.5 py-2 text-xs"><span className={index === 0 ? "size-2 rounded-full bg-data-accent" : "size-2 rounded-full border border-border-strong"} /><span>{item}</span></div>)}
      </div>
    </BentoGridItem>
    <BentoGridItem className="md:col-span-2" eyebrow="Measure" title="See progress in context">
      <div className="w-4/5 max-w-40 rounded-lg border border-border bg-background p-4"><p className="text-xs text-muted-foreground">Completed tasks</p><p className="mt-2 text-3xl font-semibold tabular-nums">68%</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[68%] rounded-full bg-data-accent" /></div></div>
    </BentoGridItem>
    <BentoGridItem className="md:col-span-6" eyebrow="Share" title="Bring the team into the same conversation">
      <div className="flex w-4/5 max-w-sm flex-col gap-2 rounded-lg border border-border bg-background p-3 text-xs"><p className="font-medium">Project update</p><p className="text-muted-foreground">The next milestone is ready for review.</p><div className="flex items-center gap-1.5 pt-1"><span className="size-5 rounded-full bg-data-accent/25" /><span className="size-5 rounded-full bg-muted" /><span className="size-5 rounded-full bg-muted" /><span className="ml-1 text-muted-foreground">3 teammates following</span></div></div>
    </BentoGridItem>
  </BentoGrid>;
}
