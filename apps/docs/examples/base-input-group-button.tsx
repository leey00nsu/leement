"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import {
  CheckIcon as IconCheck,
  CopyIcon as IconCopy,
  InfoIcon as IconInfoCircle,
  StarIcon as IconStar,
} from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../../../registry/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../registry/ui/popover";

function InputGroupButtonExample() {
  const { copyToClipboard, isCopied } = useCopyToClipboard();
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Copy"
            title="Copy"
            size="icon-xs"
            onClick={() => {
              copyToClipboard("https://x.com/shadcn");
            }}
          >
            {isCopied ? <IconCheck /> : <IconCopy />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <PopoverTrigger render={<InputGroupAddon />}>
            <InputGroupButton variant="secondary" size="icon-xs">
              <IconInfoCircle />
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="flex flex-col gap-1 rounded-xl text-sm"
          >
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon className="pl-1.5 text-muted-foreground">
          https://
        </InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
          >
            <IconStar
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-[var(--lm-color-data-accent-foreground)] data-[favorite=true]:stroke-[var(--lm-color-data-accent-foreground)]"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: { timeout?: number; onCopy?: (text: string) => void } = {}) {
  const [isCopied, setIsCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  React.useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const copyToClipboard = React.useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        onCopy?.(text);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setIsCopied(false), timeout);
        return true;
      } catch {
        return false;
      }
    },
    [timeout, onCopy],
  );
  return { isCopied, copyToClipboard };
}

export default function Example() {
  return <InputGroupButtonExample />;
}
