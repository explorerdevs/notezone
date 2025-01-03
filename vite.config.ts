import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  envPrefix: "PUBLIC_",
  server: { host: true },
  plugins: [
    !isStorybook &&
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
          // v3_routeConfig: true,
        },
      }),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: { floatPrecision: 2 },
      },
    }),
    tsconfigPaths(),
  ],
  define: { __BUILD_DATE__: JSON.stringify(new Date()) },
});

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}
