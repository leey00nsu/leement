"use client";

import { useState } from "react";
import { FilterGroup, FilterToggle, FilterToolbar } from "../../../registry/patterns/filter-toolbar";
import { SearchField } from "../../../registry/patterns/search-field";

const members = [
  { name: "Alex Morgan", role: "Admin", active: true },
  { name: "Jamie Park", role: "Editor", active: true },
  { name: "Taylor Kim", role: "Admin", active: false },
  { name: "Morgan Lee", role: "Editor", active: true },
];

export default function FilterToolbarExample() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [admins, setAdmins] = useState(false);
  const [sort, setSort] = useState("name");
  const results = members.filter((member) => member.name.toLowerCase().includes(query.toLowerCase()) && (!active || member.active) && (!admins || member.role === "Admin")).sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : a.role.localeCompare(b.role));

  return <div className="w-full space-y-3">
    <FilterToolbar>
      <SearchField aria-label="Search members" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search members" />
      <FilterGroup>
        <FilterToggle pressed={active} onClick={() => setActive(!active)}>Active only</FilterToggle>
        <FilterToggle pressed={admins} onClick={() => setAdmins(!admins)}>Admins</FilterToggle>
        <label className="sr-only" htmlFor="example-sort-members">Sort members</label>
        <select id="example-sort-members" value={sort} onChange={(event) => setSort(event.target.value)} className="h-10 rounded-md border border-border bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option value="name">Sort by name</option><option value="role">Sort by role</option></select>
      </FilterGroup>
    </FilterToolbar>
    <p role="status" className="text-xs text-muted-foreground">Showing {results.length} of {members.length} members</p>
    <ul className="divide-y divide-border rounded-lg border border-border bg-card text-sm">{results.length ? results.map((member) => <li key={member.name} className="flex justify-between gap-3 px-3 py-2.5"><span>{member.name}</span><span className="text-muted-foreground">{member.role} · {member.active ? "Active" : "Inactive"}</span></li>) : <li className="px-3 py-4 text-muted-foreground">No matching members.</li>}</ul>
  </div>;
}
