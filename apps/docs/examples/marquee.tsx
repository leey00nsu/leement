"use client";
import { Marquee } from "../../../registry/ui/marquee";
const foundations = ["Color", "Typography", "Spacing", "Radius", "Shadow", "Motion"];
export default function MarqueeExample() {
  return <Marquee label="Leement foundations" items={foundations.map((name) => <span key={name} className="flex size-32 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground">{name}</span>)} />;
}
