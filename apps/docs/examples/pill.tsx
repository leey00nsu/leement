"use client";
import { useState } from "react";
import { ArrowUpRight, Check, CircleAlert } from "lucide-react";
import { Pill } from "../../../registry/ui/pill";
export default function PillExample() { const [values, setValues] = useState(["Design", "Development"]); return <div className="flex flex-col gap-3"><div className="flex flex-wrap gap-2"><Pill tone="success" label="Passed" leading={<Check className="size-3.5" />} /><Pill tone="warning" label="Needs review" leading={<CircleAlert className="size-3.5" />} /><Pill tone="danger" label="Failed" leading={<span className="size-2 rounded-full bg-current" />} /><Pill label="Up 10%" leading={<ArrowUpRight className="size-3.5" />} /></div><div className="flex flex-wrap gap-2">{values.map((value) => <Pill key={value} label={value} onRemove={() => setValues((current) => current.filter((item) => item !== value))} />)}</div></div>; }
