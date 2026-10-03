import { RotatingContent } from "../../../registry/ui/rotating-content";
export default function Example() {
  return <div className="flex max-w-sm flex-col items-center gap-4 text-center"><p className="text-sm text-muted-foreground">A small decorative emphasis, with app-owned content.</p><RotatingContent label="Creative tools" items={[<span key="voice" className="text-xl font-semibold">Voice</span>, <span key="image" className="text-xl font-semibold">Images</span>, <span key="video" className="text-xl font-semibold">Video</span>]} /></div>;
}
