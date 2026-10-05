import * as React from "react";
import { renderToString } from "react-dom/server";
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ChartAreaInteractive } from "./chart-area-interactive";
import { ChartBarInteractive } from "./chart-bar-interactive";
import { ChartLineInteractive } from "./chart-line-interactive";
import { ChartPieInteractive } from "./chart-pie-interactive";
import { ChartDataTable } from "../../ui/chart-data-table";

const recipes = import.meta.glob<Record<string, unknown>>("./chart-*.tsx");
describe("public chart recipe compositions", () => {
  for (const [file, load] of Object.entries(recipes)) {
    it(`${file} renders with readable data during SSR`, async () => {
      const source = await load();
      const Recipe = Object.entries(source).find(([key]) =>
        /^Chart[A-Z]/.test(key),
      )![1] as React.ComponentType;
      const html = renderToString(<Recipe />);
      expect(html).toContain("View chart data");
      expect(html).toContain("<table");
      expect(html).toContain("<caption");
    });
  }
});

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  vi.stubGlobal("matchMedia", () => ({
    matches: true,
    addEventListener() {},
    removeEventListener() {},
  }));
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it("filters the Area data table using the same time range as the plotted series", async () => {
  const user = userEvent.setup();
  render(<ChartAreaInteractive />);
  await user.click(screen.getByText("View chart data"));
  const table = screen.getByRole("table");
  expect(within(table).getAllByRole("row")).toHaveLength(92);
  await user.click(screen.getByRole("combobox"));
  await user.click(await screen.findByRole("option", { name: "Last 7 days" }));
  await waitFor(() =>
    expect(within(table).getAllByRole("row")).toHaveLength(9),
  );
  expect(within(table).getByText("2024-06-30")).toBeTruthy();
  expect(within(table).queryByText("2024-04-01")).toBeNull();
});

it.each([ChartBarInteractive, ChartLineInteractive])(
  "selects an interactive series through native keyboard buttons",
  async (Recipe) => {
    const user = userEvent.setup();
    render(<Recipe />);
    const desktop = screen.getByRole("button", { name: /Desktop/ });
    const mobile = screen.getByRole("button", { name: /Mobile/ });
    expect(desktop.getAttribute("aria-pressed")).toBe("true");
    mobile.focus();
    await user.keyboard("{Enter}");
    expect(mobile.getAttribute("aria-pressed")).toBe("true");
    expect(desktop.getAttribute("aria-pressed")).toBe("false");
  },
);

it("selects a Pie month and keeps multiple chart style IDs distinct", async () => {
  const user = userEvent.setup();
  const view = render(
    <>
      <ChartPieInteractive />
      <ChartPieInteractive />
    </>,
  );
  const cards = [...view.container.querySelectorAll('[data-slot="card"]')];
  expect(cards[0]!.getAttribute("data-chart")).not.toBe(
    cards[1]!.getAttribute("data-chart"),
  );
  await user.click(screen.getAllByRole("combobox")[0]!);
  await user.click(await screen.findByRole("option", { name: "March" }));
  await waitFor(() =>
    expect(screen.getAllByRole("combobox")[0]!.textContent).toContain("March"),
  );
  expect(screen.getAllByRole("combobox")[1]!.textContent).toContain("January");
});

it("provides labels, live values and a meaningful empty fallback without color-only data", async () => {
  const user = userEvent.setup();
  const view = render(
    <ChartDataTable
      data={[{ month: "May", visits: 1234, fill: "var(--chart-1)" }]}
      config={{ visits: { label: "Visits" } }}
      caption="Monthly visits"
    />,
  );
  await user.click(screen.getByText("View chart data"));
  expect(screen.getByRole("columnheader", { name: "Visits" })).toBeTruthy();
  expect(screen.getByRole("cell", { name: "1,234" })).toBeTruthy();
  expect(screen.queryByRole("columnheader", { name: "fill" })).toBeNull();
  view.rerender(
    <ChartDataTable data={[]} config={{}} caption="Monthly visits" />,
  );
  expect(screen.getByText("No data in this range.")).toBeTruthy();
});
