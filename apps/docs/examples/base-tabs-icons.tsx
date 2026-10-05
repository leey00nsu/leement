"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "../../../registry/ui/tabs";

function TabsIcons() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default function Example() {
  return <TabsIcons />;
}
