"use client";

import { usePathname } from "next/navigation";

export default function URLBar() {
  const path = usePathname();

  return <>localhost:3000{path}</>;
}
