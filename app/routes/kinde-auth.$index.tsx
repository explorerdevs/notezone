import { handleAuth } from "@kinde-oss/kinde-remix-sdk";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ params, request }: LoaderFunctionArgs) =>
  await handleAuth(request, params.index);
