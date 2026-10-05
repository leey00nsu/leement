import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CodeExample } from "./code-example";
import { Blog } from "./blog";
import { BlogPost } from "./blog-post";
import { Careers } from "./careers";
import { CaseStudies } from "./case-studies";
import { CaseStudy } from "./case-study";
import { Awards } from "./awards";
import { Changelog } from "./changelog";
import { Community } from "./community";
import { About } from "./about";

afterEach(cleanup);
const snippets = [
  { id: "js", language: "javascript", label: "JavaScript", filename: "a.js", code: "const answer = 42;" },
  { id: "py", language: "python", label: "Python", filename: "a.py", code: "answer = 42" },
];

test("code language selection uses native keyboard tabs and copies the current source", async () => {
  const user = userEvent.setup();
  render(<CodeExample snippets={snippets} />);
  screen.getByRole("tab", { name: "JavaScript" }).focus();
  await user.keyboard("{ArrowRight}");
  await user.keyboard("{Enter}");
  expect(screen.getByRole("tab", { name: "Python" }).getAttribute("aria-selected")).toBe("true");
  expect(screen.getByText("a.py")).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Copy code" }));
  expect(await navigator.clipboard.readText()).toBe("answer = 42");
});

test("controlled snippet selection emits changes and handles missing/empty selections", async () => {
  const user = userEvent.setup(); const onChange = vi.fn();
  const { rerender } = render(<CodeExample snippets={snippets} value="js" onValueChange={onChange} />);
  await user.click(screen.getByRole("tab", { name: "Python" }));
  expect(onChange).toHaveBeenCalledWith("py");
  expect(screen.getByRole("tab", { name: "JavaScript" }).getAttribute("aria-selected")).toBe("true");
  rerender(<CodeExample snippets={snippets} value="unknown" />);
  expect(screen.getByText("a.js")).toBeTruthy();
  rerender(<CodeExample snippets={[]} />);
  expect(screen.getByRole("status").textContent).toContain("No code samples");
});

test("article content, author and publication date can be replaced independently", () => {
  render(<BlogPost title="Actual article" author={{name:"Alex",website:"/authors/alex",websiteName:"Studio",image:""}} pubDate={new Date("2026-10-05T00:00:00Z")}><h2>Custom body</h2><p>Application-owned content.</p></BlogPost>);
  expect(screen.getByRole("heading",{name:"Custom body"})).toBeTruthy();
  expect(screen.queryByText("The Great Joke Tax")).toBeNull();
  expect(screen.getByRole("link",{name:"Studio"}).getAttribute("href")).toBe("/authors/alex");
  expect(document.querySelector("time")?.getAttribute("datetime")).toBe("2026-10-05T00:00:00.000Z");
});

test("lists expose application destinations and announce genuinely empty collections", () => {
  const { rerender } = render(<Careers jobs={[{category:"Engineering",openings:[{title:"Designer",location:"Seoul",url:"/jobs/designer"}]}]} />);
  expect(screen.getByRole("link",{name:"View Designer"}).getAttribute("href")).toBe("/jobs/designer");
  rerender(<Careers jobs={[{category:"Engineering",openings:[]}]} />); expect(screen.getByRole("status").textContent).toBe("No open positions.");
  rerender(<Blog posts={[]} buttonUrl="/articles" buttonText="All articles" />); expect(screen.getByRole("link",{name:"All articles"}).getAttribute("href")).toBe("/articles"); expect(screen.getByRole("status").textContent).toBe("No posts to display.");
  rerender(<Awards awards={[]} />); expect(screen.getByRole("status").textContent).toContain("No awards");
  rerender(<Changelog entries={[]} />); expect(screen.getByRole("status").textContent).toBe("No updates to display.");
  rerender(<Community socialLinks={[]} />); expect(screen.getByRole("status").textContent).toBe("No community links.");
  rerender(<CaseStudies studies={[]} />); expect(screen.getByRole("status").textContent).toContain("No case studies");
});

test("case study records, metric lists and editorial children remain app-owned", () => {
  const { rerender } = render(<CaseStudies studies={[{id:"one",quote:"Less duplicated work.",person:"Alex",role:"Engineer",url:"/stories/one",metrics:[{value:"2×",label:"Delivery"}]}]} />);
  expect(screen.getByText("2×")).toBeTruthy();
  expect(screen.getByRole("link").getAttribute("href")).toBe("/stories/one");
  rerender(<CaseStudy title="Our story" company={{name:"Studio",website:"/studio",topics:["Design"]}}><h2>Actual outcome</h2></CaseStudy>);
  expect(screen.getByRole("heading",{name:"Actual outcome"})).toBeTruthy();
  expect(screen.getByRole("link",{name:"/studio"}).getAttribute("href")).toBe("/studio");
});

test("about allows partners and optional breakout actions to be omitted", () => {
  render(<About companies={null} breakout={{title:"Our mission",description:"Build together."}} achievements={[]} contentSections={[]} />);
  expect(screen.getByText("Our mission")).toBeTruthy();
  expect(screen.queryByRole("link")).toBeNull();
  expect(screen.queryByText("Partner 1")).toBeNull();
});
