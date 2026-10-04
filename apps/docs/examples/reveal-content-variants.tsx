"use client";
import { RevealContent } from "../../../registry/ui/reveal-content";
export default function Example() {
  return (
    <div className="w-full max-w-xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {(
          ["default", "fade", "group", "line", "section", "stagger"] as const
        ).map((variant) => (
          <RevealContent
            variant={variant}
            key={variant}
            className="space-y-3 rounded-lg bg-muted p-4"
          >
            <h3 data-reveal-item className="text-sm font-semibold">
              {variant}
            </h3>
            <div data-reveal-line className="h-px origin-left bg-border" />
            <img
              data-reveal-media
              src="/demo-scene.svg"
              alt=""
              className="aspect-video w-full rounded-md object-cover"
            />
            <p data-reveal-item className="text-sm text-muted-foreground">
              A shared visual rule with readable content.
            </p>
          </RevealContent>
        ))}
      </div>
    </div>
  );
}
