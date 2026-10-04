"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Runs inside the iframe so breakpoints, portals and browser interactions use its viewport. */
export function PreviewDocument({ children, gallery, replayable }: { children: ReactNode; gallery: boolean; replayable: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    const element = root.current;
    if (!element || window.parent === window) return;
    const origin = window.location.origin;
    const report = () => window.parent.postMessage({ type: "leement-preview:height", height: Math.ceil(element.getBoundingClientRect().height) }, origin);
    const observer = new ResizeObserver(report);
    observer.observe(element);
    const receive = (event: MessageEvent) => {
      if (event.origin !== origin || event.source !== window.parent) return;
      const data = event.data;
      if (data?.type === "leement-preview:replay") setRevision((value) => value + 1);
      if (data?.type === "leement-preview:sync" && typeof data.css === "string" && typeof data.style === "string" && typeof data.className === "string") {
        const html = document.documentElement;
        html.dataset.lmTheme = data.theme === "dark" ? "dark" : "light";
        html.className = data.className;
        html.style.cssText = data.style;
        let style = document.getElementById("leement-preview-parent") as HTMLStyleElement | null;
        if (!style) {
          style = document.createElement("style");
          style.id = "leement-preview-parent";
          document.head.appendChild(style);
        }
        style.textContent = data.css;
        window.dispatchEvent(new Event("leement:theme-change"));
        window.dispatchEvent(new Event("leement:motion-change"));
      }
    };
    window.addEventListener("message", receive);
    window.parent.postMessage({ type: "leement-preview:ready" }, origin);
    report();
    return () => { observer.disconnect(); window.removeEventListener("message", receive); };
  }, []);
  return <div ref={root} data-preview-document data-replay={revision} className={`docs-preview-frame docs-preview-guides bg-background ${gallery ? "docs-preview-gallery" : ""} ${replayable ? "docs-preview-with-replay" : ""}`}>
    <div key={revision} className="docs-preview-content">{children}</div>
  </div>;
}
