"use client";

import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../../registry/ui/collapsible";
import { Input } from "../../../registry/ui/input";
import { Label } from "../../../registry/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../registry/ui/select";

export function AdoptionCompositions() {
  const [copyState, setCopyState] = useState("Copy");
  const snippet = "pnpm add @leement/theme";
  return <div className="grid items-start gap-6 lg:grid-cols-2">
    <section className="min-w-0 space-y-5 rounded-2xl bg-muted p-5 sm:p-6" aria-labelledby="adoption-form-heading">
      <h2 id="adoption-form-heading" className="text-lg font-semibold">Form field</h2>
      <div className="space-y-2 rounded-xl bg-background p-5"><Label htmlFor="adoption-email">Email</Label><Input id="adoption-email" type="email" aria-describedby="adoption-email-help" /><p id="adoption-email-help" className="text-xs text-muted-foreground">We will send updates here.</p></div>
    </section>
    <section className="min-w-0 space-y-5 rounded-2xl bg-muted p-5 sm:p-6" aria-labelledby="adoption-choice-heading">
      <h2 id="adoption-choice-heading" className="text-lg font-semibold">Date and choice</h2>
      <div className="space-y-4 rounded-xl bg-background p-5"><div className="space-y-2"><Label htmlFor="adoption-date">Start date</Label><Input id="adoption-date" type="date" /></div><div className="space-y-2"><Label htmlFor="adoption-choice">Priority</Label><Select defaultValue="normal" items={{ normal: "Normal", urgent: "Urgent" }}><SelectTrigger id="adoption-choice" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="normal">Normal</SelectItem><SelectItem value="urgent">Urgent</SelectItem></SelectContent></Select></div></div>
    </section>
    <section className="min-w-0 space-y-5 rounded-2xl bg-muted p-5 sm:p-6" aria-labelledby="adoption-code-heading">
      <h2 id="adoption-code-heading" className="text-lg font-semibold">Code preview</h2>
      <div className="space-y-3 rounded-xl bg-background p-5"><pre className="overflow-x-auto text-xs"><code>{snippet}</code></pre><Button size="sm" variant="outline" onClick={async () => { try { await navigator.clipboard.writeText(snippet); setCopyState("Copied"); } catch { setCopyState("Copy unavailable"); } }}>{copyState}</Button></div>
    </section>
    <section className="min-w-0 space-y-5 rounded-2xl bg-muted p-5 sm:p-6" aria-labelledby="adoption-expand-heading">
      <h2 id="adoption-expand-heading" className="text-lg font-semibold">Expandable explanation</h2>
      <div className="rounded-xl bg-background p-5"><Collapsible><CollapsibleTrigger className="text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">Read more</CollapsibleTrigger><CollapsibleContent><div className="pt-3 text-sm text-muted-foreground">This detail can be hidden until needed.</div></CollapsibleContent></Collapsible></div>
    </section>
  </div>;
}
