"use client";
// Profiles are fictional; photographs are stock portraits.
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
                src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg"
                alt="Sample profile: Avery Chen"
              />
              <AvatarFallback>AC</AvatarFallback>
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
