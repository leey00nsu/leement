"use client";
import { Checkbox } from "../../../registry/ui/checkbox";
export default function CheckboxExample() { return <div className="w-full max-w-sm space-y-4">{[["updates","Receive product updates"],["mixed","Select some items"],["locked","Unavailable option"]].map(([id,label]) => <label key={id} className="flex min-h-10 items-center gap-3 text-sm"><Checkbox name={id} indeterminate={id === "mixed"} disabled={id === "locked"} />{label}</label>)}</div>; }
