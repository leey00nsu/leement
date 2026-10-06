"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker, getDefaultClassNames, type DayButton, type Locale, type DropdownProps } from "react-day-picker";
import { Button, buttonVariants } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { animate as animateStyles } from "motion/mini";
import { motionSeconds, motionEasing } from "@/lib/leement-motion";

type DateRange = { from: Date; to?: Date };
type CalendarBaseProps = Omit<React.ComponentProps<"div">, "defaultValue" | "onSelect"> & {
  min?: Date;
  max?: Date;
  disabled?: boolean | ((date: Date) => boolean);
  locale?: string;
  startDay?: 0 | 1;
  variant?: "schedule" | "date";
  events?: Array<{ id: string; title: string; startAt: Date; endAt?: Date }>;
};
type CalendarProps = CalendarBaseProps & (
  { mode?: "single"; value?: Date; defaultValue?: Date; onValueChange?: (date: Date) => void } |
  { mode: "range"; range?: DateRange; defaultRange?: DateRange; onRangeChange?: (range: DateRange) => void }
);

function dateNumber(date: Date) { return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate(); }
function sameDay(a: Date | undefined, b: Date) { return a ? dateNumber(a) === dateNumber(b) : false; }
function shift(date: Date, days: number) { return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days, 12); }

