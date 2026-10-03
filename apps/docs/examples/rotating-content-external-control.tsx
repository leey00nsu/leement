"use client";
import { useState } from "react";
import { RotatingContent } from "../../../registry/ui/rotating-content";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="space-y-5">
      <h3 className="text-2xl font-semibold">
        Create with{" "}
        <RotatingContent
          label="Voice, images and video"
          controls={false}
          paused={paused}
          interval={2000}
          items={["Voice", "Images", "Video"]}
        />
        <span className="sr-only">voice, images and video</span>
      </h3>
      <Button
        size="sm"
        variant="outline"
        aria-pressed={paused}
        onClick={() => setPaused((v) => !v)}
      >
        {paused ? "Resume rotation" : "Pause rotation"}
      </Button>
      <p className="text-sm text-muted-foreground">
        Reduced motion presents the first item without cycling.
      </p>
    </div>
  );
}
