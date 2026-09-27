"use client";

import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import { Label } from "../../../registry/ui/label";
import { Popover, PopoverContent, PopoverDescription, PopoverTitle, PopoverTrigger } from "../../../registry/ui/popover";
import { Switch } from "../../../registry/ui/switch";

export default function PopoverExample() {
  const [notify, setNotify] = useState(true);
  return <Popover>
    <PopoverTrigger render={<Button variant="outline" />}>Show details</PopoverTrigger>
    <PopoverContent className="w-64 space-y-3">
      <PopoverTitle>Workspace</PopoverTitle>
      <PopoverDescription>12 active members are collaborating here.</PopoverDescription>
      <div className="flex items-center gap-3 border-t border-border pt-3"><Switch id="popover-notify" checked={notify} onCheckedChange={setNotify} /><Label htmlFor="popover-notify">Email updates</Label></div>
    </PopoverContent>
  </Popover>;
}
