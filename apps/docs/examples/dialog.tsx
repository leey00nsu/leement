"use client";

import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../registry/ui/dialog";
import { Input } from "../../../registry/ui/input";
import { Label } from "../../../registry/ui/label";

export default function DialogExample() {
  const [name, setName] = useState("Studio");
  const [savedName, setSavedName] = useState("Studio");
  return <div className="flex max-w-full min-w-0 flex-wrap items-center justify-center gap-3"><Dialog>
    <DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit workspace</DialogTitle>
        <DialogDescription>Update details for your team.</DialogDescription>
      </DialogHeader>
      <div className="space-y-2"><Label htmlFor="dialog-workspace-name">Workspace name</Label><Input id="dialog-workspace-name" value={name} onChange={(event) => setName(event.target.value)} /></div>
      <DialogFooter>
        <DialogClose asChild><Button variant="outline" onClick={() => setName(savedName)}>Cancel</Button></DialogClose>
        <DialogClose asChild><Button onClick={() => setSavedName(name)}>Save changes</Button></DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog><span role="status" className="min-w-0 text-sm [overflow-wrap:anywhere] text-muted-foreground">Current: {savedName}</span></div>;
}
