import * as React from "react";
import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent } from "./context-menu";
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerDescription, DrawerClose } from "./drawer";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "./menubar";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "./navigation-menu";
import { ScrollArea } from "./scroll-area";

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

test("context menu opens from the keyboard and updates a controlled checked item", async () => {
  const user = userEvent.setup();
  const remove = vi.fn();
  function Menu() { const [checked, setChecked] = React.useState(false); return <ContextMenu><ContextMenuTrigger tabIndex={0}>Project</ContextMenuTrigger><ContextMenuContent><ContextMenuCheckboxItem className={state => state.checked ? "consumer-checked" : "consumer-unchecked"} checked={checked} onCheckedChange={setChecked}>Bookmark</ContextMenuCheckboxItem><ContextMenuItem disabled onClick={remove}>Remove</ContextMenuItem></ContextMenuContent></ContextMenu>; }
  render(<Menu />);
  const trigger = screen.getByText("Project");
  trigger.focus();
  await user.keyboard("{Shift>}{F10}{/Shift}");
  const checked = await screen.findByRole("menuitemcheckbox", { name: "Bookmark" });
  expect(checked.getAttribute("aria-checked")).toBe("false");
  expect(screen.getByRole("menuitem", { name: "Remove" }).getAttribute("aria-disabled")).toBe("true");
  await user.click(screen.getByRole("menuitem", { name: "Remove" }));
  expect(remove).not.toHaveBeenCalled();
  await user.click(checked);
  expect(checked.getAttribute("aria-checked")).toBe("true");
  expect(checked.classList.contains("consumer-checked")).toBe(true);
  await user.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
  await waitFor(() => expect(document.activeElement).toBe(trigger));
});

test("closing a context submenu keeps its parent menu available", async () => {
  const user = userEvent.setup();
  render(<ContextMenu><ContextMenuTrigger tabIndex={0}>Project</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Open</ContextMenuItem><ContextMenuSub><ContextMenuSubTrigger>Export</ContextMenuSubTrigger><ContextMenuSubContent><ContextMenuItem>Markdown</ContextMenuItem></ContextMenuSubContent></ContextMenuSub></ContextMenuContent></ContextMenu>);
  screen.getByText("Project").focus();
  await user.keyboard("{Shift>}{F10}{/Shift}");
  await user.click(await screen.findByRole("menuitem", { name: "Export" }));
  await screen.findByRole("menuitem", { name: "Markdown" });
  await user.keyboard("{Escape}");
  await waitFor(() => expect(screen.queryByRole("menuitem", { name: "Markdown" })).toBeNull());
  expect(screen.getByRole("menuitem", { name: "Open" })).toBeTruthy();
});

test("controlled drawer labels the dialog, preserves native form input and returns focus", async () => {
  const user = userEvent.setup();
  function Settings() { const [open,setOpen]=React.useState(false); return <Drawer open={open} onOpenChange={setOpen}><DrawerTrigger>Settings</DrawerTrigger><DrawerContent><DrawerTitle>Workspace</DrawerTitle><DrawerDescription>Edit workspace settings.</DrawerDescription><label>Name<input defaultValue="Leement" /></label><DrawerClose>Cancel</DrawerClose></DrawerContent></Drawer>; }
  render(<Settings />);
  const trigger=screen.getByRole("button", {name:"Settings"});
  await user.click(trigger);
  expect(await screen.findByRole("dialog",{name:"Workspace"})).toBeTruthy();
  const input=screen.getByRole("textbox",{name:"Name"});
  await user.clear(input);await user.type(input,"Product");
  expect((input as HTMLInputElement).value).toBe("Product");
  await user.keyboard("{Escape}");
  await waitFor(()=>expect(screen.queryByRole("dialog")).toBeNull());
  await waitFor(()=>expect(document.activeElement).toBe(trigger));
});

