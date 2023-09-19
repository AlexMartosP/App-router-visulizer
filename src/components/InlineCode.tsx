import { PropsWithChildren } from "react";

export default function InlineCode({ children }: PropsWithChildren) {
  return (
    <span className="p-1 bg-muted rounded font-mono font-semibold text-sm">
      {children}
    </span>
  );
}
