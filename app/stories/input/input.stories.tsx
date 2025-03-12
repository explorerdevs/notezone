import { fn } from "@storybook/test";

import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from ".";

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],

  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;
