import { Button } from "@/components/Button";
import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Streaming</h1>
      <p className="mt-4">
        With NEXT.js App Router streaming is available with RSC and Suspense
      </p>
      <p>Try navigating to &quot;Product&quot; and watch content stream in</p>
      <div className="py-4"></div>
      <div className="flex gap-2 flex-wrap">
        <NavLink href="/streaming">Home</NavLink>
        <NavLink href="/streaming/SKU001">Product</NavLink>
      </div>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </div>
  );
}
