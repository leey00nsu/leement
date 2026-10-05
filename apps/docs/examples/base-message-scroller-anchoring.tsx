"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import {
  ArrowUpIcon,
  MessageCircleDashedIcon,
  RotateCwIcon,
} from "lucide-react";

import type { Variants } from "motion/react";
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
  ToggleGroup,
  ToggleGroupItem,
} from "../../../registry/ui/toggle-group";

type AnchorRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: AnchorRole;
  text: string;
};

const scriptedMessages: ChatMessage[] = [
  {
    id: "anchor-1-user",
    role: "user",
    text: "Can you show me how anchoring behaves when a new prompt starts the turn?",
  },
  {
    id: "anchor-1-assistant",
    role: "assistant",
    text: "Append the user prompt first, then append the assistant response. With User selected, the prompt settles near the top and the assistant response fills in below it.",
  },
  {
    id: "anchor-2-user",
    role: "user",
    text: "What changes when assistant messages are the anchor?",
  },
  {
    id: "anchor-2-assistant",
    role: "assistant",
    text: "Now each assistant response is the item `MessageScroller` keeps in view. This is useful when the reply is the moment you want readers to land on after each turn.",
  },
  {
    id: "anchor-3-user",
    role: "user",
    text: "Can I switch roles and keep adding turns?",
  },
  {
    id: "anchor-3-assistant",
    role: "assistant",
    text: "Yes. The next appended message with the selected role becomes the anchor, so you can compare user and assistant anchoring without resetting the demo.",
  },
];

function MessageScrollerAnchoring() {
  const [anchorRole, setAnchorRole] = React.useState<AnchorRole>("user");
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [messageIndex, setMessageIndex] = React.useState(0);
  const nextMessage = scriptedMessages[messageIndex];

  return (
    <div className="relative flex flex-col gap-4">
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="border-b">
          <CardTitle>Anchoring Turns</CardTitle>
          <CardDescription>
            Choose which role settles near the top edge.
          </CardDescription>
          <CardAction>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Reset anchored turns"
              disabled={messages.length === 0}
              onClick={() => {
                setMessages([]);
                setMessageIndex(0);
              }}
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
                <EmptyTitle>No anchored messages yet</EmptyTitle>
                <EmptyDescription>
                  Send the first message to see the selected role anchor.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <MessageScrollerProvider>
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-(--card-spacing)">
                    {messages.map((message) => (
                      <MessageAnimated
                        key={message.id}
                        message={message}
                        scrollAnchor={message.role === anchorRole}
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
        <CardFooter>
          <ToggleGroup
            aria-label="Select scroll anchor role"
            value={[anchorRole]}
            onValueChange={(value) => {
              const nextValue = value[0];

              if (nextValue === "user" || nextValue === "assistant") {
                setAnchorRole(nextValue);
                setMessages([]);
                setMessageIndex(0);
              }
            }}
          >
            <ToggleGroupItem value="user" aria-label="Anchor user messages">
              User
            </ToggleGroupItem>
            <ToggleGroupItem
              value="assistant"
              aria-label="Anchor assistant messages"
            >
              Assistant
            </ToggleGroupItem>
          </ToggleGroup>
          <Button
            type="button"
            size="icon"
            className="ml-auto"
            disabled={!nextMessage}
            onClick={() => {
              if (!nextMessage) {
                return;
              }

              setMessages((messages) => [...messages, nextMessage]);
              setMessageIndex((index) => index + 1);
            }}
          >
            <ArrowUpIcon />
            <span className="sr-only">Send Message</span>
          </Button>
        </CardFooter>
      </Card>
      <div className="mx-auto max-w-xs px-0.5 text-center text-xs text-muted-foreground">
        Toggle the anchor role, then send messages to compare where turns
        settle.
      </div>
    </div>
  );
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
  return <MessageScrollerAnchoring />;
}
