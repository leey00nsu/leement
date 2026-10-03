"use client";
import { useState } from "react";
import { Calendar, type DateRange } from "../../../registry/ui/calendar";
export default function Example() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 9, 5),
  });
  return (
    <div className="w-full max-w-md space-y-4">
      <Calendar
        mode="range"
        range={range}
        onRangeChange={setRange}
        locale="ko-KR"
        startDay={1}
        min={new Date(2026, 9, 1)}
        max={new Date(2026, 9, 31)}
        disabled={(date) => date.getDay() === 0 || date.getDate() === 15}
      />
      <p className="text-sm text-muted-foreground">
        Sundays and October 15 are unavailable. Ranges cannot cross them.
      </p>
      <p role="status" className="text-sm">
        {range
          ? `${range.from.toLocaleDateString("ko-KR")} → ${range.to?.toLocaleDateString("ko-KR") ?? "Choose an end date"}`
          : "Choose a start date"}
      </p>
    </div>
  );
}
