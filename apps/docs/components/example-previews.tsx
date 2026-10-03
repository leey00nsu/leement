"use client";
import { lazy, Suspense } from "react";
const examples = { "select-groups": lazy(() => import("../examples/select-groups")) };
export function AdditionalExamplePreview({ file }: { file: string }) {
  const Example = examples[file as keyof typeof examples];
  if (!Example) throw new Error(`Missing example preview: ${file}`);
  return <div data-additional-example={file} className="flex min-w-0 w-full items-center justify-center text-foreground"><Suspense fallback={<p role="status" className="text-sm text-muted-foreground">Loading example…</p>}><Example /></Suspense></div>;
}
