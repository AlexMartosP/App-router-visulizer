"use client";
import { Button } from "@/components/Button";
import { ErrorProps } from "next/error";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => {};
}) {
  return (
    <>
      <h1>An error occured</h1>
      <div className="py-1"></div>
      <p>
        <strong>Message: </strong> {error.message}
      </p>
      <div className="py-4"></div>

      <Button onClick={() => reset()}>Try again</Button>
    </>
  );
}
