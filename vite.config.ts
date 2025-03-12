import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  envPrefix: "PUBLIC_",
  server: { host: true, port: 3000 },
  plugins: [
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: { floatPrecision: 2 },
      },
    }),
    tailwindcss(),
    !isStorybook ? reactRouter() : undefined,
    tsconfigPaths(),
  ],
  define: { __BUILD_DATE__: JSON.stringify(new Date()) },
});
