"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { EyeOffIcon } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "../../../registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../../registry/ui/input-group";

function InputGroupInlineEnd() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="inline-end-input"
          type="password"
          placeholder="Enter password"
        />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  );
}

export default function Example() {
  return <InputGroupInlineEnd />;
}
