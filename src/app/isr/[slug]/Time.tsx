"use client";

import { useEffect, useState } from "react";

export default function Time({ buildTime }: { buildTime: number }) {
  const [time, setTime] = useState(() =>
    Math.floor((Date.now() - buildTime) / 1000)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span className="px-4 py-1 bg-primary rounded-full text-sm font-medium text-white">
      {time} seconds
    </span>
  );
}
