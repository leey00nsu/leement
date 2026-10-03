import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
type AspectRatioProps = ComponentProps<"div"> & { ratio?: number };
function AspectRatio({ ratio = 1, className, style, ...props }: AspectRatioProps) {
  return <div data-slot="aspect-ratio" className={cn("relative w-full", className)} style={{ aspectRatio: Number.isFinite(ratio) && ratio > 0 ? ratio : 1, ...style }} {...props} />;
}
export { AspectRatio };
export type { AspectRatioProps };
