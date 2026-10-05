"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import { GitBranchIcon, RotateCcwIcon } from "lucide-react";
import { toast } from "../../../registry/ui/toast";

import { Marker, MarkerContent, MarkerIcon } from "../../../registry/ui/marker";

function MarkerLinkButtonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker render={<a href="#links-and-buttons" />}>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>View the pull request</MarkerContent>
      </Marker>
      <Marker
        render={
          <button
            type="button"
            className=" hover:text-foreground"
            onClick={() => toast("You clicked the revert button")}
          />
        }
      >
        <MarkerIcon>
          <RotateCcwIcon />
        </MarkerIcon>
        <MarkerContent>Revert this change</MarkerContent>
      </Marker>
    </div>
  );
}

import { Toaster as ExampleToaster } from "../../../registry/ui/toast";

export default function Example() {
  return (
    <>
      <ExampleToaster />
      <MarkerLinkButtonDemo />
    </>
  );
}
