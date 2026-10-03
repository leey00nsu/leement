"use client";

// The Preview / Code / Source arrangement adapts Kibo UI's MIT-licensed docs preview.
// The full notice is preserved in licenses/kibo-license.md.
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../registry/ui/tabs";
import { Check, Clipboard, Code2, Eye, Files } from "lucide-react";
import { useState, type ReactNode } from "react";
import { PreviewFrame } from "./preview-frame";

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
    <Tabs defaultValue="preview" className="gap-0">
      <div className="border-b border-border bg-muted/60 p-1">
        <TabsList variant="segmented" aria-label={`${name} workbench`}>
          {tabs.map(({ value, label, Icon }) => <TabsTrigger key={value} value={value}>
            <Icon aria-hidden="true" size={15} />{label}
          </TabsTrigger>)}
        </TabsList>
      </div>
      <TabsContent value="preview" className="focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
        <PreviewFrame>{children}</PreviewFrame>
      </TabsContent>
      <TabsContent value="example" className="focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
        <CodePane code={exampleCode} filename={`examples/${name}.tsx`} />
      </TabsContent>
      <TabsContent value="source" className="focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
        <CodePane code={sourceCode} filename={sourceFile} />
      </TabsContent>
    </Tabs>
  </div>;
}
