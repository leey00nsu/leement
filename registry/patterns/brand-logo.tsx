import type * as React from "react";
import { cn } from "@/lib/utils";

export type BrandLogoProps = Omit<React.ComponentProps<"span">, "children"> & {
  /** Product name, also used as the accessible name for an icon-only logo. */
  name: string;
  /** App-owned SVG, image or icon. It is decorative inside this composition. */
  mark: React.ReactNode;
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  markClassName?: string;
  textClassName?: string;
};

const sizes = {
  sm: { mark: "size-8", text: "text-lg", gap: "gap-2" },
  md: { mark: "size-10", text: "text-xl", gap: "gap-2.5" },
  lg: { mark: "size-12", text: "text-2xl", gap: "gap-3" },
} as const;

/** Compose with an anchor or your router's Link when the logo navigates. */
export function BrandLogo({
  name, mark, variant = "full", size = "md", className,
  markClassName, textClassName, ...props
}: BrandLogoProps) {
  const iconOnly = variant === "icon";
  return <span
    data-slot="brand-logo"
    data-variant={variant}
    data-size={size}
    role={iconOnly ? "img" : undefined}
    aria-label={iconOnly ? name : undefined}
    className={cn("inline-flex min-w-0 items-center align-middle text-foreground", sizes[size].gap, className)}
    {...props}
  >
    <span aria-hidden="true" data-slot="brand-logo-mark" className={cn("flex shrink-0 items-center justify-center [&>svg]:size-full [&>img]:size-full [&>img]:object-contain", sizes[size].mark, markClassName)}>{mark}</span>
    {!iconOnly && <span data-slot="brand-logo-name" className={cn("truncate font-brand font-[700] tracking-[-0.03em]", sizes[size].text, textClassName)}>{name}</span>}
  </span>;
}
