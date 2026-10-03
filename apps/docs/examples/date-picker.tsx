"use client";
import { useState } from "react";
import type { DateRange } from "../../../registry/ui/calendar";
import { DatePicker } from "../../../registry/patterns/date-picker";
const min = new Date(2026,8,1,12);
const max = new Date(2026,8,30,12);
export default function DatePickerExample() {
 const [value,setValue] = useState<Date | undefined>(new Date(2026,8,14,12));
 const [range,setRange] = useState<DateRange | undefined>({from:new Date(2026,8,7,12),to:new Date(2026,8,10,12)});
 return <div className="grid gap-4"><div className="grid gap-2"><p className="text-sm font-medium">Review date</p><DatePicker label="Review date" value={value} onValueChange={setValue} min={min} max={max} disabledDate={date=>date.getDay()===0 || date.getDay()===6} /></div><div className="grid gap-2"><p className="text-sm font-medium">Project period</p><DatePicker label="Project period" mode="range" range={range} onRangeChange={setRange} min={min} max={max} /></div><DatePicker label="Unavailable date" disabled /></div>;
}
