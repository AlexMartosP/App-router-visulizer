import { Button } from "@/components/Button";
import ClickButton from "@/components/ClickButton";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex items-center">
        <div className="flex-1">
          <h1>Layout (level 1)</h1>
          <p className="mt-4">This is a nested layout</p>
          <p>This does not re-render when navigating with the buttons below</p>
        </div>
        <ClickButton />
      </div>
      <div className="py-4"></div>
      <div className="flex gap-2">
        <Button variant="secondary" asChild>
          <Link href="/nested-layouts/smart-home/all">All</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/nested-layouts/smart-home/cameras">Cameras</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/nested-layouts/smart-home/smoke-detectors">
            Smoke detectors
          </Link>
        </Button>
      </div>
      <div className="py-4"></div>
      {children}
    </>
  );
}