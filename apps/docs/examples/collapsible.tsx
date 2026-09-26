"use client";

import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../../registry/ui/collapsible";

export default function CollapsibleExample() {
  return <Collapsible className="w-full max-w-sm space-y-2">
    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">Advanced options <ChevronDown className="size-4" /></CollapsibleTrigger>
    <CollapsibleContent className="rounded-md bg-muted p-3 text-sm">Additional settings appear here.</CollapsibleContent>
  </Collapsible>;
}
