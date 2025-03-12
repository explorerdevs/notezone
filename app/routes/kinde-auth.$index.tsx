import { handleAuth } from "@kinde-oss/kinde-remix-sdk";

import type { Route } from "./+types/kinde-auth.$index";

export const loader = async ({ params, request }: Route.LoaderArgs) =>
  await handleAuth(request, params.index);
