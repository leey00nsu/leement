import { Cursor, CursorBody, CursorMessage, CursorName, CursorPointer } from "../../../registry/ui/cursor";

export default function CursorExample() {
  return <div className="flex w-full items-center justify-between gap-4"><Cursor className="text-data-accent-foreground"><CursorPointer /><CursorBody><CursorName>Alex</CursorName><CursorMessage>Editing</CursorMessage></CursorBody></Cursor><span className="text-xs text-muted-foreground">Alex is editing this page</span></div>;
}
