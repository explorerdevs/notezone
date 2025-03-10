import { fn } from "@storybook/test";

import { TextInput } from ".";

import type { Meta, StoryObj } from "@storybook/react";

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
