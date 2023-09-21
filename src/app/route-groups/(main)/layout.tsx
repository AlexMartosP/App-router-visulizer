import { Button } from "@/components/Button";
import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashedBorder label="Main layout">
      <h1>Route groups (grouped layouts)</h1>
      <p className="mt-4">
        If you want to divide your routes in different layouts but don&apos;t
        want to add another route
      </p>
      <p className="mt-2">
        This is good for both DX and UX when the URL is shorter. If you want to
        divide you routes in different parts of he application use Route groups.
      </p>
      <div className="py-4"></div>
      <div className="flex gap-2 flex-wrap">
        <NavLink href="/route-groups">Main</NavLink>
        <NavLink href="/route-groups/all-products">All products (shop)</NavLink>
        <NavLink href="/route-groups/123">Single product (shop)</NavLink>
        <NavLink href="/route-groups/checkout">Checkout (checkout)</NavLink>
        <NavLink href="/route-groups/my-accound">My account (account)</NavLink>
      </div>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </DashedBorder>
  );
}
