"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Button } from "../../../registry/ui/button";

function ButtonDefault() {
  return <Button>Button</Button>;
}

export default function Example() {
  return <ButtonDefault />;
}
