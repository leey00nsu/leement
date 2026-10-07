"use client";
// Profiles are fictional; photographs are stock portraits.
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
              src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_640.jpg"
              alt="Sample profile: Morgan Park"
            />
            <AvatarFallback>MP</AvatarFallback>
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
              src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg"
              alt="Sample profile: Alex Lee"
            />
            <AvatarFallback>AL</AvatarFallback>
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
              src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_640.jpg"
              alt="Sample profile: Morgan Park"
            />
            <AvatarFallback>MP</AvatarFallback>
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