function LegacyCalendar(props: CalendarProps) {
  const { className, min, max, disabled: disabledProp, locale = "en-US", startDay = 0, variant = props.mode === "range" ? "date" : "schedule", events = [], ...rest } = props;
  // Selection props belong to Calendar rather than the DOM container.
  const containerProps = Object.fromEntries(Object.entries(rest).filter(([key]) => !["mode", "value", "defaultValue", "onValueChange", "range", "defaultRange", "onRangeChange"].includes(key)));
  const today = React.useMemo(() => new Date(), []);
  const initialSingle = props.mode !== "range" ? props.value ?? props.defaultValue : undefined;
  const [internalValue, setInternalValue] = React.useState<Date | undefined>(initialSingle);
  const [internalRange, setInternalRange] = React.useState<DateRange | undefined>(props.mode === "range" ? props.range ?? props.defaultRange : undefined);
  const selected = props.mode !== "range" ? ("value" in props ? props.value : internalValue) : undefined;
  const range = props.mode === "range" ? ("range" in props ? props.range : internalRange) : undefined;
  const anchor = selected ?? range?.from ?? (min && dateNumber(today) < dateNumber(min) ? min : max && dateNumber(today) > dateNumber(max) ? max : today);
  const [view, setView] = React.useState(() => new Date(anchor.getFullYear(), anchor.getMonth(), 1, 12));
  const [focused, setFocused] = React.useState(anchor);
  const [message, setMessage] = React.useState("");
  const pendingFocus = React.useRef(false);
  const dayRefs = React.useRef(new Map<number, HTMLButtonElement>());
  const monthLabel = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(view);
  const dateLabel = new Intl.DateTimeFormat(locale, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const firstOffset = (new Date(view.getFullYear(), view.getMonth(), 1).getDay() - startDay + 7) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: Math.ceil((firstOffset + daysInMonth) / 7) * 7 }, (_, index) => index - firstOffset + 1);
  const inBounds = (day: Date) => (!min || dateNumber(day) >= dateNumber(min)) && (!max || dateNumber(day) <= dateNumber(max));
  const inRange = (day: Date) => inBounds(day) && disabledProp !== true && !(typeof disabledProp === "function" && disabledProp(day));
  const firstEnabled = cells.map(day => new Date(view.getFullYear(), view.getMonth(), day, 12)).find(day => day.getMonth() === view.getMonth() && inRange(day));
  const tabDate = focused.getMonth() === view.getMonth() && focused.getFullYear() === view.getFullYear() && inRange(focused) ? focused : firstEnabled;
  const monthAvailable = (amount: number) => disabledProp !== true && (!min || dateNumber(new Date(view.getFullYear(), view.getMonth() + amount + 1, 0)) >= dateNumber(min)) && (!max || dateNumber(new Date(view.getFullYear(), view.getMonth() + amount, 1)) <= dateNumber(max));
  const eventsOn = (day: Date) => events.filter((event) => dateNumber(event.startAt) <= dateNumber(day) && dateNumber(event.endAt ?? event.startAt) >= dateNumber(day));

  React.useEffect(() => {
    if (pendingFocus.current) {
      dayRefs.current.get(dateNumber(focused))?.focus();
      pendingFocus.current = false;
    }
  }, [focused, view]);

  function moveFocus(next: Date, step: number) {
    // Skip unavailable dates without escaping configured bounds or looping forever.
    for (let count = 0; count < 366; count++, next = shift(next, step)) {
      if (!inBounds(next)) return;
      if (!inRange(next)) continue;
      pendingFocus.current = true;
      setFocused(next);
      if (next.getMonth() !== view.getMonth() || next.getFullYear() !== view.getFullYear()) setView(new Date(next.getFullYear(), next.getMonth(), 1, 12));
      return;
    }
  }
  function select(next: Date) {
    if (!inRange(next)) return;
    setFocused(next); setMessage("");
    if (props.mode === "range") {
      let nextRange: DateRange = { from: next };
      if (range?.from && !range.to) {
        nextRange = dateNumber(next) < dateNumber(range.from) ? { from: next, to: range.from } : { from: range.from, to: next };
        for (let day = nextRange.from; dateNumber(day) <= dateNumber(nextRange.to!); day = shift(day, 1)) {
          if (!inRange(day)) { setMessage("Selected range includes unavailable dates. Choose another end date."); return; }
        }
      }
      if (!("range" in props)) setInternalRange(nextRange);
      props.onRangeChange?.(nextRange);
    } else {
      if (!("value" in props)) setInternalValue(next);
      props.onValueChange?.(next);
    }
  }
  function changeMonth(amount: number) {
    if (!monthAvailable(amount)) return;
    const nextView = new Date(view.getFullYear(), view.getMonth() + amount, 1, 12);
    setView(nextView);
    const nextDay = new Date(nextView.getFullYear(), nextView.getMonth(), Math.min(focused.getDate(), new Date(nextView.getFullYear(), nextView.getMonth() + 1, 0).getDate()), 12);
    setFocused(nextDay);
  }

  const dateOnly = variant === "date";
  return <div data-slot="calendar" data-variant={variant} className={cn("rounded-xl border border-border bg-card text-card-foreground", dateOnly ? "w-[302px] max-w-full p-3" : "w-full", className)} {...containerProps}>
    <div className={cn("flex items-center justify-between gap-3", !dateOnly && "border-b border-border px-3 py-2")}>
      <button type="button" aria-label="Previous month" disabled={!monthAvailable(-1)} onClick={() => changeMonth(-1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronLeft className="size-4" /></button>
      <div aria-live="polite" className="text-sm font-semibold">{monthLabel}</div>
      <button type="button" aria-label="Next month" disabled={!monthAvailable(1)} onClick={() => changeMonth(1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronRight className="size-4" /></button>
    </div>
    <div className={cn(!dateOnly && "overflow-x-auto")}>
    <div role="grid" aria-label={`Choose date, ${monthLabel}`} className={cn(!dateOnly && "min-w-[560px]")}>
      <div role="row" className={cn("grid grid-cols-7", dateOnly && "gap-1")}>{Array.from({ length: 7 }, (_, index) => <div key={`weekday-${index}`} role="columnheader" className={cn("text-xs text-muted-foreground", dateOnly ? "flex h-9 min-w-0 items-center justify-center" : "border-b border-r border-border px-2 py-2 last:border-r-0")}>{new Intl.DateTimeFormat(locale, { weekday: "short" }).format(new Date(2024, 0, 7 + ((index + startDay) % 7)))}</div>)}</div>
      {Array.from({ length: cells.length / 7 }, (_, weekIndex) => <div key={weekIndex} role="row" className={cn("grid grid-cols-7", dateOnly && "gap-1")}>{cells.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, index) => {
        if (day < 1 || day > daysInMonth) return <div key={`blank-${index}`} role="gridcell" className={cn(!dateOnly && "min-h-24 border-b border-r border-border bg-muted/30 last:border-r-0")} />;
        const current = new Date(view.getFullYear(), view.getMonth(), day, 12);
        const disabled = !inRange(current);
        const active = props.mode === "range" ? Boolean(range && dateNumber(current) >= dateNumber(range.from) && dateNumber(current) <= dateNumber(range.to ?? range.from)) : sameDay(selected, current);
        const endpoint = props.mode === "range" ? sameDay(range?.from, current) || sameDay(range?.to, current) : active;
        const dayEvents = eventsOn(current);
        const count = dayEvents.length;
        return <div key={day} role="gridcell" aria-selected={active} className={cn("min-w-0", dateOnly ? "h-9" : "min-h-24 border-b border-r border-border p-1.5 last:border-r-0", active && !dateOnly && "bg-accent/50")}>
          <button ref={(node) => { if (node) dayRefs.current.set(dateNumber(current), node); else dayRefs.current.delete(dateNumber(current)); }} type="button" aria-label={`${dateLabel.format(current)}${count ? `, ${count} events` : ""}`} aria-current={sameDay(today, current) ? "date" : undefined} disabled={disabled} tabIndex={tabDate && sameDay(tabDate, current) ? 0 : -1} onFocus={() => setFocused(current)} onClick={() => select(current)} onKeyDown={(event) => {
            const delta = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key as "ArrowLeft" | "ArrowRight" | "ArrowUp" | "ArrowDown"];
            if (delta !== undefined) { event.preventDefault(); moveFocus(shift(current, delta), delta); }
          }} className={cn("flex items-center justify-center rounded-md text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-40", dateOnly ? "h-9 w-full" : "size-8", active && "bg-accent text-accent-foreground", endpoint && "bg-primary text-primary-foreground hover:bg-primary")}>{day}</button>
          {!dateOnly && <div aria-hidden="true" className="mt-1 space-y-0.5">{dayEvents.slice(0, 2).map((event) => <p key={event.id} className="truncate rounded-sm bg-data-accent/15 px-1 py-0.5 text-[11px] leading-tight text-foreground">{event.title}</p>)}{count > 2 && <p className="px-1 text-[11px] text-muted-foreground">+{count - 2} more</p>}</div>}
        </div>;
      })}</div>)}
    </div>
    </div>
    {props.mode === "range" && <p role="status" className="mt-2 text-xs text-muted-foreground">{message || (range?.to ? `${dateLabel.format(range.from)} to ${dateLabel.format(range.to)}` : range ? "Choose an end date." : "Choose a start date.")}</p>}
    {!dateOnly && selected && events.length > 0 && <div className="px-4 py-3 text-sm"><p className="font-medium">{dateLabel.format(selected)}</p><ul className="mt-2 space-y-1 text-muted-foreground">{eventsOn(selected).map((event) => <li key={event.id}>{event.title}</li>)}{eventsOn(selected).length === 0 && <li>No events</li>}</ul></div>}
  </div>;
}

