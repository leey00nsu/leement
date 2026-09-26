"use client";

import * as React from "react";
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackConsole } from "@codesandbox/sandpack-react";
import { cn } from "@/lib/utils";

type SandboxProps = React.ComponentProps<"div"> & {
  files: Record<string, string>;
  template?: "react" | "react-ts" | "vanilla" | "vanilla-ts";
  showConsole?: boolean;
};

function Sandbox({ files, template = "react", showConsole = false, className, ...props }: SandboxProps) {
  return <div data-slot="sandbox" className={cn("overflow-hidden rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <SandpackProvider files={files} template={template} theme={{ colors: { surface1: "var(--lm-color-surface-default)", surface2: "var(--lm-color-surface-raised)", surface3: "var(--lm-color-background-subtle)", clickable: "var(--lm-color-foreground-default)", base: "var(--lm-color-foreground-default)", disabled: "var(--lm-color-foreground-muted)", hover: "var(--lm-color-background-subtle)", accent: "var(--lm-color-action-primary)", error: "var(--lm-color-action-danger)", errorSurface: "var(--lm-color-background-subtle)" }, syntax: { plain: "var(--lm-color-foreground-default)", comment: "var(--lm-color-foreground-muted)", keyword: "var(--lm-color-action-primary)", tag: "var(--lm-color-action-primary)", punctuation: "var(--lm-color-foreground-muted)", definition: "var(--lm-color-foreground-default)", property: "var(--lm-color-foreground-default)", static: "var(--lm-color-action-primary)", string: "var(--lm-color-status-success)" }, font: { body: "var(--lm-typography-family-sans)", mono: "ui-monospace, monospace", size: "14px", lineHeight: "1.5" } }}>
      <SandpackLayout><SandpackCodeEditor showLineNumbers aria-label="Code editor" /><SandpackPreview showRefreshButton showOpenInCodeSandbox={false} aria-label="Live preview" />{showConsole && <SandpackConsole />}</SandpackLayout>
    </SandpackProvider>
  </div>;
}

export { Sandbox };
export type { SandboxProps };
