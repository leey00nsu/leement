"use client";
import { Checkbox as Primitive } from "@base-ui/react/checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
type CheckboxProps = Primitive.Root.Props;
function Checkbox({ className, indeterminate, ...props }: CheckboxProps) {
  return <Primitive.Root indeterminate={indeterminate} data-slot="checkbox" className={(state) => cn("inline-flex size-4 shrink-0 items-center justify-center rounded-sm border border-muted-foreground bg-background text-foreground outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive", typeof className === "function" ? className(state) : className)} {...props}>
    <Primitive.Indicator className="flex items-center justify-center">{indeterminate ? <Minus aria-hidden="true" className="size-3" /> : <Check aria-hidden="true" className="size-3" />}</Primitive.Indicator>
  </Primitive.Root>;
}
export { Checkbox };
export type { CheckboxProps };
