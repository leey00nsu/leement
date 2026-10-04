"use client";
import { useState } from "react";

import { usePresenceMotion } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({ ...props }: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
  );
}

// Padding stays inside the measured panel.
function CollapsibleContent({
  className,
  ref: forwardedRef,
  keepMounted,
  ...props
}: CollapsiblePrimitive.Panel.Props) {
  const [retained, setRetained] = useState(false);
  const ref = usePresenceMotion<HTMLDivElement>(
    forwardedRef,
    "expand",
    true,
    setRetained,
  );
  return (
    <CollapsiblePrimitive.Panel
      keepMounted={keepMounted || retained}
      ref={ref}
      data-slot="collapsible-content"
      className={(state) =>
        cn(
          "h-auto overflow-clip",
          typeof className === "function" ? className(state) : className,
        )
      }
      {...props}
    />
  );
}

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
