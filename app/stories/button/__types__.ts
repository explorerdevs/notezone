import type { VariantProps } from "tailwind-variants";
import type { button } from ".";

export type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "disabled">,
    ButtonVariants {
  ref?: React.Ref<HTMLButtonElement>;
}

// export interface ButtonProps extends ComponentProps<"button">, ButtonVariants {
//   /**
//    * Specifies the size of the button.
//    * Can be 'small', 'medium', or 'large'.
//    */
//   size?: "small" | "medium" | "large";
//   /**
//    * Defines the visual style of the button.
//    * Can be 'primary', 'secondary', or 'danger'.
//    */
//   variant?: "primary" | "secondary" | "danger" | "ghost";
//   /**
//    * Additional CSS classes to apply to the button.
//    */
//   className?: string;
//   /**
//    * Indicates whether the button is disabled.
//    * If true, the button will be non-interactive and styled accordingly.
//    */
//   disabled?: boolean;

//   loading?: boolean;
// }
