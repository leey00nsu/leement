"use client";
import { Reel } from "../../../registry/blocks/reel";
export default function ReelExample() { return <Reel items={[{ id: "light", src: "/demo-reel-light.mp4", poster: "/demo-reel-light.png", title: "Light surface study", author: "Leement", caption: "A short original design-system clip" }, { id: "dark", src: "/demo-reel-dark.mp4", poster: "/demo-reel-dark.png", title: "Dark surface study", author: "Leement", caption: "The same rules on a darker canvas" }]} />; }
