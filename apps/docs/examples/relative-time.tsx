"use client";
import { useState } from "react";
import { RelativeTime } from "../../../registry/ui/relative-time";
export default function RelativeTimeExample() { const [date] = useState(() => new Date(Date.now() - 90 * 60 * 1000)); return <p className="text-sm">Last edited <RelativeTime date={date} /></p>; }