// Adapted from shadcn/ui (MIT), pinned baseline.
function DayPickerCalendar({
  ref: forwardedRef,
  animate: animateMonths = false,
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: DayPickerCalendarProps) {
  const defaultClassNames = getDefaultClassNames();
  const root = React.useRef<HTMLDivElement>(null);
  const Root = React.useCallback(({ className, rootRef, ...props }: React.ComponentProps<typeof import("react-day-picker").Root>) => {
          return (
            <div
              data-slot="calendar"
              ref={(node) => { root.current = node; if (typeof rootRef === "function") rootRef(node); else if (rootRef) rootRef.current = node; if (typeof forwardedRef === "function") forwardedRef(node); else if (forwardedRef) forwardedRef.current = node; }}
              className={cn(className)}
              {...props}
            />
          )
        } , [forwardedRef]);
  React.useEffect(() => {
    const node = root.current;
    if (!node || !animateMonths) return;
    let previous = node.querySelector(".rdp-month_caption")?.textContent;
    let control: ReturnType<typeof animateStyles> | undefined;
    const observer = new MutationObserver(() => {
      const next = node.querySelector(".rdp-month_caption")?.textContent;
      if (next === previous) return;
      previous = next; control?.cancel();
      const reduced = typeof matchMedia !== "function" || matchMedia("(prefers-reduced-motion: reduce)").matches;
      control = animateStyles(node, { opacity: [0, 1] }, { duration: reduced ? 0 : motionSeconds(node, "duration-normal"), ease: motionEasing(node) });
    });
    observer.observe(node, { childList: true, subtree: true, characterData: true });
    return () => { observer.disconnect(); control?.cancel(); };
  }, [animateMonths]);
  return (
    <DayPicker
      animate={false}
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-2 [--cell-radius:var(--lm-radius-md)] [--cell-size:clamp(1.25rem,calc((100vw-4rem)/7),2.25rem)] max-w-full group/calendar bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code ?? "en-US", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input has-focus:ring-ring/40 border has-focus:ring-3 relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label"
            ? "text-sm"
            : "h-6 pr-1 pl-1.5 flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-s-(--cell-radius)"
            : "[&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "relative isolate z-0 rounded-s-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:end-0 after:w-4 after:bg-muted",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "relative isolate z-0 rounded-e-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:start-0 after:w-4 after:bg-muted",
          defaultClassNames.range_end
        ),
        today: cn(
          "rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root,
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} aria-hidden="true" />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("size-4", className)} {...props} aria-hidden="true" />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} aria-hidden="true" />
          )
        },
        Dropdown: CalendarDropdown,
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/40 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-e-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-s-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

