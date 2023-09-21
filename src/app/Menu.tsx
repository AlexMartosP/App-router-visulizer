"use client";

import { Button } from "@/components/Button";
import NavGroup from "@/components/NavGroup";
import NavItem from "@/components/NavItem";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="gap-2 lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!isOpen ? (
          <>
            <span>Menu</span>
            <MenuIcon />
          </>
        ) : (
          <>
            <span>Close</span>
            <X />
          </>
        )}
      </Button>
      <div
        className={cn(
          isOpen
            ? "fixed inset-0 top-20 px-8 bg-white z-30 lg:static lg:px-0 overflow-auto"
            : "hidden lg:block lg:static lg:px-0"
        )}
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName === "A") {
            setIsOpen(false);
          }
        }}
      >
        <NavGroup title="Routing">
          <NavItem href="/dynamic-routes">Dynamic routes</NavItem>
          <NavItem href="/catch-all">Catch all routes</NavItem>
          <NavItem href="/parallel">Parallel routes</NavItem>
          <NavItem href="/intercepting">Intercepting routes</NavItem>
        </NavGroup>
        <div className="py-4"></div>
        <NavGroup title="Layouts">
          <NavItem href="/nested-layouts">Nested layouts</NavItem>
          <NavItem href="/route-groups">Route groups (grouped layouts)</NavItem>
        </NavGroup>
        <div className="py-4"></div>
        <NavGroup title="Files & states">
          <NavItem href="/loading">Loading</NavItem>
          <NavItem href="/error">Error</NavItem>
          <NavItem href="/not-found">Not found</NavItem>
        </NavGroup>
        <div className="py-4"></div>
        <NavGroup title="Rendering & Data fetching">
          <NavItem href="/streaming">Streaming</NavItem>
          <NavItem href="/ssg">Static data (SSG)</NavItem>
          <NavItem href="/ssr">Dynamic data (SSR)</NavItem>
          <NavItem href="/isr">Incremental Static Regeneration</NavItem>
        </NavGroup>
        <div className="py-4"></div>
        <NavGroup title="Mutation">
          <NavItem href="/route-handler">Route handler</NavItem>
          <NavItem href="/server-actions">Server action</NavItem>
        </NavGroup>
        <div className="py-4"></div>
        <NavGroup title="Other">
          <NavItem href="/client-context">Client context</NavItem>
          <NavItem href="/pagination">Pagination w. infinite</NavItem>
          <NavItem href="/middleware">Middlewares</NavItem>
        </NavGroup>
      </div>
    </>
  );
}
