"use client";
import { useState } from "react";
import { BrandGradientText } from "../../../registry/ui/brand-gradient-text";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [paused, setPaused] = useState(true);
  return (
    <div className="flex max-w-lg flex-col items-center gap-5 text-center">
      <p className="text-2xl font-semibold">
        <BrandGradientText animated={false}>
          A static brand signature.
        </BrandGradientText>
      </p>
      <p className="text-2xl font-semibold">
        <BrandGradientText paused={paused}>
          Motion follows your preference.
        </BrandGradientText>
      </p>
      <Button
        size="sm"
        variant="outline"
        aria-pressed={paused}
        onClick={() => setPaused((v) => !v)}
      >
        {paused ? "Resume gradient" : "Pause gradient"}
      </Button>
    </div>
  );
}
