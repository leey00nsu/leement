"use client";
import { useStyleMotion } from "@/lib/leement-motion";


import * as React from "react";
import { ChevronRight, File } from "lucide-react";
import { cn } from "@/lib/utils";

type TreeNode = { id: string; label: string; children?: TreeNode[]; disabled?: boolean };
type TreeProps = Omit<React.ComponentProps<"div">, "onSelect" | "defaultValue"> & {
  label: string;
  nodes: TreeNode[];
  selectedId?: string;
  defaultSelectedId?: string;
  onSelect?: (node: TreeNode) => void;
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  onExpandedChange?: (ids: string[]) => void;
};

function Tree({ label, nodes, selectedId, defaultSelectedId, onSelect, expandedIds, defaultExpandedIds = [], onExpandedChange, className, ...props }: TreeProps) {
  const styleMotionRef1 = useStyleMotion<SVGSVGElement>(undefined, ["rotate"]);

  const [internalSelected, setInternalSelected] = React.useState(defaultSelectedId);
  const [internalExpanded, setInternalExpanded] = React.useState(defaultExpandedIds);
  const [focusedId, setFocusedId] = React.useState(defaultSelectedId ?? nodes[0]?.id);
  const pendingFocus = React.useRef(false);
  const selected = selectedId ?? internalSelected;
  const expanded = expandedIds ?? internalExpanded;
  const refs = React.useRef(new Map<string, HTMLDivElement>());
  const visible: Array<{ node: TreeNode; depth: number; parentId?: string }> = [];
  function walk(branch: TreeNode[], depth: number, parentId?: string) {
    for (const node of branch) { visible.push({ node, depth, parentId }); if (node.children?.length && expanded.includes(node.id)) walk(node.children, depth + 1, node.id); }
  }
  walk(nodes, 0);
  React.useEffect(() => { if (pendingFocus.current && focusedId) { refs.current.get(focusedId)?.focus(); pendingFocus.current = false; } }, [focusedId, expandedIds, internalExpanded]);
  function changeExpanded(id: string) { const next = expanded.includes(id) ? expanded.filter((item) => item !== id) : [...expanded, id]; if (expandedIds === undefined) setInternalExpanded(next); onExpandedChange?.(next); }
  function choose(node: TreeNode) { if (node.disabled) return; if (selectedId === undefined) setInternalSelected(node.id); onSelect?.(node); }
  function handleKey(event: React.KeyboardEvent<HTMLDivElement>, index: number) {
    const entry = visible[index]; if (!entry) return;
    const { node, parentId } = entry;
    const moveTo = (target?: TreeNode) => { if (target && !target.disabled) { pendingFocus.current = true; setFocusedId(target.id); } };
    if (event.key === "ArrowDown") { event.preventDefault(); moveTo(visible.slice(index + 1).find((item) => !item.node.disabled)?.node); }
    else if (event.key === "ArrowUp") { event.preventDefault(); moveTo(visible.slice(0, index).reverse().find((item) => !item.node.disabled)?.node); }
    else if (event.key === "ArrowRight" && node.children?.length) { event.preventDefault(); if (expanded.includes(node.id)) moveTo(node.children.find((child) => !child.disabled)); else changeExpanded(node.id); }
    else if (event.key === "ArrowLeft") { event.preventDefault(); if (node.children?.length && expanded.includes(node.id)) changeExpanded(node.id); else moveTo(visible.find((item) => item.node.id === parentId)?.node); }
    else if (event.key === "Home") { event.preventDefault(); moveTo(visible.find((item) => !item.node.disabled)?.node); }
    else if (event.key === "End") { event.preventDefault(); moveTo([...visible].reverse().find((item) => !item.node.disabled)?.node); }
    else if (event.key === "Enter" || event.key === " ") { event.preventDefault(); choose(node); }
  }
  return <div data-slot="tree" role="tree" aria-label={label} className={cn("w-full rounded-xl border border-border bg-card p-2 text-card-foreground", className)} {...props}>
    {visible.map(({ node, depth }, index) => <div key={node.id} ref={(element) => { if (element) refs.current.set(node.id, element); else refs.current.delete(node.id); }} role="treeitem" aria-level={depth + 1} aria-expanded={node.children?.length ? expanded.includes(node.id) : undefined} aria-selected={selected === node.id} aria-disabled={node.disabled} tabIndex={node.disabled ? -1 : focusedId === node.id || (!focusedId && index === 0) ? 0 : -1} onFocus={() => setFocusedId(node.id)} onKeyDown={(event) => handleKey(event, index)} onClick={() => { if (node.disabled) return; choose(node); if (node.children?.length) changeExpanded(node.id); }} className={cn("flex min-h-9 cursor-pointer items-center gap-2 rounded-md py-1.5 pr-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", selected === node.id && "bg-primary/10 text-primary", node.disabled && "cursor-not-allowed opacity-50")} style={{ paddingInlineStart: `${8 + depth * 20}px` }}><span aria-hidden="true" className="flex size-4 items-center justify-center">{node.children?.length ? <ChevronRight ref={styleMotionRef1} className={cn("size-4", expanded.includes(node.id) && "rotate-90")} /> : <File className="size-3.5" />}</span>{node.label}</div>)}
    {visible.length === 0 && <p className="px-2 py-3 text-sm text-muted-foreground">No items</p>}
  </div>;
}

export { Tree };
export type { TreeNode, TreeProps };
