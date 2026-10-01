"use client";

import { useCallback } from "react";
import { cn } from "@/lib/utils";
import styles from "./collapsible.module.css";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({ ...props }: CollapsiblePrimitive.Trigger.Props) {
  return <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />;
}

// Keep padding and visual box styles on a child so Base UI can measure the full natural height.
function CollapsibleContent({ className, ref: forwardedRef, inert, ...props }: CollapsiblePrimitive.Panel.Props) {
  // Keep the closing panel inert while Base UI waits for the height transition.
  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    const sync = () => node.toggleAttribute("inert", Boolean(inert) || node.hasAttribute("data-closed"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(node, { attributes: true, attributeFilter: ["data-open", "data-closed"] });
    const externalCleanup = typeof forwardedRef === "function" ? forwardedRef(node) : undefined;
    if (forwardedRef && typeof forwardedRef !== "function") forwardedRef.current = node;
    return () => {
      observer.disconnect();
      if (typeof externalCleanup === "function") externalCleanup();
      else if (typeof forwardedRef === "function") forwardedRef(null);
      else if (forwardedRef) forwardedRef.current = null;
    };
  }, [forwardedRef, inert]);
  return <CollapsiblePrimitive.Panel ref={ref} inert={inert} data-slot="collapsible-content" className={(state) => cn(styles.panel, typeof className === "function" ? className(state) : className)} {...props} />;
}

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
