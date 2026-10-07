"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { XIcon } from "lucide-react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "../../../registry/ui/attachment";

const images = [
  {
    name: "workshop.jpg",
    meta: "JPG · 177 KB",
    src: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
    alt: "People collaborating around laptops at a workshop",
  },
  {
    name: "desk-reference.jpg",
    meta: "JPG · 164 KB",
    src: "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_1280.jpg",
    alt: "A notebook computer with code on its screen",
  },
  {
    name: "office-reference.jpg",
    meta: "JPG · 280 KB",
    src: "https://cdn.pixabay.com/photo/2016/07/14/08/25/office-1516329_1280.jpg",
    alt: "An empty boardroom with a long meeting table",
  },
];

function AttachmentImage() {
  return (
    <div className="mx-auto w-full max-w-sm py-12">
      <AttachmentGroup className="w-full">
        {images.map((image) => (
          <Attachment key={image.name} orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={image.src} alt={image.alt} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{image.name}</AttachmentTitle>
              <AttachmentDescription>{image.meta}</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label={`Remove ${image.name}`}>
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
            <AttachmentTrigger
              render={
                <a
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${image.name}`}
                />
              }
            />
          </Attachment>
        ))}
      </AttachmentGroup>
    </div>
  );
}

export default function Example() {
  return <AttachmentImage />;
}
