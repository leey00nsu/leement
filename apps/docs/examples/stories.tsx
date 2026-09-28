"use client";
import { Stories } from "../../../registry/ui/stories";
export default function StoriesExample() { return <Stories items={[{ id: "scene", src: "/demo-scene.svg", alt: "Abstract hills", author: "Landscape" }, { id: "light", src: "/demo-reel-light.mp4", poster: "/demo-reel-light.png", alt: "Light surface design study", author: "Light study", type: "video" }, { id: "dark", src: "/demo-reel-dark.mp4", poster: "/demo-reel-dark.png", alt: "Dark surface design study", author: "Dark study", type: "video" }]} />; }
