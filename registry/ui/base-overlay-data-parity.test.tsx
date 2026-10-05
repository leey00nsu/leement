import * as React from "react";
import { afterEach, expect, test, vi } from "vitest";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Calendar } from "./calendar";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "./alert-dialog";
import { Button } from "./button";
import { Toaster, createToastManager } from "./toast";
import { BreadcrumbLink } from "./breadcrumb";

afterEach(cleanup);
const date = (day: number) => new Date(2026, 8, day);

test("DayPicker multiple selection skips disabled dates and exposes a controlled selection", async () => {
 const user = userEvent.setup();
 const changed = vi.fn();
 function Demo() { const [selected, setSelected] = React.useState<Date[]>([date(14)]); return <Calendar mode="multiple" defaultMonth={date(1)} selected={selected} onSelect={next => { setSelected(next ?? []); changed(next); }} disabled={[date(15)]} />; }
 render(<Demo />);
 const first = screen.getByRole("button", { name: /September 14th, 2026/ });
 first.focus(); await user.keyboard("{ArrowRight}{Enter}");
 expect(changed).toHaveBeenCalled();
 expect(changed.mock.lastCall?.[0].map((value: Date) => value.getDate())).toEqual([14, 16]);
 expect(screen.getByRole("button", { name: /September 15th, 2026/ }).hasAttribute("disabled")).toBe(true);
});

test("caption month selection uses Leement Select and changes the calendar month", async () => {
 const user = userEvent.setup();
 render(<Calendar mode="single" defaultMonth={date(1)} captionLayout="dropdown" startMonth={new Date(2026,0)} endMonth={new Date(2026,11)} />);
 const trigger = screen.getByRole("combobox", { name: /month/i });
 await user.click(trigger); await user.click(await screen.findByRole("option", { name: "Oct", exact: true }));
 await waitFor(() => expect(screen.getByRole("combobox", { name: /month/i }).textContent).toContain("Oct"));
 expect(screen.getByRole("button", { name: /October 14th, 2026/ })).toBeTruthy();
 expect(document.querySelector('select:not([aria-hidden="true"])')).toBeNull();
});

test("AlertDialog media and loading action preserve cancel focus and prevent premature closing", async () => {
 const user = userEvent.setup(); const save = vi.fn();
 render(<AlertDialog><AlertDialogTrigger render={<Button />}>Delete project</AlertDialogTrigger><AlertDialogContent size="sm"><AlertDialogHeader><AlertDialogMedia>!</AlertDialogMedia><AlertDialogTitle>Confirm deletion</AlertDialogTitle><AlertDialogDescription>Delete the project?</AlertDialogDescription></AlertDialogHeader><AlertDialogAction loading onClick={save}>Delete</AlertDialogAction><AlertDialogCancel>Cancel</AlertDialogCancel></AlertDialogContent></AlertDialog>);
 const trigger = screen.getByRole("button", { name: "Delete project" }); await user.click(trigger);
 expect(screen.getByRole("alertdialog", { name: "Confirm deletion" })).toBeTruthy();
 const action = screen.getByRole("button", { name: "Delete" }); expect(action.hasAttribute("disabled")).toBe(true); await user.click(action); expect(save).not.toHaveBeenCalled();
 await user.click(screen.getByRole("button", { name: "Cancel" })); await waitFor(() => expect(screen.queryByRole("alertdialog")).toBeNull()); await waitFor(() => expect(document.activeElement).toBe(trigger));
});

test("toast manager updates one notification through promise completion and executes an action", async () => {
 const user = userEvent.setup(); const manager = createToastManager(); const action = vi.fn();
 render(<Toaster toastManager={manager} timeout={0} />);
 let id = ""; act(() => { id = manager.add({ title: "Ready", actionProps: { children: "Undo", onClick: action } }); });
 await user.click(await screen.findByRole("button", { name: "Undo" })); expect(action).toHaveBeenCalledOnce();
 act(() => manager.update(id, { title: "Updated" })); expect(screen.queryByText("Ready")).toBeNull(); expect(screen.getByText("Updated")).toBeTruthy();
 act(() => manager.close(id)); await waitFor(() => expect(screen.queryByText("Updated")).toBeNull());
 let resolve: (value: string) => void = () => {};
 const pending = new Promise<string>(next => { resolve = next; });
 let completion: Promise<string>;
 act(() => { completion = manager.promise(pending, { loading: "Uploading", success: value => value, error: "Failed" }); });
 expect(await screen.findByText("Uploading")).toBeTruthy();
 await act(async () => { resolve("Uploaded"); await completion; });
 expect(await screen.findByText("Uploaded")).toBeTruthy(); expect(screen.queryByText("Uploading")).toBeNull();
});

test("Breadcrumb render and legacy asChild own one native link and forward refs", () => {
 const ref = React.createRef<HTMLElement>();
 render(<><BreadcrumbLink render={<a href="/project" />} ref={ref}>Project</BreadcrumbLink><BreadcrumbLink asChild><a href="/docs">Docs</a></BreadcrumbLink></>);
 expect(screen.getAllByRole("link")).toHaveLength(2); expect(ref.current).toBe(screen.getByRole("link", { name: "Project" })); expect(screen.getByRole("link", { name: "Docs" }).getAttribute("href")).toBe("/docs");
});
