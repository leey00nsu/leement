"use client";

import * as React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, ListOrdered, Undo2, Redo2 } from "lucide-react";
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
  React.useEffect(() => { editor?.setEditable(!readOnly); }, [editor, readOnly]);
  const actions = [
    { label: "Bold", pressed: editor?.isActive("bold"), disabled: false, Icon: Bold, run: () => editor?.chain().focus().toggleBold().run() },
    { label: "Italic", pressed: editor?.isActive("italic"), disabled: false, Icon: Italic, run: () => editor?.chain().focus().toggleItalic().run() },
    { label: "Bullet list", pressed: editor?.isActive("bulletList"), disabled: false, Icon: List, run: () => editor?.chain().focus().toggleBulletList().run() },
    { label: "Numbered list", pressed: editor?.isActive("orderedList"), disabled: false, Icon: ListOrdered, run: () => editor?.chain().focus().toggleOrderedList().run() },
    { label: "Undo", pressed: undefined, disabled: !editor?.can().undo(), Icon: Undo2, run: () => editor?.chain().focus().undo().run() },
    { label: "Redo", pressed: undefined, disabled: !editor?.can().redo(), Icon: Redo2, run: () => editor?.chain().focus().redo().run() },
  ];
  return <div data-slot="editor" className={cn("overflow-hidden rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    {!readOnly && <div role="toolbar" aria-label={`${label} formatting`} className="flex flex-wrap gap-1 border-b border-border p-2">{actions.map(({ label: actionLabel, pressed, disabled, Icon, run }) => <button key={actionLabel} type="button" aria-label={actionLabel} aria-pressed={pressed} disabled={!editor || disabled} onClick={run} className={cn("rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40", pressed && "bg-muted text-primary")}><Icon aria-hidden="true" className="size-4" /></button>)}</div>}
    <EditorContent editor={editor} className="[&_.ProseMirror]:min-h-36 [&_.ProseMirror]:p-4 [&_.ProseMirror]:text-sm [&_.ProseMirror]:outline-none [&_.ProseMirror]:focus-visible:ring-3 [&_.ProseMirror]:focus-visible:ring-inset [&_.ProseMirror]:focus-visible:ring-ring/40 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-5 [&_ol]:pl-5" />
  </div>;
}

export { Editor };
export type { EditorProps };
