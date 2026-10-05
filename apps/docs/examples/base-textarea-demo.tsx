"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Textarea } from "../../../registry/ui/textarea";

function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}

export default function Example() {
  return <TextareaDemo />;
}
