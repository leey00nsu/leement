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
import { useId, useRef, useState } from "react";
import { CalendarDays, Image, Info, MapPin, Tag, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Choicebox, type Choice } from "@/components/ui/choicebox";
import { Combobox, type ComboboxOption } from "@/components/ui/combobox";
import { MiniCalendar } from "@/components/ui/mini-calendar";
import { Tags } from "@/components/ui/tags";
import { Dropzone } from "@/components/ui/dropzone";
import { cn } from "@/lib/utils";

export type EventFormData = {
  name: string;
  organizer: string;
  description: string;
  eventType: string;
  venue: string;
  date: Date;
  tags: string[];
  files: File[];
};
export type EventFormProps = {
  title?: string;
  description?: string;
  className?: string;
  disabled?: boolean;
  defaultValue?: Partial<EventFormData>;
  eventTypes?: Choice[];
  venues?: ComboboxOption[];
  availableTags?: string[];
  onSubmit?: (data: EventFormData) => void | Promise<void>;
  onSaveDraft?: (data: EventFormData) => void | Promise<void>;
};
const defaultEventTypes: Choice[] = [
  {
    value: "conference",
    title: "Conference",
    description: "Speakers and networking",
  },
  { value: "workshop", title: "Workshop", description: "Hands-on learning" },
  {
    value: "meetup",
    title: "Meetup",
    description: "A gathering of like-minded people",
  },
  { value: "webinar", title: "Webinar", description: "An online presentation" },
];
const defaultVenues: ComboboxOption[] = [
  { value: "convention-center", label: "Convention center" },
  { value: "hotel", label: "Hotel ballroom" },
  { value: "university", label: "University hall" },
  { value: "co-working", label: "Co-working space" },
  { value: "online", label: "Online / virtual" },
];

/** UI composition only: submission, draft storage and file uploading belong to the app. */
export function EventForm({
  title = "Create your event",
  description = "Create and customize your upcoming event.",
  className,
  disabled,
  defaultValue = {},
  eventTypes = defaultEventTypes,
  venues = defaultVenues,
  availableTags = [
    "Technology",
    "Business",
    "Design",
    "Development",
    "Networking",
    "Education",
  ],
  onSubmit,
  onSaveDraft,
}: EventFormProps) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const locked = useRef(false);
  const [eventType, setEventType] = useState(
    defaultValue.eventType ?? eventTypes[0]?.value ?? "",
  );
  const [venue, setVenue] = useState(
    defaultValue.venue ?? venues[0]?.value ?? "",
  );
  const [date, setDate] = useState(
    defaultValue.date ?? new Date(2026, 9, 5, 12),
  );
  const [tags, setTags] = useState(defaultValue.tags ?? []);
  const [files, setFiles] = useState(defaultValue.files ?? []);
  const [fileError, setFileError] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  function readData(): EventFormData {
    const values = new FormData(formRef.current!);
    return {
      name: String(values.get("name") ?? "").trim(),
      organizer: String(values.get("organizer") ?? "").trim(),
      description: String(values.get("description") ?? "").trim(),
      eventType,
      venue,
      date,
      tags: [...tags],
      files: [...files],
    };
  }
  async function submit(draft: boolean) {
    const callback = draft ? onSaveDraft : onSubmit;
    if (!callback || disabled || locked.current) return;
    const data = readData();
    setError("");
    setStatus("");
    if (fileError) {
      setError(fileError);
      return;
    }
    if (
      !draft &&
      (!data.name ||
        !data.organizer ||
        !eventTypes.some(
          (type) => type.value === eventType && !type.disabled,
        ) ||
        !venues.some((option) => option.value === venue && !option.disabled))
    ) {
      setError("Provide an event name, organizer, event type and venue.");
      return;
    }
    locked.current = true;
    setPending(true);
    try {
      await callback(data);
      setStatus(draft ? "Draft saved." : "Event submitted.");
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Unable to save this event. Please try again.",
      );
    } finally {
      locked.current = false;
      setPending(false);
    }
  }
  return (
    <section
      className={cn(
        "mx-auto w-full min-w-0 max-w-xl px-4 py-12 sm:px-6",
        className,
      )}
    >
      <header className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </header>
      <form
        ref={formRef}
        aria-label="Event form"
        aria-busy={pending}
        className="space-y-8"
        onSubmit={(event) => {
          event.preventDefault();
          void submit(false);
        }}
      >
        <fieldset disabled={disabled || pending} className="min-w-0 space-y-8">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Info aria-hidden="true" className="size-5 shrink-0" />
              Basic information
            </h3>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`${id}-name`}>Event name</Label>
                <Input
                  id={`${id}-name`}
                  name="name"
                  defaultValue={defaultValue.name}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-organizer`}>Organizer</Label>
                <Input
                  id={`${id}-organizer`}
                  name="organizer"
                  defaultValue={defaultValue.organizer}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-description`}>Description</Label>
              <Textarea
                id={`${id}-description`}
                name="description"
                defaultValue={defaultValue.description}
                rows={3}
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Users aria-hidden="true" className="size-5 shrink-0" />
              Event type
            </h3>
            <Choicebox
              legend="Choose an event type"
              name={`${id}-type`}
              choices={eventTypes}
              value={eventType}
              onValueChange={setEventType}
              disabled={disabled || pending}
            />
            {!eventTypes.length && (
              <p role="status" className="text-sm text-muted-foreground">
                No event types available.
              </p>
            )}
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <MapPin aria-hidden="true" className="size-5 shrink-0" />
              Venue
            </h3>
            <Combobox
              options={venues}
              label="Choose a venue"
              value={venue}
              onValueChange={setVenue}
              disabled={disabled || pending}
              className="max-w-none"
            />
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <CalendarDays aria-hidden="true" className="size-5 shrink-0" />
              Select date
            </h3>
            <MiniCalendar
              value={date}
              defaultValue={date}
              onValueChange={setDate}
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Tag aria-hidden="true" className="size-5 shrink-0" />
              Event tags
            </h3>
            <Tags
              label="Tags"
              value={tags}
              onValueChange={setTags}
              suggestions={availableTags}
              disabled={disabled || pending}
              className="max-w-none"
            />
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Image aria-hidden="true" className="size-5 shrink-0" />
              Event images
            </h3>
            <Dropzone
              label="Event images"
              accept="image/*"
              multiple
              disabled={disabled || pending}
              className="p-4"
              onFiles={(next) => {
                if (
                  next.length > 5 ||
                  next.some((file) => file.size > 5 * 1024 * 1024)
                ) {
                  setFileError(
                    "Choose up to five images, each no larger than 5 MB.",
                  );
                  return;
                }
                setFileError("");
                setFiles(next);
                setStatus("");
              }}
            />
            {fileError && (
              <p role="alert" className="text-sm text-destructive">
                {fileError}
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              {files.length} images selected. Up to five images, 5 MB each.
              Files are handed to your app; no upload occurs here.
            </p>
          </div>
          <div className="flex flex-wrap justify-end gap-3">
            {onSaveDraft && (
              <Button
                type="button"
                variant="outline"
                disabled={disabled || pending}
                onClick={() => void submit(true)}
              >
                Save as draft
              </Button>
            )}
            <Button
              type="submit"
              disabled={
                disabled ||
                pending ||
                !onSubmit ||
                !eventTypes.length ||
                !venues.length
              }
              loading={pending}
            >
              Create event
            </Button>
          </div>
        </fieldset>
        {!onSubmit && (
          <p className="text-sm text-muted-foreground">
            Connect your application’s submission callback to enable creating
            events.
          </p>
        )}
        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}
        {status && (
          <p role="status" className="text-sm">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
