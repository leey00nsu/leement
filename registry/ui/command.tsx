"use client";
import type { ComponentProps, ReactNode } from "react";
import { Command as Primitive } from "cmdk";
import { Search } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function Command({ className, ...props }: ComponentProps<typeof Primitive>) {
  return <Primitive data-slot="command" className={cn("flex w-full flex-col overflow-hidden rounded-xl bg-popover text-popover-foreground", className)} {...props} />;
}
type CommandDialogProps = Omit<ComponentProps<typeof Dialog>, "children"> & { children?: ReactNode; title?: string; description?: string; trigger?: ReactNode; className?: string; showCloseButton?: boolean };
// The consumer can supply a trigger or control the root open state.
function CommandDialog({ children, trigger, className, showCloseButton = false, title = "Command menu", description = "Search and select a command.", ...props }: CommandDialogProps) {
  return <Dialog {...props}>{trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}<DialogContent className={cn("overflow-hidden p-0", className)} showCloseButton={showCloseButton}><DialogTitle className="sr-only">{title}</DialogTitle><DialogDescription className="sr-only">{description}</DialogDescription>{children}</DialogContent></Dialog>;
}
function CommandInput({ className, ...props }: ComponentProps<typeof Primitive.Input>) {
  return <div className="flex items-center gap-2 border-b border-border px-4"><Search aria-hidden="true" className="size-4 text-muted-foreground" /><Primitive.Input className={cn("h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50", className)} {...props} /></div>;
}
function CommandList({ className, ...props }: ComponentProps<typeof Primitive.List>) { return <Primitive.List className={cn("max-h-72 overflow-y-auto overflow-x-hidden p-1", className)} {...props} />; }
function CommandEmpty({ className, ...props }: ComponentProps<typeof Primitive.Empty>) { return <Primitive.Empty className={cn("py-6 text-center text-sm text-muted-foreground", className)} {...props} />; }
function CommandGroup({ className, ...props }: ComponentProps<typeof Primitive.Group>) { return <Primitive.Group className={cn("p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className)} {...props} />; }
function CommandItem({ className, ...props }: ComponentProps<typeof Primitive.Item>) { return <Primitive.Item className={cn("flex min-h-10 cursor-default items-center gap-2 rounded-md border border-transparent px-2 text-sm outline-none data-[selected=true]:border-muted-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50", className)} {...props} />; }
function CommandSeparator({ className, ...props }: ComponentProps<typeof Primitive.Separator>) { return <Primitive.Separator className={cn("my-1 h-px bg-border", className)} {...props} />; }
function CommandShortcut({ className, ...props }: ComponentProps<"span">) { return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />; }
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut };
export type { CommandDialogProps };
