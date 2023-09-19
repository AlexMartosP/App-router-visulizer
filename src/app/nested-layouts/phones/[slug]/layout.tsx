import DashedBorder from "@/components/DashedBorder";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Layout (level 2)</h1>
      <p className="mt-4">This is a nested layout</p>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </>
  );
}
