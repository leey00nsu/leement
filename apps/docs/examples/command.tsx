"use client";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut } from "../../../registry/ui/command";
import { useState } from "react";
export default function CommandExample() {
const [selected, setSelected] = useState("Select a command.");
return (<div className="w-full max-w-md space-y-3"><Command label="Workspace commands" className="border border-border" loop><CommandInput placeholder="Search commands…" aria-label="Search commands" /><CommandList><CommandEmpty>No commands found.</CommandEmpty><CommandGroup heading="Workspace"><CommandItem value="members" onSelect={()=>setSelected("Members")}>Members<CommandShortcut>⌘M</CommandShortcut></CommandItem><CommandItem value="settings" onSelect={()=>setSelected("Settings")}>Settings</CommandItem><CommandItem value="billing" disabled>Billing (unavailable)</CommandItem></CommandGroup></CommandList></Command><p role="status" className="text-sm text-muted-foreground">{selected}</p></div>);
}
