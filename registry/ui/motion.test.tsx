import { createRef } from "react";
import { afterEach, expect, test, vi } from "vitest";
import { act, cleanup, render, screen, fireEvent } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { MediaReveal } from "../patterns/media-reveal";
import { BrandAction } from "../patterns/brand-action";
import { RotatingContent } from "./rotating-content";
import { motionEasing, motionMilliseconds, motionSeconds } from "../lib/leement-motion";
import { TextReveal } from "./text-reveal";
import { RevealContent } from "./reveal-content";

afterEach(() => { cleanup(); vi.useRealTimers(); vi.unstubAllGlobals(); });
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

test("brand action keeps busy and disabled clicks blocked", () => {
  const onClick = vi.fn();
  render(<><BrandAction loading onClick={onClick}>Create</BrandAction><BrandAction disabled onClick={onClick}>Unavailable</BrandAction></>);
  fireEvent.click(screen.getByRole("button", { name: "Create" }));
  fireEvent.click(screen.getByRole("button", { name: "Unavailable" }));
  expect(onClick).not.toHaveBeenCalled();
  expect(screen.getByRole("button", { name: "Create" }).getAttribute("aria-busy")).toBe("true");
});
test("rotation pauses, resumes and clears pending timers on unmount", () => {
  vi.useFakeTimers();
  vi.stubGlobal("matchMedia", () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  const view = render(<RotatingContent label="Tools" interval={500} items={["Voice", "Image"]} />);
  const group = screen.getByRole("group", { name: "Tools" });
  act(() => { vi.advanceTimersByTime(500); });
  expect(group.getAttribute("data-index")).toBe("1");
  fireEvent.click(screen.getByRole("button", { name: "Pause Tools" }));
  act(() => { vi.advanceTimersByTime(1000); });
  expect(group.getAttribute("data-index")).toBe("1");
  fireEvent.click(screen.getByRole("button", { name: "Resume Tools" }));
  act(() => { vi.advanceTimersByTime(500); });
  expect(group.getAttribute("data-index")).toBe("0");
  view.unmount();
  expect(vi.getTimerCount()).toBe(0);
});
test("rotation stays on the first item under reduced motion", () => {
  vi.useFakeTimers();
  vi.stubGlobal("matchMedia", () => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  render(<RotatingContent label="Tools" interval={500} items={["Voice", "Image"]} />);
  act(() => { vi.advanceTimersByTime(5000); });
  expect(screen.getByRole("group", { name: "Tools" }).getAttribute("data-index")).toBe("0");
  expect(screen.getByRole("button", { name: "Pause Tools" }).hasAttribute("disabled")).toBe(true);
});

test("JavaScript motion reads local CSS seconds and named easing consistently", () => {
  const element = document.createElement("div");
  element.style.setProperty("--lm-motion-duration-reveal", "1.2s");
  element.style.setProperty("--lm-motion-easing-reveal", "ease-in-out");
  document.body.appendChild(element);
  expect(motionMilliseconds(element, "duration-reveal")).toBe(1200);
  expect(motionSeconds(element, "duration-reveal")).toBe(1.2);
  expect(motionEasing(element)).toEqual([0.42, 0, 0.58, 1]);
  element.style.setProperty("--lm-motion-duration-normal", "180ms");
  element.style.setProperty("--lm-motion-easing-standard", "ease-out");
  expect(motionSeconds(element, "duration-normal")).toBe(0.18);
  element.style.setProperty("--lm-motion-duration-expand", ".4s");
  expect(motionMilliseconds(element, "duration-expand")).toBe(400);
  expect(motionEasing(element, "standard")).toEqual([0, 0, 0.58, 1]);
  element.remove();
});

test("inline rotation can use an app-owned pause control without nesting controls in the heading", () => {
  vi.useFakeTimers();
  vi.stubGlobal("matchMedia", () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  const view = render(<h1>Tools <RotatingContent label="Tools" controls={false} paused={false} interval={500} items={["Voice", "Image"]} /></h1>);
  const group = screen.getByRole("group", { name: "Tools" });
  expect(group.tagName).toBe("SPAN");
  expect(screen.queryByRole("button")).toBeNull();
  act(() => { vi.advanceTimersByTime(500); });
  expect(group.getAttribute("data-index")).toBe("1");
  view.rerender(<h1>Tools <RotatingContent label="Tools" controls={false} paused interval={500} items={["Voice", "Image"]} /></h1>);
  act(() => { vi.advanceTimersByTime(1000); });
  expect(group.getAttribute("data-index")).toBe("1");
});


test("consumer object and callback refs preserve entrance, rotation and cleanup", () => {
  vi.useFakeTimers();
  vi.stubGlobal("matchMedia", () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  const textRef = createRef<HTMLSpanElement>();
  let rotation: HTMLSpanElement | null = null;
  const released = vi.fn();
  const rotationRef = (node: HTMLSpanElement | null) => { rotation = node; return () => { rotation = null; released(); }; };
  const view = render(<><TextReveal ref={textRef}><TextReveal.Item>Voice</TextReveal.Item></TextReveal><RotatingContent ref={rotationRef} label="Referenced tools" interval={500} items={["Voice", "Image"]} /></>);
  expect(textRef.current?.textContent).toBe("Voice");
  expect(textRef.current?.getAttribute("data-entered")).toBe("true");
  const group = screen.getByRole("group", { name: "Referenced tools" });
  expect(rotation).toBe(group);
  act(() => { vi.advanceTimersByTime(500); });
  expect(group.getAttribute("data-index")).toBe("1");
  view.unmount();
  expect(textRef.current).toBeNull();
  expect(rotation).toBeNull();
  expect(released).toHaveBeenCalled();
  expect(vi.getTimerCount()).toBe(0);
});

test("reveal content observes its real element with either kind of consumer ref", () => {
  const observed: Element[] = [];
  const disconnect = vi.fn();
  vi.stubGlobal("IntersectionObserver", class { observe(element: Element) { observed.push(element); } unobserve() {} disconnect = disconnect; });
  vi.stubGlobal("matchMedia", () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  const objectRef = createRef<HTMLDivElement>();
  const callbackRef = vi.fn();
  const view = render(<><RevealContent ref={objectRef}>Object reference</RevealContent><RevealContent ref={callbackRef}>Callback reference</RevealContent></>);
  expect(objectRef.current?.textContent).toBe("Object reference");
  expect(observed).toContain(objectRef.current);
  const callbackNode = screen.getByText("Callback reference");
  expect(callbackRef).toHaveBeenCalledWith(callbackNode);
  expect(observed).toContain(callbackNode);
  view.unmount();
  expect(objectRef.current).toBeNull();
  expect(callbackRef).toHaveBeenCalledWith(null);
  expect(disconnect).toHaveBeenCalled();
});
