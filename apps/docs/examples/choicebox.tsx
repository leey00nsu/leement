"use client";
import { Choicebox } from "../../../registry/ui/choicebox";
export default function ChoiceboxExample() { return <div className="w-full max-w-md"><Choicebox legend="Choose a workspace" defaultValue="personal" choices={[{ value: "personal", title: "Personal", description: "Work on your own projects" }, { value: "team", title: "Team", description: "Share work with colleagues" }, { value: "enterprise", title: "Enterprise", description: "Available on request", disabled: true }]} /></div>; }
