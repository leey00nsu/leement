"use client";
import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
function SearchField({ className, inputClassName, "aria-label": ariaLabel = "Search", ...props }: React.ComponentProps<typeof Input> & { inputClassName?: string }) { return <div className={cn("relative", className)}><Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input type="search" aria-label={ariaLabel} className={cn("pl-9", inputClassName)} {...props} /></div>; }
export { SearchField };
