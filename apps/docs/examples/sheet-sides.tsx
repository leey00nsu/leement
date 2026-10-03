"use client";
import { Button } from "../../../registry/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "../../../registry/ui/sheet";
export default function Example() {
  return (
    <div className="flex flex-wrap gap-3">
      {(["left", "top", "bottom"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" />}>
            Open {side}
          </SheetTrigger>
          <SheetContent side={side} className="max-h-[90dvh]">
            <SheetHeader>
              <SheetTitle>{side} details</SheetTitle>
              <SheetDescription>Review the project history.</SheetDescription>
            </SheetHeader>
            <div
              tabIndex={0}
              role="region"
              aria-label={`${side} history`}
              className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <p key={i} className="text-sm">
                  Revision {i + 1}: Updated the shared design rules.
                </p>
              ))}
            </div>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>
                Close {side}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
