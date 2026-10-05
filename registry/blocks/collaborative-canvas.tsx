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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarStack } from "@/components/ui/avatar-stack";
import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorName,
  CursorPointer,
} from "@/components/ui/cursor";
import { Button } from "@/components/ui/button";
import { useStyleMotion } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

export type CanvasPosition = { x: number; y: number };
export type CanvasParticipant = {
  id: string;
  name: string;
  avatar?: string;
  position?: CanvasPosition;
  message?: string;
};
export type CanvasObject = {
  id: string;
  label: string;
  description?: string;
  position: CanvasPosition;
};
export type CollaborativeCanvasProps = Omit<
  React.ComponentProps<"section">,
  "onPointerMove"
> & {
  participants: CanvasParticipant[];
  objects: CanvasObject[];
  onObjectsChange?: (objects: CanvasObject[]) => void;
  onCursorMove?: (position: CanvasPosition | null) => void;
  children?: React.ReactNode;
  label?: string;
};

const clamp = (value: number) => Math.min(100, Math.max(0, value));
function ParticipantCursor({
  participant,
}: {
  participant: CanvasParticipant;
}) {
  const ref = useStyleMotion<HTMLDivElement>(undefined, ["left", "top"]);
  if (!participant.position) return null;
  const right = participant.position.x > 50;
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute z-20 text-primary"
      style={{
        left: `${clamp(participant.position.x)}%`,
        top: `${clamp(participant.position.y)}%`,
      }}
    >
      <Cursor>
        <CursorPointer />
        <CursorBody
          className={cn(
            "max-w-40 whitespace-normal border-primary/20 bg-primary/10 text-foreground",
            right && "-translate-x-full -ml-1",
            participant.position.y > 70 && "-translate-y-full",
          )}
        >
          <CursorName>{participant.name}</CursorName>
          {participant.message && (
            <CursorMessage>{participant.message}</CursorMessage>
          )}
        </CursorBody>
      </Cursor>
    </div>
  );
}

/** Presence data and network transport belong to the host application. */
export function CollaborativeCanvas({
  participants,
  objects,
  onObjectsChange,
  onCursorMove,
  children,
  label = "Collaborative canvas",
  className,
  ...props
}: CollaborativeCanvasProps) {
  const surface = React.useRef<HTMLDivElement>(null);
  const drag = React.useRef<{
    id: string;
    pointerId: number;
    origin: CanvasPosition;
    pointer: CanvasPosition;
  } | null>(null);
  const objectsRef = React.useRef(objects);
  objectsRef.current = objects;
  const [announcement, setAnnouncement] = React.useState("");
  const normalized = (clientX: number, clientY: number) => {
    const rect = surface.current?.getBoundingClientRect();
    if (!rect?.width || !rect.height) return null;
    return {
      x: clamp(((clientX - rect.left) / rect.width) * 100),
      y: clamp(((clientY - rect.top) / rect.height) * 100),
    };
  };
  const move = (id: string, position: CanvasPosition, announce = false) => {
    onObjectsChange?.(
      objectsRef.current.map((item) =>
        item.id === id
          ? {
              ...item,
              position: { x: clamp(position.x), y: clamp(position.y) },
            }
          : item,
      ),
    );
    if (announce)
      setAnnouncement(
        `${objectsRef.current.find((item) => item.id === id)?.label ?? "Object"} moved to ${Math.round(clamp(position.x))}%, ${Math.round(clamp(position.y))}%.`,
      );
  };
  return (
    <section
      data-slot="collaborative-canvas"
      aria-label={label}
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-xl border border-border bg-card text-card-foreground",
        className,
      )}
      {...props}
    >
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
        <h3 className="text-sm font-semibold">{label}</h3>
        <AvatarStack
          aria-label={
            participants.length
              ? `${participants.length} participants: ${participants.map((person) => person.name).join(", ")}`
              : "No participants"
          }
          size={28}
          animate
        >
          {participants.map((participant) => (
            <Avatar key={participant.id}>
              <AvatarImage src={participant.avatar} alt={participant.name} />
              <AvatarFallback>{participant.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarStack>
      </header>
      <div
        ref={surface}
        className="relative h-96 min-h-80 overflow-hidden bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px]"
        onPointerMove={(event) =>
          onCursorMove?.(normalized(event.clientX, event.clientY))
        }
        onPointerLeave={() => onCursorMove?.(null)}
      >
        {children}
        {objects.map((object) => (
          <Button
            key={object.id}
            variant="outline"
            aria-label={`Move ${object.label}. Arrow keys move by 2 percent, Shift by 10 percent.`}
            disabled={!onObjectsChange}
            className="absolute z-10 h-auto w-36 max-w-[90%] touch-none flex-col items-start gap-1 whitespace-normal p-3 text-start disabled:opacity-100"
            style={{
              left: `clamp(4.5rem,${clamp(object.position.x)}%,calc(100% - 4.5rem))`,
              top: `clamp(2.5rem,${clamp(object.position.y)}%,calc(100% - 2.5rem))`,
              transform: "translate(-50%, -50%)",
            }}
            onPointerDown={(event) => {
              if (!onObjectsChange || event.button !== 0) return;
              const position = normalized(event.clientX, event.clientY);
              if (!position) return;
              drag.current = {
                id: object.id,
                pointerId: event.pointerId,
                origin: object.position,
                pointer: position,
              };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              const current = drag.current;
              if (
                !current ||
                current.pointerId !== event.pointerId ||
                current.id !== object.id
              )
                return;
              const position = normalized(event.clientX, event.clientY);
              if (position)
                move(current.id, {
                  x: current.origin.x + position.x - current.pointer.x,
                  y: current.origin.y + position.y - current.pointer.y,
                });
            }}
            onPointerUp={(event) => {
              if (drag.current?.pointerId !== event.pointerId) return;
              drag.current = null;
              event.currentTarget.releasePointerCapture(event.pointerId);
              setAnnouncement(`${object.label} position updated.`);
            }}
            onPointerCancel={() => {
              drag.current = null;
            }}
            onLostPointerCapture={() => {
              drag.current = null;
            }}
            onKeyDown={(event) => {
              const delta = {
                ArrowLeft: [-1, 0],
                ArrowRight: [1, 0],
                ArrowUp: [0, -1],
                ArrowDown: [0, 1],
              }[event.key];
              if (!delta || !onObjectsChange) return;
              event.preventDefault();
              const step = event.shiftKey ? 10 : 2;
              move(
                object.id,
                {
                  x: object.position.x + delta[0]! * step,
                  y: object.position.y + delta[1]! * step,
                },
                true,
              );
            }}
          >
            <span className="font-medium">{object.label}</span>
            {object.description && (
              <span className="text-xs font-normal text-muted-foreground">
                {object.description}
              </span>
            )}
          </Button>
        ))}
        {participants.map((participant) => (
          <ParticipantCursor key={participant.id} participant={participant} />
        ))}
      </div>
      <div className="border-t border-border p-3 text-xs text-muted-foreground">
        {onObjectsChange
          ? "Drag an object, or focus it and use the arrow keys."
          : "Read-only canvas."}{" "}
        <span role="status" className="sr-only">
          {announcement}
        </span>
      </div>
    </section>
  );
}
