"use client";
import { useState } from "react";
import { TextReveal } from "../../../registry/ui/text-reveal";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [replay, setReplay] = useState(0);
  return (
    <div className="flex max-w-sm flex-col items-center gap-5 text-center">
      {[
        { duration: 300, stagger: 60 },
        { duration: 900, stagger: 180 },
      ].map((timing) => (
        <div key={timing.duration} className="space-y-2">
          <p className="text-xs text-muted-foreground">
            {timing.duration}ms · {timing.stagger}ms stagger
          </p>
          <p className="text-xl font-semibold">
            <TextReveal key={replay} {...timing}>
              <TextReveal.Item>Make</TextReveal.Item>{" "}
              <TextReveal.Item>it</TextReveal.Item>{" "}
              <TextReveal.Item>yours.</TextReveal.Item>
            </TextReveal>
          </p>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setReplay((v) => v + 1)}
      >
        Replay both
      </Button>
    </div>
  );
}
