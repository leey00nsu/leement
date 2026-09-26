"use client";
import { Reel } from "../../../registry/blocks/reel";
export default function ReelExample() { return <Reel items={[{ id: "first", src: "/demo-motion.mp4", poster: "/demo-scene.svg", title: "Shape study", author: "Leement" }, { id: "second", src: "/demo-motion.mp4", poster: "/demo-scene.svg", title: "Motion study", author: "Leement", caption: "A local demo clip" }]} />; }
