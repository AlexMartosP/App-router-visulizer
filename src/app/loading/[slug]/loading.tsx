import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-6 lg:w-[250px] w-full" />
      <Skeleton className="h-4 lg:w-[250px]  w-full" />
    </div>
  );
}
