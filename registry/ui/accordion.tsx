"use client";
import { Accordion as Primitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePresenceMotion, useStyleMotion } from "@/lib/leement-motion";
import styles from "./accordion.module.css";

const Accordion = Primitive.Root;
function AccordionItem({ className, ...props }: Primitive.Item.Props) {
  return <Primitive.Item data-slot="accordion-item" className={state => cn("border-b border-border last:border-b-0", typeof className === "function" ? className(state) : className)} {...props} />;
}
function AccordionTrigger({ className, children, ...props }: Primitive.Trigger.Props) {
  const iconRef = useStyleMotion<SVGSVGElement>(undefined, ["rotate"]);
  return <Primitive.Header><Primitive.Trigger data-slot="accordion-trigger" className={state => cn("group flex min-h-11 w-full items-center justify-between gap-4 rounded-sm py-3 text-left text-sm font-medium focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring data-disabled:cursor-not-allowed data-disabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-50", typeof className === "function" ? className(state) : className)} {...props}>{children}<ChevronDown ref={iconRef} aria-hidden="true" className="size-4 shrink-0 group-data-[panel-open]:rotate-180" /></Primitive.Trigger></Primitive.Header>;
}
function AccordionContent({ className, children, ref: forwardedRef, ...props }: Primitive.Panel.Props) {
  const ref = usePresenceMotion<HTMLDivElement>(forwardedRef, "expand", true);
  return <Primitive.Panel data-slot="accordion-content" ref={ref} className={state => cn(styles.panel, typeof className === "function" ? className(state) : className)} {...props}><div className="pb-4 text-sm text-muted-foreground">{children}</div></Primitive.Panel>;
}
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
