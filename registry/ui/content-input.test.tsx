import * as React from "react";
import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Attachment, AttachmentTitle, AttachmentTrigger, AttachmentActions, AttachmentAction } from "./attachment";
import { Bubble, BubbleContent, BubbleReactions } from "./bubble";
import { DirectionProvider, useDirection } from "./direction";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./input-otp";
import { Item, ItemContent, ItemTitle } from "./item";
import { Marker, MarkerContent } from "./marker";

Object.defineProperty(document, "elementFromPoint", { configurable: true, value: () => null });
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

test("attachment actions are separately named and disabled actions do not activate the file trigger", async () => {
  const user = userEvent.setup();
  const open = vi.fn();
  const remove = vi.fn();
  const { container } = render(<Attachment state="error"><AttachmentTitle>Brief.pdf</AttachmentTitle><AttachmentTrigger aria-label="Open Brief.pdf" onClick={open} /><AttachmentActions><AttachmentAction aria-label="Remove Brief.pdf" disabled onClick={remove}>Remove</AttachmentAction></AttachmentActions></Attachment>);
  screen.getByRole("button", { name: "Open Brief.pdf" }).focus();
  await user.keyboard("{Enter}");
  expect(open).toHaveBeenCalledTimes(1);
  await user.click(screen.getByRole("button", { name: "Remove Brief.pdf" }));
  expect(remove).not.toHaveBeenCalled();
  expect(open).toHaveBeenCalledTimes(1);
  expect(container.querySelector("[data-slot=attachment]")?.getAttribute("data-state")).toBe("error");
});

test("composed content preserves link semantics, consumer refs and event handlers", async () => {
  const user = userEvent.setup();
  const ref = React.createRef<HTMLDivElement>();
  const click = vi.fn((event: React.MouseEvent) => event.preventDefault());
  render(<><Item ref={ref} render={<a href="/files" />}><ItemContent><ItemTitle>Files</ItemTitle></ItemContent></Item><Marker render={<a href="/activity" />}><MarkerContent>Activity</MarkerContent></Marker><Bubble variant="outline" align="end"><BubbleContent render={<button type="button" onClick={click} />}>Reply</BubbleContent><BubbleReactions>1 reaction</BubbleReactions></Bubble></>);
  expect(screen.getByRole("link", { name: "Files" }).getAttribute("href")).toBe("/files");
  expect(ref.current?.tagName).toBe("A");
  expect(screen.getByRole("link", { name: "Activity" }).getAttribute("href")).toBe("/activity");
  screen.getByRole("button", { name: "Reply" }).focus();
  await user.keyboard(" ");
  expect(click).toHaveBeenCalledTimes(1);
});

test("direction context is scoped and reacts to a controlled direction change", () => {
  function ReadDirection() { return <span data-testid="direction">{useDirection()}</span>; }
  const { rerender } = render(<DirectionProvider direction="rtl"><ReadDirection /></DirectionProvider>);
  expect(screen.getByTestId("direction").textContent).toBe("rtl");
  rerender(<DirectionProvider direction="ltr"><ReadDirection /></DirectionProvider>);
  expect(screen.getByTestId("direction").textContent).toBe("ltr");
});

test("OTP remains one labelled input with controlled typing, completion and a native form value", async () => {
  vi.stubGlobal("ResizeObserver", class { observe() {} disconnect() {} unobserve() {} });
  vi.spyOn(document, "elementFromPoint").mockReturnValue(null);
  const user = userEvent.setup();
  const completed = vi.fn();
  function Code() {
    const [value, setValue] = React.useState("");
    return <form><label htmlFor="code-test">Verification code</label><InputOTP id="code-test" name="code" maxLength={4} pattern={REGEXP_ONLY_DIGITS} value={value} onChange={setValue} onComplete={completed}><InputOTPGroup>{[0, 1, 2, 3].map(index => <InputOTPSlot key={index} index={index} />)}</InputOTPGroup></InputOTP></form>;
  }
  try {
    const { container } = render(<Code />);
    const input = screen.getByRole("textbox", { name: "Verification code" });
    await user.type(input, "12x34");
    await waitFor(() => expect((input as HTMLInputElement).value).toBe("1234"));
    expect(completed).toHaveBeenCalledWith("1234");
    expect(container.querySelectorAll("input")).toHaveLength(1);
    expect(new FormData(container.querySelector("form")!).get("code")).toBe("1234");
    await user.keyboard("{Backspace}");
    expect((input as HTMLInputElement).value).toBe("123");
  } finally { vi.unstubAllGlobals(); }
});

test("a disabled OTP cannot be edited or submitted", async () => {
  vi.stubGlobal("ResizeObserver", class { observe() {} disconnect() {} unobserve() {} });
  vi.spyOn(document, "elementFromPoint").mockReturnValue(null);
  try {
    const user = userEvent.setup();
    const changed = vi.fn();
    const { container } = render(<form><InputOTP aria-label="Unavailable code" name="code" maxLength={2} value="12" disabled onChange={changed}><InputOTPGroup><InputOTPSlot index={0} /><InputOTPSlot index={1} /></InputOTPGroup></InputOTP></form>);
    await user.type(screen.getByRole("textbox", { name: "Unavailable code" }), "3");
    expect(changed).not.toHaveBeenCalled();
    expect(new FormData(container.querySelector("form")!).has("code")).toBe(false);
  } finally { vi.unstubAllGlobals(); }
});
