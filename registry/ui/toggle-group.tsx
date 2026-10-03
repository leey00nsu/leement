"use client";
import { ToggleGroup as Primitive } from "@base-ui/react/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
type ToggleGroupProps = Primitive.Props;
function ToggleGroup({ className, ...props }: ToggleGroupProps) {
  return <Primitive data-slot="toggle-group" className={(state) => cn("flex flex-wrap gap-1 data-[orientation=vertical]:flex-col", typeof className === "function" ? className(state) : className)} {...props} />;
}
const ToggleGroupItem = Toggle;
export { ToggleGroup, ToggleGroupItem };
export type { ToggleGroupProps };
