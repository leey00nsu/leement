"use client";
import * as React from "react";
import { Field as Primitive } from "@base-ui/react/field";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
function Field({ className, orientation = "vertical", ...props }: FieldProps) { return <Primitive.Root role="group" data-slot="field" data-orientation={orientation} className={(state) => cn("group/field flex min-w-0 gap-2", orientation === "vertical" ? "flex-col" : orientation === "horizontal" ? "flex-row items-start" : "flex-col @md/field-group:flex-row @md/field-group:items-start", typeof className === "function" ? className(state) : className)} {...props} />; }
function FieldLabel({ className, ...props }: Primitive.Label.Props) { return <Primitive.Label data-slot="field-label" className={(state) => cn("text-sm font-medium data-disabled:opacity-50", typeof className === "function" ? className(state) : className)} {...props} />; }
const FieldControl = Primitive.Control;
function FieldDescription({ className, ...props }: Primitive.Description.Props) { return <Primitive.Description data-slot="field-description" className={(state) => cn("text-sm leading-6 text-muted-foreground", typeof className === "function" ? className(state) : className)} {...props} />; }
function FieldError({ className, errors, children, ...props }: Primitive.Error.Props & { errors?: Array<{message?:string} | undefined> }) {
  if (errors !== undefined) {
    const messages = [...new Set(errors.map(error=>error?.message).filter((message):message is string=>Boolean(message)))];
    const content = children ?? (messages.length === 1 ? messages[0] : messages.length ? <ul className="ms-4 list-disc space-y-1">{messages.map(message=><li key={message}>{message}</li>)}</ul> : null);
    return content ? <Primitive.Error match role="alert" data-slot="field-error" className={state=>cn("text-sm text-destructive", typeof className === "function" ? className(state) : className)} {...props}>{content}</Primitive.Error> : null;
  }
  return <Primitive.Error data-slot="field-error" className={(state) => cn("text-sm text-destructive", typeof className === "function" ? className(state) : className)} {...props}>{children}</Primitive.Error>; }
function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) { return <fieldset data-slot="field-set" className={cn("@container/field-group group/field-group grid min-w-0 gap-5", className)} {...props} />; }
function FieldLegend({ className, variant="legend", ...props }: React.ComponentProps<"legend"> & {variant?:"legend"|"label"}) { return <legend data-slot="field-legend" data-variant={variant} className={cn("mb-3 font-semibold", variant === "label" ? "text-sm" : "text-base", className)} {...props} />; }
function FieldGroup({ className, ...props }: React.ComponentProps<"div">) { return <div data-slot="field-group" className={cn("@container/field-group group/field-group grid min-w-0 gap-5", className)} {...props} />; }
function FieldContent({className,...props}: React.ComponentProps<"div">) {return <div data-slot="field-content" className={cn("flex min-w-0 flex-1 flex-col gap-1 leading-snug",className)} {...props} />;}
function FieldTitle({className,...props}: React.ComponentProps<"div">) {return <div data-slot="field-label" className={cn("text-sm font-medium",className)} {...props} />;}
function FieldSeparator({className,children,...props}: React.ComponentProps<"div">) {return <div data-slot="field-separator" data-content={Boolean(children)} className={cn("relative my-2 text-xs text-muted-foreground",className)} {...props}><Separator className="absolute inset-0 top-1/2" />{children && <span data-slot="field-separator-content" className="relative mx-auto block w-fit bg-background px-2">{children}</span>}</div>;}
export { FieldContent, FieldTitle, FieldSeparator, Field, FieldLabel, FieldControl, FieldDescription, FieldError, FieldSet, FieldLegend, FieldGroup };
export type FieldProps = Primitive.Root.Props & {orientation?:"vertical"|"horizontal"|"responsive"};
