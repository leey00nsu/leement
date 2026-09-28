"use client";
import { Editor } from "../../../registry/ui/editor";
export default function EditorExample() { return <div className="w-full"><Editor label="Project notes" initialContent="<h1>Project notes</h1><p>Capture decisions while the context is fresh. Edit this text to see the toolbar state change.</p><h2>Decisions</h2><ul><li>Use shared semantic color roles.</li><li>Keep product data in the application.</li></ul><blockquote><p>The source belongs to your project.</p></blockquote>" /></div>; }
