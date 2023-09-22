"use client";
import { useState } from "react";
import { Button } from "./Button";

export default function ClickButton() {
  const [clicks, setClicks] = useState(0);

  return (
    <Button onClick={() => setClicks((prev) => prev + 1)}>
      {clicks} clicks
    </Button>
  );
}