test("menubar supports keyboard activation and disabled commands", async()=>{
  const user=userEvent.setup();const save=vi.fn();
  render(<Menubar aria-label="Commands"><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New</MenubarItem><MenubarItem disabled onClick={save}>Save</MenubarItem></MenubarContent></MenubarMenu><MenubarMenu><MenubarTrigger>View</MenubarTrigger><MenubarContent><MenubarItem>Zoom</MenubarItem></MenubarContent></MenubarMenu></Menubar>);
  screen.getByRole("menuitem",{name:"File"}).focus();await user.keyboard("{ArrowDown}");
  expect(await screen.findByRole("menuitem",{name:"New"})).toBeTruthy();
  expect(screen.getByRole("menuitem",{name:"Save"}).getAttribute("aria-disabled")).toBe("true");
  await user.click(screen.getByRole("menuitem",{name:"Save"}));expect(save).not.toHaveBeenCalled();
  await user.keyboard("{Escape}");await waitFor(()=>expect(screen.queryByRole("menu")).toBeNull());
});

test("navigation menu preserves link destinations and controlled popup selection", async()=>{
  const user=userEvent.setup();
  function Nav(){const [value,setValue]=React.useState<string|null>(null);return <NavigationMenu value={value} onValueChange={setValue} aria-label="Resources"><NavigationMenuList><NavigationMenuItem value="docs"><NavigationMenuTrigger>Docs</NavigationMenuTrigger><NavigationMenuContent><NavigationMenuLink href="/guide">Guide</NavigationMenuLink></NavigationMenuContent></NavigationMenuItem><NavigationMenuItem><NavigationMenuLink href="/components" active>Components</NavigationMenuLink></NavigationMenuItem></NavigationMenuList></NavigationMenu>;}
  render(<Nav />);const trigger=screen.getByRole("button",{name:"Docs"});trigger.focus();await user.keyboard("{Enter}");
  expect((await screen.findByRole("link",{name:"Guide"})).getAttribute("href")).toBe("/guide");
  expect(screen.getByRole("link",{name:"Components"}).getAttribute("aria-current")).toBe("page");
  await user.keyboard("{Escape}");await waitFor(()=>expect(screen.queryByRole("link",{name:"Guide"})).toBeNull());
});

test("scroll area preserves reading order and avoids a tab stop when content does not overflow",()=>{
  vi.stubGlobal("ResizeObserver",class {observe(){} unobserve(){} disconnect(){}});
  const {container}=render(<ScrollArea><ul><li>Version 1</li><li>Version 2</li></ul></ScrollArea>);
  expect(screen.getAllByRole("listitem")).toHaveLength(2);
  expect(container.querySelector("[data-slot=scroll-area-viewport]")?.getAttribute("tabindex")).toBe("-1");
});

test("carousel keyboard follows vertical/RTL direction and leaves text editing keys alone", async()=>{
  vi.stubGlobal("ResizeObserver", class {observe(){} unobserve(){} disconnect(){}});
  vi.stubGlobal("IntersectionObserver", class {observe(){} unobserve(){} disconnect(){}});
  vi.stubGlobal("matchMedia",()=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}}));
  const {Carousel, CarouselContent, CarouselItem}=await import("./carousel");
  const user=userEvent.setup();
  const next=vi.fn();const previous=vi.fn();
  const attach=(api: import("./carousel").CarouselApi)=>{if(api){vi.spyOn(api,"scrollNext").mockImplementation(next);vi.spyOn(api,"scrollPrev").mockImplementation(previous);}};
  const view=render(<Carousel aria-label="Projects" tabIndex={0} opts={{direction:"rtl"}} setApi={attach}><CarouselContent><CarouselItem>One</CarouselItem><CarouselItem>Two</CarouselItem></CarouselContent><input aria-label="Slide notes" /></Carousel>);
  screen.getByRole("region",{name:"Projects"}).focus();await user.keyboard("{ArrowLeft}");expect(next).toHaveBeenCalledTimes(1);
  await user.keyboard("{ArrowRight}");expect(previous).toHaveBeenCalledTimes(1);
  screen.getByRole("textbox",{name:"Slide notes"}).focus();await user.keyboard("{ArrowLeft}");expect(next).toHaveBeenCalledTimes(1);
  view.unmount();next.mockClear();previous.mockClear();
  render(<Carousel aria-label="Projects" tabIndex={0} orientation="vertical" setApi={attach}><CarouselContent><CarouselItem>One</CarouselItem><CarouselItem>Two</CarouselItem></CarouselContent></Carousel>);
  screen.getByRole("region",{name:"Projects"}).focus();await user.keyboard("{ArrowDown}");expect(next).toHaveBeenCalledTimes(1);await user.keyboard("{ArrowUp}");expect(previous).toHaveBeenCalledTimes(1);
});
