"use client";

import { CircleCheck, Info, TriangleAlert, XCircle } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import * as React from "react";
import { animate } from "motion";
import { motionSeconds, motionEasing } from "@/lib/leement-motion";
import { Toaster as SonnerToaster, toast, type ToasterProps } from "sonner";

function Toaster({ theme = "light", toastOptions, className, ...props }: ToasterProps) {
  const ref = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const controls = new Map<HTMLElement, ReturnType<typeof animate>>();
    const seen = new WeakSet<HTMLElement>();
    const update = () => {
      root.querySelectorAll<HTMLElement>("[data-sonner-toast]").forEach((node) => {
        const removed = node.dataset.removed === "true";
        if (seen.has(node) && !removed) return;
        seen.add(node);
        controls.get(node)?.stop();
        const reduced = typeof matchMedia !== "function" || matchMedia("(prefers-reduced-motion: reduce)").matches;
        controls.set(node, animate(node, { opacity: removed ? [1, 0] : [0, 1] }, { duration: reduced ? 0 : motionSeconds(node, "duration-fast"), ease: motionEasing(node, "standard") }));
      });
      controls.forEach((control, node) => { if (!root.contains(node)) { control.stop(); controls.delete(node); } });
    };
    const observer = new MutationObserver(update);
    observer.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-removed"] });
    update();
    return () => { observer.disconnect(); controls.forEach((control) => control.stop()); };
  }, []);
  return <><style>{`.lm-toaster, .lm-toaster * { transition: none !important; animation: none !important; }`}</style><SonnerToaster
    ref={ref}
    className={["lm-toaster", className].filter(Boolean).join(" ")}
    toastOptions={{ ...toastOptions, style: { ...toastOptions?.style, transition: "none" } }}
    theme={theme}
    icons={{ success: <CircleCheck className="size-4" />, info: <Info className="size-4" />, warning: <TriangleAlert className="size-4" />, error: <XCircle className="size-4" />, loading: <Spinner size="sm" /> }}
    style={{ "--normal-bg": "var(--popover)", "--normal-text": "var(--popover-foreground)", "--normal-border": "var(--border)", "--border-radius": "var(--lm-radius-md)" } as React.CSSProperties}
    {...props}
  /></>;
}

export { Toaster, toast };
