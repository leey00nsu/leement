"use client";

import * as React from "react";
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackConsole } from "@codesandbox/sandpack-react";
import { cn } from "@/lib/utils";

type SandboxProps = React.ComponentProps<"div"> & {
  files: Record<string, string>;
  template?: "react" | "react-ts" | "vanilla" | "vanilla-ts";
  showConsole?: boolean;
};

function Sandbox({ files, template = "react", showConsole = true, className, ...props }: SandboxProps) {
  const [tab, setTab] = React.useState<"preview" | "code" | "console">("preview");
  const tabs = showConsole ? ["code", "preview", "console"] as const : ["code", "preview"] as const;
  const tabId = React.useId();
  const tabRefs = React.useRef(new Map<string, HTMLButtonElement>());

  function moveTab(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = tabs[(index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length] ?? "preview";
    setTab(next);
    tabRefs.current.get(next)?.focus();
  }

  return <div data-slot="sandbox" className={cn("overflow-hidden rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <style>{`[data-slot="sandbox"] *, [data-slot="sandbox"] *::before, [data-slot="sandbox"] *::after { animation: none !important; transition: none !important; }`}</style>
    <SandpackProvider files={files} template={template} theme={{ colors: { surface1: "var(--lm-color-surface-default)", surface2: "var(--lm-color-surface-raised)", surface3: "var(--lm-color-background-subtle)", clickable: "var(--lm-color-foreground-default)", base: "var(--lm-color-foreground-default)", disabled: "var(--lm-color-foreground-muted)", hover: "var(--lm-color-background-subtle)", accent: "var(--lm-color-action-primary)", error: "var(--lm-color-action-danger)", errorSurface: "var(--lm-color-background-subtle)" }, syntax: { plain: "var(--lm-color-foreground-default)", comment: "var(--lm-color-syntax-comment)", keyword: "var(--lm-color-syntax-keyword)", tag: "var(--lm-color-syntax-keyword)", punctuation: "var(--lm-color-foreground-muted)", definition: "var(--lm-color-foreground-default)", property: "var(--lm-color-foreground-default)", static: "var(--lm-color-syntax-number)", string: "var(--lm-color-syntax-string)" }, font: { body: "var(--lm-typography-family-sans)", mono: "var(--lm-typography-family-mono)", size: "14px", lineHeight: "1.5" } }}>
      <div role="tablist" aria-label="Sandbox views" className="flex gap-1 border-b border-border bg-muted p-1">
        {tabs.map((name, index) => <button key={name} ref={(element) => { if (element) tabRefs.current.set(name, element); else tabRefs.current.delete(name); }} role="tab" type="button" id={tabId + "-" + name} aria-controls={tabId + "-panel"} aria-selected={tab === name} tabIndex={tab === name ? 0 : -1} onClick={() => setTab(name)} onKeyDown={(event) => moveTab(event, index)} className={cn("rounded-md px-3 py-1.5 text-sm capitalize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", tab === name ? "bg-card font-medium text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>{name}</button>)}
      </div>
      <div id={tabId + "-panel"} role="tabpanel" aria-labelledby={tabId + "-" + tab} className="min-h-80 min-w-0">
        <SandpackLayout className="!rounded-none !border-0">
          {tab === "code" && <SandpackCodeEditor showLineNumbers aria-label="Code editor" />}
          {tab === "preview" && <SandpackPreview showRefreshButton showOpenInCodeSandbox={false} aria-label="Live preview" />}
          {tab === "console" && showConsole && <SandpackConsole />}
        </SandpackLayout>
      </div>
    </SandpackProvider>
  </div>;
}

export { Sandbox };
export type { SandboxProps };
