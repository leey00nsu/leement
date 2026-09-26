"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../registry/ui/tabs";

export default function TabsExample() {
  return <Tabs defaultValue="overview" className="w-full max-w-sm">
    <TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="activity">Activity</TabsTrigger></TabsList>
    <TabsContent value="overview" className="pt-3">Your workspace at a glance.</TabsContent>
    <TabsContent value="activity" className="pt-3">Recent workspace updates.</TabsContent>
  </Tabs>;
}
