import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";
import { Card, CardAction, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Switch } from "./switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

afterEach(cleanup);

test("shared sizes and semantic form/card parts render", () => {
  render(<>
    <Button size="xs">Small action</Button>
    <Label htmlFor="name">Name</Label><Input id="name" />
    <Card size="sm"><CardHeader><CardTitle>Account</CardTitle><CardAction><Button>Manage</Button></CardAction></CardHeader></Card>
  </>);
  expect(screen.getByRole("button", { name: "Small action" }).className).toContain("h-8");
  expect(screen.getByRole("textbox", { name: "Name" })).toBeTruthy();
  expect(screen.getByRole("heading", { name: "Account" })).toBeTruthy();
  expect(screen.getByRole("button", { name: "Manage" })).toBeTruthy();
});

test("switch toggles with keyboard and disabled state blocks changes", async () => {
  const user = userEvent.setup();
  render(<><Label htmlFor="mail">Email</Label><Switch id="mail" /><Switch aria-label="Locked" disabled /></>);
  const enabled = screen.getByRole("switch", { name: "Email" });
  const disabled = screen.getByRole("switch", { name: "Locked" });
  enabled.focus();
  await user.keyboard(" ");
  expect(enabled.getAttribute("aria-checked")).toBe("true");
  expect(disabled.getAttribute("aria-disabled")).toBe("true");
  await user.click(disabled);
  expect(disabled.getAttribute("aria-checked")).toBe("false");
});

test("tabs expose panel relationship and arrow-key navigation", async () => {
  const user = userEvent.setup();
  render(<Tabs defaultValue="first"><TabsList><TabsTrigger value="first">First</TabsTrigger><TabsTrigger value="second">Second</TabsTrigger></TabsList><TabsContent value="first">First panel</TabsContent><TabsContent value="second">Second panel</TabsContent></Tabs>);
  const first = screen.getByRole("tab", { name: "First" });
  const second = screen.getByRole("tab", { name: "Second" });
  first.focus();
  await user.keyboard("{ArrowRight}");
  expect(document.activeElement).toBe(second);
  await user.keyboard("{Enter}");
  expect(second.getAttribute("aria-selected")).toBe("true");
  expect(screen.getByRole("tabpanel", { name: "Second" })).toBeTruthy();
});

test("select opens from the keyboard and exposes options", async () => {
  const user = userEvent.setup();
  render(<><Label htmlFor="role">Role</Label><Select defaultValue="viewer" items={{ viewer: "Viewer", editor: "Editor" }}><SelectTrigger id="role"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="viewer">Viewer</SelectItem><SelectItem value="editor">Editor</SelectItem></SelectContent></Select></>);
  const trigger = screen.getByRole("combobox", { name: "Role" });
  trigger.focus();
  await user.keyboard("{ArrowDown}");
  await waitFor(() => expect(screen.getByRole("option", { name: "Editor" })).toBeTruthy());
  await user.click(screen.getByRole("option", { name: "Editor" }));
  expect(trigger.textContent).toContain("Editor");
  expect(document.activeElement).toBe(trigger);
});
