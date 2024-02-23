import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "7cnft9b3",
  dataset: "production",
  apiVersion: "2024-01-10",
  useCdn: true,
});
