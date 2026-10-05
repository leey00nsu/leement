"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Badge } from "../../../registry/ui/badge";

function BadgeCustomColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-[var(--lm-color-data-accent)] text-[var(--lm-color-data-accent-foreground)]  ">
        Accent
      </Badge>
      <Badge className="bg-[var(--lm-color-status-success)] text-[var(--lm-color-status-success-foreground)]  ">
        Success
      </Badge>
      <Badge className="bg-muted text-muted-foreground">Neutral</Badge>
      <Badge className="bg-primary/10 text-primary  ">Primary</Badge>
      <Badge className="bg-destructive/10 text-[var(--lm-color-action-danger)]  ">
        Danger
      </Badge>
    </div>
  );
}

export default function Example() {
  return <BadgeCustomColors />;
}
