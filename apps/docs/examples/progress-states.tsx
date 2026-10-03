"use client";
import { useState } from "react";
import { Progress,ProgressLabel,ProgressValue } from "../../../registry/ui/progress";
import { Button } from "../../../registry/ui/button";
export default function Example() {
 const [value,setValue]=useState(0);
 return <div className="w-full max-w-sm space-y-6"><Progress value={value}><ProgressLabel>Upload</ProgressLabel><ProgressValue /></Progress><div className="flex flex-wrap gap-2"><Button size="sm" variant="outline" onClick={()=>setValue(v=>Math.min(100,v+25))} disabled={value===100}>Advance 25%</Button><Button size="sm" variant="ghost" onClick={()=>setValue(0)}>Reset</Button></div><Progress value={null}><ProgressLabel>Preparing files</ProgressLabel></Progress><p className="text-sm text-muted-foreground">The server has not reported a total yet.</p></div>;
}
