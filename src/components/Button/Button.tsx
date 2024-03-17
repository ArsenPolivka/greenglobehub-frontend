import { ButtonHTMLAttributes } from "react"
import { cva } from "class-variance-authority";
import cn from "@/helpers/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "disabled";
}

export const Button = ({
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        className
      )}
      {...props}
    />
  )
}

const buttonVariants = cva(
  'bg-transparent text-main-black py-3.5 px-6 border-2 rounded select-none transition-all',
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
