import { PropsWithChildren } from "react";

export default function DashedBorder({ children }: PropsWithChildren) {
  return (
    <div className="relative p-4 border-dashed border rounded-md border-gray-400">
      {children}
    </div>
  );
}
