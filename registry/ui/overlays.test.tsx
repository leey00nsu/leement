import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Button } from "./button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from "./popover";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

afterEach(cleanup);

test("dialog traps focus, announces title and returns focus after Escape", async () => {
  const user = userEvent.setup();
  render(<Dialog><DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger><DialogContent><DialogTitle>Edit profile</DialogTitle><DialogDescription>Change your display name.</DialogDescription><input aria-label="Display name" /></DialogContent></Dialog>);
  const trigger = screen.getByRole("button", { name: "Open dialog" });
  await user.click(trigger);
  expect(screen.getByRole("dialog", { name: "Edit profile" })).toBeTruthy();
  await user.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  expect(document.activeElement).toBe(trigger);
});

test("dropdown menu supports keyboard navigation and disabled items", async () => {
  const user = userEvent.setup();
  render(<DropdownMenu><DropdownMenuTrigger render={<Button />}>Actions</DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Rename</DropdownMenuItem><DropdownMenuItem disabled>Archive</DropdownMenuItem></DropdownMenuContent></DropdownMenu>);
  const trigger = screen.getByRole("button", { name: "Actions" });
  trigger.focus();
  await user.keyboard("{ArrowDown}");
  expect(screen.getByRole("menuitem", { name: "Rename" })).toBeTruthy();
  expect(screen.getByRole("menuitem", { name: "Archive" }).getAttribute("aria-disabled")).toBe("true");
  await user.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
  expect(document.activeElement).toBe(trigger);
});

test("popover closes with Escape and returns focus", async () => {
  const user = userEvent.setup();
  render(<Popover><PopoverTrigger render={<Button />}>Show details</PopoverTrigger><PopoverContent><PopoverTitle>Details</PopoverTitle><p>Context</p></PopoverContent></Popover>);
  const trigger = screen.getByRole("button", { name: "Show details" });
  await user.click(trigger);
  expect(screen.getByText("Context")).toBeTruthy();
  await user.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByText("Context")).toBeNull());
  expect(document.activeElement).toBe(trigger);
});

test("sheet is labeled and closes with Escape", async () => {
  const user = userEvent.setup();
  render(<Sheet><SheetTrigger render={<Button />}>Open sheet</SheetTrigger><SheetContent><SheetTitle>Member details</SheetTitle></SheetContent></Sheet>);
  const trigger = screen.getByRole("button", { name: "Open sheet" });
  await user.click(trigger);
  expect(screen.getByRole("dialog", { name: "Member details" })).toBeTruthy();
  expect(screen.getByRole("button", { name: "Close" })).toBeTruthy();
  await user.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  expect(document.activeElement).toBe(trigger);
});

test("tooltip can be reached from a keyboard focused trigger", async () => {
  const user = userEvent.setup();
  render(<TooltipProvider delayDuration={0}><Tooltip><TooltipTrigger asChild><Button>Help</Button></TooltipTrigger><TooltipContent>Extra context</TooltipContent></Tooltip></TooltipProvider>);
  await user.tab();
  expect(document.activeElement).toBe(screen.getByRole("button", { name: "Help" }));
  await waitFor(() => expect(screen.getByRole("tooltip")).toBeTruthy());
});

test("a nested Base UI select closes before its containing Radix dialog", async () => {
  const user = userEvent.setup();
  render(<Dialog><DialogTrigger asChild><Button>Open nested dialog</Button></DialogTrigger><DialogContent><DialogTitle>Nested form</DialogTitle><DialogDescription>Select a role.</DialogDescription><Select items={[{ value: "member", label: "Member" }]} defaultValue="member"><SelectTrigger aria-label="Nested role"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="member">Member</SelectItem></SelectContent></Select></DialogContent></Dialog>);
  await user.click(screen.getByRole("button", { name: "Open nested dialog" }));
  const trigger = screen.getByRole("combobox", { name: "Nested role" });
  await user.click(trigger);
  await waitFor(() => expect(screen.getByRole("listbox")).toBeTruthy());
  await user.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("listbox")).toBeNull());
  expect(screen.getByRole("dialog", { name: "Nested form" })).toBeTruthy();
  expect(document.activeElement).toBe(trigger);
  await user.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
});
