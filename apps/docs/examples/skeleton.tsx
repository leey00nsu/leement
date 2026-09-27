import { Skeleton } from "../../../registry/ui/skeleton";

export default function SkeletonExample() {
  return <div className="w-full max-w-sm space-y-3" aria-busy="true" aria-label="Loading profile">
    <Skeleton className="size-10 rounded-full" /><Skeleton className="h-4 w-2/3" /><Skeleton className="h-4 w-full" />
    <Skeleton variant="brand" className="h-4 w-1/2" />
    <span className="sr-only" role="status">Loading profile</span>
  </div>;
}
