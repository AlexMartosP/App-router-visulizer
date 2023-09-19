import { Button } from "@/components/Button";
import DashedBorder from "@/components/DashedBorder";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Nested layouts</h1>
      <p className="mt-4">
        With App router you can nest layouts to create more advanced nested
        routes
      </p>
      <div className="py-4"></div>
      <div className="flex gap-2">
        <Button variant="secondary" asChild>
          <Link href="/nested-layouts/computers">Computers</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/nested-layouts/phones">Phones</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/nested-layouts/smart-home">Smart home</Link>
        </Button>
      </div>
      <div className="py-4"></div>
      {children}
    </>
  );
}
