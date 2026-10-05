"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { useChat } from "@ai-sdk/react";
import {
  ArrowUpIcon,
  GlobeIcon,
  ImageIcon,
  PaperclipIcon,
  PlusIcon,
  RotateCwIcon,
  TelescopeIcon,
} from "lucide-react";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../registry/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "../../../registry/ui/input-group";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "../../../registry/ui/message-scroller";
import { Slider } from "../../../registry/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../registry/ui/tooltip";

const DEFAULT_PEEK = 64;

const chat = createChat()
  .user(
    "I'm building a chat for our app and the scroll behavior is driving me nuts. Every time the AI streams a reply, the whole thread jumps around.",
  )
  .sleep(1000)
  .assistant(
    "That's the classic streaming scroll problem. Wrap your message list in `MessageScroller` and turn on `autoScroll` — the viewport pins to the bottom as tokens arrive, so users always see the latest text land in place.\n\nThe important part: it only auto-scrolls while the reader is already at the bottom. The moment they scroll up to read something earlier, auto-scroll backs off and their position is preserved. You get smooth streaming without fighting the user's intent.",
  )
  .user(
    "Okay, but when someone sends a new message the view still feels jarring — like the whole conversation reloads from the top.",
  )
  .sleep(1000)
  .assistant(
    "MessageScrollerItem fixes that with turn anchoring. Set `scrollAnchor` on the turn that should settle near the top instead of blindly snapping to the document bottom.\n\nIt also leaves a small peek of the previous exchange visible above the anchor, so context isn't lost. The reply starts in view without that disorienting jump you get from a plain overflow container.",
  )
  .user(
    "And if they've scrolled up to re-read an older answer? I don't want to yank them back down.",
  )
  .sleep(1000)
  .assistant(
    "You won't. Auto-scroll only runs when the viewport is already pinned to the bottom, so scrolling up is a deliberate opt-out — their place in the thread stays put even as new tokens keep arriving below.\n\nWhen there is content they haven't seen yet, `MessageScrollerButton` appears at the bottom of the viewport. One tap jumps them back to the newest message and re-engages auto-scroll. Same pattern as Slack or iMessage: quiet when you're caught up, helpful when you're not.",
  )
  .user("Last one — does this work with assistive tech?")
  .sleep(1000)
  .assistant(
    '`MessageScrollerContent` sets `role="log"` and `aria-relevant="additions"` by default, so screen readers announce new messages as they stream in.\n\nThe scroll button is a real `<button>` with an sr-only label, and it\'s removed from the tab order when you\'re already at the bottom — no ghost focus stops.',
  );
const initialMessages = chat.get(2);
const transport = chat.transport({ delayMs: 35 });

function MessageScrollerPreviousContext() {
  const [demoKey, setDemoKey] = React.useState(0);
  const [peek, setPeek] = React.useState(DEFAULT_PEEK);
  const { messages, sendMessage, setMessages, status } = useChat({
    messages: initialMessages,
    transport,
  });
  const nextMessage = chat.next(messages);
  const isBusy = status === "submitted" || status === "streaming";

  return (
    <MessageScrollerProvider
      key={demoKey}
      scrollMargin={24}
      scrollPreviousItemPeek={peek}
    >
      <div className="relative flex flex-col gap-4">
        <Card className="mx-auto h-140 w-full max-w-sm gap-0">
          <CardHeader className="gap-1 border-b">
            <CardTitle>Keeping Context Visible</CardTitle>
            <CardDescription>
              New turns keep part of the previous reply in view.
            </CardDescription>
            <CardAction>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Reset context example"
                      disabled={isBusy}
                      onClick={() => {
                        setMessages(initialMessages);
                        setPeek(DEFAULT_PEEK);
                        setDemoKey((key) => key + 1);
                      }}
                    />
                  }
                >
                  <RotateCwIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset</p>
                </TooltipContent>
              </Tooltip>
            </CardAction>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-0">
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
                      scrollAnchor={message.role === "user"}
                    />
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!nextMessage || isBusy) {
                  return;
                }
                void sendMessage(nextMessage);
              }}
              className="w-full"
            >
              <InputGroup>
                <div className="h-14 w-full px-3 py-2.5">
                  <span
                    className="line-clamp-2 opacity-60 data-[status=ready]:opacity-100"
                    data-status={status}
                  >
                    {nextMessage ? (
                      getMessageText(nextMessage)
                    ) : (
                      <span className="text-muted-foreground">
                        No messages queued. Reset the context.
                      </span>
                    )}
                  </span>
                </div>
                <InputGroupAddon align="block-end" className="pt-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <InputGroupButton
                          aria-label="Add files"
                          type="button"
                          size="icon-sm"
                          variant="outline"
                        />
                      }
                    >
                      <PlusIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      side="top"
                      className="w-44"
                    >
                      <DropdownMenuItem>
                        <PaperclipIcon />
                        Add Photos & Files
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <ImageIcon />
                        Create Image
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <TelescopeIcon />
                        Deep Research
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <GlobeIcon />
                        Web Search
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className="flex w-28 items-center gap-2">
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {peek}px
                    </span>
                    <Slider
                      aria-label="Previous context peek"
                      value={[peek]}
                      min={64}
                      max={128}
                      step={1}
                      disabled={isBusy}
                      onValueChange={(value) => {
                        const nextValue = Array.isArray(value)
                          ? value[0]
                          : value;

                        setPeek(nextValue ?? DEFAULT_PEEK);
                      }}
                    />
                  </div>
                  <InputGroupButton
                    type="submit"
                    variant="default"
                    size="icon-sm"
                    disabled={!nextMessage || isBusy}
                    className="ml-auto"
                  >
                    <ArrowUpIcon />
                    <span className="sr-only">Send</span>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </CardFooter>
        </Card>
        <div className="px-0.5 text-center text-xs text-muted-foreground">
          Adjust the slider and send. Observe the previous message peak
        </div>
      </div>
    </MessageScrollerProvider>
  );
}

import { createChat } from "@shadcn/helpers/ai-sdk";
import type { UIMessage } from "ai";
import type { Variants } from "motion/react";
function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
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
  return <MessageScrollerPreviousContext />;
}
