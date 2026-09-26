"use client";

import { useState } from "react";
import { Slider } from "../../../registry/ui/slider";

export default function SliderExample() {
  const [value, setValue] = useState(35);
  return <div className="w-full max-w-sm space-y-3">
    <div className="flex justify-between text-sm"><span>Volume</span><span>{value}%</span></div>
    <Slider aria-label="Volume" value={[value]} onValueChange={(values) => setValue(typeof values === "number" ? values : values[0] ?? 0)} />
  </div>;
}
