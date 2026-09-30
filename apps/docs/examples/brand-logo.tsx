"use client";

import { useState } from "react";
import { BrandLogo } from "../../../registry/patterns/brand-logo";
import { Input } from "../../../registry/ui/input";

function ExampleMark() {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4" y="4" width="24" height="24" rx="7" stroke="currentColor" strokeWidth="2" /><path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

export default function BrandLogoExample() {
  const [name, setName] = useState("Your product");
  return <div className="w-full max-w-lg space-y-8">
    <div className="flex flex-wrap items-center gap-6">
      <BrandLogo name="Leement" mark={<img src="/leement-mark.svg" alt="" width={128} height={128} />} />
      <a href="#when-to-use" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><BrandLogo name="Leement" variant="icon" mark={<img src="/leement-mark.svg" alt="" width={128} height={128} />} /></a>
    </div>
    <div className="space-y-4 border-t border-border pt-6">
      <label htmlFor="brand-logo-example-name" className="block text-sm font-medium">Product name</label>
      <Input id="brand-logo-example-name" value={name} maxLength={40} onChange={(event) => setName(event.target.value)} />
      <p className="text-xs leading-6 text-muted-foreground">Use your own icon and name. Body text uses Pretendard; these wordmarks use Paperlogy 700. Set a different brand font in Foundations → Typography.</p>
      <div className="flex flex-wrap items-center gap-6">{(["sm", "md", "lg"] as const).map((size) => <BrandLogo key={size} name={name || "Your product"} mark={<ExampleMark />} size={size} />)}</div>
    </div>
  </div>;
}
