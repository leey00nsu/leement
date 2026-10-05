"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import { toast } from "../../../registry/ui/toast";

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
} from "../../../registry/ui/bubble";

function BubbleLinkButtonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble variant="muted">
        <BubbleContent>How can I help you today?</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={
              <button onClick={() => toast("You clicked forgot password")} />
            }
          >
            I forgot my password
          </BubbleContent>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={
              <button
                onClick={() => toast("You clicked help with subscription")}
              />
            }
          >
            I need help with my subscription
          </BubbleContent>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={
              <button
                onClick={() =>
                  toast("You clicked something else. Talk to a human.")
                }
              />
            }
          >
            Something else. Talk to a human.
          </BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  );
}

import { Toaster as ExampleToaster } from "../../../registry/ui/toast";

export default function Example() {
  return (
    <>
      <ExampleToaster />
      <BubbleLinkButtonDemo />
    </>
  );
}
