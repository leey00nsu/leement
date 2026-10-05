"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../registry/ui/avatar";
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
} from "../../../registry/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "../../../registry/ui/message";

function MessageAvatarDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-12">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27128%27 height=%27128%27%3E%3Crect width=%27128%27 height=%27128%27 fill=%27%23e6e6e6%27/%3E%3Ctext x=%2764%27 y=%2774%27 text-anchor=%27middle%27 font-size=%2732%27 fill=%27%23555%27%3E03%3C/text%3E%3C/svg%3E"
              alt="@avatar"
            />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              The build failed during dependency installation.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27128%27 height=%27128%27%3E%3Crect width=%27128%27 height=%27128%27 fill=%27%23e6e6e6%27/%3E%3Ctext x=%2764%27 y=%2774%27 text-anchor=%27middle%27 font-size=%2732%27 fill=%27%23555%27%3E10%3C/text%3E%3C/svg%3E"
              alt="@avatar"
            />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Can you share the exact error?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27128%27 height=%27128%27%3E%3Crect width=%27128%27 height=%27128%27 fill=%27%23e6e6e6%27/%3E%3Ctext x=%2764%27 y=%2774%27 text-anchor=%27middle%27 font-size=%2732%27 fill=%27%23555%27%3E03%3C/text%3E%3C/svg%3E"
              alt="@avatar"
            />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>Here&apos;s the error from the logs</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>
                Something went wrong with the build. The libraries are not
                installed correctly. Try running the build again.
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
    </div>
  );
}

export default function Example() {
  return <MessageAvatarDemo />;
}
