// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "zkhr7gd11y",
  apiKey: process.env.API_KEY,
});
