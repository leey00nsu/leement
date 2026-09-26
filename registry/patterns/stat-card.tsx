import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
function StatCard({ className, label, value, detail, ...props }: React.ComponentProps<"div"> & { label: string; value: React.ReactNode; detail?: React.ReactNode }) { return <Card className={cn("gap-0", className)} {...props}><CardHeader className="pb-2"><p className="text-sm text-muted-foreground">{label}</p></CardHeader><CardContent><p className="text-2xl font-semibold tabular-nums">{value}</p>{detail && <div className="mt-2 text-xs text-muted-foreground">{detail}</div>}</CardContent></Card>; }
export { StatCard };
