"use client";
import { Kbd, KbdGroup } from "../../../registry/ui/kbd";

export default function KbdExample() {

return (<p className="flex flex-wrap items-center gap-2 text-sm">Open search <KbdGroup aria-label="Command K"><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup></p>);
}
