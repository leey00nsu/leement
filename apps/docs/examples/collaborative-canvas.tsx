"use client";
import { useEffect, useState } from "react";
import {
  CollaborativeCanvas,
  type CanvasObject,
  type CanvasParticipant,
} from "../../../registry/blocks/collaborative-canvas";
import { Button } from "../../../registry/ui/button";

export default function CollaborativeCanvasExample() {
  const [objects, setObjects] = useState<CanvasObject[]>([
    {
      id: "brief",
      label: "Design brief",
      description: "Drag or use arrow keys",
      position: { x: 30, y: 55 },
    },
    {
      id: "review",
      label: "Review",
      description: "Keep it simple",
      position: { x: 70, y: 75 },
    },
  ]);
  const [participants, setParticipants] = useState<CanvasParticipant[]>([
    {
      id: "alex",
      name: "Alex",
      message: "Reviewing the layout",
      position: { x: 18, y: 15 },
    },
    { id: "sam", name: "Sam", position: { x: 70, y: 35 } },
  ]);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    let step = 0;
    const timer = window.setInterval(() => {
      step++;
      setParticipants((current) =>
        current.map((person, index) => ({
          ...person,
          position: {
            x: 15 + ((step * 11 + index * 39) % 65),
            y: 12 + ((step * 7 + index * 19) % 55),
          },
        })),
      );
    }, 2000);
    return () => window.clearInterval(timer);
  }, [running]);
  return (
    <div className="w-full min-w-0 space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setRunning(!running)}
        >
          {running ? "Pause simulation" : "Simulate presence"}
        </Button>
        <p className="text-xs text-muted-foreground">
          Local demo. Connect your own presence service.
        </p>
      </div>
      <CollaborativeCanvas
        objects={objects}
        onObjectsChange={setObjects}
        participants={participants}
      />
    </div>
  );
}
