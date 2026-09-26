"use client";
import { Snippet } from "../../../registry/ui/snippet";
export default function SnippetExample() { return <div className="w-full"><Snippet label="Install theme" options={[{ label: "pnpm", code: "pnpm add @leement/theme" }, { label: "npm", code: "npm install @leement/theme" }, { label: "yarn", code: "yarn add @leement/theme" }]} /></div>; }
