import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {new Array(6).fill(null).map((t, i) => (
        <div key={i}>
          <div>
            <Skeleton className="w-full rounded-md aspect-square" />
          </div>
          <Skeleton className="w-full h-6 mt-4" />
          <Skeleton className="w-full h-4 mt-1" />
        </div>
      ))}
    </div>
  );
}
