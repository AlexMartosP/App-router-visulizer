import DashedBorder from "@/components/DashedBorder";
import { PropsWithChildren } from "react";
import ContextProvider from "./context/Context";
import NavLink from "@/components/NavLink";
import Counter from "./components/Counter";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashedBorder label="Server component boundary" color="blue">
      <ContextProvider>
        <DashedBorder label="Server component boundary" color="blue">
          <div className="flex gap-2 flex-wrap">
            <NavLink href="/client-context">Home</NavLink>
            <NavLink href="/client-context/computers">Computers</NavLink>
            <NavLink href="/client-context/phones">Phones</NavLink>
            <NavLink href="/client-context/smart-home">Smart home</NavLink>
          </div>
          <div className="py-4"></div>
          <Counter />
          <div className="py-4"></div>
          {children}
        </DashedBorder>
      </ContextProvider>
    </DashedBorder>
  );
}
