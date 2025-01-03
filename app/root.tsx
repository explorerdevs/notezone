import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

//@ts-expect-error
import "@fontsource-variable/inter";
//@ts-expect-error
import "@fontsource-variable/noto-serif";
//@ts-expect-error
import "@fontsource-variable/source-code-pro";

import "./global.css";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [];

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
