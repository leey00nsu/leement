"use client";

import { createContext } from "react";

// Keep nested portals inside their containing modal subtree. No global provider.
export const PopupContainerContext = createContext<HTMLElement | null>(null);
