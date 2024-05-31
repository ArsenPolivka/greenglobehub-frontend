import { LinkHTMLAttributes, ReactNode } from 'react';
import NextLink from 'next/link';
import { cva } from 'class-variance-authority';
import cn from '@/helpers/cn';

export type LinkVariant = 'primary' | 'secondary' | 'tertiary';

type LinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: ReactNode;
  variant?: LinkVariant;
};

export const Link = ({
  to,
  children,
  className,
  variant,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      href={to}
      className={cn(
        linkVariants({ variant }),
        className
      )}
      {...props}
    >
      { children }
    </NextLink>
  )
}

const linkVariants = cva(
  'p-2 rounded transition-all select-none',
  {
    variants: {
      variant: {
        primary: 'bg-transparent hover:bg-primary',
        secondary: 'bg-main-black text-primary hover:text-main-white',
        tertiary: 'bg-transparent underline uppercase hover:no-underline'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);
