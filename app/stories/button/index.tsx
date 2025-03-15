import { tv } from "tailwind-variants";

import type { ButtonProps } from "./__types__";

export const Button = ({
  children,
  ref,
  variant,
  size,
  disabled,
  ...restProps
}: ButtonProps) => {
  return (
    <button {...restProps} ref={ref} className={button({ variant, size, disabled })}>
      {children}
    </button>
  );
};

export const button = tv({
  base: "flex items-center justify-center gap-2 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-grey-400 focus:ring-offset-3",
  defaultVariants: { variant: "primary", size: "md" },
  variants: {
    variant: {
      generic: "focus:ring-grey-400",
      /**Primary */
      primary: "bg-cobalt-500 text-white hover:bg-cobalt-700",
      ghost:
        "bg-grey-100 text-grey-600 hover:bg-white hover:text-grey-950 hover:outline focus:ring-grey-300",
      monochrome:
        "bg-white text-grey-950 outline hover:bg-grey-100 hover:text-grey-600 hover:outline-hidden focus:ring-grey-300",
      destructive: "bg-ruby-500 text-white focus:ring-ruby-100",
    },
    size: { sm: "px-3 py-2", md: "px-4 py-3", lg: "px-4 py-3" },
    disabled: {
      true: "pointer-events-none cursor-not-allowed bg-grey-50 text-grey-300 focus:ring-0",
    },
    stretch: { true: "w-full" },
  },
  compoundVariants: [
    { variant: ["ghost", "monochrome"], className: "outline-1 outline-grey-300" },
  ],
});
