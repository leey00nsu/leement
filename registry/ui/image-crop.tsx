"use client";

import * as React from "react";
import ReactCrop, { type PercentCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { cn } from "@/lib/utils";

type ImageCropProps = Omit<React.ComponentProps<"div">, "onChange"> & {
  src: string;
  alt: string;
  aspect?: number;
  onApply: (crop: PercentCrop) => void;
};

const initialCrop: PercentCrop = { unit: "%", x: 10, y: 10, width: 80, height: 80 };

function ImageCrop({ src, alt, aspect, onApply, className, style, ...props }: ImageCropProps) {
  const [crop, setCrop] = React.useState<PercentCrop>(initialCrop);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return <div data-slot="image-crop" className={cn("w-full max-w-lg rounded-xl border border-border bg-card p-4 text-card-foreground", className)} style={{ ...style, "--rc-focus-color": "var(--lm-color-focus-ring)" } as React.CSSProperties} {...props}>
    {mounted ? <ReactCrop crop={crop} onChange={(_, percent) => setCrop(percent)} aspect={aspect} minWidth={20} aria-label={`Crop ${alt}`} className="max-w-full"><img src={src} alt={alt} width={512} className="block h-auto max-h-80 max-w-full" /></ReactCrop> : <img src={src} alt={alt} width={512} className="block h-auto max-h-80 max-w-full" />}
    <div className="mt-3 flex justify-end gap-2"><button type="button" onClick={() => setCrop(initialCrop)} className="rounded-md border border-border px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">Reset</button><button type="button" onClick={() => onApply(crop)} className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">Apply crop</button></div>
  </div>;
}

export { ImageCrop };
export type { ImageCropProps };
