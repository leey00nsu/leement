import * as React from "react";
import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./checkbox";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Field, FieldLabel, FieldControl, FieldDescription, FieldError } from "./field";
import { Input } from "./input";
import { NativeSelect } from "./native-select";
import { InputGroup, InputGroupInput } from "./input-group";
import { Toggle } from "./toggle";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
afterEach(cleanup);
test("checkbox submits only selected values and exposes mixed/disabled states", async () => {
 const user = userEvent.setup();
 const { container } = render(<form><label><Checkbox name="mail" value="yes" />Mail</label><Checkbox aria-label="Some rows" indeterminate /><Checkbox aria-label="Locked" name="locked" disabled /></form>);
 const mail = screen.getByRole("checkbox", {name:"Mail"});
 mail.focus(); await user.keyboard(" ");
 expect(mail.getAttribute("aria-checked")).toBe("true");
 expect(new FormData(container.querySelector("form")!).get("mail")).toBe("yes");
 expect(screen.getByRole("checkbox", {name:"Some rows"}).getAttribute("aria-checked")).toBe("mixed");
 await user.click(screen.getByRole("checkbox", {name:"Locked"}));
 expect(new FormData(container.querySelector("form")!).has("locked")).toBe(false);
});
test("controlled checkbox reports changes without overriding its owner", async () => {
 const user=userEvent.setup(); let next=false;
 render(<Checkbox aria-label="Owned" checked={false} onCheckedChange={v=>{next=v;}} />);
 await user.click(screen.getByRole("checkbox")); expect(next).toBe(true);
 expect(screen.getByRole("checkbox").getAttribute("aria-checked")).toBe("false");
});
test("radio arrow navigation selects one form value and skips disabled items", async () => {
 const user=userEvent.setup();
 const {container}=render(<form><RadioGroup name="role" aria-label="Role" defaultValue="viewer"><label><RadioGroupItem value="viewer" />Viewer</label><label><RadioGroupItem value="locked" disabled />Locked role</label><label><RadioGroupItem value="editor" />Editor</label></RadioGroup></form>);
 screen.getByRole("radio",{name:"Viewer"}).focus(); await user.keyboard("{ArrowDown}");
 await waitFor(()=>expect(screen.getByRole("radio",{name:"Editor"}).getAttribute("aria-checked")).toBe("true"));
 expect(new FormData(container.querySelector("form")!).get("role")).toBe("editor");
});
test("field connects label, description, error and invalid state to native Input", async () => {
 render(<Field invalid><FieldLabel>Email</FieldLabel><FieldControl render={<Input />} /><FieldDescription>Workspace updates</FieldDescription><FieldError match>Invalid email</FieldError></Field>);
 const input=screen.getByRole("textbox",{name:"Email"});
 await waitFor(()=>expect(input.getAttribute("aria-invalid")).toBe("true"));
 const ids=(input.getAttribute("aria-describedby")??"").split(" ");
 const described=ids.map(id=>document.getElementById(id)?.textContent).join(" ");
 expect(described).toContain("Workspace updates");expect(described).toContain("Invalid email");
});
test("native select and grouped input retain labels, form values and disabled behavior", async () => {
 const user=userEvent.setup();
 const {container}=render(<form><label>Role<NativeSelect name="role"><option value="viewer">Viewer</option><option value="editor">Editor</option></NativeSelect></label><InputGroup><InputGroupInput aria-label="Domain" name="domain" defaultValue="example.com" /></InputGroup><NativeSelect aria-label="Unavailable" name="locked" disabled><option>Locked</option></NativeSelect></form>);
 await user.selectOptions(screen.getByRole("combobox",{name:"Role"}),"editor");
 const values=new FormData(container.querySelector("form")!);
 expect(values.get("role")).toBe("editor");expect(values.get("domain")).toBe("example.com");expect(values.has("locked")).toBe(false);
});
test("toggle groups handle exclusive and multiple choices with keyboard", async () => {
 const user=userEvent.setup();
 render(<><Toggle aria-label="Bold" /><ToggleGroup aria-label="Density" defaultValue={["a"]}><ToggleGroupItem value="a">Compact</ToggleGroupItem><ToggleGroupItem value="b">Comfortable</ToggleGroupItem></ToggleGroup><ToggleGroup multiple aria-label="Format"><ToggleGroupItem value="x">Italic</ToggleGroupItem><ToggleGroupItem value="y">Underline</ToggleGroupItem><ToggleGroupItem value="z" disabled>Locked</ToggleGroupItem></ToggleGroup></>);
 const bold=screen.getByRole("button",{name:"Bold"});bold.focus();await user.keyboard(" ");expect(bold.getAttribute("aria-pressed")).toBe("true");
 const compact=screen.getByRole("button",{name:"Compact"});compact.focus();await user.keyboard("{ArrowRight}{Enter}");
 expect(compact.getAttribute("aria-pressed")).toBe("false");expect(screen.getByRole("button",{name:"Comfortable"}).getAttribute("aria-pressed")).toBe("true");
 await user.click(screen.getByRole("button",{name:"Italic"}));await user.click(screen.getByRole("button",{name:"Underline"}));await user.click(screen.getByRole("button",{name:"Locked"}));
 expect(screen.getByRole("button",{name:"Italic"}).getAttribute("aria-pressed")).toBe("true");expect(screen.getByRole("button",{name:"Underline"}).getAttribute("aria-pressed")).toBe("true");expect(screen.getByRole("button",{name:"Locked"}).getAttribute("aria-pressed")).toBe("false");
});
