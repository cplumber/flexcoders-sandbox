import * as React from "react";

import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  size?: "default" | "lg";
  variant?: "default" | "outline";
};

const Button = ({
  asChild = false,
  className,
  size = "default",
  variant = "default",
  children,
  type = "button",
  ...props
}: ButtonProps) => {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    size === "lg" ? "px-8 py-3" : "px-4 py-2",
    variant === "outline"
      ? "border border-zinc-200 bg-white text-zinc-900"
      : "text-white",
    className,
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;

    return React.cloneElement(child, {
      className: cn(classes, child.props.className),
    });
  }

  return (
    <button
      className={classes}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
