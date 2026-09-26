import * as React from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type SpinnerProps = React.ComponentProps<"span"> & { label?: string; size?: "sm" | "md" | "lg" };

function Spinner({ label = "Loading", size = "md", className, ...props }: SpinnerProps) {
  return <span data-slot="spinner" role="status" aria-label={label} className={cn("inline-flex items-center text-primary", className)} {...props}><LoaderCircle aria-hidden="true" className={cn("animate-spin motion-reduce:animate-none", size === "sm" ? "size-4" : size === "lg" ? "size-8" : "size-5")} /><span className="sr-only">{label}</span></span>;
}

export { Spinner };
export type { SpinnerProps };
