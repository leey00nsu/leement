import * as React from "react";
import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import { AdvancedDataTable } from "./data-table";
import { DataTable, Table, TableCaption, TableHeader, TableHead, TableBody, TableRow, TableCell } from "../ui/table";
afterEach(cleanup);
type Row={id:string; name:string; role:string};
const data:Row[]=[{id:"b",name:"Blair",role:"Editor"},{id:"a",name:"Alex",role:"Admin"},{id:"c",name:"Casey",role:"Viewer"},{id:"d",name:"Dana",role:"Editor"}];
const columns:ColumnDef<Row>[]=[{accessorKey:"name",header:"Name"},{accessorKey:"role",header:"Role"}];
test("sorting, filtering and pagination render the right rows including empty results", async () => {
 const user=userEvent.setup();
 render(<AdvancedDataTable data={data} columns={columns} getRowId={row=>row.id} caption="Members" searchColumn="name" pageSize={2} />);
 expect(screen.getByRole("button",{name:"Previous"}).hasAttribute("disabled")).toBe(true);
 await user.click(screen.getByRole("button",{name:"Name"}));
 expect(screen.getAllByRole("row")[1].textContent).toContain("Alex");expect(screen.getByRole("columnheader",{name:"Name"}).getAttribute("aria-sort")).toBe("ascending");
 await user.click(screen.getByRole("button",{name:"Next"}));expect(screen.getByText("Dana")).toBeTruthy();expect(screen.queryByText("Alex")).toBeNull();
 await user.type(screen.getByRole("textbox",{name:"Filter rows"}),"Alex");await waitFor(()=>expect(screen.getByText("Alex")).toBeTruthy());expect(screen.queryByText("Dana")).toBeNull();expect(screen.getByRole("status").textContent).toContain("Page 1 of 1");
 await user.clear(screen.getByRole("textbox"));await user.type(screen.getByRole("textbox"),"missing");expect(screen.getByText("No results.")).toBeTruthy();expect(screen.getByRole("button",{name:"Next"}).hasAttribute("disabled")).toBe(true);
});
test("selection uses stable row IDs across pages and filtering with a controlled callback", async () => {
 const user=userEvent.setup();const changed=vi.fn();
 function Demo(){const [selection,setSelection]=React.useState<RowSelectionState>({});return <AdvancedDataTable data={data} columns={columns} getRowId={row=>row.id} caption="Members" searchColumn="name" pageSize={2} rowSelection={selection} onRowSelectionChange={updater=>{setSelection(previous=>{const next=typeof updater==="function"?updater(previous):updater;changed(next);return next;});}} />;}
 render(<Demo />);await user.click(screen.getByRole("checkbox",{name:"Select row b"}));expect(changed).toHaveBeenLastCalledWith({b:true});expect(screen.getByRole("checkbox",{name:"Select rows on this page"}).getAttribute("aria-checked")).toBe("mixed");
 await user.click(screen.getByRole("button",{name:"Next"}));await user.click(screen.getByRole("checkbox",{name:"Select rows on this page"}));expect(changed).toHaveBeenLastCalledWith({b:true,c:true,d:true});
 await user.click(screen.getByRole("button",{name:"Previous"}));expect(screen.getByRole("checkbox",{name:"Select row b"}).getAttribute("aria-checked")).toBe("true");
 await user.type(screen.getByRole("textbox"),"Alex");expect(screen.getByRole("status").textContent).toContain("0 of 1 rows selected");
});
test("column visibility removes headers and cells without hiding the final column", async () => {
 const user=userEvent.setup();
 render(<AdvancedDataTable data={data} columns={columns} getRowId={row=>row.id} caption="Members" enableRowSelection={false} />);
 screen.getByRole("button",{name:"Columns"}).focus();await user.keyboard("{Enter}");await user.click(await screen.findByRole("menuitemcheckbox",{name:"Role"}));await user.keyboard("{Escape}");
 expect(screen.queryByRole("columnheader",{name:"Role"})).toBeNull();expect(screen.queryByText("Admin")).toBeNull();
 screen.getByRole("button",{name:"Columns"}).focus();await user.keyboard("{Enter}");expect(screen.getByRole("menuitemcheckbox",{name:"Name"}).getAttribute("aria-disabled")).toBe("true");
});
test("native Table parts and the existing DataTable sorting API remain available", async () => {
 const user=userEvent.setup();const view=render(<Table><TableCaption>Native members</TableCaption><TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Alex</TableCell></TableRow></TableBody></Table>);
 expect(screen.getByRole("table",{name:"Native members"})).toBeTruthy();expect(screen.getByRole("columnheader").getAttribute("scope")).toBe("col");view.unmount();
 render(<DataTable data={data} caption="Legacy members" rowId={row=>row.id} columns={[{id:"name",header:"Name",cell:row=>row.name,sortValue:row=>row.name}]} />);
 await user.click(screen.getByRole("button",{name:"Name"}));expect(within(screen.getByRole("table")).getAllByRole("row")[1].textContent).toBe("Alex");
});
