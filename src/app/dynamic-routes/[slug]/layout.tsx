import { Button } from "@/components/Button";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="font-semibold">Change id</span>
      <div className="py-1"></div>
      <div className="flex gap-2">
        <Button variant="secondary" asChild>
          <Link href="/dynamic-routes/computers/1">Super fast computer(1)</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/dynamic-routes/phones/2">IPhone 15 Ultra Boost (2)</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/dynamic-routes/smart-home/3">Invisible camera (3)</Link>
        </Button>
      </div>
      <div className="py-4"></div>
      <div>{children}</div>
    </>
  );
}
