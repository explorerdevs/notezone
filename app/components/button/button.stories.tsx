import { IconRestore } from "@/assets/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from ".";
import type { ButtonProps } from "./types";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
    variant: "primary",
    size: "medium",
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
    children: "Primary Hello World!",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const WithIcon: Story = {
  render: (args) => <ButtonWithIconDemo {...args} />,
  args: {},
};
export const Small: Story = {
  args: {
    size: "small",
  },
};
