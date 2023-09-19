import DashedBorder from "@/components/DashedBorder";
import InlineCode from "@/components/InlineCode";
import NavLink from "@/components/NavLink";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Not found</h1>
      <p className="mt-4">
        With a &nbsp;
        <InlineCode>not-found.tsx</InlineCode>
        &nbsp; you can create a custom 404 UI very easy.
      </p>
      <p>
        The custom 404 will render when you call &nbsp;
        <InlineCode>noFound()</InlineCode>
        &nbsp; or there is no matching route page.
      </p>
      <div className="py-4"></div>
      <div className="flex gap-2">
        <NavLink href="/not-found/triggered">Triggered with notFound()</NavLink>
        <NavLink href="/not-found/unknown">Unknown route</NavLink>
      </div>
      <div className="py-4"></div>
      <DashedBorder>{children}</DashedBorder>
    </>
  );
}
