"use client";
import { Tree } from "../../../registry/ui/tree";
export default function TreeExample() { return <div className="w-full max-w-sm"><Tree label="Project files" defaultExpandedIds={["src"]} nodes={[{ id: "src", label: "src", children: [{ id: "app", label: "app", children: [{ id: "page", label: "page.tsx" }] }, { id: "styles", label: "styles.css" }] }, { id: "package", label: "package.json" }]} /></div>; }
