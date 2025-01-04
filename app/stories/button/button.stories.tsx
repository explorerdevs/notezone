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
      <span className="text-lg">
        <IconRestore />
      </span>
      <span>With Icon</span>
    </Button>
  );
};

export const Primary: Story = {
  args: { variant: "primary", children: "Primary Button" },
};
export const Monochrome: Story = {
  args: { variant: "monochrome", children: "Border Button" },
};
export const Ghost: Story = {
  args: { variant: "ghost", children: "Secondary Button" },
};
export const Destructive: Story = {
  args: { variant: "destructive", children: "Danger Button" },
};

export const Large: Story = { args: { size: "lg" } };
export const Small: Story = { args: { size: "sm" } };

export const PrimaryWithIcon: Story = {
  render: (args) => <ButtonWithIconDemo {...args} />,
  args: {},
};

export const MonochromeWithIcon: Story = {
  render: (args) => <ButtonWithIconDemo {...args} />,
  args: { variant: "monochrome", children: "Border Button" },
};
