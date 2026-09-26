"use client";
import { useState } from "react";
import { Pill } from "../../../registry/ui/pill";
export default function PillExample() { const [values, setValues] = useState(["Design", "Development", "Research"]); return <div className="flex flex-wrap gap-2">{values.map((value) => <Pill key={value} label={value} onRemove={() => setValues((current) => current.filter((item) => item !== value))} />)}</div>; }
