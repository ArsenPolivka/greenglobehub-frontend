import Link from 'next/link';
import { cva } from 'class-variance-authority';
import cn from '@/helpers/cn';

import { Routes } from '@/utils/enums';

type LogoProps = {
  variant?: 'default' | 'dark';
  className?: string;
};

export const Logo = ({ className, variant }: LogoProps) => {
  return (
    <Link
      href={Routes.Home}
      className={cn(
        logoVariants({ variant }),
        className
      )}
    >
      GreenGlobe <span className={cn(logoSpanVariants({ variant }))}>Hub</span>
    </Link>
  )
}

const logoVariants = cva(
  'border-2 rounded text-lg h-full flex items-center pl-2 transition-all duration-300 ease-out z-20',
  {
    variants: {
      variant: {
        default: 'border-primary text-primary hover:bg-primary hover:bg-opacity-20',
        dark: 'border-main-black text-main-black'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const logoSpanVariants = cva(
  'block p-2 ml-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-main-black',
        dark: 'bg-main-black text-main-white'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);
