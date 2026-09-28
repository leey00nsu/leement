"use client";

import { useState } from "react";
import { SearchField } from "../../../registry/patterns/search-field";

const members = ["Alex Morgan", "Jamie Park", "Taylor Kim", "Morgan Lee"];

export default function SearchFieldExample() {
  const [query, setQuery] = useState("");
  const results = members.filter((member) => member.toLowerCase().includes(query.toLowerCase()));

  return <div className="w-full max-w-sm space-y-3">
    <SearchField aria-label="Search members" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search members..." />
    <p role="status" className="text-xs text-muted-foreground">{results.length} of {members.length} members</p>
    <ul className="divide-y divide-border rounded-lg border border-border bg-card text-sm">
      {results.length ? results.map((member) => <li key={member} className="px-3 py-2.5">{member}</li>) : <li className="px-3 py-4 text-muted-foreground">No matching members.</li>}
    </ul>
  </div>;
}
