"use client";

import { Button } from "../../../registry/ui/button";
import { Popover, PopoverContent, PopoverDescription, PopoverTitle, PopoverTrigger } from "../../../registry/ui/popover";

export default function PopoverExample() {
  return <Popover>
    <PopoverTrigger render={<Button variant="outline" />}>Show details</PopoverTrigger>
    <PopoverContent className="w-64 space-y-1">
      <PopoverTitle>Workspace</PopoverTitle>
      <PopoverDescription>12 active members are collaborating here.</PopoverDescription>
    </PopoverContent>
  </Popover>;
}
