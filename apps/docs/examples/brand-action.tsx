"use client";
import { useState } from "react";
import { BrandAction } from "../../../registry/patterns/brand-action";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [loading, setLoading] = useState(false);
  const [paused, setPaused] = useState(false);
  return <div className="w-full max-w-lg space-y-4 text-center"><div className="flex flex-wrap justify-center gap-3"><BrandAction loading={loading} paused={paused} onClick={() => setLoading(true)}>{loading ? "Preparing preview…" : "Create preview"}</BrandAction><BrandAction disabled>Unavailable</BrandAction></div><p className="text-sm text-muted-foreground">Generation and completion belong to the app.</p><div className="flex flex-wrap justify-center gap-2"><Button size="sm" variant="outline" onClick={() => setLoading(false)}>Finish preview</Button><Button size="sm" variant="ghost" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>{paused ? "Resume accent" : "Pause accent"}</Button></div></div>;
}
