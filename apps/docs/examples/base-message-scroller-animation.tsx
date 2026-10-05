"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { useChat } from "@ai-sdk/react";
import {
  ArrowUpIcon,
  MessageCircleDashedIcon,
  RotateCwIcon,
} from "lucide-react";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../../registry/patterns/empty-state";
import { Button } from "../../../registry/ui/button";
import {
  Card,
  CardAction,
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
} from "../../../registry/ui/message-scroller";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../registry/ui/select";

const chat = createChat()
  .user("Can user messages pop in like iMessage without breaking anchoring?")
  .sleep(1000)
  .assistant(
    "Yes. Animate the user row with transform and opacity, and let the assistant response stream normally below it.\n\nThat keeps the row measurement predictable while still giving the newly sent bubble a more tactile entrance.",
  )
  .user("What makes the animation feel more like iMessage?")
  .sleep(1000)
  .assistant(
    "Use a quick spring from the trailing edge: a little scale, a small upward move, and no layout animation.\n\nThe bubble feels tactile, but the measured row stays predictable, so anchoring and auto-scroll do not have to fight a changing layout.",
  )
  .user("Can I switch between presets while testing the same thread?")
  .sleep(1000)
  .assistant(
    "Yes. Keep the conversation in place while you change the preset, then send the next message to compare the new entrance against the same context.\n\nThat makes it easier to judge the difference between a subtle fade, a snappy pop, and a more dramatic 3D tilt without rebuilding the scenario each time.",
  );

const initialMessages = chat.get(0);
const transport = chat.transport({ delayMs: 15 });

function MessageScrollerAnimation() {
  const { messages, sendMessage, setMessages, status } = useChat({
    messages: initialMessages,
    transport,
  });
  const [presetId, setPresetId] = React.useState<MessageAnimationId>("fade");
  const nextMessage = chat.next(messages);
  const isBusy = status === "submitted" || status === "streaming";
  const preset = MESSAGE_ANIMATIONS[presetId as MessageAnimationId];

  return (
    <div className="relative flex flex-col gap-4">
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="border-b">
          <CardTitle>Animation</CardTitle>
          <CardDescription>
            Choose how user messages are animated when they are added to the
            conversation.
          </CardDescription>
          <CardAction className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Reset animated messages"
              disabled={messages.length === 0 || isBusy}
              onClick={() => setMessages(initialMessages)}
            >
              <RotateCwIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="min-h-0 flex-1 overflow-hidden p-0">
          {messages.length === 0 ? (
            <Empty className="h-full">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <MessageCircleDashedIcon />
                </EmptyMedia>
                <EmptyTitle>No Messages Yet</EmptyTitle>
                <EmptyDescription>
                  Click the button below to send the first message.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <MessageScrollerProvider>
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent
                    aria-busy={isBusy}
                    className="p-(--card-spacing)"
                  >
                    {messages.map((message) => (
                      <MessageAnimated
                        key={message.id}
                        message={message}
                        animationPreset={preset}
                        userVariant="muted"
                        assistantVariant="ghost"
                      />
                    ))}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </MessageScrollerProvider>
          )}
        </CardContent>
        <CardFooter className="border-t">
          <Select
            value={presetId}
            onValueChange={(value) => {
              setPresetId(value as MessageAnimationId);
            }}
          >
            <SelectTrigger aria-label="Animation preset">
              <SelectValue>{preset.name}</SelectValue>
            </SelectTrigger>
            <SelectContent align="start" side="top">
              <SelectGroup>
                {Object.values(MESSAGE_ANIMATIONS).map((animation) => (
                  <SelectItem key={animation.id} value={animation.id}>
                    {animation.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            type="button"
            size="icon"
            className="ml-auto"
            disabled={!nextMessage || isBusy}
            onClick={() => {
              if (!nextMessage || isBusy) {
                return;
              }

              void sendMessage(nextMessage);
            }}
          >
            <ArrowUpIcon />
            <span className="sr-only">Send Message</span>
          </Button>
        </CardFooter>
      </Card>
      <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
        Select an animation then click send to see it in action.
      </div>
    </div>
  );
}

import { createChat } from "@shadcn/helpers/ai-sdk";

import type { Variants } from "motion/react";

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
  return <MessageScrollerAnimation />;
}
