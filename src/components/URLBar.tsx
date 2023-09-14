"use client";

import { usePathname } from "next/navigation";

export default function URLBar() {
  const path = usePathname();

  return <div>localhost:3000{path}</div>;
}
