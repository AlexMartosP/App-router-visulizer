import { PropsWithChildren } from "react";

interface INavGroup extends PropsWithChildren {
  title: string;
  className?: string;
}

export default function NavGroup({ title, className, children }: INavGroup) {
  return (
    <div className={className}>
      <span className={`block text-xs font-bold mb-2`}>
        {title.toUpperCase()}
      </span>
      <nav className="flex flex-col gap-1">{children}</nav>
    </div>
  );
}
