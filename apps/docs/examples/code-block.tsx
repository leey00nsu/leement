"use client";
import { CodeBlock } from "../../../registry/ui/code-block";
const samples = [
  { label: "TypeScript", filename: "button.tsx", language: "typescript", code: 'type Action = { label: string; disabled?: boolean };\n\nexport function ActionButton({ label, disabled }: Action) {\n  return <button disabled={disabled}>{label}</button>;\n}' },
  { label: "CSS", filename: "theme.css", language: "css", code: ':root {\n  --lm-color-brand-accent: #7554c8;\n  --lm-color-focus-ring: var(--lm-color-brand-accent);\n}' },
  { label: "JSON", filename: "components.json", language: "json", code: '{\n  "registries": {\n    "@leement": "https://example.com/r/{name}.json"\n  }\n}' },
];
export default function CodeBlockExample() { return <div className="w-full"><CodeBlock samples={samples} showLineNumbers /></div>; }
