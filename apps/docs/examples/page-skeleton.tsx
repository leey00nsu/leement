import { PageSkeleton } from "../../../registry/patterns/page-skeleton";

export default function PageSkeletonExample() {
  return <PageSkeleton rows={2} label="Loading members" className="p-0" />;
}
