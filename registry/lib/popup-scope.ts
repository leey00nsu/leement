"use client";

import { createContext } from "react";

// Keep Base UI portals inside a containing Radix focus scope. No global provider.
export const PopupContainerContext = createContext<HTMLElement | null>(null);
