"use client";
// Profiles are fictional; photographs do not depict actual Leement users.
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { PlusIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../registry/ui/avatar";
import { Button } from "../../../registry/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "../../../registry/ui/item";

const people = [
  {
    username: "Alex Lee",
    avatar: "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg",
    email: "alex@example.com",
  },
  {
    username: "Morgan Park",
    avatar: "https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_640.jpg",
    email: "morgan@example.com",
  },
  {
    username: "Avery Chen",
    avatar: "https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg",
    email: "avery@example.com",
  },
];

function ItemGroupExample() {
  return (
    <ItemGroup className="max-w-sm">
      {people.map((person) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={person.avatar} alt={`Sample profile: ${person.username}`} />
              <AvatarFallback>{person.username.split(" ").map((part) => part[0]).join("")}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-1">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  );
}

export default function Example() {
  return <ItemGroupExample />;
}
