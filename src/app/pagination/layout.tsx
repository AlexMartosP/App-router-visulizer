import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Pagination</h1>
      <p className="mt-4">
        Here I try out regular pagination with search params and infinite scroll
        with the help of Server Actions.
      </p>
      <div className="py-4"></div>
      <div className="flex gap-2 flex-wrap">
        <NavLink href="/pagination">Regular</NavLink>
        <NavLink href="/pagination/infinite-scroll">Infinite scroll</NavLink>
      </div>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </>
  );
}
