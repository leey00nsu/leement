"use client";
import { Spinner } from "../../../registry/ui/spinner";
export default function SpinnerExample() { return <div className="flex items-center gap-4"><Spinner label="Loading small item" size="sm" /><Spinner label="Loading results" /><Spinner label="Loading large panel" size="lg" /></div>; }
