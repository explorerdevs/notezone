import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../app/tailwind.css";

import type { Preview } from "@storybook/react";

export default {
  parameters: {
    docs: { toc: true },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
} satisfies Preview;

export const decorators = [
  withThemeByDataAttribute({
    themes: { light: "light", dark: "dark" },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];
