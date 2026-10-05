"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "../../../registry/ui/field";
import { Textarea } from "../../../registry/ui/textarea";

function TextareaInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea
        id="textarea-invalid"
        placeholder="Type your message here."
        aria-invalid
      />
      <FieldDescription>Please enter a valid message.</FieldDescription>
    </Field>
  );
}

export default function Example() {
  return <TextareaInvalid />;
}
