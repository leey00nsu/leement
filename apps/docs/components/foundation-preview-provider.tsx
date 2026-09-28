"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  emptyPreview,
  parsePreview,
  previewChangeCount,
  previewCss,
  PREVIEW_STORAGE_KEY,
  validPreviewValue,
  withPreviewValue,
  type FoundationMode,
  type PreviewOverrides,
} from "../lib/foundation-preview";

type PreviewContextValue = {
  preview: PreviewOverrides;
  loaded: boolean;
  setValue: (mode: FoundationMode | "shared", key: string, value: string) => boolean;
  reset: () => void;
};

const PreviewContext = createContext<PreviewContextValue | null>(null);

export function FoundationPreviewProvider({ children }: { children: React.ReactNode }) {
  const [preview, setPreview] = useState<PreviewOverrides>(emptyPreview);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      setPreview(parsePreview(window.localStorage.getItem(PREVIEW_STORAGE_KEY)));
    } catch {
      setPreview(emptyPreview());
    }
    setLoaded(true);

    const sync = (event: StorageEvent) => {
      if (event.key === PREVIEW_STORAGE_KEY) setPreview(parsePreview(event.newValue));
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    let style = document.getElementById("leement-foundation-preview") as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = "leement-foundation-preview";
      document.head.appendChild(style);
    }
    style.textContent = previewCss(preview);
    try {
      if (previewChangeCount(preview)) window.localStorage.setItem(PREVIEW_STORAGE_KEY, JSON.stringify(preview));
      else window.localStorage.removeItem(PREVIEW_STORAGE_KEY);
    } catch {
      // Private browsing may disable storage; the current page still previews changes.
    }
  }, [loaded, preview]);

  const setValue = useCallback((mode: FoundationMode | "shared", key: string, value: string) => {
    if (!validPreviewValue(mode, key, value)) return false;
    setPreview((current) => withPreviewValue(current, mode, key, value) ?? current);
    return true;
  }, []);

  const reset = useCallback(() => setPreview(emptyPreview()), []);

  return <PreviewContext.Provider value={{ preview, loaded, setValue, reset }}>{children}</PreviewContext.Provider>;
}

export function useFoundationPreview(): PreviewContextValue {
  const context = useContext(PreviewContext);
  if (!context) throw new Error("FoundationPreviewProvider is missing");
  return context;
}
