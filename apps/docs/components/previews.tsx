"use client";

import type { ComponentType } from "react";
import ButtonExample from "../examples/button";
import InputExample from "../examples/input";
import SelectExample from "../examples/select";
import SwitchExample from "../examples/switch";
import TabsExample from "../examples/tabs";
import LabelExample from "../examples/label";
import TextareaExample from "../examples/textarea";
import BadgeExample from "../examples/badge";
import CardExample from "../examples/card";
import SeparatorExample from "../examples/separator";
import DialogExample from "../examples/dialog";
import TooltipExample from "../examples/tooltip";
import PageHeaderExample from "../examples/page-header";
import EmptyStateExample from "../examples/empty-state";
import FormSectionExample from "../examples/form-section";
import SearchFieldExample from "../examples/search-field";
import StatCardExample from "../examples/stat-card";
import SettingsSectionExample from "../examples/settings-section";
import { items } from "../lib/items";

const examples: Record<keyof typeof items, ComponentType> = {
  button: ButtonExample,
  input: InputExample,
  select: SelectExample,
  switch: SwitchExample,
  tabs: TabsExample,
  label: LabelExample,
  textarea: TextareaExample,
  badge: BadgeExample,
  card: CardExample,
  separator: SeparatorExample,
  dialog: DialogExample,
  tooltip: TooltipExample,
  "page-header": PageHeaderExample,
  "empty-state": EmptyStateExample,
  "form-section": FormSectionExample,
  "search-field": SearchFieldExample,
  "stat-card": StatCardExample,
  "settings-section": SettingsSectionExample,
};

export function Preview({ name }: { name: keyof typeof items }) {
  const Example = examples[name];
  return <div className="flex min-h-44 w-full items-center rounded-xl border border-border bg-background p-6 text-foreground sm:p-8"><Example /></div>;
}
