import { afterEach, expect, test, vi } from "vitest";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "./contact";
import { EventForm } from "./form";
import { Compare } from "./compare";
import { FAQ } from "./faq";
import { Download } from "./download";

afterEach(cleanup);
async function fillContact(user: ReturnType<typeof userEvent.setup>) {
  for (const [label, text] of [
    ["First name", "Alex"],
    ["Last name", "Lee"],
    ["Email", "alex@example.com"],
    ["Subject", "Question"],
    ["Message", "Hello team"],
  ])
    await user.type(screen.getByLabelText(new RegExp("^" + label)), text!);
}

test("contact validates required fields without invoking the delivery callback", async () => {
  const user = userEvent.setup();
  const submit = vi.fn();
  render(<Contact onSubmit={submit} />);
  await user.click(screen.getByRole("button", { name: "Send message" }));
  expect(submit).not.toHaveBeenCalled();
  expect(
    screen.getByLabelText(/^First name/).getAttribute("aria-invalid"),
  ).toBe("true");
  expect(
    screen.getByLabelText(/^Email/).getAttribute("aria-describedby"),
  ).toBeTruthy();
});

test("contact disables controls while submitting and resets only after callback success", async () => {
  const user = userEvent.setup();
  let finish!: () => void;
  const submit = vi.fn(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  render(<Contact onSubmit={submit} />);
  await fillContact(user);
  await user.click(screen.getByRole("button", { name: "Send message" }));
  expect(submit).toHaveBeenCalledWith({
    firstName: "Alex",
    lastName: "Lee",
    email: "alex@example.com",
    subject: "Question",
    message: "Hello team",
  });
  expect(
    screen
      .getByRole("button", { name: /Send message/ })
      .hasAttribute("disabled"),
  ).toBe(true);
  expect(
    screen
      .getByRole("form", { name: "Contact form" })
      .getAttribute("aria-busy"),
  ).toBe("true");
  await act(async () => finish());
  expect(screen.getByRole("status").textContent).toBe("Message submitted.");
  expect((screen.getByLabelText(/^First name/) as HTMLInputElement).value).toBe(
    "",
  );
});

test("contact preserves values on error and does not fabricate delivery without a callback", async () => {
  const user = userEvent.setup();
  const { rerender } = render(
    <Contact
      onSubmit={async () => {
        throw new Error("Delivery failed.");
      }}
    />,
  );
  await fillContact(user);
  await user.click(screen.getByRole("button", { name: "Send message" }));
  expect(await screen.findByRole("alert")).toHaveProperty(
    "textContent",
    "Delivery failed.",
  );
  expect((screen.getByLabelText(/^First name/) as HTMLInputElement).value).toBe(
    "Alex",
  );
  rerender(<Contact />);
  expect(
    screen
      .getByRole("button", { name: "Send message" })
      .hasAttribute("disabled"),
  ).toBe(true);
});

test("event form combines type, tags, date and images into application-owned submission and draft data", async () => {
  const user = userEvent.setup();
  const submit = vi.fn();
  const draft = vi.fn();
  render(<EventForm onSubmit={submit} onSaveDraft={draft} />);
  await user.type(screen.getByLabelText("Event name"), "Design meetup");
  await user.type(screen.getByLabelText("Organizer"), "Studio");
  await user.click(screen.getByRole("radio", { name: /Workshop/ }));
  await user.type(screen.getByLabelText("Tags"), "Design{Enter}");
  await user.click(
    screen.getByRole("button", { name: "Tuesday, October 6, 2026" }),
  );
  const image = new File(["image"], "cover.png", { type: "image/png" });
  await user.upload(screen.getByLabelText("Event images"), image);
  await user.click(screen.getByRole("button", { name: "Save as draft" }));
  await waitFor(() => expect(draft).toHaveBeenCalledOnce());
  expect(draft.mock.calls[0]?.[0]).toMatchObject({
    name: "Design meetup",
    organizer: "Studio",
    eventType: "workshop",
    venue: "convention-center",
    tags: ["Design"],
    files: [image],
  });
  expect(draft.mock.calls[0]?.[0].date.getDate()).toBe(6);
  await user.click(screen.getByRole("button", { name: "Create event" }));
  expect(submit).toHaveBeenCalledWith(draft.mock.calls[0]?.[0]);
  await user.click(screen.getByRole("button", { name: "Remove Design" }));
  await user.click(screen.getByRole("button", { name: "Create event" }));
  expect(submit.mock.calls.at(-1)?.[0].tags).toEqual([]);
});

test("event form rejects excessive attachments, reports callback failures, and disables unavailable submission", async () => {
  const user = userEvent.setup();
  const submit = vi.fn();
  const { rerender } = render(
    <EventForm
      onSubmit={submit}
      defaultValue={{ name: "Meetup", organizer: "Studio" }}
    />,
  );
  await user.upload(
    screen.getByLabelText("Event images"),
    Array.from(
      { length: 6 },
      (_, i) => new File(["x"], `${i}.png`, { type: "image/png" }),
    ),
  );
  await user.click(screen.getByRole("button", { name: "Create event" }));
  expect(submit).not.toHaveBeenCalled();
  expect(
    screen
      .getAllByRole("alert")
      .some((node) => node.textContent?.includes("five images")),
  ).toBe(true);
  rerender(
    <EventForm
      onSubmit={async () => {
        throw new Error("Save failed.");
      }}
      defaultValue={{ name: "Meetup", organizer: "Studio" }}
    />,
  );
  await user.upload(
    screen.getByLabelText("Event images"),
    new File(["x"], "valid.png", { type: "image/png" }),
  );
  await user.click(screen.getByRole("button", { name: "Create event" }));
  expect(await screen.findByRole("alert")).toHaveProperty(
    "textContent",
    "Save failed.",
  );
  rerender(<EventForm eventTypes={[]} venues={[]} />);
  expect(
    screen
      .getByRole("button", { name: "Create event" })
      .hasAttribute("disabled"),
  ).toBe(true);
});

test("FAQ preserves keyboard expansion and comparison explanations are focusable", async () => {
  const user = userEvent.setup();
  const { rerender } = render(
    <FAQ
      items={[
        { id: "one", question: "First?", answer: "Answer one" },
        { id: "two", question: "Second?", answer: "Answer two" },
      ]}
    />,
  );
  screen.getByRole("button", { name: "First?" }).focus();
  await user.tab();
  await user.keyboard("{Enter}");
  expect(
    screen
      .getByRole("button", { name: "Second?" })
      .getAttribute("aria-expanded"),
  ).toBe("true");
  expect(screen.getByText("Answer two")).toBeTruthy();
  rerender(
    <Compare
      rows={[
        {
          feature: "Theme",
          primary: "Editable",
          secondary: "Preset",
          secondaryTooltip: {
            title: "Customization",
            description: "Change the app tokens.",
          },
        },
      ]}
    />,
  );
  screen.getByRole("button", { name: "Details for Theme" }).focus();
  expect((await screen.findByRole("tooltip")).textContent).toContain(
    "Change the app tokens.",
  );
});

test("download only exposes supplied platforms and keeps their real destinations", () => {
  const { rerender } = render(
    <Download
      platforms={{
        ios: {
          title: "Phone",
          subtitle: "iOS",
          description: "Mobile app",
          url: "/downloads/ios",
        },
      }}
    />,
  );
  expect(
    screen.getByRole("link", { name: "Download for iOS" }).getAttribute("href"),
  ).toBe("/downloads/ios");
  expect(screen.queryByText("PC / Mac")).toBeNull();
  rerender(<Download platforms={{}} />);
  expect(screen.getByRole("status").textContent).toBe(
    "No downloads available.",
  );
});
