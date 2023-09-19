import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      <div className="flex gap-8 items-center">
        <Skeleton className="flex-1 h-[300px]" />
        <div className="flex-1">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-4 mt-4" />
          <Skeleton className="w-full h-12 mt-4" />
        </div>
      </div>
      <Skeleton className="w-full h-6 mt-8 mb-4" />
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((t) => (
          <div key={t}>
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-4 mt-2" />
          </div>
        ))}
      </div>
    </>
  );
}
