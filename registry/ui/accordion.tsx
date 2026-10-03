"use client";
import { Accordion as Primitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import styles from "./accordion.module.css";

const Accordion = Primitive.Root;
function AccordionItem({ className, ...props }: Primitive.Item.Props) {
  return <Primitive.Item data-slot="accordion-item" className={state => cn("border-b border-border last:border-b-0", typeof className === "function" ? className(state) : className)} {...props} />;
}
function AccordionTrigger({ className, children, ...props }: Primitive.Trigger.Props) {
  return <Primitive.Header><Primitive.Trigger data-slot="accordion-trigger" className={state => cn("group flex min-h-11 w-full items-center justify-between gap-4 rounded-sm py-3 text-left text-sm font-medium focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring data-disabled:cursor-not-allowed data-disabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-50", typeof className === "function" ? className(state) : className)} {...props}>{children}<ChevronDown aria-hidden="true" className="size-4 shrink-0 transition-transform duration-(--lm-motion-duration-normal) group-data-[panel-open]:rotate-180 motion-reduce:transition-none" /></Primitive.Trigger></Primitive.Header>;
}
function AccordionContent({ className, children, ref: forwardedRef, inert, ...props }: Primitive.Panel.Props) {
  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    const sync = () => node.toggleAttribute("inert", Boolean(inert) || node.hasAttribute("data-closed"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(node, { attributes: true, attributeFilter: ["data-open", "data-closed"] });
    const cleanup = typeof forwardedRef === "function" ? forwardedRef(node) : undefined;
    if (forwardedRef && typeof forwardedRef !== "function") forwardedRef.current = node;
    return () => { observer.disconnect(); if (typeof cleanup === "function") cleanup(); else if (typeof forwardedRef === "function") forwardedRef(null); else if (forwardedRef) forwardedRef.current = null; };
  }, [forwardedRef, inert]);
  return <Primitive.Panel data-slot="accordion-content" ref={ref} inert={inert} className={state => cn(styles.panel, typeof className === "function" ? className(state) : className)} {...props}><div className="pb-4 text-sm text-muted-foreground">{children}</div></Primitive.Panel>;
}
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
