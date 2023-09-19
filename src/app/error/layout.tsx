import { Button } from "@/components/Button";
import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Error</h1>
      <p className="mt-4">
        With a &nbsp;
        <span className="p-1 bg-muted rounded font-mono font-semibold text-sm">
          error.tsx
        </span>
        &nbsp; you can create error UI very easy.
      </p>
      <p>The page below will throw an error during rendering.</p>
      <div className="py-4"></div>
      <div className="flex gap-2">
        <NavLink href="/error/trigger">Trigger error</NavLink>
      </div>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </>
  );
}
