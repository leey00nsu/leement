"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { ArrowRightIcon } from "lucide-react";

import { Button } from "../../../registry/ui/button";
import { ButtonGroup } from "../../../registry/ui/button-group";
import { Input } from "../../../registry/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../../../registry/ui/select";

const CURRENCIES = [
  { label: "US Dollar", value: "$" },
  { label: "Euro", value: "€" },
  { label: "British Pound", value: "£" },
];

function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState("$");

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select
          items={CURRENCIES}
          value={currency}
          onValueChange={(value) => setCurrency(value as string)}
        >
          <SelectTrigger className="font-mono">{currency}</SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start">
            <SelectGroup>
              {CURRENCIES.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.value}{" "}
                  <span className="text-muted-foreground">{item.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}

export default function Example() {
  return <ButtonGroupSelect />;
}
