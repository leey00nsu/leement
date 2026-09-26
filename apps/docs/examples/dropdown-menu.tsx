"use client";

import { Button } from "../../../registry/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../registry/ui/dropdown-menu";
import { useState } from "react";

export default function DropdownMenuExample() {
  const [view, setView] = useState("Overview");
  return <div className="flex items-center gap-3"><DropdownMenu>
    <DropdownMenuTrigger render={<Button variant="outline" />}>View options</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem onClick={() => setView("Overview")}>Overview</DropdownMenuItem>
      <DropdownMenuItem onClick={() => setView("Activity")}>Activity</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem disabled>Export unavailable</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu><span role="status" className="text-sm text-muted-foreground">{view}</span></div>;
}
