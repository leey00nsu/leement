"use client";
import type * as React from "react";
import { Field as Primitive } from "@base-ui/react/field";
import { cn } from "@/lib/utils";
function Field({ className, ...props }: Primitive.Root.Props) { return <Primitive.Root data-slot="field" className={(state) => cn("grid min-w-0 gap-2", typeof className === "function" ? className(state) : className)} {...props} />; }
function FieldLabel({ className, ...props }: Primitive.Label.Props) { return <Primitive.Label data-slot="field-label" className={(state) => cn("text-sm font-medium data-disabled:opacity-50", typeof className === "function" ? className(state) : className)} {...props} />; }
const FieldControl = Primitive.Control;
function FieldDescription({ className, ...props }: Primitive.Description.Props) { return <Primitive.Description data-slot="field-description" className={(state) => cn("text-sm leading-6 text-muted-foreground", typeof className === "function" ? className(state) : className)} {...props} />; }
function FieldError({ className, ...props }: Primitive.Error.Props) { return <Primitive.Error data-slot="field-error" className={(state) => cn("text-sm text-destructive", typeof className === "function" ? className(state) : className)} {...props} />; }
function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) { return <fieldset data-slot="field-set" className={cn("grid min-w-0 gap-5", className)} {...props} />; }
function FieldLegend({ className, ...props }: React.ComponentProps<"legend">) { return <legend className={cn("mb-3 text-sm font-semibold", className)} {...props} />; }
function FieldGroup({ className, ...props }: React.ComponentProps<"div">) { return <div data-slot="field-group" className={cn("grid min-w-0 gap-5", className)} {...props} />; }
export { Field, FieldLabel, FieldControl, FieldDescription, FieldError, FieldSet, FieldLegend, FieldGroup };
export type FieldProps = Primitive.Root.Props;
