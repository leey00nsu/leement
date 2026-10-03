"use client";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../../../registry/ui/hover-card";

export default function HoverCardExample() {

return (<HoverCard openDelay={200} closeDelay={100}><HoverCardTrigger asChild><a href="/docs" className="rounded-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">Leement documentation</a></HoverCardTrigger><HoverCardContent><p className="text-sm font-semibold">Leement</p><p className="mt-1 text-sm text-muted-foreground">Composable source for your product UI.</p></HoverCardContent></HoverCard>);
}
