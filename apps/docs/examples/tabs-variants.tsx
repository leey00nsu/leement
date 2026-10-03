"use client";
import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../registry/ui/tabs";
export default function Example() {
  const [selected, setSelected] = useState("overview");
  return (
    <div className="w-full max-w-lg space-y-8">
      {(["default", "line", "segmented"] as const).map((variant) => (
        <Tabs
          key={variant}
          value={selected}
          onValueChange={(value) => setSelected(String(value))}
        >
          <TabsList variant={variant} aria-label={`${variant} view`}>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="billing" disabled>
              Billing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-3">
            Workspace overview
          </TabsContent>
          <TabsContent value="activity" className="p-3">
            Recent workspace activity
          </TabsContent>
        </Tabs>
      ))}
      <Tabs orientation="vertical" defaultValue="profile">
        <TabsList aria-label="Vertical settings">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="p-3">
          Profile settings
        </TabsContent>
        <TabsContent value="security" className="p-3">
          Security settings
        </TabsContent>
      </Tabs>
      <p role="status" className="text-sm">
        Shared selection: {selected}
      </p>
    </div>
  );
}
