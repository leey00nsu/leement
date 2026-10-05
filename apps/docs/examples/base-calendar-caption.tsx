// Adapted from the pinned shadcn/ui Base example (MIT).
"use client"

import { Calendar } from "../../../registry/ui/calendar"

export default function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  )
}
