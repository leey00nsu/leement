"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Checkbox } from "../../../registry/ui/checkbox";
import { Label } from "../../../registry/ui/label";

function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

export default function Example() {
  return <LabelDemo />;
}
