"use client";

import * as React from "react";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

type DropzoneProps = Omit<React.ComponentProps<"div">, "onDrop"> & {
  label: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onFiles: (files: File[]) => void;
};

function Dropzone({ label, accept, multiple = false, disabled, onFiles, className, ...props }: DropzoneProps) {
  const input = React.useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const [error, setError] = React.useState("");
  function receive(list: FileList | null) {
    if (!list || disabled) return;
    const allowed = accept?.split(",").map((entry) => entry.trim().toLowerCase()).filter(Boolean) ?? [];
    const next = Array.from(list).filter((file) => allowed.length === 0 || allowed.some((rule) => rule.startsWith(".") ? file.name.toLowerCase().endsWith(rule) : rule.endsWith("/*") ? file.type.startsWith(rule.slice(0, -1)) : file.type === rule)).slice(0, multiple ? undefined : 1);
    if (next.length === 0 && list.length > 0) { setError("This file type is not accepted"); return; }
    setError("");
    setFiles(next); onFiles(next);
  }
  return <div {...props} data-slot="dropzone" className={cn("rounded-xl border-2 border-dashed border-border bg-card p-6 text-center text-card-foreground", dragging && "border-primary bg-primary/5", disabled && "opacity-50", className)} onDragEnter={(event) => { event.preventDefault(); if (!disabled) setDragging(true); }} onDragOver={(event) => event.preventDefault()} onDragLeave={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setDragging(false); }} onDrop={(event) => { event.preventDefault(); setDragging(false); receive(event.dataTransfer.files); }}>
    <input ref={input} type="file" className="sr-only" tabIndex={-1} aria-label={label} accept={accept} multiple={multiple} disabled={disabled} onChange={(event) => receive(event.target.files)} />
    <Upload aria-hidden="true" className="mx-auto mb-2 size-5 text-muted-foreground" /><p className="text-sm font-medium">{label}</p><p className="mt-1 text-xs text-muted-foreground">Drop files here or browse your device{accept ? ` · ${accept} only` : ""}</p>
    <button type="button" disabled={disabled} onClick={() => input.current?.click()} className="mt-3 rounded-md border border-border px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed">Browse files</button>
    <p role="status" className={cn("mt-2 break-all text-xs", error ? "text-destructive" : "text-muted-foreground")}>{error || (files.length ? files.map((file) => file.name).join(", ") : "No files selected")}</p>
  </div>;
}

export { Dropzone };
export type { DropzoneProps };
