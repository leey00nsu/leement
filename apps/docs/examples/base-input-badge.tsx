"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Badge } from "../../../registry/ui/badge";
import { Field, FieldLabel } from "../../../registry/ui/field";
import { Input } from "../../../registry/ui/input";

function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          Beta
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  );
}

export default function Example() {
  return <InputBadge />;
}
