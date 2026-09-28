"use client";

import { useState } from "react";
import { Slider } from "../../../registry/ui/slider";

export default function SliderExample() {
  const [value, setValue] = useState(35);
  return (
    <div className="w-full max-w-sm space-y-8">
      <div className="space-y-3">
        <div className="flex justify-between text-sm"><span>Volume</span><span>{value}%</span></div>
        <Slider aria-label="Volume" value={[value]} onValueChange={(values) => setValue(typeof values === "number" ? values : values[0] ?? 0)} />
      </div>
      <div className="space-y-3">
        <p className="text-sm">Preferred range · 20–75</p>
        <Slider aria-label="Preferred range" defaultValue={[20, 75]} />
      </div>
      <div className="flex items-end gap-8">
        <div className="space-y-3">
          <p className="text-sm">Vertical</p>
          <Slider aria-label="Vertical volume" orientation="vertical" defaultValue={[60]} className="h-32" />
        </div>
        <div className="w-36 space-y-3">
          <p className="text-sm">Unavailable</p>
          <Slider aria-label="Unavailable volume" defaultValue={[35]} disabled />
        </div>
      </div>
    </div>
  );
}
