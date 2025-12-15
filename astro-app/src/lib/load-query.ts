import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

const visualEditingEnabled =
  import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === "true";
const token = import.meta.env.SANITY_API_READ_TOKEN;

export async function loadQuery<QueryResponse>({
  query,
  params,
  searchParams,
}: {
  query: string;
  params?: QueryParams;
  searchParams?: URLSearchParams | Record<string, string | undefined>;
}) {
  // Check for preview parameter in searchParams
  const previewParam =
    searchParams instanceof URLSearchParams
      ? searchParams.get("preview") === "true"
      : searchParams?.preview === "true";

  const isPreviewMode = visualEditingEnabled || previewParam;

  if (isPreviewMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing."
    );
  }

  const perspective = isPreviewMode ? "drafts" : "published";

  const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: isPreviewMode ? "withKeyArraySelector" : false,
      stega: isPreviewMode,
      ...(isPreviewMode ? { token } : {}),
    }
  );

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}
