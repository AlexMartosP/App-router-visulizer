import DashedBorder from "@/components/DashedBorder";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <DashedBorder>{children}</DashedBorder>
    </>
  );
}
