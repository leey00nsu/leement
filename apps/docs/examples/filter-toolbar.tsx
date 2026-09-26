"use client";

import { useState } from "react";
import { FilterGroup, FilterToggle, FilterToolbar } from "../../../registry/patterns/filter-toolbar";
import { SearchField } from "../../../registry/patterns/search-field";

export default function FilterToolbarExample() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  return <FilterToolbar className="w-full"><SearchField aria-label="Search members" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search members" /><FilterGroup><FilterToggle pressed={active} onClick={() => setActive(!active)}>Active only</FilterToggle></FilterGroup></FilterToolbar>;
}
