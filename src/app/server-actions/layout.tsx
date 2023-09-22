import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Server actions</h1>
      <p className="mt-4">
        You can create functions on the server that you call from the client
      </p>
      <div className="py-4"></div>
      <div className="flex gap-2 flex-wrap">
        <NavLink href="/server-actions">CRUD</NavLink>
        <NavLink href="/server-actions/form-status">Form status</NavLink>
        <NavLink href="/server-actions/optimistic-updates">
          Optimistic updates
        </NavLink>
      </div>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </>
  );
}
