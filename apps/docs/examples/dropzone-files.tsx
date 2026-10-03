"use client";
import { useState } from "react";
import { Dropzone } from "../../../registry/ui/dropzone";
export default function Example() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div className="w-full max-w-md space-y-5">
      <Dropzone label="Choose one image" accept="image/*" onFiles={setFiles} />
      <Dropzone
        label="Choose documents"
        accept=".txt,.pdf"
        multiple
        onFiles={setFiles}
      />
      <Dropzone label="Uploads unavailable" disabled onFiles={setFiles} />
      <div role="status" className="text-sm">
        {files.length
          ? files.map((file) => (
              <p
                className="break-all"
                key={`${file.name}-${file.lastModified}`}
              >
                {file.name} · {file.size.toLocaleString()} bytes
              </p>
            ))
          : "No files read yet"}
      </div>
    </div>
  );
}
