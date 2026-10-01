import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
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
