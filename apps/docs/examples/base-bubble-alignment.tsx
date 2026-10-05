"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Bubble, BubbleContent } from "../../../registry/ui/bubble";

function BubbleAlignmentDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble variant="muted">
        <BubbleContent>
          This bubble is aligned to the start. This is the default alignment.
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          This bubble is aligned to the end. Use this for user messages.
        </BubbleContent>
      </Bubble>
    </div>
  );
}

export default function Example() {
  return <BubbleAlignmentDemo />;
}
