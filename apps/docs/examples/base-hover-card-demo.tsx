"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Button } from "../../../registry/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../registry/ui/hover-card";

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={10}
        closeDelay={100}
        render={<Button variant="link" />}
      >
        Hover Here
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@nextjs</div>
        <div>The React Framework – created and maintained by @vercel.</div>
        <div className="mt-1 text-xs text-muted-foreground">
          Joined December 2021
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function Example() {
  return <HoverCardDemo />;
}
