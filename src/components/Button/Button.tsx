import { ButtonHTMLAttributes } from "react"
import { cva } from "class-variance-authority";
import cn from "@/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}

export const Button = ({ className, variant, ...props }: ButtonProps) => {
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
  'bg-blue-500 text-white',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-500 text-white',
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);
