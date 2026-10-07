"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import { ScrollArea, ScrollBar } from "../../../registry/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
  alt: string;
}

export const works: Artwork[] = [
  {
    artist: "jplenio",
    art: "https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg",
    alt: "Hintersee lake reflecting mountains and trees"
  },
  {
    artist: "Katzenfee50",
    art: "https://cdn.pixabay.com/photo/2018/10/08/22/34/lake-3733649_640.jpg",
    alt: "Autumn trees reflected in Lake Ulmener Maar"
  },
  {
    artist: "Jo_Johnston",
    art: "https://cdn.pixabay.com/photo/2016/07/14/08/25/office-1516329_1280.jpg",
    alt: "An empty boardroom with a long meeting table"
  }
];

function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-full max-w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.art}
                alt={artwork.alt}
                className="aspect-[3/4] h-[400px] w-[300px] object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default function Example() {
  return <ScrollAreaHorizontalDemo />;
}
