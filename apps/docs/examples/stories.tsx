"use client";
import { Stories } from "../../../registry/ui/stories";
export default function StoriesExample() { return <Stories items={[{ id: "scene", src: "/demo-scene.svg", alt: "Abstract hills", author: "Leement" }, { id: "motion", src: "/demo-motion.mp4", alt: "Animated geometric study", author: "Leement", type: "video" }]} />; }
