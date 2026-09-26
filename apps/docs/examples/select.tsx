"use client";

import { Label } from "../../../registry/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../registry/ui/select";

export default function SelectExample() {
  return <div className="w-full max-w-xs space-y-2">
    <Label htmlFor="example-select">Workspace role</Label>
    <Select defaultValue="editor" items={{ viewer: "Viewer", editor: "Editor", admin: "Admin" }}>
      <SelectTrigger id="example-select" className="w-full"><SelectValue placeholder="Select a role" /></SelectTrigger>
      <SelectContent>
        <SelectItem value="viewer">Viewer</SelectItem>
        <SelectItem value="editor">Editor</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  </div>;
}
