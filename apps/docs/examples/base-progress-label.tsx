"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "../../../registry/ui/progress";

function ProgressWithLabel() {
  return (
    <Progress value={56} className="w-full max-w-sm">
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}

export default function Example() {
  return <ProgressWithLabel />;
}
