"use client";
import { useState } from "react";
import { Editor } from "../../../registry/ui/editor";
import { Button } from "../../../registry/ui/button";
const initial = "<p>Write a project update.</p>";
export default function Example() {
  const [readOnly, setReadOnly] = useState(false);
  const [html, setHtml] = useState(initial);
  return (
    <div className="w-full max-w-xl space-y-4">
      <Button
        variant="outline"
        aria-pressed={readOnly}
        onClick={() => setReadOnly((v) => !v)}
      >
        {readOnly ? "Enable editing" : "Set read-only"}
      </Button>
      <Editor
        label="Editable project update"
        initialContent={initial}
        readOnly={readOnly}
        onChange={setHtml}
      />
      <p className="text-xs text-muted-foreground">Current HTML</p>
      <pre className="max-h-40 overflow-auto rounded-md bg-muted p-3 text-xs">
        <code>{html}</code>
      </pre>
    </div>
  );
}
