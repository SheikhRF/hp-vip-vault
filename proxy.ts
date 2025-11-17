import type { NextRequest } from "next/server";
import { createClient } from "./lib/supabase/client";

// If you want this proxy to run on the Edge runtime, uncomment:
// export const runtime = "edge";

export default function proxy(request: NextRequest) {
  const { response } = createClient(request);
  return response;
}