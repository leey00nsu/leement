"use client";
import { motionSeconds, motionEasing, useMotionRevision } from "@/lib/leement-motion";

import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import { Button } from "../../../registry/ui/button";
import { RevealContent } from "../../../registry/ui/reveal-content";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../../registry/ui/collapsible";
import TextRevealExample from "../examples/text-reveal";
import MediaRevealExample from "../examples/media-reveal";
import BrandActionExample from "../examples/brand-action";
import RotatingContentExample from "../examples/rotating-content";
function TimingSample({ moved, speed }: { moved: boolean; speed: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const revision = useMotionRevision();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = typeof matchMedia !== "function" || matchMedia("(prefers-reduced-motion: reduce)").matches;
    const control = animate(node, { marginLeft: moved ? Math.max(0, (node.parentElement?.clientWidth ?? 0) - node.offsetWidth - 8) : 0 }, { duration: reduced ? 0 : motionSeconds(node, `duration-${speed}`), ease: motionEasing(node, "standard") });
    return () => control.stop();
  }, [moved, speed, revision]);
  return <div ref={ref} className="size-5 rounded-sm bg-primary" />;
}
export function MotionPreview() {


  const [moved, setMoved] = useState(false);
  const [replay, setReplay] = useState(0);
  return <div className="space-y-5" data-testid="foundation-actual-preview"><p className="text-sm text-muted-foreground">Timing edits affect these distributed sources. Replay an entrance after editing; repeating effects update immediately.</p><Button size="sm" variant="outline" aria-pressed={moved} onClick={() => setMoved((value) => !value)}>Move preview</Button><div className="space-y-3">{["fast", "normal", "slow"].map((speed) => <div key={speed} className="flex items-center gap-3 text-xs"><span className="w-12 shrink-0 capitalize">{speed}</span><div className="h-7 flex-1 overflow-hidden rounded-md bg-muted p-1"><TimingSample speed={speed} moved={moved} /></div></div>)}</div><section className="space-y-3 border-t border-border pt-4"><h4 className="font-medium">Entrance and text</h4><Button variant="ghost" size="sm" onClick={() => setReplay((n) => n + 1)}>Replay entrances</Button><RevealContent key={replay} variant="section" className="rounded-lg border border-border bg-muted p-4"><p className="text-sm">A measured reveal for supporting content.</p></RevealContent><TextRevealExample key={`text-${replay}`} /></section><section className="space-y-3 border-t border-border pt-4"><h4 className="font-medium">Optional details</h4><Collapsible><CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Toggle result details</CollapsibleTrigger><CollapsibleContent><div className="space-y-2 py-4 text-sm"><p>Result details grow to their natural height.</p><label className="block">Result name<input className="ml-2 w-32 rounded border border-input bg-background px-2 py-1" defaultValue="Preview" /></label></div></CollapsibleContent></Collapsible></section><section className="space-y-3 border-t border-border pt-4"><h4 className="font-medium">Media readiness</h4><MediaRevealExample /></section><section className="space-y-3 border-t border-border pt-4"><h4 className="font-medium">Brand action</h4><BrandActionExample /></section><section className="space-y-3 border-t border-border pt-4"><h4 className="font-medium">Decorative rotation</h4><RotatingContentExample /></section><p className="text-xs text-muted-foreground">Reduced motion removes entrance movement and stops all automatic repetition.</p></div>;
}
