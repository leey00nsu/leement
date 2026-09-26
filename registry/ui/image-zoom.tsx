"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageZoomProps = Omit<React.ComponentProps<"button">, "children"> & { src: string; alt: string; caption?: string };

function ImageZoom({ src, alt, caption, className, ...props }: ImageZoomProps) {
  return <DialogPrimitive.Root><DialogPrimitive.Trigger asChild><button type="button" aria-label={`Enlarge ${alt}`} className={cn("group block overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40", className)} {...props}><img src={src} alt={alt} className="max-h-64 w-full object-cover transition-transform duration-normal group-hover:scale-[1.02] motion-reduce:transition-none" /></button></DialogPrimitive.Trigger>
    <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm" /><DialogPrimitive.Content className="fixed inset-4 z-50 flex flex-col items-center justify-center outline-none"><DialogPrimitive.Title className="sr-only">{alt}</DialogPrimitive.Title><img src={src} alt={alt} className="max-h-[85vh] max-w-full rounded-lg object-contain" /><DialogPrimitive.Description className={cn("mt-2 text-center text-sm text-foreground", !caption && "sr-only")}>{caption ?? alt}</DialogPrimitive.Description><DialogPrimitive.Close className="absolute right-2 top-2 rounded-md bg-card p-2 text-card-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring" aria-label="Close enlarged image"><X aria-hidden="true" className="size-5" /></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
}

export { ImageZoom };
export type { ImageZoomProps };
