"use client";
import { RadioGroup as Group } from "@base-ui/react/radio-group";
import { Radio } from "@base-ui/react/radio";
import { cn } from "@/lib/utils";
type RadioGroupProps = Group.Props<string>;
type RadioGroupItemProps = Radio.Root.Props;
function RadioGroup({ className, ...props }: RadioGroupProps) {
  return <Group data-slot="radio-group" className={(state) => cn("grid gap-3", typeof className === "function" ? className(state) : className)} {...props} />;
}
function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  return <Radio.Root data-slot="radio-group-item" className={(state) => cn("inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-muted-foreground bg-background outline-none focus-visible:ring-3 focus-visible:ring-ring data-checked:border-primary data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive", typeof className === "function" ? className(state) : className)} {...props}><Radio.Indicator className="size-2 rounded-full bg-primary" /></Radio.Root>;
}
export { RadioGroup, RadioGroupItem };
export type { RadioGroupProps, RadioGroupItemProps };
