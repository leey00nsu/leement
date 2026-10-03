"use client";
import { useState } from "react";
import { ColorPicker } from "../../../registry/ui/color-picker";
export default function Example() {
  const [value, setValue] = useState("#5368EE80");
  return (
    <div className="w-full max-w-sm space-y-5">
      <div className="flex justify-center rounded-lg bg-muted p-4">
        <svg
          width="160"
          height="96"
          viewBox="0 0 160 96"
          role="img"
          aria-label={`Illustration using ${value}`}
        >
          <rect x="12" y="8" width="136" height="80" rx="18" fill={value} />
        </svg>
      </div>
      <ColorPicker
        label="Illustration fill"
        value={value}
        onValueChange={setValue}
      />
      <p role="status" className="text-sm">
        Fill: {value}
      </p>
      <ColorPicker
        label="Locked illustration fill"
        defaultValue="#5368EE80"
        disabled
      />
    </div>
  );
}
