import { Skeleton } from "@/components/ui/skeleton";
import { Fragment } from "react";

export function MetricCardSkeleton() {
  return (
    <Fragment>
      <Skeleton className="mt-1 h-7 w-36" />
      <Skeleton className="h-4 w-52" />
    </Fragment>
  );
}
