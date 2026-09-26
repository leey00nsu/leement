"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type CodeBlockProps = React.ComponentProps<"div"> & {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
};

function CodeBlock({ code, language = "text", filename, showLineNumbers = false, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch { setCopied(false); }
  }
  return <div data-slot="code-block" className={cn("overflow-hidden rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2 text-xs text-muted-foreground"><span>{filename ?? language}</span><button type="button" onClick={copy} aria-label={copied ? "Code copied" : "Copy code"} className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">{copied ? <Check aria-hidden="true" className="size-3.5" /> : <Copy aria-hidden="true" className="size-3.5" />}{copied ? "Copied" : "Copy"}</button></div>
    <pre className="overflow-x-auto p-4 text-sm leading-6" aria-label={`${language} code`}><code>{showLineNumbers ? code.split("\n").map((line, index) => <span key={index} className="block"><span aria-hidden="true" className="mr-4 inline-block w-5 select-none text-right text-muted-foreground">{index + 1}</span>{line || "\u00a0"}</span>) : code}</code></pre>
  </div>;
}

export { CodeBlock };
export type { CodeBlockProps };
