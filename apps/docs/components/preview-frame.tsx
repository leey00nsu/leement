import type { ReactNode } from "react";

/** Center the demo group; forms and panels keep their own internal alignment. */
export function PreviewFrame({ children, gallery = false }: { children: ReactNode; gallery?: boolean }) {
  return <div data-preview-frame={gallery ? "gallery" : "detail"} className={gallery
    ? "docs-preview-frame docs-preview-gallery rounded-xl border border-border/60 bg-background"
    : "docs-preview-frame docs-preview-guides rounded-b-xl bg-background"}>
    <div className="docs-preview-content">{children}</div>
  </div>;
}
