import * as React from "react";
import { Loader, LoaderCircle, LoaderPinwheel } from "lucide-react";
import { cn } from "@/lib/utils";

type SpinnerVariant = "default" | "throbber" | "pinwheel" | "circle-filled" | "ellipsis" | "ring" | "bars" | "infinite";
type SpinnerProps = React.ComponentProps<"span"> & {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: SpinnerVariant;
};

const sizeClass = { sm: "size-4", md: "size-5", lg: "size-8" };

function SpinnerGlyph({ variant }: { variant: SpinnerVariant }) {
  if (variant === "throbber") return <Loader className="size-full animate-spin motion-reduce:animate-none" />;
  if (variant === "pinwheel") return <LoaderPinwheel className="size-full animate-spin motion-reduce:animate-none" />;
  if (variant === "circle-filled") return <span className="relative block size-full"><LoaderCircle className="absolute inset-0 size-full rotate-180 opacity-20" /><LoaderCircle className="relative size-full animate-spin motion-reduce:animate-none" /></span>;
  if (variant === "ellipsis") return <span className="flex size-full items-center justify-between gap-0.5"><span className="size-1.5 rounded-full bg-current animate-pulse motion-reduce:animate-none" /><span className="size-1.5 rounded-full bg-current animate-pulse [animation-delay:150ms] motion-reduce:animate-none" /><span className="size-1.5 rounded-full bg-current animate-pulse [animation-delay:300ms] motion-reduce:animate-none" /></span>;
  if (variant === "ring") return <span className="block size-full animate-spin rounded-full border-2 border-current/25 border-t-current motion-reduce:animate-none" />;
  if (variant === "bars") return <span className="flex size-full items-center justify-between gap-0.5"><span className="h-full w-1/4 rounded-sm bg-current animate-pulse motion-reduce:animate-none" /><span className="h-2/3 w-1/4 rounded-sm bg-current animate-pulse [animation-delay:150ms] motion-reduce:animate-none" /><span className="h-full w-1/4 rounded-sm bg-current animate-pulse [animation-delay:300ms] motion-reduce:animate-none" /></span>;
  if (variant === "infinite") return <svg className="size-full animate-pulse motion-reduce:animate-none" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 12C15 3 10 3 6 6c-5 4-3 12 3 12 5 0 8-7 11-12 3 5 6 12 11 12 6 0 8-8 3-12-4-3-9-3-14 6Z" /></svg>;
  return <LoaderCircle className="size-full animate-spin motion-reduce:animate-none" />;
}

function Spinner({ label = "Loading", size = "md", variant = "default", className, ...props }: SpinnerProps) {
  return <span data-slot="spinner" data-variant={variant} role="status" aria-label={label} className={cn("inline-flex shrink-0 items-center text-primary", className)} {...props}>
    <span aria-hidden="true" className={cn("block", sizeClass[size])}><SpinnerGlyph variant={variant} /></span>
    <span className="sr-only">{label}</span>
  </span>;
}

export { Spinner };
export type { SpinnerProps, SpinnerVariant };
