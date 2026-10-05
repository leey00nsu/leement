"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Button } from "../../../registry/ui/button";

function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>;
}

export default function Example() {
  return <ButtonSecondary />;
}
