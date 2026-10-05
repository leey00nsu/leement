"use client";
import { DirectionProvider, useDirection } from "../../../registry/ui/direction";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../registry/ui/select";
import { useState, useId } from "react";
import { Button } from "../../../registry/ui/button";
function DirectionContent() { const direction=useDirection(); const id=useId(); return <div dir={direction} className="space-y-2"><label htmlFor={id} className="block text-sm">Language ({direction})</label><Select defaultValue="ar"><SelectTrigger id={id} className="w-56"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="ar">العربية</SelectItem><SelectItem value="en">English</SelectItem><SelectItem value="ko">한국어</SelectItem></SelectContent></Select></div>; }
export default function DirectionExample() { const [direction,setDirection]=useState<"ltr"|"rtl">("rtl"); return <div className="space-y-4"><Button variant="outline" onClick={()=>setDirection(direction==='rtl'?'ltr':'rtl')}>Switch direction</Button><DirectionProvider direction={direction}><DirectionContent /></DirectionProvider></div>; }
