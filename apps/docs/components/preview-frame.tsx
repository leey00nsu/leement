import type { ReactNode } from "react";

/** A docs surface: its padding and optional guides share the same inset. */
export function PreviewFrame({ children, gallery = false }: { children: ReactNode; gallery?: boolean }) {
  return <div data-preview-frame={gallery ? "gallery" : "detail"} className={gallery
    ? "docs-preview-frame docs-preview-gallery rounded-xl border border-border/60 bg-background"
    : "docs-preview-frame docs-preview-guides bg-background"}>
    <div className="docs-preview-content">{children}</div>
  </div>;
}
