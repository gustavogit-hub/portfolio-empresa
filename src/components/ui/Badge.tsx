type BadgeProps = {
  children: string;
  className?: string;
};

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`rounded-full bg-gold/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-gold ${className}`}>
      {children}
    </span>
  );
}
