"use client";
import { Tags } from "../../../registry/ui/tags";
export default function TagsExample() { return <Tags label="Project tags" defaultValue={["Design", "Research"]} suggestions={["Frontend", "Research", "Documentation", "Accessibility"]} max={4} />; }
