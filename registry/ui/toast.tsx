"use client";

import { CircleCheck, Info, Loader2, TriangleAlert, XCircle } from "lucide-react";
import type * as React from "react";
import { Toaster as SonnerToaster, toast, type ToasterProps } from "sonner";

function Toaster({ theme = "light", ...props }: ToasterProps) {
  return <SonnerToaster
    theme={theme}
    icons={{ success: <CircleCheck className="size-4" />, info: <Info className="size-4" />, warning: <TriangleAlert className="size-4" />, error: <XCircle className="size-4" />, loading: <Loader2 className="size-4 animate-spin" /> }}
    style={{ "--normal-bg": "var(--popover)", "--normal-text": "var(--popover-foreground)", "--normal-border": "var(--border)", "--border-radius": "var(--lm-radius-md)" } as React.CSSProperties}
    {...props}
  />;
}

export { Toaster, toast };
