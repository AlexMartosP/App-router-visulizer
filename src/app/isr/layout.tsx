import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <p className="mt-4">
        Try navigating with the buttons and watch the time they was revalidated.
      </p>
      <p>Each page revalidates every minute.</p>
      <div className="py-4"></div>
      <div className="flex gap-2 flex-wrap">
        <NavLink href="/isr">Main</NavLink>
        <NavLink href="/isr/1">Page 1</NavLink>
        <NavLink href="/isr/2">Page 2</NavLink>
        <NavLink href="/isr/3">Page 3</NavLink>
      </div>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </>
  );
}
