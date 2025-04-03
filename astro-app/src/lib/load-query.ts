import type { QueryParams } from "sanity";
import { client } from "./sanity";

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  const sanityClient = client;
  const { result } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    { filterResponse: false }
  );

  return {
    data: result,
  };
}
