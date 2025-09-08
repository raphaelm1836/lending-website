import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:opacity-60 disabled:pointer-events-none";
  const variants = {
    primary: "bg-blue-700 hover:bg-blue-800 text-white",
    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-900"
  };
  const sizes = { sm: "h-9 px-3 text-sm", md: "h-10 px-4", lg: "h-12 px-6 text-lg" };
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}
