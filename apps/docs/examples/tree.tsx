"use client";

import { useState } from "react";
import { Tree } from "../../../registry/ui/tree";

const nodes = [
  { id: "src", label: "src", children: [
    { id: "app", label: "app", children: [{ id: "page", label: "page.tsx" }, { id: "layout", label: "layout.tsx" }] },
    { id: "components", label: "components", children: [{ id: "button", label: "button.tsx" }, { id: "input", label: "input.tsx" }] },
    { id: "styles", label: "styles.css" },
  ] },
  { id: "public", label: "public", children: [{ id: "logo", label: "logo.svg" }] },
  { id: "package", label: "package.json" },
  { id: "tsconfig", label: "tsconfig.json", disabled: true },
];

export default function TreeExample() {
  const [selected, setSelected] = useState("button.tsx");
  return <div className="w-full max-w-sm"><Tree label="Project files" defaultSelectedId="button" defaultExpandedIds={["src", "components"]} nodes={nodes} onSelect={(node) => setSelected(node.label)} /><p role="status" className="mt-2 text-sm text-muted-foreground">Selected: {selected}</p></div>;
}
