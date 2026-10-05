"use client";

/*
 * Adapted from Kibo UI: https://github.com/shadcnblocks/kibo
 * Kibo UI MIT license follows. Keep this notice with the source.
 *
 * Copyright (c) 2023 — Present shadcnblocks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import * as React from "react";
import {
  CalendarDays,
  ChartNoAxesGantt,
  Columns3,
  List as ListIcon,
  Table2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { List } from "@/components/ui/list";
import { DataTable, type TableColumn } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Gantt } from "@/components/blocks/gantt";
import { Kanban } from "@/components/blocks/kanban";
import { cn } from "@/lib/utils";

export type RoadmapView = "gantt" | "calendar" | "list" | "kanban" | "table";
export type RoadmapStatus = { id: string; name: string };
export type RoadmapFeature = {
  id: string;
  name: string;
  startAt: Date;
  endAt: Date;
  statusId: string;
  owner?: { id: string; name: string; image?: string };
  group?: string;
  product?: string;
  initiative?: string;
  release?: string;
};
export type RoadmapMarker = { id: string; date: Date; label: string };
export type RoadmapProps = Omit<React.ComponentProps<"section">, "onChange"> & {
  features: RoadmapFeature[];
  statuses: RoadmapStatus[];
  onFeaturesChange: (features: RoadmapFeature[]) => void;
  markers?: RoadmapMarker[];
  onMarkersChange?: (markers: RoadmapMarker[]) => void;
  onAddFeature?: (date: Date) => void;
  onViewFeature?: (feature: RoadmapFeature) => void;
  getFeatureHref?: (feature: RoadmapFeature) => string;
  view?: RoadmapView;
  defaultView?: RoadmapView;
  onViewChange?: (view: RoadmapView) => void;
  startDate?: Date;
  locale?: string;
  label?: string;
};

const viewDefinitions = [
  { id: "gantt", label: "Gantt", Icon: ChartNoAxesGantt },
  { id: "calendar", label: "Calendar", Icon: CalendarDays },
  { id: "list", label: "List", Icon: ListIcon },
  { id: "kanban", label: "Kanban", Icon: Columns3 },
  { id: "table", label: "Table", Icon: Table2 },
] as const;
const dateInput = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const parseDate = (value: string) => new Date(`${value}T12:00:00`);
const dayValue = (date: Date) =>
  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000;

/** Five views of one controlled dataset, adapted from Kibo's public Roadmap composition. */
export function Roadmap({
  features,
  statuses,
  onFeaturesChange,
  markers = [],
  onMarkersChange,
  onAddFeature,
  onViewFeature,
  getFeatureHref,
  view: controlledView,
  defaultView = "gantt",
  onViewChange,
  startDate,
  locale = "en-US",
  label = "Roadmap",
  className,
  ...props
}: RoadmapProps) {
  const [internalView, setInternalView] =
    React.useState<RoadmapView>(defaultView);
  const view = controlledView ?? internalView;
  const anchor = startDate ?? features[0]?.startAt ?? new Date();
  const [timelineStart, setTimelineStart] = React.useState(
    () =>
      new Date(anchor.getFullYear(), anchor.getMonth(), anchor.getDate(), 12),
  );
  const [timelineDays, setTimelineDays] = React.useState(30);
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [selectedDay, setSelectedDay] = React.useState(anchor);
  const [editing, setEditing] = React.useState<RoadmapFeature | null>(null);
  const [announcement, setAnnouncement] = React.useState("");
  const markerId = React.useId();
  const nameId = React.useId();
  const startId = React.useId();
  const endId = React.useId();
  const statusId = React.useId();
  const format = new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const filtered = features.filter(
    (feature) =>
      (statusFilter === "all" || feature.statusId === statusFilter) &&
      [
        feature.name,
        feature.group,
        feature.product,
        feature.initiative,
        feature.release,
        feature.owner?.name,
      ].some((value) =>
        value?.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      ),
  );
  const statusName = (id: string) =>
    statuses.find((status) => status.id === id)?.name ?? "Unknown status";
  const update = (id: string, patch: Partial<RoadmapFeature>) =>
    onFeaturesChange(
      features.map((feature) =>
        feature.id === id ? { ...feature, ...patch } : feature,
      ),
    );
  const remove = (id: string) => {
    onFeaturesChange(features.filter((feature) => feature.id !== id));
    setAnnouncement("Feature removed from the local roadmap.");
  };
  const openFeature = (feature: RoadmapFeature) => {
    if (onViewFeature) onViewFeature(feature);
    else setEditing(feature);
  };
  const copyLink = async (feature: RoadmapFeature) => {
    if (!getFeatureHref) return;
    try {
      await navigator.clipboard.writeText(getFeatureHref(feature));
      setAnnouncement("Feature link copied.");
    } catch {
      setAnnouncement("Could not copy the link. Check clipboard permissions.");
    }
  };
  const featureActions = (feature: RoadmapFeature) => (
    <div className="flex flex-wrap items-center gap-1">
      <Button
        size="xs"
        variant="ghost"
        onClick={() => openFeature(feature)}
        aria-label={`View ${feature.name}`}
      >
        View
      </Button>
      <Button
        size="xs"
        variant="ghost"
        disabled={!getFeatureHref}
        onClick={() => void copyLink(feature)}
        aria-label={`Copy link to ${feature.name}`}
      >
        Copy link
      </Button>
      <Button
        size="xs"
        variant="ghost"
        className="text-destructive"
        onClick={() => remove(feature.id)}
        aria-label={`Remove ${feature.name}`}
      >
        Remove
      </Button>
    </div>
  );
  const featureSummary = (feature: RoadmapFeature) => (
    <ContextMenu>
      <ContextMenuTrigger
        render={<button type="button" />}
        onClick={() => openFeature(feature)}
        className="flex w-full min-w-0 items-center gap-2 rounded-md text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {feature.owner && (
          <Avatar size="sm" className="shrink-0">
            <AvatarImage src={feature.owner.image} alt="" />
            <AvatarFallback>{feature.owner.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
        )}
        <span className="min-w-0">
          <span className="block font-medium">{feature.name}</span>
          <span className="block text-xs text-muted-foreground">
            {[
              feature.product,
              feature.group,
              feature.initiative,
              feature.owner?.name,
            ]
              .filter(Boolean)
              .join(" · ")}
          </span>
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => openFeature(feature)}>
          View feature
        </ContextMenuItem>
        <ContextMenuItem
          disabled={!getFeatureHref}
          onClick={() => void copyLink(feature)}
        >
          Copy link
        </ContextMenuItem>
        <ContextMenuItem
          variant="destructive"
          onClick={() => remove(feature.id)}
        >
          Remove from roadmap
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
  const columns: TableColumn<RoadmapFeature>[] = [
    {
      id: "name",
      header: "Name",
      cell: featureSummary,
      sortValue: (feature) => feature.name,
    },
    {
      id: "status",
      header: "Status",
      cell: (feature) => (
        <Badge variant="outline">{statusName(feature.statusId)}</Badge>
      ),
      sortValue: (feature) => statusName(feature.statusId),
    },
    {
      id: "start",
      header: "Start",
      cell: (feature) => format.format(feature.startAt),
      sortValue: (feature) => feature.startAt,
    },
    {
      id: "end",
      header: "End",
      cell: (feature) => format.format(feature.endAt),
      sortValue: (feature) => feature.endAt,
    },
    {
      id: "release",
      header: "Release",
      cell: (feature) => feature.release ?? "—",
      sortValue: (feature) => feature.release,
    },
    { id: "actions", header: "Actions", cell: featureActions },
  ];
  return (
    <section
      data-slot="roadmap"
      aria-label={label}
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-xl border border-border bg-card text-card-foreground",
        className,
      )}
      {...props}
    >
      <Tabs
        value={view}
        onValueChange={(value) => {
          const next = viewDefinitions.find((entry) => entry.id === value)?.id;
          if (!next) return;
          if (controlledView === undefined) setInternalView(next);
          onViewChange?.(next);
        }}
        className="gap-0"
      >
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
          <h3 className="font-semibold">{label}</h3>
          <TabsList
            aria-label="Roadmap view"
            className="max-w-full overflow-x-auto"
          >
            {viewDefinitions.map(({ id, label: viewLabel, Icon }) => (
              <TabsTrigger key={id} value={id} aria-label={viewLabel}>
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="sr-only">{viewLabel}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </header>
        <div className="flex flex-wrap items-center gap-2 border-b border-border p-4">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Filter roadmap"
            placeholder="Search features…"
            className="w-full sm:max-w-xs"
          />
          <Select
            value={statusFilter}
            items={[
              { value: "all", label: "All statuses" },
              ...statuses.map((status) => ({
                value: status.id,
                label: status.name,
              })),
            ]}
            onValueChange={(value) => {
              if (value !== null) setStatusFilter(value);
            }}
          >
            <SelectTrigger
              aria-label="Filter by status"
              className="w-full sm:w-40"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectItem value="all">All statuses</SelectItem>
              {statuses.map((status) => (
                <SelectItem key={status.id} value={status.id}>
                  {status.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {onAddFeature && (
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                onAddFeature(view === "calendar" ? selectedDay : timelineStart)
              }
            >
              Add feature
            </Button>
          )}
          <span className="text-xs text-muted-foreground">
            {filtered.length} features
          </span>
        </div>
        <TabsContent value="gantt" className="min-w-0 space-y-4 p-4">
          <div className="flex flex-wrap items-end gap-3">
            <label className="min-w-0 space-y-1 text-xs font-medium">
              Timeline start
              <Input
                type="date"
                aria-label="Timeline start"
                value={dateInput(timelineStart)}
                onChange={(event) => {
                  const next = parseDate(event.target.value);
                  if (!Number.isNaN(next.getTime())) setTimelineStart(next);
                }}
              />
            </label>
            <Select
              value={String(timelineDays)}
              items={[
                { value: "14", label: "Two weeks" },
                { value: "30", label: "Month" },
                { value: "90", label: "Quarter" },
              ]}
              onValueChange={(value) => {
                if (value) setTimelineDays(Number(value));
              }}
            >
              <SelectTrigger
                aria-label="Timeline range"
                className="w-full sm:w-36"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                <SelectItem value="14">Two weeks</SelectItem>
                <SelectItem value="30">Month</SelectItem>
                <SelectItem value="90">Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setTimelineStart(new Date())}
            >
              Today
            </Button>
          </div>
          <Gantt
            startDate={timelineStart}
            days={timelineDays}
            locale={locale}
            items={filtered.map((feature) => ({
              ...feature,
              title: feature.name,
            }))}
            onItemsChange={(next) =>
              onFeaturesChange(
                features.map((feature) => {
                  const changed = next.find((item) => item.id === feature.id);
                  return changed
                    ? {
                        ...feature,
                        startAt: changed.startAt,
                        endAt: changed.endAt,
                      }
                    : feature;
                }),
              )
            }
          />
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Milestones</h4>
            <div
              className="relative h-20 overflow-hidden rounded-md border border-border bg-muted/30"
              aria-label="Timeline milestones"
            >
              {markers
                .filter(
                  (marker) =>
                    dayValue(marker.date) >= dayValue(timelineStart) &&
                    dayValue(marker.date) <
                      dayValue(timelineStart) + timelineDays,
                )
                .map((marker) => (
                  <div
                    key={marker.id}
                    className="absolute inset-y-0 border-s border-dashed border-primary"
                    style={{
                      left: `${((dayValue(marker.date) - dayValue(timelineStart)) / timelineDays) * 100}%`,
                    }}
                  >
                    <span className="inline-block max-w-36 break-words bg-background p-1 text-xs">
                      {marker.label}
                    </span>
                  </div>
                ))}
            </div>
            <ul className="flex flex-wrap gap-2">
              {markers.map((marker) => (
                <li
                  key={marker.id}
                  className="flex items-center gap-2 rounded-md border border-border px-2 py-1 text-xs"
                >
                  <span>
                    {marker.label} · {format.format(marker.date)}
                  </span>
                  {onMarkersChange && (
                    <Button
                      size="xs"
                      variant="ghost"
                      aria-label={`Remove milestone ${marker.label}`}
                      onClick={() =>
                        onMarkersChange(
                          markers.filter((entry) => entry.id !== marker.id),
                        )
                      }
                    >
                      Remove
                    </Button>
                  )}
                </li>
              ))}
            </ul>
            {onMarkersChange && (
              <form
                className="flex flex-wrap items-end gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  const data = new FormData(event.currentTarget);
                  const date = parseDate(String(data.get("date")));
                  const title = String(data.get("label") ?? "").trim();
                  if (!title || Number.isNaN(date.getTime())) return;
                  onMarkersChange([
                    ...markers,
                    { id: `${markerId}-${Date.now()}`, label: title, date },
                  ]);
                  event.currentTarget.reset();
                  setAnnouncement("Milestone added.");
                }}
              >
                <label className="space-y-1 text-xs">
                  Milestone name
                  <Input name="label" required maxLength={100} />
                </label>
                <label className="space-y-1 text-xs">
                  Milestone date
                  <Input
                    name="date"
                    type="date"
                    required
                    defaultValue={dateInput(timelineStart)}
                  />
                </label>
                <Button size="sm" type="submit">
                  Add milestone
                </Button>
              </form>
            )}
          </div>
          <ul className="space-y-2">
            {filtered.map((feature) => (
              <li
                key={feature.id}
                className="flex flex-wrap items-center justify-between gap-2 border-b border-border py-2"
              >
                {featureSummary(feature)}
                {featureActions(feature)}
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="calendar" className="min-w-0 space-y-4 p-4">
          <Calendar
            variant="schedule"
            value={selectedDay}
            onValueChange={setSelectedDay}
            locale={locale}
            events={filtered.map((feature) => ({
              id: feature.id,
              title: feature.name,
              startAt: feature.startAt,
              endAt: feature.endAt,
            }))}
          />
          <ul className="space-y-2" aria-label="Features on selected date">
            {filtered
              .filter(
                (feature) =>
                  dayValue(feature.startAt) <= dayValue(selectedDay) &&
                  dayValue(feature.endAt) >= dayValue(selectedDay),
              )
              .map((feature) => (
                <li
                  key={feature.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border p-3"
                >
                  {featureSummary(feature)}
                  {featureActions(feature)}
                </li>
              ))}
          </ul>
        </TabsContent>
        <TabsContent value="list" className="space-y-4 p-4">
          {statuses.map((status) => (
            <section key={status.id} aria-label={status.name}>
              <h4 className="mb-2 text-sm font-semibold">{status.name}</h4>
              <List
                aria-label={`${status.name} features`}
                items={filtered
                  .filter((feature) => feature.statusId === status.id)
                  .map((feature) => ({ ...feature, label: feature.name }))}
                onItemsChange={(next) => {
                  const ids = new Set(next.map((feature) => feature.id));
                  let position = 0;
                  onFeaturesChange(
                    features.map((feature) => {
                      if (!ids.has(feature.id)) return feature;
                      const nextId = next[position++]!.id;
                      return features.find((entry) => entry.id === nextId)!;
                    }),
                  );
                }}
                renderItem={(feature) => (
                  <div className="space-y-2">
                    {featureSummary(feature)}
                    <div className="flex flex-wrap items-center gap-2">
                      <Select
                        value={feature.statusId}
                        items={statuses.map((item) => ({
                          value: item.id,
                          label: item.name,
                        }))}
                        onValueChange={(value) => {
                          if (value !== null)
                            update(feature.id, { statusId: value });
                        }}
                      >
                        <SelectTrigger
                          aria-label={`Status for ${feature.name}`}
                          size="sm"
                          className="w-full sm:w-36"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent alignItemWithTrigger={false}>
                          {statuses.map((item) => (
                            <SelectItem key={item.id} value={item.id}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {featureActions(feature)}
                    </div>
                  </div>
                )}
              />
            </section>
          ))}
        </TabsContent>
        <TabsContent value="kanban" className="min-w-0 p-4">
          <Kanban
            columns={statuses.map((status) => ({
              id: status.id,
              title: status.name,
            }))}
            cards={filtered.map((feature) => ({
              ...feature,
              title: feature.name,
              columnId: feature.statusId,
            }))}
            onCardsChange={(next) => {
              const ids = new Set(next.map((feature) => feature.id));
              onFeaturesChange([
                ...features.filter((feature) => !ids.has(feature.id)),
                ...next.map((card) => ({
                  ...features.find((feature) => feature.id === card.id)!,
                  statusId: card.columnId,
                })),
              ]);
            }}
            renderCard={(feature) => (
              <div className="space-y-2">
                {featureSummary(feature)}
                <p className="text-xs text-muted-foreground">
                  {format.format(feature.startAt)} –{" "}
                  {format.format(feature.endAt)}
                </p>
                {featureActions(feature)}
              </div>
            )}
          />
        </TabsContent>
        <TabsContent value="table" className="min-w-0 p-4">
          <DataTable
            caption={label}
            data={filtered}
            columns={columns}
            rowId={(feature) => feature.id}
          />
        </TabsContent>
      </Tabs>
      {!filtered.length && (
        <p role="status" className="p-4 text-sm text-muted-foreground">
          No matching features.
        </p>
      )}
      <p role="status" className="sr-only">
        {announcement}
      </p>
      <Dialog
        open={editing !== null}
        onOpenChange={(open) => {
          if (!open) setEditing(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit feature</DialogTitle>
            <DialogDescription>
              Changes are passed to your application through onFeaturesChange.
            </DialogDescription>
          </DialogHeader>
          {editing && (
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const start = parseDate(String(data.get("start")));
                const end = parseDate(String(data.get("end")));
                const name = String(data.get("name") ?? "").trim();
                if (
                  !name ||
                  Number.isNaN(start.getTime()) ||
                  Number.isNaN(end.getTime()) ||
                  dayValue(end) < dayValue(start)
                )
                  return;
                update(editing.id, {
                  name,
                  startAt: start,
                  endAt: end,
                  statusId: String(data.get("status")),
                });
                setEditing(null);
                setAnnouncement("Feature updated.");
              }}
            >
              <label htmlFor={nameId} className="block text-sm font-medium">
                Name
              </label>
              <Input
                id={nameId}
                name="name"
                defaultValue={editing.name}
                required
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <label htmlFor={startId} className="space-y-1 text-sm">
                  Start date
                  <Input
                    id={startId}
                    name="start"
                    type="date"
                    value={dateInput(editing.startAt)}
                    onChange={(event) => {
                      const date = parseDate(event.target.value);
                      if (!Number.isNaN(date.getTime()))
                        setEditing({ ...editing, startAt: date });
                    }}
                    required
                  />
                </label>
                <label htmlFor={endId} className="space-y-1 text-sm">
                  End date
                  <Input
                    id={endId}
                    name="end"
                    type="date"
                    min={dateInput(editing.startAt)}
                    defaultValue={dateInput(editing.endAt)}
                    required
                  />
                </label>
              </div>
              <label htmlFor={statusId} className="block text-sm font-medium">
                Status
              </label>
              <Select
                name="status"
                defaultValue={editing.statusId}
                items={statuses.map((status) => ({
                  value: status.id,
                  label: status.name,
                }))}
              >
                <SelectTrigger id={statusId} className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  {statuses.map((status) => (
                    <SelectItem key={status.id} value={status.id}>
                      {status.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditing(null)}
                >
                  Cancel
                </Button>
                <Button type="submit">Save feature</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
