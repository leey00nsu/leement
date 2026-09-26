import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
function EmptyState({ className, icon, title, description, action, ...props }: React.ComponentProps<"div"> & { icon?: React.ReactNode; title: string; description?: string; action?: React.ReactNode }) { return <Card className={cn("border-dashed", className)} {...props}><CardContent className="flex flex-col items-center gap-3 px-6 py-12 text-center">{icon && <div aria-hidden="true" className="text-muted-foreground">{icon}</div>}<h3 className="text-base font-semibold">{title}</h3>{description && <p className="max-w-md text-sm text-muted-foreground">{description}</p>}{action && <div className="mt-2">{action}</div>}</CardContent></Card>; }
export { EmptyState };
