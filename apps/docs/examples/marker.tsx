"use client";
import { CheckCircle2 } from "lucide-react";
import { Marker, MarkerContent, MarkerIcon } from "../../../registry/ui/marker";
export default function MarkerExample() { return <div className="w-full max-w-sm space-y-5"><Marker variant="separator"><MarkerContent>Today</MarkerContent></Marker><Marker><MarkerIcon><CheckCircle2 /></MarkerIcon><MarkerContent>All changes saved</MarkerContent></Marker><Marker variant="border" render={<a href="/changelog" />}><MarkerContent>View release notes</MarkerContent></Marker></div>; }
