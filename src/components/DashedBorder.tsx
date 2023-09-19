import { PropsWithChildren, ReactNode } from "react";

type DashedBorderProps = {
  children: ReactNode;
  label?: string;
};
export default function DashedBorder({ children, label }: DashedBorderProps) {
  return (
    <fieldset className="relative p-4 border-dashed border rounded-md border-gray-400 animate-light-up-border">
      {label && (
        <legend className="bg-gray-200 rounded-full text-xs font-medium px-2">
          {label}
        </legend>
      )}
      {children}
    </fieldset>
  );
}
