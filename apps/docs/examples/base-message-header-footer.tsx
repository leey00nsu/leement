"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Bubble, BubbleContent } from "../../../registry/ui/bubble";
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "../../../registry/ui/message";

function MessageHeaderFooterDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message>
        <MessageContent>
          <MessageHeader>Olivia</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>I already checked the logs.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              Send the report to the team. Ping @shadcn if you need help.
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <div>
              Read <span className="font-normal">Yesterday</span>
            </div>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  );
}

export default function Example() {
  return <MessageHeaderFooterDemo />;
}
