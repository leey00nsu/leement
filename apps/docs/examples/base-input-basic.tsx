"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Input } from "../../../registry/ui/input";

function InputBasic() {
  return <Input placeholder="Enter text" />;
}

export default function Example() {
  return <InputBasic />;
}
