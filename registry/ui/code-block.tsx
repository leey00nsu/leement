"use client";

import * as React from "react";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { Check, Copy, FileCode2 } from "lucide-react";
import { cn } from "@/lib/utils";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

type CodeSample = { label: string; code: string; language?: string; filename?: string };
type CodeBlockProps = React.ComponentProps<"div"> & {
  code?: string;
  language?: string;
  filename?: string;
  samples?: CodeSample[];
  showLineNumbers?: boolean;
};

const aliases: Record<string, string> = { js: "javascript", jsx: "javascript", ts: "typescript", tsx: "typescript", html: "xml", shell: "bash", sh: "bash" };

function CodeBlock({ code = "", language = "text", filename, samples, showLineNumbers = false, className, ...props }: CodeBlockProps) {
  const [selected, setSelected] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const current = samples?.[selected] ?? samples?.[0] ?? { label: filename ?? language, code, language, filename };
  const syntax = aliases[(current.language ?? language).toLowerCase()] ?? (current.language ?? language).toLowerCase();
  const highlighted = hljs.getLanguage(syntax) ? hljs.highlight(current.code, { language: syntax }).value : null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch { setCopied(false); }
  }

  return <div data-slot="code-block" className={cn("overflow-hidden rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <div className="flex min-h-10 items-center gap-3 border-b border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground">
      <FileCode2 aria-hidden="true" className="size-4 shrink-0" />
      <span className="min-w-0 flex-1 truncate font-medium">{current.filename ?? filename ?? current.label}</span>
      {samples && samples.length > 1 ? <select aria-label="Code example" value={selected} onChange={(event) => { setSelected(Number(event.target.value)); setCopied(false); }} className="max-w-28 rounded-md border border-border bg-card px-1.5 py-1 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{samples.map((sample, index) => <option key={sample.label} value={index}>{sample.label}</option>)}</select> : <span className="uppercase">{current.language ?? language}</span>}
      <button type="button" onClick={copy} aria-label={copied ? "Code copied" : "Copy code"} className="inline-flex items-center gap-1 rounded-md p-1.5 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><span className="sr-only sm:not-sr-only">{copied ? "Copied" : "Copy"}</span>{copied ? <Check aria-hidden="true" className="size-3.5" /> : <Copy aria-hidden="true" className="size-3.5" />}</button>
    </div>
    <div className="flex min-w-0 text-sm leading-6">
      {showLineNumbers && <div aria-hidden="true" className="shrink-0 select-none border-r border-border px-3 py-4 text-right font-mono text-muted-foreground">{current.code.split("\n").map((_, index) => <div key={index}>{index + 1}</div>)}</div>}
      <pre className="min-w-0 flex-1 overflow-x-auto p-4 font-mono" aria-label={(current.language ?? language) + " code"}><code className="[&_.hljs-attr]:text-(--lm-color-syntax-keyword) [&_.hljs-built_in]:text-(--lm-color-syntax-keyword) [&_.hljs-comment]:text-(--lm-color-syntax-comment) [&_.hljs-keyword]:text-(--lm-color-syntax-keyword) [&_.hljs-literal]:text-(--lm-color-syntax-number) [&_.hljs-number]:text-(--lm-color-syntax-number) [&_.hljs-string]:text-(--lm-color-syntax-string) [&_.hljs-tag]:text-(--lm-color-syntax-keyword)">{highlighted === null ? current.code : <span dangerouslySetInnerHTML={{ __html: highlighted }} />}</code></pre>
    </div>
  </div>;
}

export { CodeBlock };
export type { CodeBlockProps, CodeSample };
