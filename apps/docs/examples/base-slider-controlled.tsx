"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { Label } from "../../../registry/ui/label";
import { Slider } from "../../../registry/ui/slider";

function SliderControlled() {
  const [value, setValue] = React.useState([0.3, 0.7]);

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <span className="text-sm text-muted-foreground">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={(value) => setValue(value as number[])}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  );
}

export default function Example() {
  return <SliderControlled />;
}
