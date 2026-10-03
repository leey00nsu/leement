import type * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
type NativeSelectProps = React.ComponentProps<"select"> & { sizeVariant?: "sm" | "default" };
function NativeSelect({ className, sizeVariant = "default", ...props }: NativeSelectProps) {
  return <div className="relative w-full"><select data-slot="native-select" className={cn("w-full appearance-none rounded-md border border-muted-foreground bg-(--lm-color-surface-default) px-3 pr-9 text-base text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive md:text-sm", sizeVariant === "sm" ? "h-9" : "h-10", className)} {...props} /><ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /></div>;
}
const NativeSelectOption = (props: React.ComponentProps<"option">) => <option {...props} />;
const NativeSelectOptGroup = (props: React.ComponentProps<"optgroup">) => <optgroup {...props} />;
export { NativeSelect, NativeSelectOption, NativeSelectOptGroup };
export type { NativeSelectProps };
