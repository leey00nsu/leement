"use client";
// Profiles are fictional; photographs are stock portraits.
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../registry/ui/avatar";
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "../../../registry/ui/bubble";
import { Marker, MarkerContent } from "../../../registry/ui/marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "../../../registry/ui/message";

function MessageDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-12">
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg"
              alt="Sample profile: Alex Lee"
            />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Deploying to prod real quick.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg"
              alt="Sample profile: Avery Chen"
            />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>It&apos;s 4:55 PM. On a Friday.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg"
              alt="Sample profile: Alex Lee"
            />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>It&apos;s a one-line change.</BubbleContent>
          </Bubble>
          <MessageFooter>Delivered</MessageFooter>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg"
              alt="Sample profile: Avery Chen"
            />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>
                It&apos;s always a one-line change 😭.
              </BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>Alright, let me take a look.</BubbleContent>
              <BubbleReactions aria-label="Reactions: thumbs up">
                <span>👍</span>
              </BubbleReactions>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
      <Marker role="status">
        <MarkerContent>
          <ShimmerText>
            <span className="font-medium">Oliver</span> is typing...
          </ShimmerText>
        </MarkerContent>
      </Marker>
    </div>
  );
}

export default function Example() {
  return <MessageDemo />;
}

import * as React from "react";
import { useMotionLoop } from "../../../registry/lib/leement-motion";
function ShimmerText({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  useMotionLoop(
    ref,
    { backgroundPosition: ["200% 0%", "-200% 0%"] },
    "cycle-pulse",
  );
  return (
    <span
      ref={ref}
      className="bg-[linear-gradient(90deg,var(--lm-color-foreground-muted)_30%,var(--lm-color-foreground-default)_50%,var(--lm-color-foreground-muted)_70%)] bg-[length:200%_100%] bg-clip-text text-transparent motion-reduce:bg-none motion-reduce:text-muted-foreground"
    >
      {children}
    </span>
  );
}
