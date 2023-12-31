import ClickButton from "@/components/ClickButton";
import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashedBorder label="Checkout layout">
      <div className="flex flex-col lg:flex-row items-start gap-2 lg:items-center">
        <div className="flex-1">
          <h1>Checkout route group</h1>
          <p className="mt-4">
            This layout is only rendered for routes inside the
            &quot;checkout&quot; route group
          </p>
        </div>
        <ClickButton />
      </div>
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
