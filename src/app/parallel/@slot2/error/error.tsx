"use client";
import { AlertCircle } from "lucide-react";
import { ErrorProps } from "next/error";

export default function Error(error: ErrorProps) {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-red-300 rounded-md">
      <AlertCircle />
      <span>Error</span>
    </div>
  );
}
