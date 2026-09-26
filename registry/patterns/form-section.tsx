import * as React from "react";
import { cn } from "@/lib/utils";
function FormSection({ className, title, description, children, ...props }: React.ComponentProps<"section"> & { title: string; description?: string }) { return <section className={cn("grid gap-6 border-b border-border py-6 md:grid-cols-[minmax(0,14rem)_1fr]", className)} {...props}><div><h2 className="text-sm font-semibold">{title}</h2>{description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}</div><div className="min-w-0 space-y-4">{children}</div></section>; }
export { FormSection };
