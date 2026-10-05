"use client";
import { useState } from "react";
import { FileText, Download, X } from "lucide-react";
import { Attachment, AttachmentGroup, AttachmentMedia, AttachmentContent, AttachmentTitle, AttachmentDescription, AttachmentActions, AttachmentAction, AttachmentTrigger } from "../../../registry/ui/attachment";
export default function AttachmentExample() {
  const [files, setFiles] = useState(["Project brief.txt", "Design notes.txt"]);
  return <div className="max-w-full space-y-4"><AttachmentGroup aria-label="Attachments">{files.map(name => <Attachment key={name}>
    <AttachmentMedia><FileText aria-hidden="true" /></AttachmentMedia>
    <AttachmentContent><AttachmentTitle>{name}</AttachmentTitle><AttachmentDescription>Text document · 2 KB</AttachmentDescription></AttachmentContent>
    <AttachmentTrigger aria-label={`Download ${name}`} render={<a href={`data:text/plain;charset=utf-8,${encodeURIComponent('Example document: '+name)}`} download={name} />} />
    <AttachmentActions><AttachmentAction aria-label={`Download ${name}`} asChild><a href="data:text/plain,Example%20document" download={name}><Download aria-hidden="true" /></a></AttachmentAction><AttachmentAction aria-label={`Remove ${name}`} onClick={() => setFiles(files.filter(file => file !== name))}><X aria-hidden="true" /></AttachmentAction></AttachmentActions>
  </Attachment>)}</AttachmentGroup>{files.length === 0 && <p role="status" className="text-sm text-muted-foreground">No attachments.</p>}</div>;
}
