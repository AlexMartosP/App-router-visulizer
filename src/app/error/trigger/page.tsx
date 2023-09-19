"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page() {
  const router = useRouter();

  if (Math.round(Math.random()) === 0) {
    throw new Error("An error occured during rendering");
  }
  return (
    <>
      <h1>You got lucky</h1>
      <div className="py-2"></div>
      <Button onClick={() => router.refresh()}>Try again</Button>
    </>
  );
}
