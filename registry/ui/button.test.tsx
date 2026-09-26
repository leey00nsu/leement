import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";
import { Input } from "./input";
import { Card, CardTitle } from "./card";
afterEach(cleanup);

test("button variants preserve native behavior and visible focus rule", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<Button variant="outline" onClick={onClick}>Save</Button>);
  const button = screen.getByRole("button", { name: "Save" });
  expect(button.className).toContain("border-border");
  expect(button.className).toContain("focus-visible:ring-3");
  await user.tab();
  expect(document.activeElement).toBe(button);
  await user.keyboard("{Enter}");
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("disabled and loading buttons do not activate", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<><Button disabled onClick={onClick}>Delete</Button><Button loading onClick={onClick}>Save</Button></>);
  await user.click(screen.getByRole("button", { name: "Delete" }));
  await user.click(screen.getByRole("button", { name: "Save" }));
  expect(onClick).not.toHaveBeenCalled();
  expect(screen.getByRole("button", { name: "Save" }).getAttribute("aria-busy")).toBe("true");
});

test("input exposes invalid state and card title is a heading", () => {
  render(<><Input aria-label="Email" aria-invalid /><Card><CardTitle>Account</CardTitle></Card></>);
  expect(screen.getByRole("textbox", { name: "Email" }).getAttribute("aria-invalid")).toBe("true");
  expect(screen.getByRole("heading", { name: "Account" })).toBeTruthy();
});
