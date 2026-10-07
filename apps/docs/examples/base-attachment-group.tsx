"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  FileCodeIcon,
  FileTextIcon,
  TableIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "../../../registry/ui/attachment";

type Item = {
  name: string;
  meta: string;
  icon?: LucideIcon;
  src?: string;
  alt?: string;
};

const items: Item[] = [
  { name: "briefing-notes.pdf", meta: "PDF · 1.4 MB", icon: FileTextIcon },
  {
    name: "workshop.jpg",
    meta: "JPG · 177 KB",
    alt: "People collaborating around laptops at a workshop",
    src: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
  },
  { name: "customers.csv", meta: "CSV · 18 KB", icon: TableIcon },
  { name: "renderer.tsx", meta: "TSX · 12 KB", icon: FileCodeIcon },
];

function AttachmentGroupDemo() {
  return (
    <div className="mx-auto w-full max-w-sm py-12">
      <AttachmentGroup className="w-full">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Attachment key={item.name} className="w-64">
              {item.src ? (
                <AttachmentMedia variant="image">
                  <img src={item.src} alt={item.alt ?? item.name} />
                </AttachmentMedia>
              ) : Icon ? (
                <AttachmentMedia>
                  <Icon />
                </AttachmentMedia>
              ) : null}
              <AttachmentContent>
                <AttachmentTitle>{item.name}</AttachmentTitle>
                <AttachmentDescription>{item.meta}</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label={`Remove ${item.name}`}>
                  <XIcon />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
          );
        })}
      </AttachmentGroup>
    </div>
  );
}

export default function Example() {
  return <AttachmentGroupDemo />;
}
