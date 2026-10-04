"use client";

import { usePresenceMotion } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";
import styles from "./collapsible.module.css";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({ ...props }: CollapsiblePrimitive.Trigger.Props) {
  return <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />;
}

// Padding stays inside the measured panel.
function CollapsibleContent({ className, ref: forwardedRef, ...props }: CollapsiblePrimitive.Panel.Props) {
  const ref = usePresenceMotion<HTMLDivElement>(forwardedRef, "expand", true);
  return <CollapsiblePrimitive.Panel ref={ref} data-slot="collapsible-content" className={(state) => cn(styles.panel, typeof className === "function" ? className(state) : className)} {...props} />;
}

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
