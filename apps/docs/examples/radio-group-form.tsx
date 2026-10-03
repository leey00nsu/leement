"use client";
import { useId, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../../../registry/ui/radio-group";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const id = useId();
  const [value, setValue] = useState("weekly");
  const [result, setResult] = useState("Not submitted");
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setResult(String(new FormData(e.currentTarget).get("frequency")));
      }}
    >
      <fieldset>
        <legend className="mb-3 text-sm font-medium">
          Notification frequency
        </legend>
        <RadioGroup name="frequency" value={value} onValueChange={setValue}>
          {["daily", "weekly", "never"].map((item) => (
            <label
              key={item}
              className="flex min-h-10 items-center gap-2 text-sm"
            >
              <RadioGroupItem value={item} />
              {item}
            </label>
          ))}
        </RadioGroup>
      </fieldset>
      <fieldset>
        <legend className="mb-3 text-sm font-medium">Required plan</legend>
        <RadioGroup aria-invalid="true" aria-describedby={id}>
          {["personal", "team"].map((item) => (
            <label
              key={item}
              className="flex min-h-10 items-center gap-2 text-sm"
            >
              <RadioGroupItem value={item} aria-invalid="true" />
              {item}
            </label>
          ))}
        </RadioGroup>
        <p id={id} className="mt-2 text-sm text-destructive">
          Choose a plan before continuing.
        </p>
      </fieldset>
      <Button type="submit">Read frequency</Button>
      <p role="status" className="text-sm">
        Submitted: {result}
      </p>
    </form>
  );
}
