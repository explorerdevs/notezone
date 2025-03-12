import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: [
    "../app/stories/**/*.mdx",
    "../app/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: { strictMode: true },
  },
  typescript: { reactDocgen: "react-docgen-typescript" },
} satisfies StorybookConfig;
