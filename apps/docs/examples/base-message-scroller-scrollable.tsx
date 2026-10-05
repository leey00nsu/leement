"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import type { Variants } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../registry/ui/card";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScrollerScrollable,
} from "../../../registry/ui/message-scroller";

const messages = Array.from({ length: 12 }, (_, index) => ({
  id: `scrollable-${index + 1}`,
  role: index % 2 === 0 ? "user" : "assistant",
  text:
    index % 2 === 0
      ? `Review scroll checkpoint ${index + 1}.`
      : `Checkpoint ${index + 1} is synced. The scrollable hook updates as the viewport moves.\n\nWhen the reader is at the first message, the footer should only point them down. Once they move into the middle of the transcript, it should explain that both directions are available.\n\nAt the latest message, the footer should switch again and only point them back up.`,
})) satisfies Array<{
  id: string;
  role: "user" | "assistant";
  text: string;
}>;

function MessageScrollerScrollable() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
      <Card className="h-140 w-full gap-0 overflow-hidden">
        <CardHeader className="gap-1 border-b">
          <CardTitle>Scroll Status</CardTitle>
          <CardDescription>
            Where the reader can go scroll to based on current scroll position.
          </CardDescription>
        </CardHeader>
        <MessageScrollerProvider defaultScrollPosition="start">
          <CardContent className="flex-1 overflow-hidden p-0">
            <MessageScroller>
              <MessageScrollerViewport>
                <MessageScrollerContent className="gap-4 p-(--card-spacing)">
                  <Transcript />
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </CardContent>
          <ScrollStateFooter />
        </MessageScrollerProvider>
      </Card>
      <div className="px-0.5 text-center text-xs text-muted-foreground">
        Scroll the transcript to see the footer update.
      </div>
    </div>
  );
}

function Transcript() {
  return messages.map((message) => (
    <MessageAnimated
      key={message.id}
      message={message}
      scrollAnchor={message.role === "user"}
      userVariant="muted"
      assistantVariant="ghost"
    />
  ));
}

function ScrollStateFooter() {
  const { start, end } = useMessageScrollerScrollable();

  const status = getScrollStatus({ start, end });

  return (
    <CardFooter className="justify-center border-t text-center text-sm text-muted-foreground">
      {status}
    </CardFooter>
  );
}

function getScrollStatus({ start, end }: { start: boolean; end: boolean }) {
  if (start && end) {
    return "You can scroll both ways.";
  }

  if (end) {
    return "You are at the top. You can only scroll down.";
  }

  if (start) {
    return "You are at the bottom. You can only scroll up.";
  }

  return "All messages fit in the viewport.";
}

const ANIMATIONS = [
  {
    id: "fade",
    name: "Fade",
    variants: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
      },
      exit: { opacity: 0 },
    },
  },
  {
    id: "slide-up",
    name: "Slide Up",
    variants: {
      initial: { opacity: 0, y: 10 },
      animate: {
        opacity: 1,
        y: 0,
      },
      exit: { opacity: 0, y: 4 },
    },
  },
  {
    id: "slide-side",
    name: "Slide Side",
    variants: {
      initial: { opacity: 0, x: 18 },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: 8,
      },
    },
  },
  {
    id: "pop",
    name: "Pop",
    variants: {
      initial: {
        opacity: 0,
        scale: 0.94,
        y: 6,
        originX: 1,
        originY: 1,
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      exit: { opacity: 0, scale: 0.98 },
    },
  },
  {
    id: "spring-bounce",
    name: "Spring Bounce",
    variants: {
      initial: { opacity: 0, y: 12, scale: 0.96 },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      exit: { opacity: 0, scale: 0.98 },
    },
  },
  {
    id: "blur-fade",
    name: "Blur Fade",
    variants: {
      initial: { opacity: 0, filter: "blur(4px)", y: 6 },
      animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      },
      exit: {
        opacity: 0,
        filter: "blur(2px)",
      },
    },
  },
  {
    id: "scale-fade",
    name: "Scale Fade",
    variants: {
      initial: { opacity: 0, scale: 0.98 },
      animate: {
        opacity: 1,
        scale: 1,
      },
      exit: { opacity: 0, scale: 0.99 },
    },
  },
] as const satisfies {
  id: string;
  name: string;
  variants: Variants;
}[];

type MessageAnimationPreset = (typeof ANIMATIONS)[number];
type MessageAnimationId = MessageAnimationPreset["id"];

const MESSAGE_ANIMATIONS = ANIMATIONS.reduce(
  (acc, preset) => {
    acc[preset.id] = preset;
    return acc;
  },
  {} as Record<MessageAnimationId, MessageAnimationPreset>,
);

export {
  MESSAGE_ANIMATIONS,
  type MessageAnimationId,
  type MessageAnimationPreset,
};

import { BrainIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Bubble, BubbleContent } from "../../../registry/ui/bubble";
import { Message, MessageContent } from "../../../registry/ui/message";
import { MessageScrollerItem } from "../../../registry/ui/message-scroller";

type MessageAnimatedPart = {
  content?: unknown;
  type: string;
  text?: unknown;
};

