"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Field, FieldLabel } from "../../../registry/ui/field";
import { Textarea } from "../../../registry/ui/textarea";

function TextareaDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="Type your message here."
        disabled
      />
    </Field>
  );
}

export default function Example() {
  return <TextareaDisabled />;
}
