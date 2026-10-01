import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { MediaReveal } from "../patterns/media-reveal";
import { TextReveal } from "./text-reveal";

afterEach(cleanup);
test("text reveal keeps native heading and Korean/English text available once in static HTML", () => {
  const content = <h1><TextReveal><TextReveal.Item>나만의</TextReveal.Item>{" "}<TextReveal.Item><strong>voice</strong></TextReveal.Item><br /><TextReveal.Item>만들기</TextReveal.Item></TextReveal></h1>;
  const html = renderToString(content);
  expect(html).not.toContain("opacity:0");
  expect(html).not.toContain('aria-hidden="true"');
  render(content);
  expect(screen.getByRole("heading", { name: /나만의 voice\s*만들기/ })).toBeTruthy();
  expect(screen.getAllByText("voice")).toHaveLength(1);
});

test("media reveal exposes busy state and keeps hidden controls inert through retry", () => {
  const view = render(<MediaReveal status="loading" label="Photo" error={<button>Retry</button>}><img alt="Mountain" src="/test.svg" /><button>Inspect</button></MediaReveal>);
  expect(screen.getByRole("group", { name: "Photo" }).getAttribute("aria-busy")).toBe("true");
  expect(screen.queryByRole("img", { name: "Mountain" })).toBeNull();
  expect(screen.getByText("Inspect").parentElement?.hasAttribute("inert")).toBe(true);
  view.rerender(<MediaReveal status="error" label="Photo" error={<button>Retry</button>}><img alt="Mountain" src="/test.svg" /></MediaReveal>);
  expect(screen.getByRole("button", { name: "Retry" })).toBeTruthy();
  view.rerender(<MediaReveal status="ready" label="Photo" error={<button>Retry</button>}><img alt="Mountain" src="/test.svg" /></MediaReveal>);
  expect(screen.getByRole("img", { name: "Mountain" })).toBeTruthy();
  expect(screen.queryByRole("button", { name: "Retry" })).toBeNull();
  expect(screen.getByRole("group", { name: "Photo" }).getAttribute("aria-busy")).toBe("false");
});
