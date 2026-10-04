"use client";
import { TextReveal } from "../../../registry/ui/text-reveal";
export default function Example() {
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
            <TextReveal {...timing}>
              <TextReveal.Item>Make</TextReveal.Item>{" "}
              <TextReveal.Item>it</TextReveal.Item>{" "}
              <TextReveal.Item>yours.</TextReveal.Item>
            </TextReveal>
          </p>
        </div>
      ))}
    </div>
  );
}
