import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashedBorder label="Server component boundary (Layout)" color="blue">
      {children}
    </DashedBorder>
  );
}
