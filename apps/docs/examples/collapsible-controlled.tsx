"use client";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../../../registry/ui/collapsible";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-sm space-y-4">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger
          render={<Button variant="outline" className="w-full" />}
        >
          Advanced preferences
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="space-y-4 pt-4">
            <label className="grid gap-2 text-sm">
              Retention period
              <select className="h-10 rounded-md border border-input bg-background px-3">
                <option>30 days</option>
                <option>90 days</option>
              </select>
            </label>
            <p className="text-sm leading-6 text-muted-foreground">
              These settings apply to new files. Existing records keep their
              previous retention period.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Button size="sm" variant="ghost" onClick={() => setOpen((v) => !v)}>
        Toggle externally
      </Button>
      <Collapsible disabled>
        <CollapsibleTrigger render={<Button variant="outline" />}>
          Managed preferences
        </CollapsibleTrigger>
        <CollapsibleContent>Unavailable settings</CollapsibleContent>
      </Collapsible>
    </div>
  );
}
