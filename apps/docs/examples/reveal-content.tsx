"use client";

import { RevealContent } from "../../../registry/ui/reveal-content";

export default function RevealContentExample() {
  return <RevealContent variant="section" className="rounded-xl border border-border bg-card p-5">
    <h3 className="font-semibold">A clear next step</h3>
    <p className="mt-2 text-sm text-muted-foreground">Content appears when it enters view and remains visible.</p>
  </RevealContent>;
}
