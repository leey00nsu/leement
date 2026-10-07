"use client";
import { Hero } from "../../../registry/blocks/hero";
export default function HeroExample() {
  return (
    <Hero
      heading="Find a quieter view"
      description="A sample travel page with real lakeside footage by mariancroitoru on Pixabay."
      announcement={{ label: "Explore", title: "Lakeside landscapes", href: "https://pixabay.com/videos/lake-houses-hill-mountain-boat-67201/" }}
      primaryAction={{ text: "View the lake film", url: "https://pixabay.com/videos/lake-houses-hill-mountain-boat-67201/" }}
      secondaryAction={{ text: "See the waterfall", url: "https://pixabay.com/videos/waterfall-fall-forest-tranquil-189692/" }}
      trustedLabel="Example travel partners"
      logos={[
        { name: "Studio", url: "https://example.com/studio" },
        { name: "Team", url: "https://example.com/team" },
        { name: "Product", url: "https://example.com/product" },
        { name: "Community", url: "https://example.com/community" },
      ]}
      video={{ src: "https://cdn.pixabay.com/video/2021/03/07/67201-521635037_tiny.mp4", poster: "https://cdn.pixabay.com/video/2021/03/07/67201-521635037_tiny.jpg", title: "Lakeside village · mariancroitoru" }}
    />
  );
}
