"use client";

import { Avatar, AvatarFallback } from "../../../registry/ui/avatar";
import { Badge } from "../../../registry/ui/badge";
import { DataTable, type TableColumn } from "../../../registry/ui/table";

type Member = { id: string; name: string; email: string; role: string; projects: number; joined: string };
const data: Member[] = [
  { id: "a", name: "Alex Lee", email: "alex@example.com", role: "Admin", projects: 12, joined: "Jun 11, 2026" },
  { id: "b", name: "Blair Kim", email: "blair@example.com", role: "Editor", projects: 7, joined: "Jun 24, 2026" },
  { id: "c", name: "Casey Park", email: "casey@example.com", role: "Editor", projects: 9, joined: "Jul 2, 2026" },
  { id: "d", name: "Dana Choi", email: "dana@example.com", role: "Viewer", projects: 3, joined: "Jul 19, 2026" },
  { id: "e", name: "Eli Han", email: "eli@example.com", role: "Editor", projects: 5, joined: "Aug 3, 2026" },
];
const columns: TableColumn<Member>[] = [
  { id: "name", header: "Member", cell: (row) => <div className="flex items-center gap-2.5"><Avatar className="size-8"><AvatarFallback>{row.name.split(" ").map((part) => part[0]).join("")}</AvatarFallback></Avatar><div><p className="whitespace-nowrap font-medium">{row.name}</p><p className="whitespace-nowrap text-xs text-muted-foreground">{row.email}</p></div></div>, sortValue: (row) => row.name },
  { id: "role", header: "Role", cell: (row) => <Badge variant={row.role === "Admin" ? "default" : "secondary"}>{row.role}</Badge>, sortValue: (row) => row.role },
  { id: "projects", header: "Projects", cell: (row) => row.projects, sortValue: (row) => row.projects },
  { id: "joined", header: "Joined", cell: (row) => <span className="whitespace-nowrap">{row.joined}</span>, sortValue: (row) => new Date(row.joined) },
];

export default function TableExample() {
  return <DataTable className="w-full [&_table]:min-w-[640px]" caption="Workspace members" data={data} columns={columns} rowId={(row) => row.id} />;
}
