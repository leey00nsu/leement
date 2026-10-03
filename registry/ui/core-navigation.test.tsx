import * as React from "react";
import { afterEach, beforeAll, expect, test, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "./breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "./pagination";
import { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandItem } from "./command";
import { Glimpse } from "./glimpse";
beforeAll(() => {
  if (!globalThis.ResizeObserver) globalThis.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} } as typeof ResizeObserver;
  if (!HTMLElement.prototype.scrollIntoView) HTMLElement.prototype.scrollIntoView = () => {};
});
afterEach(cleanup);
test("accordion supports keyboard toggling, exclusive and multiple panels, and disabled items", async () => {
 const user = userEvent.setup();
 const view = render(<Accordion><AccordionItem value="a"><AccordionTrigger>First</AccordionTrigger><AccordionContent>First detail</AccordionContent></AccordionItem><AccordionItem value="b"><AccordionTrigger>Second</AccordionTrigger><AccordionContent>Second detail</AccordionContent></AccordionItem><AccordionItem value="c" disabled><AccordionTrigger>Locked</AccordionTrigger><AccordionContent>Locked detail</AccordionContent></AccordionItem></Accordion>);
 const first=screen.getByRole("button",{name:"First"});first.focus();await user.keyboard("{Enter}");expect(first.getAttribute("aria-expanded")).toBe("true");
 await user.tab();await user.keyboard(" ");expect(screen.getByRole("button",{name:"Second"}).getAttribute("aria-expanded")).toBe("true");expect(first.getAttribute("aria-expanded")).toBe("false");
 await user.click(screen.getByRole("button",{name:"Locked"}));expect(screen.getByRole("button",{name:"Locked"}).getAttribute("aria-expanded")).toBe("false");
 view.unmount();
 render(<Accordion multiple defaultValue={["a","b"]}><AccordionItem value="a"><AccordionTrigger>First</AccordionTrigger><AccordionContent>One</AccordionContent></AccordionItem><AccordionItem value="b"><AccordionTrigger>Second</AccordionTrigger><AccordionContent>Two</AccordionContent></AccordionItem></Accordion>);
 expect(screen.getAllByRole("button").every(x=>x.getAttribute("aria-expanded")==="true")).toBe(true);
 await user.click(screen.getByRole("button",{name:"First"}));expect(screen.getByRole("button",{name:"Second"}).getAttribute("aria-expanded")).toBe("true");
});
test("breadcrumb and pagination expose landmarks and current page; disabled navigation cannot activate", async () => {
 const click=vi.fn();const user=userEvent.setup();
 render(<><Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/docs">Docs</BreadcrumbLink></BreadcrumbItem><BreadcrumbItem><BreadcrumbPage>Settings</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb><Pagination><PaginationContent><PaginationItem><PaginationLink href="?page=1" isActive>1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="?page=0" disabled onClick={click}>Previous</PaginationLink></PaginationItem></PaginationContent></Pagination></>);
 expect(screen.getByRole("navigation",{name:"Breadcrumb"})).toBeTruthy();expect(screen.getByText("Settings").getAttribute("aria-current")).toBe("page");
 expect(screen.getByRole("link",{name:"1"}).getAttribute("aria-current")).toBe("page");
 const previous=screen.getByText("Previous");await user.click(previous);expect(click).not.toHaveBeenCalled();expect(previous.hasAttribute("href")).toBe(false);expect(previous.tabIndex).toBe(-1);
});
test("command filters results, selects via keyboard, and excludes disabled commands", async () => {
 const selected=vi.fn();const user=userEvent.setup();
 render(<Command label="Actions" loop><CommandInput aria-label="Find command" /><CommandList><CommandEmpty>No results</CommandEmpty><CommandItem value="locked" disabled onSelect={selected}>Locked</CommandItem><CommandItem value="alpha" onSelect={selected}>Alpha</CommandItem><CommandItem value="beta" onSelect={selected}>Beta</CommandItem></CommandList></Command>);
 const input=screen.getByRole("combobox");await user.click(input);await user.keyboard("{ArrowDown}{Enter}");expect(selected).toHaveBeenCalledWith("beta");
 selected.mockClear();await user.type(input,"alp");expect(screen.queryByRole("option",{name:"Beta"})).toBeNull();await user.keyboard("{Enter}");expect(selected).toHaveBeenCalledWith("alpha");
 await user.clear(input);await user.type(input,"unmatched");expect(screen.getByText("No results")).toBeTruthy();await user.keyboard("{Enter}");expect(selected).toHaveBeenCalledTimes(1);
});
test("command dialog closes with Escape and restores focus to its opener", async () => {
 const user=userEvent.setup();
 function Demo() {const [open,setOpen]=React.useState(false);return <CommandDialog open={open} onOpenChange={setOpen} trigger={<button>Open commands</button>}><Command label="Actions"><CommandInput aria-label="Find" /><CommandList><CommandItem>Settings</CommandItem></CommandList></Command></CommandDialog>;}
 render(<Demo />);const opener=screen.getByRole("button",{name:"Open commands"});await user.click(opener);expect(screen.getByRole("dialog",{name:"Command menu"})).toBeTruthy();await user.keyboard("{Escape}");await waitFor(()=>expect(screen.queryByRole("dialog")).toBeNull());await waitFor(()=>expect(document.activeElement).toBe(opener));
});
test("Glimpse keeps a real link and reveals supplemental metadata on hover", async () => {
 const user=userEvent.setup();
 render(<Glimpse href="/profile" label="Profile" title="Team profile" description="More about this team" />);
 const link=screen.getByRole("link",{name:"Profile"});expect(link.getAttribute("href")).toBe("/profile");
 await user.hover(link);await waitFor(()=>expect(screen.getByText("Team profile")).toBeTruthy());expect(screen.getByText("More about this team")).toBeTruthy();
});
