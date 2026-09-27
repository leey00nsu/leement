import type * as React from "react";

import { cn } from "@/lib/utils";

type BrandGradientTextProps = React.ComponentProps<"span"> & { animated?: boolean };

function BrandGradientText({ animated = true, className, ...props }: BrandGradientTextProps) {
  return <span data-slot="brand-gradient-text" data-animated={animated} className={cn("lm-brand-gradient-text", className)} {...props} />;
}

export type { BrandGradientTextProps };
export { BrandGradientText };
