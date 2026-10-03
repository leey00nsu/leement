"use client";
import { useId, useState } from "react";
import { Textarea } from "../../../registry/ui/textarea";
export default function Example() {
  const id = useId();
  const [value, setValue] = useState("");
  const invalid = value.length > 80;
  return (
    <div className="w-full max-w-md space-y-5">
      <div className="space-y-2">
        <label htmlFor={id} className="text-sm">
          Summary (80 characters)
        </label>
        <Textarea
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-invalid={invalid}
          aria-describedby={`${id}-help`}
        />
        <p
          id={`${id}-help`}
          className={
            invalid
              ? "text-sm text-destructive"
              : "text-sm text-muted-foreground"
          }
        >
          {value.length}/80{" "}
          {invalid
            ? "· Shorten the summary."
            : "· Describe the purpose briefly."}
        </p>
      </div>
      <label className="grid gap-2 text-sm">
        Read-only summary
        <Textarea
          readOnly
          defaultValue="This approved summary remains selectable."
        />
      </label>
      <label className="grid gap-2 text-sm">
        Unavailable summary
        <Textarea disabled defaultValue="Managed by your organization." />
      </label>
    </div>
  );
}
