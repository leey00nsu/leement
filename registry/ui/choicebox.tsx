"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Choice = { value: string; title: string; description?: string; disabled?: boolean };
type ChoiceboxProps = Omit<React.ComponentProps<"fieldset">, "onChange"> & {
  legend: string;
  choices: Choice[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
};

function Choicebox({ legend, choices, value, defaultValue, onValueChange, name, disabled, className, ...props }: ChoiceboxProps) {
  const generatedName = React.useId();
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = value ?? internal;
  return <fieldset data-slot="choicebox" disabled={disabled} className={cn("space-y-2", className)} {...props}>
    <legend className="mb-2 text-sm font-medium">{legend}</legend>
    {choices.map((choice) => <label key={choice.value} className={cn("flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-card p-4 text-card-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/40 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50", selected === choice.value && "border-primary bg-primary/5")}>
      <input type="radio" name={name ?? generatedName} value={choice.value} checked={selected === choice.value} disabled={choice.disabled} onChange={() => { if (value === undefined) setInternal(choice.value); onValueChange?.(choice.value); }} className="mt-0.5 accent-primary" />
      <span><span className="block text-sm font-medium">{choice.title}</span>{choice.description && <span className="mt-1 block text-xs text-muted-foreground">{choice.description}</span>}</span>
    </label>)}
  </fieldset>;
}

export { Choicebox };
export type { Choice, ChoiceboxProps };
