"use client";
import { Combobox } from "../../../registry/ui/combobox";
export default function ComboboxExample() { return <Combobox label="Assign to" options={[{ value: "alex", label: "Alex Kim" }, { value: "jamie", label: "Jamie Park" }, { value: "robin", label: "Robin Lee" }, { value: "casey", label: "Casey Choi" }, { value: "dana", label: "Dana Han" }, { value: "eli", label: "Eli Seo", disabled: true }]} />; }
