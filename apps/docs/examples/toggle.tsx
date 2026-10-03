import { Bold, Italic } from "lucide-react";
import { Toggle } from "../../../registry/ui/toggle";
export default function ToggleExample() { return <div className="flex flex-wrap gap-2"><Toggle aria-label="Bold" variant="outline"><Bold /></Toggle><Toggle aria-label="Italic" defaultPressed><Italic /></Toggle><Toggle disabled>Unavailable</Toggle></div>; }
