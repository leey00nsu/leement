"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "../../../registry/ui/item";

const photos = [
  {
    name: "Workshop",
    description: "People collaborating around laptops.",
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
    credit: "StartupStockPhotos"
  },
  {
    name: "Coding desk",
    description: "A notebook computer displaying code.",
    image: "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_1280.jpg",
    credit: "AlfredMuller"
  },
  {
    name: "Boardroom",
    description: "An empty room ready for a meeting.",
    image: "https://cdn.pixabay.com/photo/2016/07/14/08/25/office-1516329_1280.jpg",
    credit: "Jo_Johnston"
  }
];

function ItemHeaderDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <ItemGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {photos.map((photo) => (
          <Item key={photo.name} variant="outline">
            <ItemHeader>
              <img
                src={photo.image}
                alt={photo.description}
                width={128}
                height={128}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{photo.name}</ItemTitle>
              <ItemDescription>{photo.description} Photo by {photo.credit} on Pixabay.</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}

export default function Example() {
  return <ItemHeaderDemo />;
}
