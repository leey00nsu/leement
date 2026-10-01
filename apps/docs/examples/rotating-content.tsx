import { RotatingContent } from "../../../registry/ui/rotating-content";
export default function Example() {
  return <div className="w-full space-y-4"><p className="text-sm text-muted-foreground">A small decorative emphasis, with app-owned content.</p><RotatingContent label="Creative tools" items={[<span key="voice" className="text-xl font-semibold">Voice</span>, <span key="image" className="text-xl font-semibold">Images</span>, <span key="video" className="text-xl font-semibold">Video</span>]} /></div>;
}
