import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md';
  href?: undefined;
};

type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md';
  href: string;
};

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = 'primary', size = 'md', className = '', children, ...rest } = props as any;
  const base = [
    'inline-flex items-center justify-center rounded-full font-semibold tracking-[0.14em] transition duration-300 ease-out',
    variant === 'primary' ? 'bg-gold text-black shadow-glow hover:bg-[#d4af37]/90' : '',
    variant === 'ghost' ? 'border border-white/10 bg-white/5 text-white hover:border-gold/40 hover:bg-white/10' : '',
    size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('href' in props && props.href) {
    return (
      <a className={base} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
