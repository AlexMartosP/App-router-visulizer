"use client";
import DashedBorder from "@/components/DashedBorder";
import { useCountContext } from "../../context/Context";
import { Button } from "@/components/Button";

export default function Page() {
  const countContext = useCountContext();

  return (
    <DashedBorder label="Client component (Page)">
      <Button onClick={() => countContext.setCount((prev) => prev + 1)}>
        Count {countContext.count}
      </Button>
    </DashedBorder>
  );
}
