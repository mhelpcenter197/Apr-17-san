import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "22wmublb",
  dataset: "production",
  apiVersion: "2024-01-10",
  useCdn: true,
});
