"use client";
import { useId, useState } from "react";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupButton,
} from "../../../registry/ui/input-group";
export default function Example() {
  const id = useId();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("Search Alex or Blair");
  return (
    <div className="w-full max-w-sm space-y-5">
      <form
        className="space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          setResult(
            ["Alex", "Blair"]
              .filter((n) => n.toLowerCase().includes(query.toLowerCase()))
              .join(", ") || "No matching members",
          );
        }}
      >
        <label htmlFor={id} className="text-sm font-medium">
          Search members
        </label>
        <InputGroup>
          <InputGroupAddon>
            <Search aria-hidden="true" />
          </InputGroupAddon>
          <InputGroupInput
            id={id}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputGroupButton type="submit" aria-label="Run search">
            <Search aria-hidden="true" />
          </InputGroupButton>
        </InputGroup>
        <p role="status" className="text-sm">
          {result}
        </p>
      </form>
      <label className="grid gap-2 text-sm">
        Storage limit
        <InputGroup>
          <InputGroupInput type="number" defaultValue={10} min={1} />
          <InputGroupAddon>GB</InputGroupAddon>
        </InputGroup>
      </label>
      <label className="grid gap-2 text-sm">
        Release notes
        <InputGroup>
          <InputGroupTextarea placeholder="What changed?" />
          <InputGroupAddon>Markdown</InputGroupAddon>
        </InputGroup>
      </label>
      <div className="space-y-2">
        <label htmlFor={`${id}-invalid`} className="text-sm">
          Website
        </label>
        <InputGroup>
          <InputGroupAddon>https://</InputGroupAddon>
          <InputGroupInput
            id={`${id}-invalid`}
            defaultValue="not a domain"
            aria-invalid="true"
            aria-describedby={`${id}-error`}
          />
        </InputGroup>
        <p id={`${id}-error`} className="text-sm text-destructive">
          Enter a valid domain.
        </p>
      </div>
      <InputGroup>
        <InputGroupInput
          disabled
          aria-label="Locked search"
          placeholder="Search unavailable"
        />
        <InputGroupButton disabled aria-label="Search unavailable">
          <Search aria-hidden="true" />
        </InputGroupButton>
      </InputGroup>
    </div>
  );
}
