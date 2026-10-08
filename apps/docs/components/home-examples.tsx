"use client";

import { useId, useState } from "react";
import { Button } from "../../../registry/ui/button";
import { Badge } from "../../../registry/ui/badge";
import { Calendar } from "../../../registry/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../registry/ui/card";
import { Input } from "../../../registry/ui/input";
import { Label } from "../../../registry/ui/label";
import { Progress } from "../../../registry/ui/progress";
import { StatusNotice } from "../../../registry/ui/status-notice";
import { Switch } from "../../../registry/ui/switch";
import { Textarea } from "../../../registry/ui/textarea";

const initialDate = new Date(2026, 9, 8, 12);
const formatDate = (date: Date) => date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export function HomeExamples() {
  const id = useId();
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const [savedProject, setSavedProject] = useState("");
  const [date, setDate] = useState<Date | undefined>(initialDate);
  const [notifications, setNotifications] = useState(true);
  const [digest, setDigest] = useState(false);

  return (
    <div className="grid min-w-0 items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="min-w-0">
        <CardHeader>
          <CardTitle>A place to start</CardTitle>
          <CardDescription>Give your next project a name.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(event) => { event.preventDefault(); setSavedProject(project.trim()); }}>
            <div className="space-y-2">
              <Label htmlFor={`${id}-project`}>Project name</Label>
              <Input id={`${id}-project`} name="project" placeholder="My next idea" required value={project} onChange={(event) => { setProject(event.target.value); setSavedProject(""); }} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-description`}>Description</Label>
              <Textarea id={`${id}-description`} name="description" placeholder="What would you like to build?" rows={3} value={description} onChange={(event) => { setDescription(event.target.value); setSavedProject(""); }} />
            </div>
            <Button type="submit" className="w-full" disabled={!project.trim()}>Create project</Button>
            <p role="status" className="min-h-10 break-words text-xs leading-5 text-muted-foreground">{savedProject ? `“${savedProject}” is ready in this example.` : "An interactive example. Changes stay on this page."}</p>
          </form>
        </CardContent>
      </Card>
      <Card className="min-w-0">
        <CardHeader>
          <CardTitle>Make some time</CardTitle>
          <CardDescription>A date for your next milestone.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-3">
          <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={initialDate} className="w-full max-w-sm" />
          <p role="status" className="min-h-5 text-center text-xs text-muted-foreground">{date ? formatDate(date) : "Choose a date."}</p>
        </CardContent>
      </Card>
      <div className="grid min-w-0 gap-4 md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:grid-cols-1 xl:col-span-2 xl:grid-cols-2">
        <Card className="min-w-0">
          <CardHeader>
            <CardTitle>A little less noise</CardTitle>
            <CardDescription>Keep updates on your terms.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <Label htmlFor={`${id}-notifications`}>Project updates</Label>
              <Switch id={`${id}-notifications`} checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Label htmlFor={`${id}-digest`}>Weekly digest</Label>
              <Switch id={`${id}-digest`} checked={digest} onCheckedChange={setDigest} />
            </div>
            <p role="status" className="text-xs text-muted-foreground">{[notifications && "Project updates", digest && "Weekly digest"].filter(Boolean).join(" and ") || "No updates"} enabled in this example.</p>
          </CardContent>
        </Card>
        <Card className="min-w-0" size="sm">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle>Moving forward</CardTitle>
              <Badge variant="secondary">In progress</Badge>
            </div>
            <CardDescription>3 of 4 steps complete</CardDescription>
          </CardHeader>
          <CardContent><Progress value={75} aria-label="Example project progress" /></CardContent>
        </Card>
      </div>
      <div className="min-w-0 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <StatusNotice tone="success" title="One design language, many possibilities." description="Explore the components and combine them into your own product." />
      </div>
    </div>
  );
}
