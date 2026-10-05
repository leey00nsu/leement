"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { AudioLinesIcon, PlusIcon } from "lucide-react";

import { Button } from "../../../registry/ui/button";
import { ButtonGroup } from "../../../registry/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../../../registry/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../registry/ui/tooltip";

function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);

  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger
                render={
                  <InputGroupButton
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    size="icon-xs"
                    data-active={voiceEnabled}
                    className="data-[active=true]:bg-[var(--lm-color-status-warning)] data-[active=true]:text-[var(--lm-color-status-warning-foreground)] dark:data-[active=true]:bg-[var(--lm-color-status-warning-foreground)] dark:data-[active=true]:text-[var(--lm-color-status-warning-foreground)]"
                    aria-pressed={voiceEnabled}
                  />
                }
              >
                <AudioLinesIcon />
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}

export default function Example() {
  return <ButtonGroupInputGroup />;
}
