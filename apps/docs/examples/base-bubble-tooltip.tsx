"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { CheckIcon } from "lucide-react";

import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "../../../registry/ui/bubble";
import { Button } from "../../../registry/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../registry/ui/tooltip";

function BubbleTooltipDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 py-12">
      <Bubble variant="secondary">
        <BubbleContent>Did you remove the stale route?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Yes, removed it from the registry.</BubbleContent>
        <BubbleReactions>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon-xs" />}>
              <CheckIcon />
            </TooltipTrigger>
            <TooltipContent>Read on Jan 5, 2026 at 4:32 PM</TooltipContent>
          </Tooltip>
        </BubbleReactions>
      </Bubble>
    </div>
  );
}

export default function Example() {
  return <BubbleTooltipDemo />;
}
