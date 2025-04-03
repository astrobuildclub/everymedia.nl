import { loadQuery } from "../../lib/load-query";
import { projectQuery } from "./queries";

export async function getProject<T>(
  slug: string,
  locale: string
): Promise<T | null> {
  try {
    const { data: page } = await loadQuery<T>({
      query: projectQuery.query.groqQuery,
      params: {
        slug: slug,
        language: locale,
      },
    });
    if (!page) {
      return null;
    }
    return page;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}
