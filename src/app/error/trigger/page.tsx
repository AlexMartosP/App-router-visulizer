"use client";

import { Button } from "@/components/Button";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function Page() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("An error occured during rendering");
  }
  return (
    <>
      <h1>You got lucky</h1>
      <div className="py-2"></div>
      <Button onClick={() => setShouldError(true)}>Try again</Button>
    </>
  );
}
