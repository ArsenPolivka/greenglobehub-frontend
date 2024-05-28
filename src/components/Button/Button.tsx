import { ReactNode } from "react";
import { cva } from "class-variance-authority";

import cn from "@/helpers/cn";

type ButtonProps = {
  variant?: "primary" | "secondary" | "disabled";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  ref?: React.ForwardedRef<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({
  className,
  variant,
  children,
  ref,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        className
      )}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      { children }
    </button>
  )
}

const buttonVariants = cva(
  'bg-transparent text-main-black py-3.5 px-6 border-2 rounded select-none transition-all text-center cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary border-primary hover:bg-primary-100 hover:border-primary-100',
        secondary: 'border-primary hover:bg-primary',
        disabled: 'bg-main-gray pointer-events-none'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);
