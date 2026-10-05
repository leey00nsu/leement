"use client";

/*
 * Adapted from Kibo UI: https://github.com/shadcnblocks/kibo
 * Kibo UI MIT license follows. Keep this notice with the source.
 *
 * Copyright (c) 2023 — Present shadcnblocks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import * as React from "react";
import { Tree, type TreeNode } from "@/components/ui/tree";
import { CodeBlock } from "@/components/ui/code-block";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type CodebaseFile = {
  id: string;
  filename: string;
  code: string;
  language?: string;
};
export type CodebaseProps = Omit<
  React.ComponentProps<"section">,
  "onSelect"
> & {
  files: CodebaseFile[];
  nodes: TreeNode[];
  selectedFileId?: string;
  defaultSelectedFileId?: string;
  onSelectedFileChange?: (file: CodebaseFile) => void;
  defaultExpandedIds?: string[];
  label?: string;
};

/** File explorer and code viewer, composed from the public Kibo Codebase example. */
export function Codebase({
  files,
  nodes,
  selectedFileId,
  defaultSelectedFileId,
  onSelectedFileChange,
  defaultExpandedIds = [],
  label = "Codebase",
  className,
  ...props
}: CodebaseProps) {
  const [selected, setSelected] = React.useState(
    defaultSelectedFileId ?? files[0]?.id,
  );
  const id = selectedFileId ?? selected;
  const file = files.find((entry) => entry.id === id) ?? files[0];
  const choose = (nextId: string) => {
    const next = files.find((entry) => entry.id === nextId);
    if (!next) return;
    if (selectedFileId === undefined) setSelected(next.id);
    onSelectedFileChange?.(next);
  };
  return (
    <section
      data-slot="codebase"
      aria-label={label}
      className={cn(
        "@container w-full min-w-0 overflow-hidden rounded-xl border border-border bg-card text-card-foreground",
        className,
      )}
      {...props}
    >
      <div className="grid min-w-0 @md:grid-cols-[minmax(9rem,12rem)_minmax(0,1fr)]">
        <div className="max-h-64 overflow-auto border-b border-border p-2 @md:max-h-[30rem] @md:border-r @md:border-b-0">
          <Tree
            label={`${label} files`}
            nodes={nodes}
            selectedId={file?.id}
            defaultExpandedIds={defaultExpandedIds}
            onSelect={(node) => choose(node.id)}
            className="rounded-none border-0 bg-transparent p-0"
          />
        </div>
        <div className="min-w-0">
          {file ? (
            <>
              <div className="border-b border-border p-3">
                <Select
                  items={files.map((entry) => ({
                    value: entry.id,
                    label: entry.filename,
                  }))}
                  value={file.id}
                  onValueChange={(value) => {
                    if (value !== null) choose(value);
                  }}
                >
                  <SelectTrigger aria-label="Current file" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent alignItemWithTrigger={false}>
                    {files.map((entry) => (
                      <SelectItem key={entry.id} value={entry.id}>
                        {entry.filename}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <CodeBlock
                key={file.id}
                code={file.code}
                language={file.language}
                filename={file.filename}
                showLineNumbers
                className="max-h-[30rem] overflow-auto rounded-none border-0"
              />
            </>
          ) : (
            <p role="status" className="p-6 text-sm text-muted-foreground">
              No files to display.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
