import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";
import { VariantProps, cva } from "class-variance-authority";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  children: ReactNode;
  pending?: boolean;
}

const buttonVariants = cva(
  "inline-block px-6 py-4 rounded-md text-white shadow cursor-pointer font-medium",
  {
    variants: {
      variant: {
        primary: "bg-sky-500 hover:bg-sky-600",
        secondary: "bg-slate-500 hover:bg-slate-600",
        danger: "bg-red-500 hover:bg-red-600",
      },
      size: {
        sm: "px-4",
        md: "px-6",
        lg: "px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Button = ({ children, className, variant, size }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;
