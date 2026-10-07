"use client";
import { Stories } from "../../../registry/ui/stories";
export default function StoriesExample() {
  return <Stories className="justify-center" items={[
  {
    id: "hintersee",
    src: "https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg",
    alt: "Hintersee lake reflecting mountains and trees",
    author: "jplenio"
  },
  {
    id: "waterfall",
    src: "https://cdn.pixabay.com/video/2023/11/19/189692-886572510_tiny.mp4",
    poster: "https://cdn.pixabay.com/video/2023/11/19/189692-886572510_tiny.jpg",
    alt: "Water cascades over mossy rocks in a forest",
    author: "JoshuaWoroniecki",
    type: "video"
  },
  {
    id: "city",
    src: "https://cdn.pixabay.com/video/2022/04/25/115053-703067837_small.mp4",
    poster: "https://cdn.pixabay.com/video/2022/04/25/115053-703067837_tiny.jpg",
    alt: "A city archway and historic architecture",
    author: "Pixabay creator 21698102",
    type: "video"
  }
]} />;
}
