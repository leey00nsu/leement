"use client";

import { Code2, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../registry/ui/tabs";

export default function TabsExample() {
  return <Tabs defaultValue="preview" className="w-full max-w-lg gap-0 overflow-hidden rounded-xl border border-border">
    <TabsList variant="segmented" aria-label="Example view" className="rounded-none border-b border-border">
      <TabsTrigger value="code"><Code2 aria-hidden="true" />Code</TabsTrigger>
      <TabsTrigger value="preview"><Eye aria-hidden="true" />Preview</TabsTrigger>
    </TabsList>
    <TabsContent value="code" className="min-h-32 bg-card p-5 font-mono">{"<Button>Save changes</Button>"}</TabsContent>
    <TabsContent value="preview" className="flex min-h-32 items-center justify-center bg-card p-5">Save changes</TabsContent>
  </Tabs>;
}
