import DashedBorder from "@/components/DashedBorder";
import NavLink from "@/components/NavLink";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Middlewares</h1>
      <p className="mt-4">
        You can create a middleware to handle incoming requests.
      </p>
      <div className="py-4"></div>
      <div className="flex gap-2 flex-wrap flex-wrap">
        <NavLink href="/middleware/response">Response</NavLink>
        <NavLink href="/middleware/redirect">Redirect</NavLink>
        <NavLink href="/middleware/rewrite">Rewrite</NavLink>
      </div>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </>
  );
}
