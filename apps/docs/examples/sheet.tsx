"use client";

import { Button } from "../../../registry/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../../../registry/ui/sheet";

export default function SheetExample() {
  return <Sheet>
    <SheetTrigger render={<Button variant="outline" />}>Open details</SheetTrigger>
    <SheetContent>
      <SheetHeader><SheetTitle>Member details</SheetTitle><SheetDescription>Review this member before making changes.</SheetDescription></SheetHeader>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 px-4 text-sm"><dt className="text-muted-foreground">Name</dt><dd>Alex Kim</dd><dt className="text-muted-foreground">Role</dt><dd>Editor</dd><dt className="text-muted-foreground">Status</dt><dd>Active</dd></dl>
      <SheetFooter><SheetClose render={<Button variant="outline" />}>Done</SheetClose></SheetFooter>
    </SheetContent>
  </Sheet>;
}
