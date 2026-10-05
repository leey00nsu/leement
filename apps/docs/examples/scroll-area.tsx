"use client";
import { ScrollArea } from "../../../registry/ui/scroll-area";
export default function ScrollAreaExample(){return <ScrollArea className="h-64 w-72 max-w-full rounded-lg border"><div className="p-4"><h3 className="mb-3 font-medium">Recent releases</h3><ul>{Array.from({length:24},(_,index)=><li key={index} className="border-b py-3 text-sm last:border-0">Version 0.{24-index}.0 — component updates</li>)}</ul></div></ScrollArea>;}
