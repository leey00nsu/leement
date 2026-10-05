"use client";
import { useState } from "react";
import {
  Roadmap,
  type RoadmapFeature,
  type RoadmapMarker,
} from "../../../registry/blocks/roadmap";

const startDate = new Date(2026, 9, 5, 12);
const initialFeatures: RoadmapFeature[] = [
  {
    id: "tokens",
    name: "Token editor",
    statusId: "progress",
    startAt: startDate,
    endAt: new Date(2026, 9, 12, 12),
    owner: { id: "alex", name: "Alex" },
    group: "Foundations",
    product: "Docs",
    initiative: "Source ownership",
    release: "v0.2",
  },
  {
    id: "examples",
    name: "Component examples",
    statusId: "planned",
    startAt: new Date(2026, 9, 8, 12),
    endAt: new Date(2026, 9, 20, 12),
    owner: { id: "sam", name: "Sam" },
    group: "Registry",
    product: "Docs",
    initiative: "Source ownership",
    release: "v0.2",
  },
  {
    id: "theme",
    name: "Theme package",
    statusId: "done",
    startAt: startDate,
    endAt: new Date(2026, 9, 7, 12),
    owner: { id: "jordan", name: "Jordan" },
    group: "Foundations",
    product: "Theme",
    release: "v0.1",
  },
];
const statuses = [
  { id: "planned", name: "Planned" },
  { id: "progress", name: "In progress" },
  { id: "done", name: "Done" },
];
export default function RoadmapExample() {
  const [features, setFeatures] = useState(initialFeatures);
  const [markers, setMarkers] = useState<RoadmapMarker[]>([
    { id: "release", label: "Release", date: new Date(2026, 9, 23, 12) },
  ]);
  return (
    <Roadmap
      features={features}
      statuses={statuses}
      onFeaturesChange={setFeatures}
      markers={markers}
      onMarkersChange={setMarkers}
      startDate={startDate}
      getFeatureHref={(feature) => `https://example.com/issues/${feature.id}`}
      onAddFeature={(date) =>
        setFeatures((current) => [
          ...current,
          {
            id: `feature-${Date.now()}`,
            name: "New feature",
            statusId: "planned",
            startAt: date,
            endAt: date,
            group: "Registry",
          },
        ])
      }
    />
  );
}
