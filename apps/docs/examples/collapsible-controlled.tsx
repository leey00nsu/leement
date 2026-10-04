"use client";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../registry/ui/select";

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
              <Select defaultValue="30" items={[{value:"30",label:"30 days"},{value:"90",label:"90 days"}]}><SelectTrigger className="w-full" aria-label="Retention period"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="30">30 days</SelectItem><SelectItem value="90">90 days</SelectItem></SelectContent></Select>
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
