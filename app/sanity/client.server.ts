import { createClient } from "@sanity/client";
import { SANITY_CONFIG } from "./config";

export const sanityClient = createClient({
  ...SANITY_CONFIG,
});
