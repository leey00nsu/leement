"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Slider } from "../../../registry/ui/slider";

function SliderMultiple() {
  return (
    <Slider
      defaultValue={[10, 20, 70]}
      max={100}
      step={10}
      className="mx-auto w-full max-w-xs"
    />
  );
}

export default function Example() {
  return <SliderMultiple />;
}
