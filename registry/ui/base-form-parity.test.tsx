import * as React from "react";
import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from "./avatar";
import { Field, FieldLabel, FieldError } from "./field";
import { Input } from "./input";
import { InputGroup, InputGroupTextarea, InputGroupAddon, InputGroupButton } from "./input-group";
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty, ComboboxValue, ComboboxChip, ComboboxChips, ComboboxChipsInput, useComboboxAnchor } from "./combobox";
afterEach(cleanup);

test("Base button render, state classes and legacy disabled links preserve source composition", async()=>{
  const user=userEvent.setup(); const click=vi.fn();const child=vi.fn();const ref=React.createRef<HTMLElement>();
  render(<><Button ref={ref} variant="default" size="icon-xs" aria-label="Custom" render={<button />} className={state=>state.disabled?"off":"on"} onClick={click} /><Button asChild disabled><a href="/projects" onClick={child}>Projects</a></Button><Badge variant="link" render={<a href="/profile" />}>Profile</Badge></>);
  const button=screen.getByRole("button",{name:"Custom"});expect(ref.current).toBe(button);expect(button.className).toContain("size-8");expect(button.className).toContain("on");
  button.focus();await user.keyboard(" ");expect(click).toHaveBeenCalledTimes(1);
  const link=screen.getByRole("link",{name:"Projects"});expect(link.getAttribute("aria-disabled")).toBe("true");expect(link.tabIndex).toBe(-1);await user.click(link);expect(child).not.toHaveBeenCalled();expect(screen.getByRole("link",{name:"Profile"}).getAttribute("href")).toBe("/profile");
});

test("native Input associates with Base Field and explicit errors are unique", async()=>{
  render(<Field><FieldLabel>Email</FieldLabel><Input name="email" type="email" /><FieldError errors={[{message:"Enter an email"},{message:"Enter an email"},{message:"Use a work address"}]} /></Field>);
  const input=screen.getByRole("textbox",{name:"Email"});
  await waitFor(()=>expect(input.getAttribute("aria-describedby")).toBeTruthy());
  expect(screen.getAllByText("Enter an email")).toHaveLength(1);
  expect(screen.getByRole("alert").textContent).toContain("Use a work address");
});

test("input group block addons focus textarea and preserve button actions",async()=>{
 const user=userEvent.setup();const post=vi.fn();render(<InputGroup><InputGroupAddon align="block-start">Comment</InputGroupAddon><InputGroupTextarea aria-label="Comment" /><InputGroupAddon align="block-end"><InputGroupButton size="icon-xs" aria-label="Post" onClick={post}>+</InputGroupButton></InputGroupAddon></InputGroup>);
 await user.click(screen.getByText("Comment"));expect(document.activeElement).toBe(screen.getByRole("textbox",{name:"Comment"}));await user.click(screen.getByRole("button",{name:"Post"}));expect(post).toHaveBeenCalledTimes(1);
});

test("avatar compound parts retain sizes, fallback and custom badge content",()=>{
 const {container}=render(<AvatarGroup><Avatar size="sm"><AvatarFallback>LM</AvatarFallback><AvatarBadge aria-label="Available" /></Avatar><AvatarGroupCount>+3</AvatarGroupCount></AvatarGroup>);
 expect(container.querySelector('[data-slot="avatar"]')?.getAttribute("data-size")).toBe("sm");expect(screen.getByText("LM")).toBeTruthy();expect(screen.getByText("+3")).toBeTruthy();expect(screen.getByLabelText("Available")).toBeTruthy();
});

test("compound combobox clear and multiple chips use controlled native form values",async()=>{
 const user=userEvent.setup();
 function Choices(){const anchor=useComboboxAnchor();return <form><Combobox name="framework" items={["React","Vue"]} defaultValue="React"><ComboboxInput aria-label="Framework" showClear /><ComboboxContent><ComboboxEmpty>No options</ComboboxEmpty><ComboboxList>{(value:string)=><ComboboxItem key={value} value={value}>{value}</ComboboxItem>}</ComboboxList></ComboboxContent></Combobox><Combobox multiple name="tools" items={["Tokens","Source"]} defaultValue={["Tokens"]}><ComboboxChips ref={anchor}><ComboboxValue>{(values:string[])=><>{values.map(value=><ComboboxChip key={value}>{value}</ComboboxChip>)}<ComboboxChipsInput aria-label="Tools" /></>}</ComboboxValue></ComboboxChips><ComboboxContent anchor={anchor}><ComboboxList>{(value:string)=><ComboboxItem key={value} value={value}>{value}</ComboboxItem>}</ComboboxList></ComboboxContent></Combobox></form>;}
 const {container}=render(<Choices />);await user.click(screen.getByRole("button",{name:"Clear selection"}));expect((screen.getByRole("combobox",{name:"Framework"}) as HTMLInputElement).value).toBe("");
 await user.click(screen.getByRole("combobox",{name:"Tools"}));await user.click(await screen.findByRole("option",{name:"Source"}));
 await waitFor(()=>expect(new FormData(container.querySelector("form")!).getAll("tools")).toEqual(["Tokens","Source"]));
 await user.keyboard("{Escape}"); await user.click(screen.getByRole("button",{name:"Remove Tokens"}));
 await waitFor(()=>expect(new FormData(container.querySelector("form")!).getAll("tools")).toEqual(["Source"]));
});
