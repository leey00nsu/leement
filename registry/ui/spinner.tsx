"use client";
import * as React from "react";
import { Loader, LoaderCircle, LoaderPinwheel } from "lucide-react";
import { useMotionLoop } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

type SpinnerVariant =
  | "default"
  | "throbber"
  | "pinwheel"
  | "circle-filled"
  | "ellipsis"
  | "ring"
  | "bars"
  | "infinite";
type SpinnerProps = React.ComponentProps<"span"> & {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: SpinnerVariant;
};

const sizeClass = { sm: "size-4", md: "size-5", lg: "size-8" };

function SpinnerPart({
  children,
  pulse = false,
  index = 0,
  className,
}: {
  children?: React.ReactNode;
  pulse?: boolean;
  index?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  useMotionLoop(
    ref,
    pulse ? { opacity: [1, 0.4, 1] } : { rotate: [0, 360] },
    pulse ? "cycle-pulse" : "cycle-spin",
    false,
    undefined,
    false,
    index,
  );
  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
function SpinnerGlyph({ variant }: { variant: SpinnerVariant }) {
  if (variant === "throbber")
    return (
      <SpinnerPart className="block size-full">
        <Loader className="size-full" />
      </SpinnerPart>
    );
  if (variant === "pinwheel")
    return (
      <SpinnerPart className="block size-full">
        <LoaderPinwheel className="size-full" />
      </SpinnerPart>
    );
  if (variant === "circle-filled")
    return (
      <span className="relative block size-full">
        <LoaderCircle className="absolute inset-0 size-full rotate-180 opacity-20" />
        <SpinnerPart className="relative block size-full">
          <LoaderCircle className="size-full" />
        </SpinnerPart>
      </span>
    );
  if (variant === "ellipsis")
    return (
      <span className="flex size-full items-center justify-between gap-0.5">
        <SpinnerPart
          pulse
          index={0}
          className="size-1.5 rounded-full bg-current"
        />
        <SpinnerPart
          pulse
          index={1}
          className="size-1.5 rounded-full bg-current"
        />
        <SpinnerPart
          pulse
          index={2}
          className="size-1.5 rounded-full bg-current"
        />
      </span>
    );
  if (variant === "ring")
    return (
      <SpinnerPart className="block size-full rounded-full border-2 border-current/25 border-t-current" />
    );
  if (variant === "bars")
    return (
      <span className="flex size-full items-center justify-between gap-0.5">
        <SpinnerPart pulse className="h-full w-1/4 rounded-sm bg-current" />
        <SpinnerPart
          pulse
          index={1}
          className="h-2/3 w-1/4 rounded-sm bg-current"
        />
        <SpinnerPart
          pulse
          index={2}
          className="h-full w-1/4 rounded-sm bg-current"
        />
      </span>
    );
  if (variant === "infinite")
    return (
      <SpinnerPart pulse className="block size-full">
        <svg
          className="size-full"
          viewBox="0 0 40 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M20 12C15 3 10 3 6 6c-5 4-3 12 3 12 5 0 8-7 11-12 3 5 6 12 11 12 6 0 8-8 3-12-4-3-9-3-14 6Z" />
        </svg>
      </SpinnerPart>
    );
  return (
    <SpinnerPart className="block size-full">
      <LoaderCircle className="size-full" />
    </SpinnerPart>
  );
}

function Spinner({
  label = "Loading",
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerProps) {
  return (
    <span
      data-slot="spinner"
      data-variant={variant}
      role="status"
      aria-label={label}
      className={cn(
        "inline-flex shrink-0 items-center text-primary",
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className={cn("block", sizeClass[size])}>
        <SpinnerGlyph variant={variant} />
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}

export { Spinner };
export type { SpinnerProps, SpinnerVariant };
