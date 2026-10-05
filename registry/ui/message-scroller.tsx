// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";

import * as React from "react"
import {
  MessageScroller as MessageScrollerPrimitive,
  useMessageScroller as usePrimitiveMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "@shadcn/react/message-scroller"
import { animate } from "motion"
import { motionSeconds, motionEasing, useStyleMotion } from "@/lib/leement-motion"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "lucide-react"

type ScrollMotionContextValue = {
  viewport: React.RefObject<HTMLDivElement | null>;
  animation: React.RefObject<ReturnType<typeof animate> | null>;
  setFollowing: React.Dispatch<React.SetStateAction<boolean>>;
  threshold: number;
};
const ScrollMotionContext = React.createContext<ScrollMotionContextValue | null>(null);
function useScrollMotion() {
  const context = React.useContext(ScrollMotionContext);
  if (!context) throw new Error("MessageScroller requires MessageScrollerProvider.");
  return context;
}
function MessageScrollerProvider({ children, autoScroll = false, scrollEdgeThreshold = 8, ...props }: React.ComponentProps<typeof MessageScrollerPrimitive.Provider>) {
  const viewport = React.useRef<HTMLDivElement>(null);
  const animation = React.useRef<ReturnType<typeof animate> | null>(null);
  const [following, setFollowing] = React.useState(true);
  const context = React.useMemo(() => ({ viewport, animation, setFollowing, threshold: scrollEdgeThreshold }), [scrollEdgeThreshold]);
  React.useEffect(() => () => { animation.current?.stop(); }, []);
  return <ScrollMotionContext.Provider value={context}><MessageScrollerPrimitive.Provider {...props} autoScroll={autoScroll && following} scrollEdgeThreshold={scrollEdgeThreshold}>{children}</MessageScrollerPrimitive.Provider></ScrollMotionContext.Provider>;
}
// The primitive owns offsets, anchors and reader intent. Only interpolation is replaced.
function useMessageScroller(): ReturnType<typeof usePrimitiveMessageScroller> {
  const primitive = usePrimitiveMessageScroller();
  const { viewport, animation, setFollowing } = useScrollMotion();
  return React.useMemo(() => {
    type Options = Parameters<typeof primitive.scrollToEnd>[0];
    function move(command: (options?: Options) => boolean, options?: Options) {
      animation.current?.stop();
      animation.current = null;
      const node = viewport.current;
      const start = node?.scrollTop ?? 0;
      // Never invoke native smooth scrolling, including a queued anchor command.
      const result = command({ ...options, behavior: "instant" });
      if (!node || !result || options?.behavior !== "smooth") return result;
      const end = node.scrollTop;
      const reduced = typeof matchMedia !== "function" || matchMedia("(prefers-reduced-motion: reduce)").matches;
      const duration = reduced ? 0 : motionSeconds(node, "duration-media");
      if (duration <= 0 || start === end) return result;
      node.scrollTop = start;
      animation.current = animate(start, end, {
        duration, ease: motionEasing(node, "standard"),
        onUpdate: value => { node.scrollTop = value; },
      });
      return result;
    }
    return {
      scrollToStart: options => { setFollowing(false); return move(primitive.scrollToStart, options); },
      scrollToEnd: options => { const result = move(primitive.scrollToEnd, options); if (result) setFollowing(true); return result; },
      scrollToMessage: (id, options) => move(next => primitive.scrollToMessage(id, next), options),
    };
  }, [primitive, viewport, animation, setFollowing]);
}

function MessageScroller({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Root>) {
  return (
    <MessageScrollerPrimitive.Root
      data-slot="message-scroller"
      className={cn(
        "group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerViewport({
  className, ref, onWheel, onTouchMove, onKeyDown, onPointerDown, onScroll,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Viewport>) {
  const { viewport, animation, setFollowing, threshold } = useScrollMotion();
  const lastTop = React.useRef(0);
  const viewportRef = React.useCallback((node: HTMLDivElement | null) => {
    viewport.current = node;
    const cleanup = typeof ref === "function" ? ref(node) : undefined;
    if (ref && typeof ref !== "function") ref.current = node;
    return () => { viewport.current = null; if (typeof cleanup === "function") cleanup(); else if (typeof ref === "function") ref(null); else if (ref) ref.current = null; };
  }, [viewport, ref]);
  const cancel = () => { animation.current?.stop(); animation.current = null; setFollowing(false); };
  return (
    <MessageScrollerPrimitive.Viewport
      ref={viewportRef}
      onScroll={event => { const node = event.currentTarget; const top = node.scrollTop; if (top > lastTop.current && node.scrollHeight - node.clientHeight - top <= threshold) setFollowing(true); lastTop.current = top; onScroll?.(event); }}
      onWheel={event => { cancel(); onWheel?.(event); }}
      onTouchMove={event => { cancel(); onTouchMove?.(event); }}
      onPointerDown={event => { cancel(); onPointerDown?.(event); }}
      onKeyDown={event => { if (["ArrowDown", "ArrowUp", "Home", "End", "PageDown", "PageUp", " "].includes(event.key)) cancel(); onKeyDown?.(event); }}
      data-slot="message-scroller-viewport"
      className={cn(
        "size-full min-h-0 min-w-0 [mask-image:linear-gradient(to_bottom,black_calc(100%_-_12px),transparent)] [scrollbar-width:thin] [scrollbar-gutter:stable] overflow-y-auto overscroll-contain contain-content  data-pending-scroll:invisible",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerContent({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Content>) {
  return (
    <MessageScrollerPrimitive.Content
      data-slot="message-scroller-content"
      className={cn(
        "gap-6 flex h-max min-h-full flex-col",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerItem({
  className,
  scrollAnchor = false,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Item>) {
  return (
    <MessageScrollerPrimitive.Item
      data-slot="message-scroller-item"
      scrollAnchor={scrollAnchor}
      className={cn(
        "min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerButton({
  direction = "end",
  behavior = "smooth", ref, onClick,
  className,
  children,
  render,
  variant = "secondary",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Button> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  const { scrollToStart, scrollToEnd } = useMessageScroller();
  const motionRef = useStyleMotion<HTMLButtonElement>(ref, ["backgroundColor", "color", "opacity", "translate", "scale"]);
  return (
    <MessageScrollerPrimitive.Button
      ref={motionRef}
      behavior="instant"
      onClick={event => { onClick?.(event); if (event.defaultPrevented) return; event.preventDefault(); event.currentTarget.blur(); (direction === "start" ? scrollToStart : scrollToEnd)({ behavior }); }}
      data-slot="message-scroller-button"
      data-direction={direction}
      data-variant={variant}
      data-size={size}
      direction={direction}
      className={cn(
        "absolute inset-s-1/2 -translate-x-1/2 border-border bg-background text-foreground hover:bg-muted hover:text-foreground data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&_svg]:rotate-180",
        className
      )}
      render={render ?? <Button variant={variant} size={size} />}
      {...props}
    >
      {children ?? (
        <>
          <ArrowDownIcon  aria-hidden="true" />
          <span className="sr-only">
            {direction === "end" ? "Scroll to end" : "Scroll to start"}
          </span>
        </>
      )}
    </MessageScrollerPrimitive.Button>
  )
}

export {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
}
