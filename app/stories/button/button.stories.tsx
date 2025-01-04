import { Button } from ".";

import { IconRestore } from "@/assets/icons";

import { fn } from "@storybook/test";

import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonProps } from "./__types__";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    variant: { control: "select" },
  },
  args: {
    onClick: fn(),
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const ButtonWithIconDemo = (args: Omit<ButtonProps, "ref">) => {
  return (
    <Button variant="primary" {...args}>
      <IconRestore />
      <span>WithIcon</span>
    </Button>
  );
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Hello World!",
    disabled: false,
  },
};

export const Monochrome: Story = { args: { variant: "monochrome" } };

export const Large: Story = { args: { size: "lg" } };
export const Small: Story = { args: { size: "sm" } };

export const WithIcon: Story = {
  render: (args) => <ButtonWithIconDemo {...args} />,
  args: {},
};
