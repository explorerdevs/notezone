import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
//@ts-expect-error
import "@fontsource-variable/jost";

// import "./global.css";

import stylesheet from "./global.css?url";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: stylesheet },
];

export default function () {
  return <Outlet />;
}

export const Layout = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
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
