"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface INavItem extends LinkProps, PropsWithChildren {}

export default function NavItem(props: INavItem) {
  const path = usePathname();

  const isActive = path === props.href;

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "justify-start -ml-4 text-gray-400",
        isActive && "text-black"
      )}
    >
      <Link {...props}>{props.children}</Link>
    </Button>
  );
}
