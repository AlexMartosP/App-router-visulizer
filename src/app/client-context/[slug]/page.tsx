"use client";
import DashedBorder from "@/components/DashedBorder";
import { useCountContext } from "../context/Context";

export default function Page() {
  const countContext = useCountContext();

  return (
    <DashedBorder label="Client component (Page)">
      <h1>{countContext.count} count</h1>
    </DashedBorder>
  );
}
