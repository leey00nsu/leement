import { Cursor, CursorBody, CursorMessage, CursorName, CursorPointer } from "../../../registry/ui/cursor";

export default function CursorExample() {
  return <div className="relative h-72 w-full rounded-lg border border-dashed border-border bg-card" aria-label="Collaboration canvas with Alex, Blair and Casey present">
    <div aria-hidden="true" className="absolute inset-4 rounded-md border border-border bg-muted/30 p-4"><span className="text-sm font-medium">Product brief</span><div className="mt-4 h-2 w-2/3 rounded-full bg-muted" /><div className="mt-3 h-2 w-1/2 rounded-full bg-muted" /><div className="mt-8 h-2 w-3/4 rounded-full bg-muted" /></div>
    <Cursor className="absolute left-[8%] top-[18%] text-data-accent"><CursorPointer /><CursorBody><CursorName>Alex</CursorName><CursorMessage>Could we adjust this?</CursorMessage></CursorBody></Cursor>
    <Cursor className="absolute left-[48%] top-[48%] text-primary"><CursorPointer /><CursorBody><CursorName>Blair</CursorName><CursorMessage>Reviewing</CursorMessage></CursorBody></Cursor>
    <Cursor className="absolute left-[22%] top-[74%] text-foreground"><CursorPointer /><CursorBody><CursorName>Casey</CursorName></CursorBody></Cursor>
    <span className="sr-only">Alex is commenting; Blair is reviewing; Casey is present.</span>
  </div>;
}
