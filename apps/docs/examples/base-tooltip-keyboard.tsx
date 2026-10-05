"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { SaveIcon } from "lucide-react";

import { Button } from "../../../registry/ui/button";
import { Kbd } from "../../../registry/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../registry/ui/tooltip";

function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
        <SaveIcon />
      </TooltipTrigger>
      <TooltipContent>
        Save Changes <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  );
}

export default function Example() {
  return <TooltipKeyboard />;
}
