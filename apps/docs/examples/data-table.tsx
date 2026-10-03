"use client";
import { useState } from "react";
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import { AdvancedDataTable } from "../../../registry/patterns/data-table";
type Member = { id: string; name: string; role: string; projects: number };
const data: Member[] = [
 {id:"alex", name:"Alex Lee", role:"Admin", projects:12},
 {id:"blair", name:"Blair Kim", role:"Editor", projects:7},
 {id:"casey", name:"Casey Park", role:"Editor", projects:9},
 {id:"dana", name:"Dana Choi", role:"Viewer", projects:3},
 {id:"eli", name:"Eli Han", role:"Editor", projects:5},
];
const columns: ColumnDef<Member>[] = [
 {accessorKey:"name", header:"Member"},
 {accessorKey:"role", header:"Role"},
 {accessorKey:"projects", header:"Projects"},
];
export default function DataTableExample() {
 const [selection,setSelection] = useState<RowSelectionState>({});
 return <AdvancedDataTable data={data} columns={columns} getRowId={row=>row.id} caption="Workspace members" searchColumn="name" searchLabel="Filter members…" pageSize={3} rowSelection={selection} onRowSelectionChange={setSelection} />;
}
