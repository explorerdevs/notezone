import { PassThrough } from "node:stream";

import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, isRouteErrorResponse } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";

import type {
  HandleDocumentRequestFunction,
  HandleErrorFunction,
} from "@remix-run/node";

// Reject all pending promises from handler functions after 5 seconds
export const streamTimeout = 5000;

export default async function handleRequest(
  ...args: Parameters<HandleDocumentRequestFunction>
) {
  const [request, status, headers, context, _] = args;
  const callback = isbot(request.headers.get("user-agent"))
    ? "onAllReady"
    : "onShellReady";

  return new Promise((resolve, reject) => {
    let failed = false;
    let shellRendered = false;

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={context} url={request.url} />,
      {
        [callback]: () => {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          headers.set("Content-Type", "text/html");

          resolve(new Response(stream, { headers, status: failed ? 500 : status }));
          pipe(body);
        },
        onShellError: (e) => {
          reject(e);
        },
        onError: (e) => {
          failed = true;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) console.error(e);
        },
      },
    );

    // Automatically timeout the React renderer after 8 seconds, which ensures
    // React has enough time to flush down the rejected boundary contents
    setTimeout(abort, streamTimeout + 1000 * 3);
  });
}

// Disconnect from the database on server shutdown
// process.on("SIGINT", async () => {
//   await shutdown_db();
//   process.exit(0);
// });
// process.on("SIGTERM", async () => {
//   await shutdown_db();
//   process.exit(0);
// });

export const handleError: HandleErrorFunction = async (error, { request }) => {
  // Skip capturing if the request is aborted as Remix docs suggest
  // Ref: https://remix.run/docs/en/main/file-conventions/entry.server#handleerror
  if (request.signal.aborted) return;
  if (isRouteErrorResponse(error)) return console.error(error);
  if (error instanceof Error) console.error(error.stack);
  else console.error(error);
};
