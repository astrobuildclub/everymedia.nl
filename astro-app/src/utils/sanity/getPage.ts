import { fetchDataFromSanity } from "../../lib/sanity";
import { pageQuery } from "./queries";


export async function getPage<T>(slug: string,locale: string): Promise<T | null> {
    try {
        const page = await fetchDataFromSanity<T>({
            query: { groqQuery: pageQuery.query.groqQuery },
            queryParams: {
                slug: slug,
                language: locale
            },
        });
        if (!page) {
            return null
        }
        return page
    } catch (error) {
        console.error("Error fetching page:", error);
        return null;
    }
}
