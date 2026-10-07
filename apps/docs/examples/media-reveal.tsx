"use client";
import { useState } from "react";
import { MediaReveal } from "../../../registry/patterns/media-reveal";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("ready");
  return <div className="w-full space-y-4"><MediaReveal status={status} label="Landscape preview" className="aspect-video overflow-hidden rounded-lg border border-border" error={<div className="flex h-full flex-col items-center justify-center gap-3 bg-muted p-4"><p>Preview unavailable.</p><Button size="sm" variant="outline" onClick={() => setStatus("loading")}>Retry preview</Button></div>}><img src="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg" alt="Hintersee lake reflecting mountains and trees" className="h-full w-full object-cover" /></MediaReveal><div className="flex flex-wrap gap-2">{(["loading", "ready", "error"] as const).map((state) => <Button key={state} size="sm" variant="outline" aria-pressed={status === state} onClick={() => setStatus(state)}>{state}</Button>)}</div></div>;
}
