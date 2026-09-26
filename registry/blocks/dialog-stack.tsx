"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";

type DialogStackPage = { id: string; title: string; description?: string; content: React.ReactNode };
type DialogStackProps = { triggerLabel: string; pages: DialogStackPage[]; onFinish?: () => void; className?: string };

function DialogStack({ triggerLabel, pages, onFinish, className }: DialogStackProps) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const page = pages[index];
  function changeOpen(next: boolean) { setOpen(next); if (!next) setIndex(0); }
  return <DialogPrimitive.Root open={open} onOpenChange={changeOpen}>
    <DialogPrimitive.Trigger className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">{triggerLabel}</DialogPrimitive.Trigger>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
      <DialogPrimitive.Content className={cn("fixed left-1/2 top-1/2 z-50 w-[min(32rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-popover p-5 text-popover-foreground shadow-lg", className)}>
        {page ? <>
          <div className="mb-4 flex items-start justify-between gap-2">
            <div>
              <p aria-live="polite" className="mb-1 text-xs text-muted-foreground">Step {index + 1} of {pages.length}</p>
              <DialogPrimitive.Title className="text-lg font-semibold">{page.title}</DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-1 text-sm text-muted-foreground">{page.description ?? page.title}</DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close aria-label="Close dialog" className="rounded-md p-1 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><X className="size-4" /></DialogPrimitive.Close>
          </div>
          {pages.map((step, position) => <div key={step.id} hidden={position !== index}>{step.content}</div>)}
          <div className="mt-5 flex justify-between gap-3 border-t border-border pt-4">
            <button type="button" disabled={index === 0} onClick={() => setIndex((current) => current - 1)} aria-label="Previous step" className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"><ChevronLeft className="size-4" />Back</button>
            <button type="button" onClick={() => { if (index < pages.length - 1) setIndex((current) => current + 1); else { onFinish?.(); changeOpen(false); } }} className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40">{index === pages.length - 1 ? "Finish" : "Continue"}</button>
          </div>
        </> : <>
          <DialogPrimitive.Title>No steps</DialogPrimitive.Title>
          <DialogPrimitive.Description>Add a page before opening this dialog.</DialogPrimitive.Description>
          <DialogPrimitive.Close className="mt-4 rounded-md border border-border px-3 py-2">Close</DialogPrimitive.Close>
        </>}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
}

export { DialogStack };
export type { DialogStackPage, DialogStackProps };
