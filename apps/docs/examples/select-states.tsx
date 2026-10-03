"use client";
import { useId } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../registry/ui/select";
const options={editor:"Editor",viewer:"Viewer"};
export default function Example() {
 const id=useId();
 return <div className="w-full max-w-xs space-y-5">{(["sm","default"] as const).map(size=><div key={size} className="space-y-2"><label htmlFor={`${id}-${size}`} className="block text-sm">{size} · popup below trigger</label><Select defaultValue="editor" items={options}><SelectTrigger id={`${id}-${size}`} size={size} className="w-full"><SelectValue /></SelectTrigger><SelectContent alignItemWithTrigger={false}>{Object.entries(options).map(([value,label])=><SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent></Select></div>)}
 <div className="space-y-2"><label htmlFor={`${id}-invalid`} className="text-sm">Required role · aligned selected item</label><Select items={options}><SelectTrigger id={`${id}-invalid`} aria-invalid="true" aria-describedby={`${id}-error`} className="w-full"><SelectValue placeholder="Choose a role" /></SelectTrigger><SelectContent alignItemWithTrigger>{Object.entries(options).map(([value,label])=><SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent></Select><p id={`${id}-error`} className="text-sm text-destructive">A role is required.</p></div>
 <Select disabled defaultValue="viewer" items={options}><SelectTrigger aria-label="Locked role" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="viewer">Viewer</SelectItem></SelectContent></Select></div>;
}
