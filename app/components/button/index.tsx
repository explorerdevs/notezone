import { forwardRef } from "react";
import { tv } from "tailwind-variants";
import type { ButtonProps } from "./types";

export const buttonStyles = tv({
  base: "flex items-center justify-center gap-2 rounded-[0.5rem] transition-colors duration-300 focus:ring-2 focus:ring-grey-400 focus:ring-offset-2",
  variants: {
    size: {
      small: "min-h-[2rem] px-[0.75rem] font-normal text-[0.8rem]",
      medium: "min-h-[2.5rem] px-[1rem] font-medium text-[0.95rem]",
      large: "min-h-[3rem] px-[1.25rem] font-medium text-[1.1rem]",
    },
    variant: {
      primary: "bg-cobalt-500 text-white hover:bg-cobalt-700",
      secondary: "bg-grey-100 text-grey-600 hover:bg-white hover:text-grey-950",
      ghost: "bg-transparent text-txt-default-500 hover:bg-gray",
      danger: "bg-btn-negative text-white hover:bg-btn-negative-clicked",
    },
    disabled: {
      true: "!text-[#CACFD8] !bg-[#F3F5F8] cursor-not-allowed",
      false: "",
    },
    full: {
      true: "my-auto w-full",
      false: "my-auto w-fit",
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "primary",
    full: false,
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "medium",
      variant = "primary",
      className,
      disabled = false,
      children,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const classes = buttonStyles({
      size,
      variant,
      disabled,
    });
    return (
      <button
        type="button"
        className={`${classes} ${className} ${disabled ? (variant === "ghost" ? "" : "!bg-btn-disabled") : ""}`}
        ref={ref}
        disabled={disabled || props.loading}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
