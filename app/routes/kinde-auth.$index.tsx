import { handleAuth } from "@kinde-oss/kinde-remix-sdk";
import type { LoaderFunctionArgs } from "react-router";

export const loader = async ({ params, request }: LoaderFunctionArgs) =>
  await handleAuth(request, params.index);
