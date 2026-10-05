"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../registry/ui/avatar";
import { Bubble, BubbleContent } from "../../../registry/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "../../../registry/ui/message";

function MessageGroupDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-12">
      <MessageGroup>
        <Message>
          <MessageAvatar />
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>I checked the registry addresses.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarImage
                src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27128%27 height=%27128%27%3E%3Crect width=%27128%27 height=%27128%27 fill=%27%23e6e6e6%27/%3E%3Ctext x=%2764%27 y=%2774%27 text-anchor=%27middle%27 font-size=%2732%27 fill=%27%23555%27%3E02%3C/text%3E%3C/svg%3E"
                alt="@avatar"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>
                The component and example JSON now live under the UI registry.
              </BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  );
}

export default function Example() {
  return <MessageGroupDemo />;
}
