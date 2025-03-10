import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
} from "react-router";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";

import { themeSessionResolver } from "./sessions.server";

import "@fontsource-variable/inter";
import "@fontsource-variable/noto-serif";
import "@fontsource-variable/source-code-pro";
import "./global.css";

import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
];

export const loader = async ({ request }: Route.LoaderArgs) => {
  const { getTheme } = await themeSessionResolver(request);
  return { theme: getTheme() };
};

export const Layout = ({ children }: React.PropsWithChildren) => {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html
      lang="en"
      className="antialiased"
      data-darkreader-scheme={theme}
      data-darkreader-mode="dynamic"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className="relative min-h-svh bg-white font-normal font-sans">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default function Root() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/_actions/theme">
      <Outlet />
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
