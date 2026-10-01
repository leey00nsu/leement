"use client";
import { useState } from "react";
import { TextReveal } from "../../../registry/ui/text-reveal";
import { BrandGradientText } from "../../../registry/ui/brand-gradient-text";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [replay, setReplay] = useState(0);
  return <div className="w-full space-y-5"><h3 className="text-2xl font-semibold leading-relaxed"><TextReveal key={replay}><TextReveal.Item>나만의</TextReveal.Item>{" "}<TextReveal.Item><BrandGradientText>목소리로</BrandGradientText></TextReveal.Item><br /><TextReveal.Item>Make it yours.</TextReveal.Item></TextReveal></h3><Button size="sm" variant="outline" onClick={() => setReplay((n) => n + 1)}>Replay text</Button></div>;
}
