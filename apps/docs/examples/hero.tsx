"use client";
import { Hero } from "../../../registry/blocks/hero";
export default function HeroExample() {
  return (
    <Hero
      announcement={{
        label: "Latest",
        title: "Introducing our design system",
        href: "https://example.com/updates",
      }}
      logos={[
        { name: "Studio", url: "https://example.com/studio" },
        { name: "Team", url: "https://example.com/team" },
        { name: "Product", url: "https://example.com/product" },
        { name: "Community", url: "https://example.com/community" },
      ]}
      video={{
        src: "/demo-player.mp4",
        title: "Product walkthrough",
        captionsSrc: "/demo-captions.vtt",
      }}
    />
  );
}
