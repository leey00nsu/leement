"use client";

import * as React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Heading1, Heading2, Italic, List, ListOrdered, Quote, Undo2, Redo2 } from "lucide-react";
import { cn } from "@/lib/utils";

type EditorProps = Omit<React.ComponentProps<"div">, "onChange"> & {
  label: string;
  initialContent?: string;
  onChange?: (html: string) => void;
  readOnly?: boolean;
};

function Editor({ label, initialContent = "", onChange, readOnly = false, className, ...props }: EditorProps) {
  const onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange;
  const editor = useEditor({ extensions: [StarterKit], content: initialContent, immediatelyRender: false, editable: !readOnly, editorProps: { attributes: { "aria-label": label, role: "textbox", "aria-multiline": "true" } }, onUpdate: ({ editor }) => onChangeRef.current?.(editor.getHTML()) });
  React.useEffect(() => { editor?.setEditable(!readOnly); editor?.view.dom.setAttribute("aria-readonly", String(readOnly)); }, [editor, readOnly]);
  const actions = [
    { label: "Heading 1", pressed: editor?.isActive("heading", { level: 1 }), disabled: false, Icon: Heading1, run: () => editor?.chain().focus().toggleHeading({ level: 1 }).run() },
    { label: "Heading 2", pressed: editor?.isActive("heading", { level: 2 }), disabled: false, Icon: Heading2, run: () => editor?.chain().focus().toggleHeading({ level: 2 }).run() },
    { label: "Bold", pressed: editor?.isActive("bold"), disabled: false, Icon: Bold, run: () => editor?.chain().focus().toggleBold().run() },
    { label: "Italic", pressed: editor?.isActive("italic"), disabled: false, Icon: Italic, run: () => editor?.chain().focus().toggleItalic().run() },
    { label: "Bullet list", pressed: editor?.isActive("bulletList"), disabled: false, Icon: List, run: () => editor?.chain().focus().toggleBulletList().run() },
    { label: "Numbered list", pressed: editor?.isActive("orderedList"), disabled: false, Icon: ListOrdered, run: () => editor?.chain().focus().toggleOrderedList().run() },
    { label: "Blockquote", pressed: editor?.isActive("blockquote"), disabled: false, Icon: Quote, run: () => editor?.chain().focus().toggleBlockquote().run() },
    { label: "Undo", pressed: undefined, disabled: !editor?.can().undo(), Icon: Undo2, run: () => editor?.chain().focus().undo().run() },
    { label: "Redo", pressed: undefined, disabled: !editor?.can().redo(), Icon: Redo2, run: () => editor?.chain().focus().redo().run() },
  ];
  return <div data-slot="editor" className={cn("overflow-hidden rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    {!readOnly && <div role="toolbar" aria-label={`${label} formatting`} className="flex min-w-0 gap-1 overflow-x-auto border-b border-border p-1.5">{actions.map(({ label: actionLabel, pressed, disabled, Icon, run }) => <button key={actionLabel} type="button" aria-label={actionLabel} aria-pressed={pressed} disabled={!editor || disabled} onClick={run} className={cn("shrink-0 rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40", pressed && "bg-muted text-primary")}><Icon aria-hidden="true" className="size-4" /></button>)}</div>}
    <EditorContent editor={editor} className="[&_.ProseMirror]:min-h-36 [&_.ProseMirror]:p-4 [&_.ProseMirror]:text-sm [&_.ProseMirror]:leading-relaxed [&_.ProseMirror]:outline-none [&_.ProseMirror]:focus-visible:ring-3 [&_.ProseMirror]:focus-visible:ring-inset [&_.ProseMirror]:focus-visible:ring-ring/40 [&_.ProseMirror_h1]:mb-3 [&_.ProseMirror_h1]:text-2xl [&_.ProseMirror_h1]:font-bold [&_.ProseMirror_h1]:tracking-tight [&_.ProseMirror_h2]:mb-2 [&_.ProseMirror_h2]:mt-5 [&_.ProseMirror_h2]:text-lg [&_.ProseMirror_h2]:font-semibold [&_.ProseMirror_p]:my-2 [&_.ProseMirror_blockquote]:my-3 [&_.ProseMirror_blockquote]:border-l-2 [&_.ProseMirror_blockquote]:border-border [&_.ProseMirror_blockquote]:pl-3 [&_.ProseMirror_blockquote]:text-muted-foreground [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ul]:pl-5 [&_.ProseMirror_ol]:pl-5" />
  </div>;
}

export { Editor };
export type { EditorProps };
