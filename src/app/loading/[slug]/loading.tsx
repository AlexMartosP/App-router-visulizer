import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  );
}
