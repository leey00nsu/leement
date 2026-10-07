"use client";
import { Reel } from "../../../registry/blocks/reel";
export default function ReelExample() {
  return <Reel items={[
  {
    id: "waterfall",
    src: "https://cdn.pixabay.com/video/2023/11/19/189692-886572510_tiny.mp4",
    poster: "https://cdn.pixabay.com/video/2023/11/19/189692-886572510_tiny.jpg",
    title: "Forest waterfall",
    author: "JoshuaWoroniecki",
    caption: "Water cascades over mossy rocks · Pixabay footage"
  },
  {
    id: "city",
    src: "https://cdn.pixabay.com/video/2022/04/25/115053-703067837_small.mp4",
    poster: "https://cdn.pixabay.com/video/2022/04/25/115053-703067837_tiny.jpg",
    title: "City archway",
    author: "Pixabay creator 21698102",
    caption: "A view of historic city architecture · Pixabay footage"
  }
]} />;
}
