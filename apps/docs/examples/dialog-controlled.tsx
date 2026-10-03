"use client";
import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../../../registry/ui/dialog";
export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Review agreement</Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Workspace agreement</DialogTitle>
            <DialogDescription>
              Read the details before accepting.
            </DialogDescription>
          </DialogHeader>
          <div
            className="max-h-56 space-y-4 overflow-y-auto pr-2"
            tabIndex={0}
            role="region"
            aria-label="Agreement details"
          >
            {Array.from({ length: 10 }, (_, i) => (
              <p key={i} className="text-sm leading-6">
                Section {i + 1}: Your project owns its content and installed
                component source. Review your organization’s policies before
                sharing data.
              </p>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close agreement</Button>
            </DialogClose>
            <Button onClick={() => setOpen(false)}>Accept agreement</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <p role="status" className="text-sm">
        Dialog: {open ? "open" : "closed"}
      </p>
    </div>
  );
}