type DayPickerCalendarProps = React.ComponentProps<typeof DayPicker> & { buttonVariant?: React.ComponentProps<typeof Button>["variant"]; ref?: React.Ref<HTMLDivElement> };
// The caption uses the same Base UI Select as other Leement inputs.
function CalendarDropdown({ options = [], value, onChange, disabled, "aria-label": label }: DropdownProps) {
  return <Select items={options.map(option => ({ value: String(option.value), label: option.label }))} value={String(value)} disabled={disabled} onValueChange={(next) => {
    if (next == null) return;
    // DayPicker's dropdown callback reads target.value; supply a real select target.
    const target = document.createElement("select");
    target.add(new Option(next, next));
    const nativeEvent = new Event("change", { bubbles: true });
    Object.defineProperty(nativeEvent, "target", { value: target });
    onChange?.({ nativeEvent, target, currentTarget: target, bubbles: true, cancelable: false, defaultPrevented: false, eventPhase: 2, isTrusted: false, timeStamp: nativeEvent.timeStamp, type: "change", preventDefault: () => nativeEvent.preventDefault(), stopPropagation: () => nativeEvent.stopPropagation(), isDefaultPrevented: () => nativeEvent.defaultPrevented, isPropagationStopped: () => false, persist: () => {} });
  }}><SelectTrigger aria-label={label} size="sm" className="h-8 w-auto border-0 bg-transparent px-2 shadow-none"><SelectValue /></SelectTrigger><SelectContent>{options.map(option => <SelectItem key={option.value} value={String(option.value)} disabled={option.disabled}>{option.label}</SelectItem>)}</SelectContent></Select>;
}
function Calendar(props: DayPickerCalendarProps): React.JSX.Element;
function Calendar(props: CalendarProps): React.JSX.Element;
function Calendar(props: DayPickerCalendarProps | CalendarProps) {
  const legacy = ["value", "defaultValue", "onValueChange", "range", "defaultRange", "onRangeChange", "events", "variant", "min", "max", "startDay"].some(key => key in props) || typeof props.locale === "string";
  return legacy ? <LegacyCalendar {...props as CalendarProps} /> : <DayPickerCalendar {...props as DayPickerCalendarProps} />;
}
export { Calendar, CalendarDayButton };
export type { CalendarProps, DayPickerCalendarProps, DateRange };
