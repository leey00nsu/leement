"use client";
import { Button } from "../../../registry/ui/button";
import { Input } from "../../../registry/ui/input";
import { Textarea } from "../../../registry/ui/textarea";
import { Badge } from "../../../registry/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../registry/ui/card";
import { Separator } from "../../../registry/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../../registry/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../registry/ui/tooltip";
import { PageHeader } from "../../../registry/patterns/page-header";
import { EmptyState } from "../../../registry/patterns/empty-state";
import { FormSection } from "../../../registry/patterns/form-section";
import { SearchField } from "../../../registry/patterns/search-field";
import { StatCard } from "../../../registry/patterns/stat-card";
import { SettingsSection } from "../../../registry/blocks/settings-section";
export function Preview({ name }: { name: string }) { const examples: Record<string, React.ReactNode> = {
  button: <div className="flex flex-wrap gap-3"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="destructive">Destructive</Button><Button disabled>Disabled</Button><Button loading>Saving</Button></div>,
  input: <div className="max-w-sm space-y-3"><label htmlFor="preview-input" className="text-sm font-medium">Email</label><Input id="preview-input" type="email" placeholder="you@example.com" /><Input aria-label="Disabled input" disabled placeholder="Unavailable" /></div>,
  textarea: <div className="max-w-md"><label htmlFor="preview-textarea" className="text-sm font-medium">Description</label><Textarea id="preview-textarea" placeholder="Tell us more..." /></div>,
  badge: <div className="flex flex-wrap gap-2"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outline">Outline</Badge><Badge variant="destructive">Destructive</Badge></div>,
  card: <Card className="max-w-sm"><CardHeader><CardTitle>Workspace</CardTitle><CardDescription>A contained group of related information.</CardDescription></CardHeader><CardContent><p className="text-sm">12 active members</p></CardContent></Card>,
  separator: <div className="max-w-sm space-y-4"><p>Profile</p><Separator /><p>Preferences</p></div>,
  dialog: <Dialog><DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Edit workspace</DialogTitle><DialogDescription>Update details for your team.</DialogDescription></DialogHeader><Input aria-label="Workspace name" defaultValue="Studio" /></DialogContent></Dialog>,
  tooltip: <TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="outline">Hover or focus</Button></TooltipTrigger><TooltipContent>More information</TooltipContent></Tooltip></TooltipProvider>,
  "page-header": <PageHeader className="w-full"><PageHeader.Content><PageHeader.Title>Members</PageHeader.Title><PageHeader.Description>Manage members of your workspace.</PageHeader.Description></PageHeader.Content><PageHeader.Actions><Button>Add member</Button></PageHeader.Actions></PageHeader>,
  "empty-state": <EmptyState className="w-full" title="No projects yet" description="Create a project to start organizing your work." action={<Button>Create project</Button>} />,
  "form-section": <FormSection className="w-full" title="Profile" description="This information is visible to your team."><label htmlFor="preview-name" className="text-sm font-medium">Name</label><Input id="preview-name" placeholder="Your name" /></FormSection>,
  "search-field": <SearchField className="w-full max-w-sm" placeholder="Search members..." />,
  "stat-card": <StatCard className="w-full max-w-xs" label="Active members" value="1,248" detail="Up 12% this month" />,
  "settings-section": <SettingsSection title="Notifications" description="Choose how we contact you."><label htmlFor="preview-notify" className="text-sm font-medium">Email address</label><Input id="preview-notify" placeholder="you@example.com" /></SettingsSection>,
}; return <div className="flex min-h-44 items-center rounded-xl border border-border bg-background p-6">{examples[name]}</div>; }
