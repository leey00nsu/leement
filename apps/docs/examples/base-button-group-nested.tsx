"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { AudioLinesIcon, PlusIcon } from "lucide-react";

import { Button } from "../../../registry/ui/button";
import { ButtonGroup } from "../../../registry/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../../registry/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../registry/ui/tooltip";

function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <Tooltip>
            <TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
              <AudioLinesIcon />
            </TooltipTrigger>
            <TooltipContent>Voice Mode</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}

export default function Example() {
  return <ButtonGroupNested />;
}
