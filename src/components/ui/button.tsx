import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm border font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/40 disabled:pointer-events-none disabled:opacity-40 min-h-11 px-4 text-sm",
  {
    variants: {
      variant: {
        solid: "border-cyan bg-cyan text-panel hover:bg-cyan/90",
        ghost: "border-line bg-panel text-fg hover:border-fg/40",
        quiet: "border-transparent bg-transparent text-muted hover:text-fg",
      },
    },
    defaultVariants: { variant: "ghost" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, asChild, type = "button", ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} type={type} {...props} />;
}
