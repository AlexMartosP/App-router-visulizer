"use client";

import DashedBorder from "@/components/DashedBorder";
import { useCountContext } from "../context/Context";
import { Button } from "@/components/Button";

export default function Counter() {
  const countContext = useCountContext();

  return (
    <DashedBorder label="Client component">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Counter</h2>
        <Button onClick={() => countContext.setCount((prev) => prev + 1)}>
          Count {countContext.count}
        </Button>
      </div>
    </DashedBorder>
  );
}
