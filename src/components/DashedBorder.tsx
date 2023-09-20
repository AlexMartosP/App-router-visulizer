import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

type DashedBorderProps = {
  children: ReactNode;
  label?: string;
  color?: "blue";
};
export default function DashedBorder({
  children,
  label,
  color,
}: DashedBorderProps) {
  return (
    <fieldset
      className={cn(
        "relative p-4 border-dashed border rounded-md border-gray-400 animate-light-up-border",
        color === "blue" && "border-blue-700"
      )}
    >
      {label && (
        <legend
          className={cn(
            "bg-gray-200 rounded-full text-xs font-medium px-2",
            color === "blue" && "bg-blue-500 text-white"
          )}
        >
          {label}
        </legend>
      )}
      {children}
    </fieldset>
  );
}
