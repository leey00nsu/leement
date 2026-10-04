"use client";

import { GripVertical, RotateCcw } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Button } from "../../../registry/ui/button";

/** Center the demo group; forms and panels keep their own internal alignment. */
export function PreviewFrame({ children, name, exampleFile, replayable = false, gallery = false }: {
  children: ReactNode;
  name: string;
  exampleFile?: string;
  replayable?: boolean;
  gallery?: boolean;
}) {
  const id = useId();
  const stage = useRef<HTMLDivElement>(null);
  const iframe = useRef<HTMLIFrameElement>(null);
  const drag = useRef<{ x: number; width: number } | null>(null);
  const [available, setAvailable] = useState(0);
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState(gallery ? 280 : 360);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  const [resizing, setResizing] = useState(false);
  const minimum = Math.min(240, available);
  const actualWidth = Math.min(width ?? available, available);
  const label = `${name.replaceAll("-", " ")}${exampleFile ? ` ${exampleFile.replaceAll("-", " ")}` : ""}`;

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const resize = new ResizeObserver(([entry]) => {
      if (entry) setAvailable(Math.floor(entry.contentRect.width));
    });
    resize.observe(element);
    const visible = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setActive(true); visible.disconnect(); }
    }, { rootMargin: "200px" });
    visible.observe(element);
    return () => { resize.disconnect(); visible.disconnect(); };
  }, []);

  useEffect(() => {
    if (!active) return;
    const origin = window.location.origin;
    const sync = () => {
      const html = document.documentElement;
      iframe.current?.contentWindow?.postMessage({
        type: "leement-preview:sync",
        theme: html.dataset.lmTheme,
        className: html.className,
        style: html.style.cssText,
        css: document.getElementById("leement-foundation-preview")?.textContent ?? "",
      }, origin);
    };
    const receive = (event: MessageEvent) => {
      if (event.origin !== origin || event.source !== iframe.current?.contentWindow) return;
      if (event.data?.type === "leement-preview:ready") { sync(); setReady(true); }
      if (event.data?.type === "leement-preview:height" && Number.isFinite(event.data.height) && event.data.height > 0) {
        setHeight(Math.max(gallery ? 280 : 360, Math.min(20000, event.data.height)));
      }
    };
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "style", "data-lm-theme"] });
    window.addEventListener("message", receive);
    window.addEventListener("leement:theme-change", sync);
    window.addEventListener("leement:motion-change", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("message", receive);
      window.removeEventListener("leement:theme-change", sync);
      window.removeEventListener("leement:motion-change", sync);
    };
  }, [active, gallery]);

  function changeWidth(value: number) {
    setWidth(Math.max(minimum, Math.min(available, value)));
  }

  return <div ref={stage} data-preview-stage className={`docs-preview-stage relative min-w-0 ${gallery ? "rounded-xl" : "rounded-b-xl"}`}>
    <div id={id} data-preview-frame={gallery ? "gallery" : "detail"} data-preview-width={actualWidth || undefined}
      className={`relative max-w-full bg-background ${gallery ? "rounded-xl border border-border/60" : "rounded-b-xl"}`}
      style={{ width: width === null ? "100%" : actualWidth, minHeight: height }}>
      {!ready && <div>
        <div className={`docs-preview-frame docs-preview-guides ${gallery ? "docs-preview-gallery" : ""} ${replayable ? "docs-preview-with-replay" : ""}`}>
          <div className="docs-preview-content">{children}</div>
        </div>
      </div>}
      {active && <iframe ref={iframe}
        src={`/preview/${name}/${gallery ? "gallery" : "detail"}${exampleFile ? `/${exampleFile}` : ""}`}
        title={`${label} responsive preview`} tabIndex={ready ? 0 : -1} aria-hidden={!ready}
        className={`block w-full rounded-[inherit] border-0 [@media(scripting:none)]:hidden ${ready ? "" : "absolute inset-0 pointer-events-none opacity-0"} ${resizing ? "pointer-events-none" : ""}`}
        style={{ height }} />}
      {replayable && <Button type="button" variant="outline" size="icon-sm" disabled={!ready}
        className="absolute right-3 top-3 z-10 bg-background [@media(scripting:none)]:hidden"
        aria-label={`Replay ${label} preview`} title="Replay animation"
        onClick={() => iframe.current?.contentWindow?.postMessage({ type: "leement-preview:replay" }, window.location.origin)}>
        <RotateCcw aria-hidden="true" className="size-4" />
      </Button>}
      <button type="button" role="separator" aria-orientation="vertical" aria-label={`${label} preview width`}
        aria-controls={id} aria-valuemin={minimum} aria-valuemax={available} aria-valuenow={actualWidth}
        aria-valuetext={`${actualWidth} pixels`} disabled={!available}
        title="Drag to resize. Arrow keys adjust width; Home minimizes, End restores full width."
        className="absolute -right-2.5 top-1/2 z-20 flex h-16 w-5 -translate-y-1/2 touch-none select-none cursor-col-resize items-center justify-center rounded-full border border-border bg-muted text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [@media(scripting:none)]:hidden"
        onPointerDown={(event) => {
          if (event.button !== 0 || !event.isPrimary) return;
          event.preventDefault();
          event.currentTarget.focus();
          event.currentTarget.setPointerCapture(event.pointerId);
          drag.current = { x: event.clientX, width: actualWidth };
          setResizing(true);
        }}
        onPointerMove={(event) => {
          if (drag.current) changeWidth(drag.current.width + event.clientX - drag.current.x);
        }}
        onPointerUp={(event) => {
          drag.current = null; setResizing(false);
          if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={() => { drag.current = null; setResizing(false); }}
        onLostPointerCapture={() => { drag.current = null; setResizing(false); }}
        onKeyDown={(event) => {
          const step = event.shiftKey ? 64 : 16;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); changeWidth(actualWidth + (event.key === "ArrowLeft" ? -step : step)); }
          if (event.key === "Home") { event.preventDefault(); changeWidth(minimum); }
          if (event.key === "End") { event.preventDefault(); setWidth(null); }
        }}>
        <GripVertical aria-hidden="true" className="size-3.5" />
      </button>
    </div>
  </div>;
}
