"use client";
import { useState } from "react";
import { Accordion as Primitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePresenceMotion, useStyleMotion } from "@/lib/leement-motion";

const Accordion = Primitive.Root;
function AccordionItem({ className, ...props }: Primitive.Item.Props) {
  return (
    <Primitive.Item
      data-slot="accordion-item"
      className={(state) =>
        cn(
          "border-b border-border last:border-b-0",
          typeof className === "function" ? className(state) : className,
        )
      }
      {...props}
    />
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}: Primitive.Trigger.Props) {
  const iconRef = useStyleMotion<SVGSVGElement>(undefined, ["rotate"]);
  return (
    <Primitive.Header>
      <Primitive.Trigger
        data-slot="accordion-trigger"
        className={(state) =>
          cn(
            "group flex min-h-11 w-full items-center justify-between gap-4 rounded-sm py-3 text-left text-sm font-medium focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring data-disabled:cursor-not-allowed data-disabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
            typeof className === "function" ? className(state) : className,
          )
        }
        {...props}
      >
        {children}
        <ChevronDown
          ref={iconRef}
          aria-hidden="true"
          className="size-4 shrink-0 group-data-[panel-open]:rotate-180"
        />
      </Primitive.Trigger>
    </Primitive.Header>
  );
}
function AccordionContent({
  className,
  children,
  ref: forwardedRef,
  keepMounted,
  ...props
}: Primitive.Panel.Props) {
  const [retained, setRetained] = useState(false);
  const ref = usePresenceMotion<HTMLDivElement>(
    forwardedRef,
    "expand",
    true,
    setRetained,
  );
  return (
    <Primitive.Panel
      keepMounted={keepMounted || retained}
      data-slot="accordion-content"
      ref={ref}
      className={(state) =>
        cn(
          "h-auto overflow-clip",
          typeof className === "function" ? className(state) : className,
        )
      }
      {...props}
    >
      <div className="pb-4 text-sm text-muted-foreground">{children}</div>
    </Primitive.Panel>
  );
}
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
