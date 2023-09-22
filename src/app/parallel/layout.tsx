import { Button } from "@/components/Button";
import DashedBorder from "@/components/DashedBorder";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({
  children,
  slot1,
  slot2,
}: {
  children: ReactNode;
  slot1: ReactNode;
  slot2: ReactNode;
}) {
  return (
    <div>
      <h1>Parallel routes</h1>
      <p>Select a state to simulate</p>
      <div className="py-2"></div>
      <div className="flex gap-2 flex-wrap">
        <Button variant="secondary">
          <Link href="/parallel/default">Default</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/parallel/loading">Loading</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/parallel/not-found">Not found</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/parallel/error">Error</Link>
        </Button>
      </div>
      <div className="py-4"></div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1">{children}</div>
        <div className="flex-1">
          <DashedBorder>{slot1}</DashedBorder>
          <div className="py-2"></div>
          <DashedBorder>{slot2}</DashedBorder>
        </div>
      </div>
    </div>
  );
}
//    <p>Loading, error, default</p>
