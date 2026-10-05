import * as React from "react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarMenuButton, useSidebar } from "./sidebar";
import { Message, MessageContent, MessageHeader, MessageFooter } from "./message";
import { Questionnaire, QuestionnaireItem, QuestionnaireTitle, QuestionnaireChoices, QuestionnaireChoice, QuestionnaireProgress, QuestionnaireError, QuestionnaireNext, QuestionnairePrevious, QuestionnaireSkip, QuestionnaireSubmit } from "./questionnaire";
import { MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem, MessageScrollerButton, useMessageScroller } from "./message-scroller";

beforeEach(() => {
  vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
  vi.stubGlobal("ResizeObserver", class { observe() {} unobserve() {} disconnect() {} });
  Object.defineProperty(HTMLElement.prototype, "scrollTo", {configurable:true, value:vi.fn(function(this: HTMLElement, options: ScrollToOptions | number) { this.scrollTop = typeof options === "number" ? options : options.top ?? 0; })});
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

test("sidebar controlled RTL navigation, native link rendering and keyboard toggle", async () => {
  const user = userEvent.setup();
  function Status() { const { state } = useSidebar(); return <output>{state}</output>; }
  function App() { const [open, setOpen] = React.useState(true); return <SidebarProvider dir="rtl" open={open} onOpenChange={setOpen}><Sidebar side="right" collapsible="icon"><SidebarContent><SidebarMenuButton render={<a href="/projects" />} isActive>Projects</SidebarMenuButton></SidebarContent></Sidebar><SidebarTrigger /><Status /></SidebarProvider>; }
  render(<App />);
  expect(screen.getByRole("link", { name: "Projects" }).getAttribute("href")).toBe("/projects");
  expect(screen.getByText("expanded")).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Toggle Sidebar" }));
  expect(screen.getByText("collapsed")).toBeTruthy();
  await user.keyboard("{Control>}b{/Control}");
  expect(screen.getByText("expanded")).toBeTruthy();
  expect(document.cookie).toContain("sidebar_state=true");
});

test("message keeps speaker, content and footer semantics with end alignment", () => {
  render(<Message align="end"><MessageContent><MessageHeader>You</MessageHeader><p>Hello</p><MessageFooter>Delivered</MessageFooter></MessageContent></Message>);
  expect(screen.getByText("Hello").closest('[data-slot="message"]')?.getAttribute("data-align")).toBe("end");
  expect(screen.getByText("You")).toBeTruthy();
  expect(screen.getByText("Delivered")).toBeTruthy();
});

test("questionnaire validates required steps, preserves answers across previous and submits FormData", async () => {
  const user = userEvent.setup(); const submitted = vi.fn();
  const items = [{ name: "scope", required: true, choices: [{value:"team"}, {value:"private", disabled:true}] }, { name: "tools", choices: [{value:"tokens"}, {value:"source"}] }];
  render(<Questionnaire items={items} defaultItem="scope" onSubmit={event => { event.preventDefault(); submitted(Object.fromEntries(new FormData(event.currentTarget))); }}><QuestionnaireProgress /><QuestionnaireItem name="scope" required><QuestionnaireTitle>Scope</QuestionnaireTitle><QuestionnaireChoices><QuestionnaireChoice value="team">Team</QuestionnaireChoice><QuestionnaireChoice value="private" disabled>Private</QuestionnaireChoice></QuestionnaireChoices><QuestionnaireError /></QuestionnaireItem><QuestionnaireItem name="tools" multiple><QuestionnaireTitle>Tools</QuestionnaireTitle><QuestionnaireChoices><QuestionnaireChoice value="tokens">Tokens</QuestionnaireChoice><QuestionnaireChoice value="source">Source</QuestionnaireChoice></QuestionnaireChoices></QuestionnaireItem><QuestionnairePrevious /><QuestionnaireSkip /><QuestionnaireNext /><QuestionnaireSubmit /></Questionnaire>);
  expect((screen.getByRole("radio", {name:/Private/}) as HTMLInputElement).disabled).toBe(true);
  await user.click(screen.getByRole("button", {name:"Next"}));
  expect(screen.getByRole("group",{name:"Scope"}).getAttribute("aria-invalid")).toBe("true");
  await user.click(screen.getByRole("radio", {name:/Team/}));
  await user.click(screen.getByRole("button", {name:"Next"}));
  expect(screen.getByRole("group",{name:"Tools"})).toBeTruthy();
  await user.click(screen.getByRole("checkbox", {name:/Tokens/}));
  await user.click(screen.getByRole("button", {name:"Previous"}));
  expect((screen.getByRole("radio",{name:/Team/}) as HTMLInputElement).checked).toBe(true);
  await user.click(screen.getByRole("button", {name:"Next"}));
  await user.click(screen.getByRole("button", {name:"Submit"}));
  expect(submitted).toHaveBeenCalledWith({ scope:"team", tools:"tokens" });
});

test("message scroller provides a native labelled log, inactive button and immediate anchor commands", async () => {
  let commands: ReturnType<typeof useMessageScroller> | undefined;
  function Controls(){ commands=useMessageScroller(); return null; }
  render(<MessageScrollerProvider defaultScrollPosition="start"><MessageScroller><MessageScrollerViewport><MessageScrollerContent><MessageScrollerItem messageId="first">First message</MessageScrollerItem></MessageScrollerContent></MessageScrollerViewport><MessageScrollerButton /></MessageScroller><Controls /></MessageScrollerProvider>);
  const viewport=screen.getByRole("region",{name:"Messages"});
  expect(viewport.tabIndex).toBe(0);
  expect(screen.getByRole("log").getAttribute("aria-relevant")).toBe("additions");
  const jump=screen.getByText("Scroll to end").closest("button")!;
  await waitFor(()=>expect(jump.tabIndex).toBe(-1));
  expect(jump.hasAttribute("inert")).toBe(true);
  expect(commands?.scrollToStart({behavior:"smooth"})).toBe(true);
  expect(commands?.scrollToMessage("absent")).toBe(false);
  expect(commands?.scrollToMessage("first",{behavior:"instant"})).toBe(true);
});


test("message scroller stops following on reader input and resumes from the jump button", async () => {
  const user = userEvent.setup();
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function(this: HTMLElement) {
    const viewport = this.closest('[data-slot="message-scroller-viewport"]') as HTMLElement | null;
    if (this.dataset.slot === "message-scroller-item") {
      const index = Array.from(this.parentElement!.querySelectorAll('[data-slot="message-scroller-item"]')).indexOf(this);
      return new DOMRect(0, index * 100 - (viewport?.scrollTop ?? 0), 100, 100);
    }
    return new DOMRect(0, 0, 100, 100);
  });
  function App() {
    const [count, setCount] = React.useState(3);
    return <MessageScrollerProvider autoScroll><MessageScroller><MessageScrollerViewport ref={node => {
      if (!node) return;
      Object.defineProperty(node, "clientHeight", {configurable:true, get:()=>100});
      Object.defineProperty(node, "scrollHeight", {configurable:true, get:()=>node.querySelectorAll('[data-slot="message-scroller-item"]').length * 100});
    }}><MessageScrollerContent>{Array.from({length:count},(_,index)=><MessageScrollerItem key={index} messageId={`message-${index}`}>Message {index}</MessageScrollerItem>)}</MessageScrollerContent></MessageScrollerViewport><MessageScrollerButton /></MessageScroller><button onClick={()=>setCount(count+1)}>Append</button></MessageScrollerProvider>;
  }
  render(<App />);
  const viewport = screen.getByRole("region",{name:"Messages"});
  await waitFor(()=>expect(viewport.scrollTop).toBe(200));
  fireEvent.keyDown(viewport,{key:"Home"});
  viewport.scrollTop=0;
  fireEvent.scroll(viewport);
  await user.click(screen.getByRole("button",{name:"Append"}));
  expect(viewport.scrollTop).toBe(0);
  await user.click(await screen.findByRole("button",{name:"Scroll to end"}));
  expect(viewport.scrollTop).toBe(300);
});
