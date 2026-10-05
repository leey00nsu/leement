"use client";
import { Separator as Primitive } from "@base-ui/react/separator";
import { cn } from "@/lib/utils";
function Separator({ className, orientation = "horizontal", decorative = true, ...props }: Primitive.Props & { decorative?: boolean }) {
 return <Primitive data-slot="separator" orientation={orientation} role={decorative ? "presentation" : "separator"} aria-hidden={decorative || undefined} className={(state) => cn("shrink-0 border-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch", typeof className === "function" ? className(state) : className)} {...props} />;
}
export { Separator };
