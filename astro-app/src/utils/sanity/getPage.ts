import groq from "groq";
import { fetchDataFromSanity } from "../../lib/sanity";
import { layoutProps, pagebuilder, seo } from "./helperQueries";
import { imageFields } from "./helper/imageFields";
import { richTextSimpleFields } from "./helper/commonFields";

const groqQuery = groq`*[_type == "page" && slug.current==$slug][0]{
    _type,
    _id,
    "slug":slug.current,
    ${seo},
    ${pagebuilder},
    "layoutProps":${layoutProps},
    variants,
    title,
    subtitle,
    intro[]{
    ${richTextSimpleFields}
    },
    select,
    (@.select=="heroVideo") => { 
    heroVideo,
    },
    (@.select=="heroImage") => { 
    heroImage{
    ${imageFields}
    },
    },
}`;

const pageSlugQuery = groq`
*[_type == "page" && defined(slug.current) && ! (slug.current in ["/"])]{
"slug":slug.current,
}
`

export const query = {
    groqQuery,
    pageSlugQuery
};

export const pageQuery = {
    query,
}



export async function getPage<T>(slug: string): Promise<T | null> {
    try {
        const page = await fetchDataFromSanity<T>({
            query: { groqQuery: pageQuery.query.groqQuery },
            queryParams: {
                slug: slug,
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
