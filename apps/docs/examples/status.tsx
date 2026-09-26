"use client";
import { Status } from "../../../registry/ui/status";
export default function StatusExample() { return <div className="flex flex-wrap gap-2"><Status label="Draft" /><Status tone="success" label="Ready" /><Status tone="warning" label="Needs review" /><Status tone="danger" label="Blocked" /></div>; }
