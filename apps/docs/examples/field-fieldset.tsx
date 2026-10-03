"use client";
import { useId, useState } from "react";
import {
  Field,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldSet,
  FieldLegend,
} from "../../../registry/ui/field";
import { Textarea } from "../../../registry/ui/textarea";
import { NativeSelect } from "../../../registry/ui/native-select";
import { Checkbox } from "../../../registry/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../../../registry/ui/radio-group";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const id = useId();
  const [result, setResult] = useState("Not submitted");
  return (
    <form
      className="w-full max-w-sm space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setResult(
          JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
        );
      }}
    >
      <FieldSet>
        <FieldLegend>Workspace preferences</FieldLegend>
        <Field>
          <FieldLabel>Notes</FieldLabel>
          <FieldControl name="notes" render={<Textarea />} />
          <FieldDescription>Optional context for the team.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel>Visibility</FieldLabel>
          <FieldControl
            name="visibility"
            defaultValue="team"
            render={
              <NativeSelect>
                <option value="team">Team</option>
                <option value="private">Private</option>
              </NativeSelect>
            }
          />
          <FieldDescription>Who can view this workspace.</FieldDescription>
        </Field>
        <fieldset className="space-y-3">
          <legend className="mb-2 text-sm font-medium">Email frequency</legend>
          <RadioGroup name="frequency" defaultValue="weekly">
            {["daily", "weekly"].map((value) => (
              <label
                key={value}
                className="flex min-h-10 items-center gap-2 text-sm"
              >
                <RadioGroupItem value={value} />
                {value}
              </label>
            ))}
          </RadioGroup>
        </fieldset>
        <label
          htmlFor={id}
          className="flex min-h-10 items-center gap-2 text-sm"
        >
          <Checkbox id={id} name="updates" value="yes" defaultChecked />
          Receive product updates
        </label>
      </FieldSet>
      <Button type="submit">Read preferences</Button>
      <p role="status" className="break-all text-sm">
        {result}
      </p>
    </form>
  );
}
