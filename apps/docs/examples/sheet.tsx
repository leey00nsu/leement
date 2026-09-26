"use client";

import { Button } from "../../../registry/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../../../registry/ui/sheet";

export default function SheetExample() {
  return <Sheet>
    <SheetTrigger render={<Button variant="outline" />}>Open details</SheetTrigger>
    <SheetContent>
      <SheetHeader><SheetTitle>Member details</SheetTitle><SheetDescription>Review and edit this member.</SheetDescription></SheetHeader>
      <div className="px-4 text-sm">Select a member to see their details.</div>
    </SheetContent>
  </Sheet>;
}
