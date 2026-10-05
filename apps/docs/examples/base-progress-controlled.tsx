"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { Progress } from "../../../registry/ui/progress";
import { Slider } from "../../../registry/ui/slider";

function ProgressControlled() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value} className="w-full" />
      <Slider
        value={value}
        onValueChange={(value) => setValue(value as number)}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
}

export default function Example() {
  return <ProgressControlled />;
}
