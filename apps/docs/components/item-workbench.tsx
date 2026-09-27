"use client";

// The Preview / Code / Source arrangement adapts Kibo UI's MIT-licensed docs preview.
// The full notice is preserved in licenses/kibo-license.md.
import * as Tabs from "@radix-ui/react-tabs";
import { Check, Clipboard, Code2, Eye, Files } from "lucide-react";
import { useState, type ReactNode } from "react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return <>
    <button type="button" onClick={copy} className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={label}>
      {status === "copied" ? <Check aria-hidden="true" size={14} /> : <Clipboard aria-hidden="true" size={14} />}
      {status === "copied" ? "Copied" : status === "failed" ? "Select to copy" : "Copy"}
    </button>
    <span className="sr-only" role="status">{status === "copied" ? `${label} copied` : status === "failed" ? `Could not copy ${label}. Select the text to copy it.` : ""}</span>
  </>;
}

function CodePane({ code, filename }: { code: string; filename: string }) {
  return <div className="min-w-0">
    <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-2.5">
      <span className="truncate font-mono text-xs text-muted-foreground">{filename}</span>
      <CopyButton value={code} label={`Copy ${filename}`} />
    </div>
    <pre className="max-h-[34rem] overflow-auto p-5 text-[13px] leading-6 text-foreground"><code>{code}</code></pre>
  </div>;
}

export function ItemWorkbench({ name, exampleCode, sourceCode, sourceFile, children }: {
  name: string;
  exampleCode: string;
  sourceCode: string;
  sourceFile: string;
  children: ReactNode;
}) {
  const tabs = [
    { value: "example", label: "Code", Icon: Code2 },
    { value: "preview", label: "Preview", Icon: Eye },
    { value: "source", label: "Source", Icon: Files },
  ];

  return <div className="overflow-hidden rounded-xl border border-border bg-card">
    <Tabs.Root defaultValue="preview">
      <div className="border-b border-border bg-muted/40 p-1">
        <Tabs.List aria-label={`${name} workbench`} className="grid grid-cols-3 gap-1">
          {tabs.map(({ value, label, Icon }) => <Tabs.Trigger key={value} value={value} className="inline-flex h-10 items-center justify-center gap-2 rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
            <Icon aria-hidden="true" size={15} />{label}
          </Tabs.Trigger>)}
        </Tabs.List>
      </div>
      <Tabs.Content value="preview" className="outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
        <div className="docs-preview-stage flex min-h-[360px] items-center justify-center bg-background p-5 sm:p-10">{children}</div>
      </Tabs.Content>
      <Tabs.Content value="example" className="outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
        <CodePane code={exampleCode} filename={`examples/${name}.tsx`} />
      </Tabs.Content>
      <Tabs.Content value="source" className="outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
        <CodePane code={sourceCode} filename={sourceFile} />
      </Tabs.Content>
    </Tabs.Root>
  </div>;
}
