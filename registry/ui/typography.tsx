import * as React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant = "display" | "heading" | "subheading" | "body" | "small" | "muted" | "code";
type TypographyProps = React.HTMLAttributes<HTMLElement> & { as?: React.ElementType; variant?: TypographyVariant };

const styles: Record<TypographyVariant, string> = {
  display: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
  heading: "text-2xl font-semibold tracking-tight text-foreground",
  subheading: "text-lg font-semibold text-foreground",
  body: "text-base leading-relaxed text-foreground",
  small: "text-sm leading-normal text-foreground",
  muted: "text-sm leading-normal text-muted-foreground",
  code: "rounded bg-muted px-1 py-0.5 font-mono text-sm text-foreground",
};

function Typography({ as: Component = "p", variant = "body", className, ...props }: TypographyProps) {
  return <Component data-slot="typography" className={cn(styles[variant], className)} {...props} />;
}

export { Typography };
export type { TypographyProps, TypographyVariant };
