import { fetchDataFromSanity } from "../../lib/sanity";
import { projectQuery } from "./queries";


export async function getProject<T>(slug: string,locale: string): Promise<T | null> {
    try {
        const page = await fetchDataFromSanity<T>({
            query: { groqQuery: projectQuery.query.groqQuery },
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
