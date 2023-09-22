"use client";
import { ReactNode } from "react";
import { Button } from "./Button";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  children: ReactNode;
} & LinkProps;

export default function NavLink({ children, ...props }: NavLinkProps) {
  const path = usePathname();

  const isActive = props.href === path;

  return (
    <Button variant={isActive ? "default" : "secondary"} asChild>
      <Link {...props}>{children}</Link>
    </Button>
  );
}
