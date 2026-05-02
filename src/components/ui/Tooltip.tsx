import { ReactNode } from 'react';

type TooltipProps = {
  label: string;
  children: ReactNode;
};

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className="relative group inline-flex">
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/90 px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {label}
      </span>
    </span>
  );
}
