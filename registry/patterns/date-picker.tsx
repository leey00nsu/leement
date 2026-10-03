"use client";
import { useState, useRef, type ComponentProps } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar, type CalendarProps, type DateRange } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent, PopoverTitle } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type DatePickerCommonProps = {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  min?: Date;
  max?: Date;
  disabledDate?: (date: Date) => boolean;
  locale?: string;
  startDay?: 0 | 1;
  className?: string;
  id?: string;
} & Pick<ComponentProps<"button">, "aria-describedby" | "aria-invalid">;
type DatePickerProps = DatePickerCommonProps & (
  { mode?: "single"; value?: Date; defaultValue?: Date; onValueChange?: (date: Date) => void } |
  { mode: "range"; range?: DateRange; defaultRange?: DateRange; onRangeChange?: (range: DateRange) => void }
);
function DatePicker(props: DatePickerProps) {
  const { label = "Choose date", placeholder = props.mode === "range" ? "Pick a date range" : "Pick a date", disabled, min, max, disabledDate, locale = "en-US", startDay, className, id } = props;
  const calendarRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Date | undefined>(props.mode !== "range" ? props.defaultValue : undefined);
  const [internalRange, setInternalRange] = useState<DateRange | undefined>(props.mode === "range" ? props.defaultRange : undefined);
  const value = props.mode !== "range" ? ("value" in props ? props.value : internalValue) : undefined;
  const range = props.mode === "range" ? ("range" in props ? props.range : internalRange) : undefined;
  const format = (date: Date) => new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(date);
  const text = props.mode === "range" ? range ? `${format(range.from)} – ${range.to ? format(range.to) : "…"}` : placeholder : value ? format(value) : placeholder;
  const calendarProps: CalendarProps = props.mode === "range" ? {
    mode: "range", range, onRangeChange: next => { if (!("range" in props)) setInternalRange(next); props.onRangeChange?.(next); if (next.to) setOpen(false); },
  } : {
    value, onValueChange: next => { if (!("value" in props)) setInternalValue(next); props.onValueChange?.(next); setOpen(false); },
  };
  return <Popover open={open && !disabled} onOpenChange={setOpen}>
    <PopoverTrigger render={<Button type="button" variant="outline" />} id={id} disabled={disabled} aria-label={`${label}: ${text}`} aria-describedby={props["aria-describedby"]} aria-invalid={props["aria-invalid"]} className={cn("max-w-full justify-start", className)}><CalendarIcon aria-hidden="true" /><span className={cn("truncate", !value && !range && "text-muted-foreground")}>{text}</span></PopoverTrigger>
    <PopoverContent align="start" className="max-w-[calc(100vw-2rem)] p-0" initialFocus={() => calendarRef.current?.querySelector<HTMLButtonElement>('button[tabindex="0"]') ?? null}>
      <PopoverTitle className="sr-only">{label}</PopoverTitle>
      <Calendar ref={calendarRef} {...calendarProps} data-slot="date-picker-calendar" variant="date" className="border-0" min={min} max={max} disabled={disabledDate} locale={locale} startDay={startDay} />
    </PopoverContent>
  </Popover>;
}
export { DatePicker };
export type { DatePickerProps };
