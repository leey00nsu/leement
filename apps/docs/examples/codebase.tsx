"use client";
import { Codebase, type CodebaseFile } from "../../../registry/blocks/codebase";

const files: CodebaseFile[] = [
  {
    id: "button",
    filename: "button.tsx",
    language: "tsx",
    code: 'import { Button } from "@/components/ui/button";\n\nexport function SaveAction() {\n  return <Button>Save changes</Button>;\n}',
  },
  {
    id: "theme",
    filename: "theme.css",
    language: "css",
    code: '@import "@leement/theme";\n\n:root {\n  --lm-color-action-primary: oklch(0.55 0.12 265);\n}',
  },
  {
    id: "package",
    filename: "package.json",
    language: "json",
    code: '{\n  "name": "workspace",\n  "private": true,\n  "dependencies": {\n    "@leement/theme": "0.2.0"\n  }\n}',
  },
];
export default function CodebaseExample() {
  return (
    <Codebase
      files={files}
      nodes={[
        {
          id: "src",
          label: "src",
          children: [
            {
              id: "components",
              label: "components",
              children: [{ id: "button", label: "button.tsx" }],
            },
            { id: "theme", label: "theme.css" },
          ],
        },
        { id: "package", label: "package.json" },
      ]}
      defaultExpandedIds={["src", "components"]}
    />
  );
}
