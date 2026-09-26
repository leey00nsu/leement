"use client";

import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../registry/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../../registry/ui/collapsible";
import { Input } from "../../../registry/ui/input";
import { Label } from "../../../registry/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../registry/ui/select";

export function AdoptionCompositions() {
  const [copyState, setCopyState] = useState("Copy");
  const snippet = "pnpm add @leement/theme";
  return <div className="grid gap-4 lg:grid-cols-2">
    <Card><CardHeader><CardTitle>Form field</CardTitle></CardHeader><CardContent className="space-y-2"><Label htmlFor="adoption-email">Email</Label><Input id="adoption-email" type="email" aria-describedby="adoption-email-help" /><p id="adoption-email-help" className="text-xs text-muted-foreground">We will send updates here.</p></CardContent></Card>
    <Card><CardHeader><CardTitle>Date and choice</CardTitle></CardHeader><CardContent className="space-y-4"><div className="space-y-2"><Label htmlFor="adoption-date">Start date</Label><Input id="adoption-date" type="date" /></div><div className="space-y-2"><Label htmlFor="adoption-choice">Priority</Label><Select defaultValue="normal" items={{ normal: "Normal", urgent: "Urgent" }}><SelectTrigger id="adoption-choice" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="normal">Normal</SelectItem><SelectItem value="urgent">Urgent</SelectItem></SelectContent></Select></div></CardContent></Card>
    <Card><CardHeader><CardTitle>Code preview</CardTitle></CardHeader><CardContent className="space-y-3"><pre className="overflow-x-auto rounded-md bg-muted p-3 text-xs"><code>{snippet}</code></pre><Button size="sm" variant="outline" onClick={async () => { try { await navigator.clipboard.writeText(snippet); setCopyState("Copied"); } catch { setCopyState("Copy unavailable"); } }}>{copyState}</Button></CardContent></Card>
    <Card><CardHeader><CardTitle>Expandable explanation</CardTitle></CardHeader><CardContent><Collapsible><CollapsibleTrigger className="text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">Read more</CollapsibleTrigger><CollapsibleContent className="pt-3 text-sm text-muted-foreground">This detail can be hidden until needed.</CollapsibleContent></Collapsible></CardContent></Card>
  </div>;
}
