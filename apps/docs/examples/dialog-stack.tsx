"use client";

import { useState } from "react";
import { DialogStack } from "../../../registry/blocks/dialog-stack";

export default function DialogStackExample() {
  const [name, setName] = useState("Studio");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const pages = [
    { id: "name", title: "Name your workspace", description: "Choose a name your team will recognize.", content: <label className="block text-sm">Workspace name<input value={name} onChange={(event) => setName(event.target.value)} className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm" /></label> },
    { id: "invite", title: "Invite a teammate", description: "You can invite more people later.", content: <label className="block text-sm">Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="teammate@example.com" className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm" /></label> },
    { id: "review", title: "Review details", description: "Check the details before creating.", content: <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm"><dt className="text-muted-foreground">Workspace</dt><dd>{name || "Unnamed"}</dd><dt className="text-muted-foreground">Teammate</dt><dd>{email || "Invite later"}</dd></dl> },
  ];
  return <div><DialogStack triggerLabel="Create a workspace" pages={pages} onFinish={() => setMessage(name + " workspace created in this demo.")} /><p role="status" className="mt-3 text-sm text-muted-foreground">{message}</p></div>;
}
