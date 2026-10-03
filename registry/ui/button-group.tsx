import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
function ButtonGroup({ orientation = "horizontal", className, ...props }: ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  return <div role="group" data-orientation={orientation} className={cn("isolate inline-flex max-w-full [&>button]:relative [&>a]:relative [&>*:focus-visible]:z-10", orientation === "horizontal" ? "[&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none" : "flex-col [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none", className)} {...props} />;
}
export { ButtonGroup };
