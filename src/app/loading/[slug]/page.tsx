import { wait } from "@/lib/utils";
import SlowComponent from "../SlowComponent";
import { Suspense } from "react";
import { Skeleton } from "@/components/Skeleton";

export default async function Page({ params }: { params: { slug: string } }) {
  await wait(1000);

  return (
    <>
      <h1>
        <span className="capitalize">{params.slug}</span> is now loaded
      </h1>
      <p>This page took at least 1 second to load</p>
      <div className="py-4"></div>
      <p>Slow component is loading below using Suspense</p>
      <div className="py-2"></div>
      <Suspense fallback={<Fallback />}>
        <SlowComponent />
      </Suspense>
    </>
  );
}

function Fallback() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 lg:w-12 w-4 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 lg:w-[250px] w-full" />
        <Skeleton className="h-4 lg:w-[200px] w-full" />
      </div>
    </div>
  );
}
