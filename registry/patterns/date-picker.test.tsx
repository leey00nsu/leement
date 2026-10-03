import * as React from "react";
import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Calendar } from "../ui/calendar";
import { DatePicker } from "./date-picker";
afterEach(cleanup);
const date=(day:number)=>new Date(2026,8,day,12);
const day=(value:number)=>new RegExp(`September ${value}, 2026`);
test("legacy single Calendar keeps schedule events and skips unavailable dates with arrow keys", async () => {
 const user=userEvent.setup();const changed=vi.fn();
 render(<Calendar defaultValue={date(14)} onValueChange={changed} min={date(10)} max={date(20)} disabled={d=>d.getDate()===15} events={[{id:"review",title:"Review meeting",startAt:date(14)}]} />);
 expect(screen.getAllByText("Review meeting").length).toBeGreaterThan(0);
 const start=screen.getByRole("button",{name:day(14)});start.focus();await user.keyboard("{ArrowRight}{Enter}");
 expect(changed).toHaveBeenCalledWith(date(16));expect(document.activeElement).toBe(screen.getByRole("button",{name:day(16)}));
 expect(screen.getByRole("button",{name:day(9)}).hasAttribute("disabled")).toBe(true);
 await user.click(screen.getByRole("button",{name:day(9)}));expect(changed).toHaveBeenCalledTimes(1);
});
test("range selection normalizes reverse order and marks the whole range", async () => {
 const user=userEvent.setup();const changed=vi.fn();
 render(<Calendar mode="range" defaultRange={{from:date(14)}} onRangeChange={changed} min={date(1)} max={date(30)} />);
 await user.click(screen.getByRole("button",{name:day(10)}));expect(changed).toHaveBeenLastCalledWith({from:date(10),to:date(14)});
 expect(screen.getByRole("button",{name:day(12)}).parentElement?.getAttribute("aria-selected")).toBe("true");
 await user.click(screen.getByRole("button",{name:day(20)}));expect(changed).toHaveBeenLastCalledWith({from:date(20)});
});
test("range cannot span excluded dates and bounded months cannot navigate past limits", async () => {
 const user=userEvent.setup();const changed=vi.fn();
 render(<Calendar mode="range" defaultRange={{from:date(10)}} onRangeChange={changed} min={date(1)} max={date(30)} disabled={d=>d.getDate()===12} />);
 await user.click(screen.getByRole("button",{name:day(14)}));expect(changed).not.toHaveBeenCalled();expect(screen.getByRole("status").textContent).toContain("unavailable dates");
 expect(screen.getByRole("button",{name:"Previous month"}).hasAttribute("disabled")).toBe(true);expect(screen.getByRole("button",{name:"Next month"}).hasAttribute("disabled")).toBe(true);
});
test("single DatePicker opens at selected date, selects with keyboard and restores focus on select and Escape", async () => {
 const user=userEvent.setup();const changed=vi.fn();
 render(<DatePicker label="Review" defaultValue={date(14)} onValueChange={changed} min={date(10)} max={date(20)} disabledDate={d=>d.getDate()===15} />);
 const trigger=screen.getByRole("button",{name:/Review:/});trigger.focus();await user.keyboard("{Enter}");
 await screen.findByRole("dialog",{name:"Review"});
 await waitFor(()=>expect(document.activeElement).toBe(screen.getByRole("button",{name:day(14)})));
 await user.keyboard("{ArrowRight}{Enter}");expect(changed).toHaveBeenCalledWith(date(16));await waitFor(()=>expect(screen.queryByRole("dialog")).toBeNull());await waitFor(()=>expect(document.activeElement).toBe(trigger));
 await user.keyboard("{Enter}");await screen.findByRole("dialog");await user.keyboard("{Escape}");await waitFor(()=>expect(screen.queryByRole("dialog")).toBeNull());await waitFor(()=>expect(document.activeElement).toBe(trigger));
});
test("range DatePicker stays open until complete and disabled trigger cannot open", async () => {
 const user=userEvent.setup();const changed=vi.fn();
 render(<><DatePicker mode="range" label="Period" defaultRange={{from:date(14),to:date(17)}} onRangeChange={changed} /><DatePicker label="Locked" disabled /></>);
 const trigger=screen.getByRole("button",{name:/Period:/});trigger.focus();await user.keyboard("{Enter}");await screen.findByRole("dialog");
 await user.click(screen.getByRole("button",{name:day(20)}));expect(changed).toHaveBeenLastCalledWith({from:date(20)});expect(screen.getByRole("dialog")).toBeTruthy();
 await user.click(screen.getByRole("button",{name:day(18)}));expect(changed).toHaveBeenLastCalledWith({from:date(18),to:date(20)});await waitFor(()=>expect(screen.queryByRole("dialog")).toBeNull());await waitFor(()=>expect(document.activeElement).toBe(trigger));
 await user.click(screen.getByRole("button",{name:/Locked:/}));expect(screen.queryByRole("dialog")).toBeNull();
});
