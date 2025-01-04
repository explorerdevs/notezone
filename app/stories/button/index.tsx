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
  base: "flex items-center justify-center gap-2 rounded-lg font-medium text-sm transition-colors",
  defaultVariants: { variant: "primary", size: "md" },
  variants: {
    variant: {
      // TODO: Need to add focus states, shadow config into tailwind.json
      generic: "",
      /**Primary */
      primary: "bg-cobalt-500 text-white hover:bg-cobalt-700 focus:shadow-sm",
      ghost:
        "bg-grey-100 text-grey-600 hover:bg-white hover:text-grey-950 hover:outline",
      monochrome:
        "bg-white text-grey-950 outline hover:bg-grey-100 hover:text-grey-600 hover:outline-none",
      destructive: "bg-ruby-500 text-white",
    },
    size: { sm: "", md: "px-4 py-3", lg: "" },
    disabled: {
      true: "pointer-events-none cursor-not-allowed bg-grey-50 text-grey-300",
    },
    stretch: { true: "w-full" },
  },
  compoundVariants: [
    { variant: ["ghost", "monochrome"], className: "outline-1 outline-grey-300" },
  ],
});