type MessageAnimatedMessage = {
  id: string;
  role: string;
  text?: string;
  parts?: ReadonlyArray<MessageAnimatedPart>;
};

const MotionMessageScrollerItem = motion.create(MessageScrollerItem);

function MessageAnimated({
  message,
  animationPreset = MESSAGE_ANIMATIONS["slide-up"],
  assistantVariant = "ghost",
  scrollAnchor,
  userVariant = "muted",
  ...props
}: Omit<
  React.ComponentProps<typeof MotionMessageScrollerItem>,
  "animate" | "children" | "exit" | "initial" | "messageId" | "variants"
> & {
  animationPreset?: MessageAnimationPreset;
  assistantVariant?: React.ComponentProps<typeof Bubble>["variant"];
  message: MessageAnimatedMessage;
  userVariant?: React.ComponentProps<typeof Bubble>["variant"];
}) {
  const shouldReduceMotion = useReducedMotion();
  const revision = useMotionRevision();
  const [timing, setTiming] = React.useState<{
    duration: number;
    ease: [number, number, number, number] | "linear";
  }>({ duration: 0, ease: "linear" });
  React.useEffect(() => {
    setTiming({
      duration: motionSeconds(document.documentElement, "duration-reveal"),
      ease: motionEasing(document.documentElement),
    });
  }, [revision]);
  const variants = Object.fromEntries(
    Object.entries(animationPreset.variants).map(([key, value]) => [
      key,
      typeof value === "object"
        ? {
            ...value,
            transition: {
              ...timing,
              duration: shouldReduceMotion ? 0 : timing.duration,
            },
          }
        : value,
    ]),
  ) as Variants;
  const isUserMessage = message.role === "user";

  if (isUserMessage) {
    return (
      <MotionMessageScrollerItem
        messageId={message.id}
        scrollAnchor={scrollAnchor ?? true}
        variants={variants}
        initial={shouldReduceMotion ? false : "initial"}
        animate="animate"
        exit={shouldReduceMotion ? undefined : "exit"}
        {...props}
      >
        <MessageAnimatedRow
          message={message}
          assistantVariant={assistantVariant}
          userVariant={userVariant}
        />
      </MotionMessageScrollerItem>
    );
  }

  return (
    <MotionMessageScrollerItem
      messageId={message.id}
      scrollAnchor={scrollAnchor}
      initial={false}
      {...props}
    >
      <MessageAnimatedRow
        message={message}
        assistantVariant={assistantVariant}
        userVariant={userVariant}
      />
    </MotionMessageScrollerItem>
  );
}

function MessageAnimatedRow({
  message,
  assistantVariant,
  userVariant,
}: {
  assistantVariant: React.ComponentProps<typeof Bubble>["variant"];
  message: MessageAnimatedMessage;
  userVariant: React.ComponentProps<typeof Bubble>["variant"];
}) {
  const isUserMessage = message.role === "user";
  const parts = getMessageAnimatedContentParts(message);

  return (
    <Message align={isUserMessage ? "end" : "start"}>
      <MessageContent>
        {parts.map((part) => {
          const paragraphs = part.text
            .split(/\n\s*\n/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean);

          if (part.type === "reasoning") {
            return (
              <div
                key={part.key}
                className="w-full border-l-2 border-muted-foreground/30 pl-3 text-muted-foreground"
              >
                <div className="mb-1 flex items-center gap-1.5 text-xs font-medium">
                  <BrainIcon className="size-3.5" />
                  Reasoning
                </div>
                <div className="space-y-1.5 text-sm">
                  {paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${part.key}-${paragraphIndex}`}
                      className="whitespace-pre-wrap"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Bubble
              key={part.key}
              variant={isUserMessage ? userVariant : assistantVariant}
            >
              <BubbleContent className="space-y-2">
                {paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${part.key}-${paragraphIndex}`}
                    className="whitespace-pre-wrap"
                  >
                    {paragraph}
                  </p>
                ))}
              </BubbleContent>
            </Bubble>
          );
        })}
      </MessageContent>
    </Message>
  );
}

function getMessageAnimatedContentParts(message: MessageAnimatedMessage) {
  if (message.parts) {
    return message.parts.flatMap((part, index) => {
      const type =
        part.type === "reasoning" || part.type === "thinking"
          ? "reasoning"
          : part.type === "text"
            ? "text"
            : null;
      const text =
        typeof part.text === "string"
          ? part.text
          : typeof part.content === "string"
            ? part.content
            : null;

      if (!type || text === null) {
        return [];
      }

      return [
        {
          key: `${message.id}-${index}`,
          text,
          type,
        },
      ];
    });
  }

  return typeof message.text === "string"
    ? [{ key: `${message.id}-text`, text: message.text, type: "text" }]
    : [];
}

export { MessageAnimated, type MessageAnimatedMessage };

import {
  motionEasing,
  motionSeconds,
  useMotionRevision,
} from "../../../registry/lib/leement-motion";

export default function Example() {
  return <MessageScrollerScrollable />;
}
