import type * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="input-group" className={cn("flex min-w-0 items-center rounded-md border border-muted-foreground bg-(--lm-color-surface-default) text-foreground transition-colors has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring has-[[aria-invalid=true]]:border-destructive has-[:disabled]:opacity-50", className)} {...props} />;
}
function InputGroupAddon({ className, ...props }: React.ComponentProps<"div">) { return <div data-slot="input-group-addon" className={cn("flex shrink-0 items-center gap-2 px-3 text-sm text-muted-foreground [&_svg]:size-4", className)} {...props} />; }
function InputGroupInput({ className, ...props }: React.ComponentProps<typeof Input>) { return <Input data-slot="input-group-input" className={cn("min-w-0 flex-1 border-0 bg-transparent focus-visible:ring-0", className)} {...props} />; }
function InputGroupTextarea({ className, ...props }: React.ComponentProps<typeof Textarea>) { return <Textarea data-slot="input-group-textarea" className={cn("min-w-0 flex-1 border-0 bg-transparent focus-visible:ring-0", className)} {...props} />; }
function InputGroupButton({ className, size = "icon-sm", variant = "ghost", ...props }: React.ComponentProps<typeof Button>) { return <Button type="button" size={size} variant={variant} className={cn("m-0.5", className)} {...props} />; }
export { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea, InputGroupButton };
