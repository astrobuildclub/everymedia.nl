import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";
import { isVisualEditing } from "./sanity/visual-editing";

const token = import.meta.env.SANITY_API_READ_TOKEN;

// Haal alle content via deze functie op. Drafts alleen in de Presentation tool
// (ondertekende cookie + iframe, zie src/middleware.ts), nooit via een URL-parameter.
export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  const visualEditingEnabled = isVisualEditing();

  if (visualEditingEnabled && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing.",
    );
  }

  const perspective = visualEditingEnabled ? "drafts" : "published";

  const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: visualEditingEnabled ? "withKeyArraySelector" : false,
      stega: visualEditingEnabled,
      ...(visualEditingEnabled ? { token } : {}),
    },
  );

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}
