"use client";

import Link from "next/link";
import { useId, type ReactNode } from "react";
import { ArrowRight, ArrowUp, BookOpen, Check, ChevronRight, CircleHelp, Code, FileText, Folder, Globe, Layers, Plus, Settings, Shield, Sparkles } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, XAxis } from "recharts";
import { Button } from "../../../registry/ui/button";
import { Badge } from "../../../registry/ui/badge";
import { Bubble, BubbleContent, BubbleGroup } from "../../../registry/ui/bubble";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../registry/ui/card";
import { ChartContainer } from "../../../registry/ui/chart";
import { Checkbox } from "../../../registry/ui/checkbox";
import { Input } from "../../../registry/ui/input";
import { Label } from "../../../registry/ui/label";
import { Progress } from "../../../registry/ui/progress";
import { QRCode } from "../../../registry/ui/qr-code";
import { Slider } from "../../../registry/ui/slider";
import { Switch } from "../../../registry/ui/switch";
import { Textarea } from "../../../registry/ui/textarea";
import { ResourceRow, ResourceRowLink } from "../../../registry/patterns/resource-row-link";

const activity = [42, 68, 57, 76, 40, 61].map((value, index) => ({ label: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"][index], value }));
const traffic = [32, 48, 42, 21, 39, 51, 49].map((value, index) => ({ label: String(index), value }));
const chartConfig = { value: { label: "Activity", color: "var(--lm-color-data-series1)" } };

function Example({ title, description, children, className = "" }: { title: string; description?: string; children: ReactNode; className?: string }) {
  return <Card size="sm" className={`home-example min-w-0 ${className}`}>
    <CardHeader><CardTitle>{title}</CardTitle>{description && <CardDescription className="text-xs leading-5">{description}</CardDescription>}</CardHeader>
    <CardContent>{children}</CardContent>
  </Card>;
}

function Bars({ compact = false }: { compact?: boolean }) {
  return <ChartContainer config={chartConfig} className={`${compact ? "h-20" : "h-44"} w-full aspect-auto`} aria-label="Example activity by month">
    <BarChart data={activity} margin={{ left: 0, right: 0, top: 8, bottom: 0 }} accessibilityLayer>
      <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} tickMargin={8} />
      <Bar dataKey="value" fill="var(--color-value)" fillOpacity={0.9} radius={[5, 5, 0, 0]} isAnimationActive={false} />
    </BarChart>
  </ChartContainer>;
}

function NavigationCard({ title, links }: { title: string; links: { label: string; href: string; icon: typeof BookOpen }[] }) {
  return <Card size="sm" className="home-example min-w-0 gap-2">
    <CardHeader><p className="text-xs text-muted-foreground">{title}</p></CardHeader>
    <CardContent className="space-y-1 px-2">
      {links.map(({ label, href, icon: Icon }) => <Button key={label} asChild variant="ghost" size="sm" className="w-full justify-start gap-2 px-2 text-xs"><Link href={href}><Icon className="size-3.5 shrink-0" aria-hidden="true" />{label}</Link></Button>)}
    </CardContent>
  </Card>;
}

export function HomeExamples() {
  const id = useId();
  return <div inert aria-hidden="true" className="home-showcase grid min-w-0 grid-cols-5 items-start gap-5 xl:gap-7">
    <div className="grid min-w-0 content-start gap-5 xl:gap-7">
      <Card size="sm" className="home-example min-w-0">
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2"><Button size="sm">Button <ArrowRight aria-hidden="true" /></Button><Button size="sm" variant="secondary">Secondary</Button></div>
          <Input aria-label="Your name" placeholder="Name" className="h-9 text-xs" />
          <Textarea aria-label="Your note" placeholder="Message" rows={2} className="min-h-16 text-xs" />
          <div className="flex flex-wrap items-center gap-2"><Badge>Badge</Badge><Badge variant="secondary">Secondary</Badge><Checkbox aria-label="Select example" checked={true} /><Switch aria-label="Example toggle" checked={true} size="sm" /></div>
          <Button asChild variant="outline" size="sm" className="w-full text-xs"><Link href="/components/button">Explore controls</Link></Button>
        </CardContent>
      </Card>
      <div className="grid min-w-0 grid-cols-2 gap-3">
        <NavigationCard title="Workspace" links={[{ label: "Projects", href: "/blocks/page-header", icon: Folder }, { label: "Documents", href: "/getting-started", icon: FileText }, { label: "Components", href: "/components/button", icon: Layers }, { label: "Charts", href: "/charts/area/chart-area-default", icon: Globe }]} />
        <NavigationCard title="Resources" links={[{ label: "Start here", href: "/getting-started", icon: ArrowRight }, { label: "Guides", href: "/getting-started", icon: BookOpen }, { label: "Support", href: "/adoption", icon: CircleHelp }, { label: "Colors", href: "/foundations/color", icon: Settings }]} />
      </div>
      <Example title="Milestones" description="Small steps toward something great.">
        <div className="space-y-4">
          {[{ label: "Design system", value: "24 / 32", progress: 75 }, { label: "Documentation", value: "18 / 40", progress: 45 }].map((goal) => <div key={goal.label} className="space-y-3 rounded-lg bg-muted/60 p-4"><p className="text-xs text-muted-foreground">{goal.label}</p><p className="text-2xl font-semibold tracking-tight">{goal.value}</p><Progress value={goal.progress} aria-label={`${goal.label} progress`} /><p className="text-xs text-muted-foreground">{goal.progress}% complete</p></div>)}
          <p className="text-xs leading-5 text-muted-foreground">A little progress, every day.</p>
        </div>
      </Example>
      <Example title="Team activity" description="Everyone moving in the same direction.">
        <div className="space-y-4">{["Alex Morgan", "Jamie Lee", "Taylor Kim"].map((name, i) => <div key={name} className="flex items-center gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">{name.split(" ").map(part => part[0]).join("")}</span><div className="min-w-0"><p className="text-xs font-medium">{name}</p><p className="text-xs text-muted-foreground">{["Updated the components", "Published a new guide", "Reviewed the project"][i]}</p></div></div>)}</div>
      </Example>
    </div>

    <div className="grid min-w-0 content-start gap-5 xl:gap-7">
      <Example title="Contribution history" description="A snapshot of the last six months.">
        <div className="space-y-4"><Bars /><div className="grid grid-cols-2 gap-2"><div className="rounded-lg bg-muted/60 p-3"><p className="text-[10px] uppercase text-muted-foreground">Upcoming</p><p className="mt-2 text-sm font-semibold">October release</p><p className="mt-1 text-xs text-muted-foreground">On schedule</p></div><div className="rounded-lg bg-muted/60 p-3"><p className="text-[10px] uppercase text-muted-foreground">This month</p><p className="mt-2 text-sm font-semibold">24 contributions</p><p className="mt-1 text-xs text-muted-foreground">+12% growth</p></div></div><Button asChild size="sm" className="w-full text-xs"><Link href="/charts/bar/chart-bar-default">View full report</Link></Button></div>
      </Example>
      <Example title="Project overview" description="Your workspace, at a glance.">
        <div className="space-y-5"><div><p className="text-3xl font-semibold tracking-tight">1,248</p><Badge variant="secondary" className="mt-2">+18.6% this month</Badge></div><div className="space-y-3 rounded-lg bg-muted/60 p-4">{[["Active projects", "24"], ["Completed tasks", "892"], ["Team members", "12"]].map(([label, value]) => <div key={label} className="flex justify-between gap-2 text-xs"><span className="text-muted-foreground">{label}</span><span className="font-medium">{value}</span></div>)}</div><p className="text-xs leading-5 text-muted-foreground">Everything you need to keep your work moving forward.</p></div>
      </Example>
      <Example title="Recent releases" description="Good things keep getting better.">
        <div className="space-y-3">{[["Components", "12 updates"], ["Documentation", "8 new guides"], ["Charts", "4 new examples"]].map(([label, detail]) => <div key={label} className="rounded-lg bg-muted/60 p-3"><div className="flex items-center justify-between text-xs"><span className="font-medium">{label}</span><Check className="size-3.5 text-muted-foreground" aria-hidden="true" /></div><p className="mt-1 text-xs text-muted-foreground">{detail}</p></div>)}<Button asChild variant="outline" size="sm" className="w-full text-xs"><Link href="/changelog">View changelog</Link></Button></div>
      </Example>
    </div>

    <div className="grid min-w-0 content-start gap-5 xl:gap-7">
      <Example title="Start something new" description="Give your next project a place to grow.">
        <div className="space-y-4">
          <div className="space-y-2"><Label htmlFor={`${id}-project`} className="text-xs">Project name</Label><Input id={`${id}-project`} placeholder="My next idea" readOnly value="Design workspace" className="h-9 text-xs" /></div>
          <div className="space-y-2"><Label htmlFor={`${id}-description`} className="text-xs">Description</Label><Textarea id={`${id}-description`} placeholder="What would you like to build?" rows={3} readOnly value="A shared foundation for our next ideas." className="text-xs" /></div>
          <Button type="button" size="sm" className="w-full text-xs">Create project</Button>
          <p className="text-xs leading-5 text-muted-foreground">Bring your next idea to life.</p>
        </div>
      </Example>
      <Example title="Make it your own" description="Thoughtful defaults. Room to adjust.">
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-3"><Label htmlFor={`${id}-updates`} className="text-xs">Project updates</Label><Switch id={`${id}-updates`} checked={true} size="sm" /></div>
          <div className="flex items-center justify-between gap-3"><Label htmlFor={`${id}-digest`} className="text-xs">Weekly digest</Label><Switch id={`${id}-digest`} checked={false} size="sm" /></div>
          <div className="space-y-3"><div className="flex items-center justify-between text-xs"><span>Weekly goal</span><span className="text-lg font-semibold">25 tasks</span></div><Slider aria-label="Weekly goal" value={[25]} min={5} max={50} /><div className="flex justify-between text-[10px] text-muted-foreground"><span>5 tasks</span><span>50 tasks</span></div></div>
          <div className="space-y-2"><Label htmlFor={`${id}-notes`} className="text-xs">Notes</Label><Textarea id={`${id}-notes`} placeholder="A few reminders for the week…" rows={3} className="text-xs" /></div>
          <Button type="button" size="sm" className="w-full text-xs">Save preferences</Button>
          <p className="text-xs text-muted-foreground">Tune your workspace to your rhythm.</p>
        </div>
      </Example>
      <Example title="Account access" description="Welcome back to your workspace.">
        <div className="space-y-4"><div className="space-y-2"><Label htmlFor={`${id}-email`} className="text-xs">Email address</Label><Input id={`${id}-email`} type="email" placeholder="you@example.com" readOnly value="alex@example.com" className="h-9 text-xs" /></div><div className="space-y-2"><Label htmlFor={`${id}-password`} className="text-xs">Password</Label><Input id={`${id}-password`} type="password" autoComplete="new-password" readOnly value="leement-demo" className="h-9 text-xs" /></div><Button type="button" size="sm" className="w-full text-xs"><Shield aria-hidden="true" />Sign in</Button><p className="text-xs text-muted-foreground">Your workspace, ready when you are.</p></div>
      </Example>
    </div>

    <div className="grid min-w-0 content-start gap-5 xl:gap-7">
      <Card size="sm" className="home-example min-w-0 py-7 text-center"><CardContent className="flex flex-col items-center gap-4"><QRCode value="https://leement.leey00nsu.com/getting-started" label="Open the documentation" size={136} showCopy={false} className="border-0 bg-transparent p-0" /><div><h3 className="text-sm font-semibold">Take your ideas with you</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">Scan to explore Leement on your phone.</p></div></CardContent></Card>
      <Example title="A new conversation" description="An idea is a good place to start.">
        <div className="space-y-5"><div className="flex min-h-40 flex-col items-center justify-center gap-3 text-center"><span className="flex size-10 items-center justify-center rounded-xl bg-muted"><Sparkles className="size-5" aria-hidden="true" /></span><p className="text-base font-semibold tracking-tight">What will you build today?</p><p className="text-xs leading-5 text-muted-foreground">A fresh workspace for your next idea.</p></div><BubbleGroup><Bubble variant="muted"><BubbleContent className="text-xs">Let’s make something simple, useful, and a little delightful.</BubbleContent></Bubble><Bubble align="end"><BubbleContent className="text-xs">Let’s start with a shared design language.</BubbleContent></Bubble></BubbleGroup><div className="relative"><Textarea aria-label="Chat message" placeholder="Share an idea…" rows={3} readOnly value="I have an idea for our next project…" className="pr-10 text-xs" /><Button type="button" aria-label="Send message" size="icon-sm" className="absolute right-2 bottom-2"><ArrowUp aria-hidden="true" /></Button></div></div>
      </Example>
      <Example title="Find your next step">
        <div className="space-y-3">{[{ title: "Build with components", detail: "Small pieces, endless possibilities.", href: "/components/button", icon: Settings }, { title: "Start with a block", detail: "A foundation for your next screen.", href: "/blocks/page-header", icon: Layers }, { title: "Explore the source", detail: "Code you can make your own.", href: "/getting-started", icon: Code }].map(({ title, detail, href, icon: Icon }) => <ResourceRow key={title} className="flex items-start gap-3 rounded-lg bg-muted/50 p-3"><Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><div className="min-w-0"><ResourceRowLink href={href} className="text-xs font-medium">{title}</ResourceRowLink><p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p></div><ChevronRight className="mt-1 size-3 shrink-0 text-muted-foreground" aria-hidden="true" /></ResourceRow>)}</div>
      </Example>
    </div>

    <div className="grid min-w-0 content-start gap-5 xl:gap-7">
      <Card size="sm" className="home-example min-w-0 py-7 text-center"><CardContent className="flex flex-col items-center gap-4"><span className="flex size-10 items-center justify-center rounded-xl bg-muted"><Plus className="size-5" aria-hidden="true" /></span><div><h3 className="text-sm font-semibold">Room for your next idea</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">Bring your first project to life with components that fit together.</p></div><Button asChild size="sm" className="mt-2 text-xs"><Link href="/getting-started">Create something <ArrowRight aria-hidden="true" /></Link></Button></CardContent></Card>
      <Example title="Analytics" description="A clearer picture of your progress.">
        <div className="space-y-3"><div className="flex flex-wrap items-center gap-2"><p className="text-2xl font-semibold tracking-tight">418.2K</p><Badge variant="secondary">+10%</Badge></div><ChartContainer config={chartConfig} className="h-28 w-full aspect-auto" aria-label="Example traffic trend"><AreaChart data={traffic} margin={{ top: 10, left: 0, right: 0, bottom: 0 }} accessibilityLayer><Area type="linear" dataKey="value" stroke="var(--color-value)" strokeOpacity={1} fill="var(--color-value)" fillOpacity={0.16} isAnimationActive={false} /></AreaChart></ChartContainer></div>
      </Example>
      <Example title="Notifications" description="Choose what you would like to hear about.">
        <div className="space-y-5">{[{ title: "Project activity", detail: "Changes, comments, and new ideas." }, { title: "Security alerts", detail: "Keep your account up to date." }, { title: "Product news", detail: "New components and improvements." }].map(({ title, detail }, index) => <div key={title} className="flex items-start gap-3"><Checkbox id={`${id}-alert-${index}`} checked={index < 2} /><div className="space-y-1"><Label htmlFor={`${id}-alert-${index}`} className="text-xs">{title}</Label><p className="text-xs leading-5 text-muted-foreground">{detail}</p></div></div>)}<Button type="button" size="sm" className="w-full text-xs">Save notifications</Button><p className="text-xs text-muted-foreground">Your attention, on your terms.</p></div>
      </Example>
      <Example title="A productive week" description="Steady progress adds up."><div className="space-y-4"><Bars compact /><div className="grid grid-cols-2 gap-4 border-t border-border pt-4"><div><p className="text-xs text-muted-foreground">Completed</p><p className="mt-1 text-xl font-semibold">128</p></div><div><p className="text-xs text-muted-foreground">Focus time</p><p className="mt-1 text-xl font-semibold">32h</p></div></div></div></Example>
    </div>
  </div>;
}
