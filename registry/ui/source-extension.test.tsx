import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { Progress, ProgressLabel, ProgressValue } from "./progress";
import { Slider } from "./slider";
import { Avatar, AvatarFallback } from "./avatar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "./alert-dialog";
import { PageSkeleton } from "../patterns/page-skeleton";
import { FilterGroup, FilterToggle, FilterToolbar } from "../patterns/filter-toolbar";

afterEach(cleanup);

test("collapsible opens from keyboard and exposes state", async () => {
  const user = userEvent.setup();
  render(<Collapsible><CollapsibleTrigger>Details</CollapsibleTrigger><CollapsibleContent>More information</CollapsibleContent></Collapsible>);
  const trigger = screen.getByRole("button", { name: "Details" });
  trigger.focus();
  await user.keyboard("{Enter}");
  expect(trigger.getAttribute("aria-expanded")).toBe("true");
  expect(screen.getByText("More information")).toBeTruthy();
});

test("progress and slider expose numeric state and keyboard changes", async () => {
  const user = userEvent.setup();
  const { container } = render(<><Progress value={64}><ProgressLabel>Upload</ProgressLabel><ProgressValue /></Progress><Slider aria-label="Volume" defaultValue={[35]} /></>);
  expect(screen.getByRole("progressbar", { name: "Upload" }).getAttribute("aria-valuenow")).toBe("64");
  // Base UI keeps the thumb hidden in jsdom until it can measure the track.
  const slider = container.querySelector('input[type="range"]') as HTMLInputElement;
  expect(slider.getAttribute("aria-label")).toBe("Volume");
  slider.focus();
  await user.keyboard("{ArrowRight}");
  expect(Number(slider.getAttribute("aria-valuenow"))).toBeGreaterThan(35);
});

test("alert dialog labels the choice and returns focus on Escape or cancel", async () => {
  const user = userEvent.setup();
  render(<AlertDialog><AlertDialogTrigger>Delete</AlertDialogTrigger><AlertDialogContent><AlertDialogTitle>Delete item?</AlertDialogTitle><AlertDialogDescription>Cannot be undone.</AlertDialogDescription><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Confirm delete</AlertDialogAction></AlertDialogContent></AlertDialog>);
  const trigger = screen.getByRole("button", { name: "Delete" });
  await user.click(trigger);
  expect(screen.getByRole("alertdialog", { name: "Delete item?" })).toBeTruthy();
  await user.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("alertdialog")).toBeNull());
  expect(document.activeElement).toBe(trigger);
  await user.click(trigger);
  await user.click(screen.getByRole("button", { name: "Cancel" }));
  await waitFor(() => expect(screen.queryByRole("alertdialog")).toBeNull());
  expect(document.activeElement).toBe(trigger);
});

test("avatar fallback and page skeleton give content an accessible name", () => {
  render(<><Avatar><AvatarFallback>LM</AvatarFallback></Avatar><PageSkeleton label="Loading members" rows={2} /></>);
  expect(screen.getByText("LM")).toBeTruthy();
  expect(screen.getByRole("status", { name: "Loading members" }).getAttribute("aria-busy")).toBe("true");
});

test("filter toggles communicate pressed state", async () => {
  const user = userEvent.setup();
  render(<FilterToolbar><FilterGroup><FilterToggle pressed>Active</FilterToggle><FilterToggle>All</FilterToggle></FilterGroup></FilterToolbar>);
  expect(screen.getByRole("button", { name: "Active" }).getAttribute("aria-pressed")).toBe("true");
  const all = screen.getByRole("button", { name: "All" });
  await user.click(all);
  expect(all.getAttribute("aria-pressed")).toBe("false");
});
