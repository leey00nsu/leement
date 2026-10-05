import * as React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, test } from "vitest";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  DataTableColumnHeader,
  DataTablePagination,
  DataTableViewOptions,
} from "./data-table";
afterEach(cleanup);
const data = [{ name: "Alpha" }, { name: "Beta" }, { name: "Gamma" }];
const columns = [{ accessorKey: "name", header: "Name" }];
function Fixture() {
  const table = useReactTable({
    data,
    columns,
    initialState: { pagination: { pageSize: 2 } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <>
      <DataTableColumnHeader column={table.getColumn("name")!} title="Name" />
      <DataTablePagination table={table} />
      <DataTableViewOptions table={table} />
      <output aria-label="Current rows">
        {table
          .getRowModel()
          .rows.map((row) => row.original.name)
          .join(",")}
      </output>
      <output aria-label="Column visible">
        {String(table.getColumn("name")?.getIsVisible())}
      </output>
    </>
  );
}
test("table parts use native v8 page boundaries, sorting and visibility state", async () => {
  const user = userEvent.setup();
  render(<Fixture />);
  const previous = screen.getByRole("button", { name: "Go to previous page" });
  expect((previous as HTMLButtonElement).disabled).toBe(true);
  await user.click(screen.getByRole("button", { name: "Go to next page" }));
  expect(screen.getByLabelText("Current rows").textContent).toBe("Gamma");
  expect(
    (
      screen.getByRole("button", {
        name: "Go to next page",
      }) as HTMLButtonElement
    ).disabled,
  ).toBe(true);
  await user.click(screen.getByRole("button", { name: /^Name/ }));
  await user.click(await screen.findByRole("menuitem", { name: "Desc" }));
  await waitFor(() =>
    expect(screen.getByLabelText("Current rows").textContent).toBe(
      "Gamma,Beta",
    ),
  );
  await user.click(screen.getByRole("button", { name: "View" }));
  await user.click(
    await screen.findByRole("menuitemcheckbox", { name: "name" }),
  );
  await waitFor(() =>
    expect(screen.getByLabelText("Column visible").textContent).toBe("false"),
  );
});
