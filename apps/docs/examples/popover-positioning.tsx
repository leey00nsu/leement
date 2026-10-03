"use client";
import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "../../../registry/ui/popover";
export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button variant="outline" />}>
          Top, start aligned
        </PopoverTrigger>
        <PopoverContent side="top" align="start" className="w-60 space-y-3">
          <PopoverTitle>Quick details</PopoverTitle>
          <PopoverDescription>
            Placed above the trigger when space allows.
          </PopoverDescription>
          <Button size="sm" onClick={() => setOpen(false)}>
            Done
          </Button>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Right, end aligned
        </PopoverTrigger>
        <PopoverContent side="right" align="end" className="w-60">
          <PopoverTitle>Related details</PopoverTitle>
          <PopoverDescription>
            This popup flips near the viewport edge.
          </PopoverDescription>
        </PopoverContent>
      </Popover>
    </div>
  );
}
