import { ArrowUpRight } from "lucide-react";
import { ResourceRow, ResourceRowLink } from "../../../registry/patterns/resource-row-link";

export default function ResourceRowLinkExample() {
  return <ResourceRow className="flex w-full max-w-sm items-center justify-between rounded-lg border border-border p-4">
    <div><p className="font-medium">Getting started</p><p className="text-sm text-muted-foreground">Install the theme and your first component.</p></div>
    <ResourceRowLink href="/getting-started" aria-label="Open getting started"><ArrowUpRight className="size-4" /></ResourceRowLink>
  </ResourceRow>;
}
