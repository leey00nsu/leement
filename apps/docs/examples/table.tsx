"use client";

import { DataTable, type TableColumn } from "../../../registry/ui/table";

type Member = { id: string; name: string; role: string; projects: number };
const data: Member[] = [{ id: "a", name: "Alex", role: "Editor", projects: 7 }, { id: "b", name: "Blair", role: "Viewer", projects: 3 }, { id: "c", name: "Casey", role: "Admin", projects: 12 }];
const columns: TableColumn<Member>[] = [{ id: "name", header: "Name", cell: (row) => row.name, sortValue: (row) => row.name }, { id: "role", header: "Role", cell: (row) => row.role, sortValue: (row) => row.role }, { id: "projects", header: "Projects", cell: (row) => row.projects, sortValue: (row) => row.projects }];

export default function TableExample() {
  return <DataTable className="w-full" caption="Workspace members" data={data} columns={columns} rowId={(row) => row.id} />;
}
