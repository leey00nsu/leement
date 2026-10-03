"use client";
import { Info } from "lucide-react";
import { Button } from "../../../registry/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../../registry/ui/tooltip";
export default function Example() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex flex-wrap justify-center gap-4">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                aria-label={`${side} placement information`}
              >
                <Info aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>{side} placement</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
