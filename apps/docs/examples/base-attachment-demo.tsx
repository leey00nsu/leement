"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { FileCodeIcon, XIcon } from "lucide-react";

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
import { Spinner } from "../../../registry/ui/spinner";

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

function AttachmentDemo() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
      <AttachmentGroup>
        {images.map((image) => (
          <Attachment key={image.name} orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={image.src} alt={image.alt} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{image.name}</AttachmentTitle>
              <AttachmentDescription>{image.meta}</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        ))}
      </AttachmentGroup>
      <Attachment state="uploading" className="w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
          <AttachmentDescription>Uploading · 64%</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment className="w-full">
        <AttachmentMedia>
          <FileCodeIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>message-renderer.tsx</AttachmentTitle>
          <AttachmentDescription>TypeScript · 12 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove message-renderer.tsx">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  );
}

export default function Example() {
  return <AttachmentDemo />;
}
