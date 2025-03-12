import { tv } from "tailwind-variants";

import * as LabelPrimitive from "@radix-ui/react-label";

import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";

export const Label = ({
  className,
  ...restAttrs
}: ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof label>) => (
  <LabelPrimitive.Root {...restAttrs} className={label(className)} />
);
Label.displayName = LabelPrimitive.Root.displayName;

const label = tv({
  base: "font-medium text-grey-950 text-sm dark:text-white",
});
