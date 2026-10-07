"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "../../../registry/ui/item";

// Landscape artwork is illustrative; the tracks are the credited Pixabay recordings.
const music = [
  {
    title: "Atmospheric Ambient Music with Piano",
    artist: "GavinNellist",
    duration: "2:01",
    href: "https://pixabay.com/music/ambient-atmospheric-ambient-music-with-piano-108412/",
    image: "https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg",
    imageAlt: "Stock landscape artwork · photo by jplenio"
  },
  {
    title: "Ambient Piano",
    artist: "FreeMusicForVideo",
    duration: "2:06",
    href: "https://pixabay.com/music/solo-piano-ambient-piano-524039/",
    image: "https://cdn.pixabay.com/photo/2018/10/08/22/34/lake-3733649_640.jpg",
    imageAlt: "Stock landscape artwork · photo by Katzenfee50"
  }
];

function ItemImage() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item
            key={song.title}
            variant="outline"
            render={<a href={song.href} target="_blank" rel="noreferrer" />}
            role="listitem"
          >
            <ItemMedia variant="image">
              <img
                src={song.image}
                alt={song.imageAlt}
                width={32}
                height={32}
                className="object-cover"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                {song.title}
              </ItemTitle>
              <ItemDescription>{song.artist}</ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>{song.duration}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}

export default function Example() {
  return <ItemImage />;
}
