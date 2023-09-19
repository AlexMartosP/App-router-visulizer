import { Button } from "@/components/Button";
import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Loading</h1>
      <p className="mt-4">
        With a &nbsp;
        <span className="p-1 bg-muted rounded font-mono font-semibold text-sm">
          loading.tsx
        </span>
        &nbsp; you can create loading UI very easy.
      </p>
      <p>The pages below use an artificial delay to simulate loading.</p>
      <div className="py-4"></div>
      <div className="flex gap-2">
        <NavLink href="/loading">Main</NavLink>
        <NavLink href="/loading/computers">Computers</NavLink>
        <NavLink href="/loading/phones">Phones</NavLink>
        <NavLink href="/loading/smart-home">Smart home</NavLink>
      </div>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </>
  );
}
