import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashedBorder label="Server component boundary (Layout)" color="blue">
      <div className="flex gap-2 flex-wrap">
        <NavLink href="/client-context/computers/laptops">Laptops</NavLink>
        <NavLink href="/client-context/phones/iphones">IPhones</NavLink>
        <NavLink href="/client-context/smart-home/cameras">Cameras</NavLink>
      </div>
      <div className="py-4"></div>
      {children}
    </DashedBorder>
  );
}
