import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Skeleton } from "../ui/skeleton";
import { StatusNotice } from "../ui/status-notice";
import { StatePanel } from "./state-panel";
import { ProductPageIntro } from "./product-page-intro";
import { ResourceRow, ResourceRowLink, ResourceRowButton } from "./resource-row-link";
import { BentoGrid, BentoGridItem } from "../blocks/bento-grid";
import { BrandLogo } from "./brand-logo";

afterEach(cleanup);

test("brand logo exposes one product name and preserves native link focus", async () => {
  const user = userEvent.setup();
  render(<a href="/workspace"><BrandLogo name="My workspace" mark={<svg><title>Decorative mark</title></svg>} /></a>);
  expect(screen.getByRole("link", { name: "My workspace" }).getAttribute("href")).toBe("/workspace");
  expect(screen.queryByRole("img", { name: "Decorative mark" })).toBeNull();
  await user.tab();
  expect(document.activeElement).toBe(screen.getByRole("link", { name: "My workspace" }));
});

test("icon-only brand logo announces the app-provided name", () => {
  render(<a href="/"><BrandLogo name="Custom brand" variant="icon" size="sm" mark={<svg data-testid="custom-mark" />} /></a>);
  expect(screen.getByRole("img", { name: "Custom brand" })).toBeTruthy();
  expect(screen.getByRole("link", { name: "Custom brand" })).toBeTruthy();
  expect(screen.getByTestId("custom-mark")).toBeTruthy();
  expect(screen.queryByText("Custom brand")).toBeNull();
});

test("loading, status and empty states preserve semantics", () => {
  render(<>
    <div aria-busy="true" aria-label="Loading list"><Skeleton className="h-4 w-full" /><span role="status" className="sr-only">Loading list</span></div>
    <StatusNotice tone="destructive" title="Upload failed" description="Try again." />
    <StatePanel title="No results" description="Try a different search." headingLevel="h1" />
  </>);
  expect(screen.getByLabelText("Loading list").getAttribute("aria-busy")).toBe("true");
  expect(screen.getByRole("alert").textContent).toContain("Upload failed");
  expect(screen.getByRole("heading", { level: 1, name: "No results" })).toBeTruthy();
});

test("resource row keeps native link and button keyboard behavior", async () => {
  const user = userEvent.setup();
  render(<><ResourceRow><ResourceRowLink href="#target">Open resource</ResourceRowLink></ResourceRow><ResourceRow><ResourceRowButton>Choose resource</ResourceRowButton></ResourceRow></>);
  await user.tab();
  expect(document.activeElement).toBe(screen.getByRole("link", { name: "Open resource" }));
  await user.tab();
  expect(document.activeElement).toBe(screen.getByRole("button", { name: "Choose resource" }));
});

test("page intro and bento items render content and responsive grid rules", () => {
  render(<><ProductPageIntro eyebrow="Workspace" title="Members" description="Manage your team." /><BentoGrid><BentoGridItem title="Share files" eyebrow="Collaborate">Preview</BentoGridItem></BentoGrid></>);
  expect(screen.getByRole("heading", { level: 1, name: "Members" })).toBeTruthy();
  expect(screen.getByRole("article", { name: "Share files" })).toBeTruthy();
  expect(screen.getByRole("article").parentElement?.className).toContain("md:grid-cols-6");
});
