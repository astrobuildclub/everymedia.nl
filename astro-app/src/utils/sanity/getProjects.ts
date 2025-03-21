import groq from "groq";
import { fetchDataFromSanity } from "../../lib/sanity";
import { layoutProps, pagebuilder, seo } from "./helperQueries";
import { imageFields } from "./helper/imageFields";
import { richTextSimpleFields } from "./helper/commonFields";

const groqQuery = groq`*[_type == "project"]{
    _type,
    _id,
    "slug":slug.current,
    ${seo},
    ${pagebuilder},
    "layoutProps":${layoutProps},
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

const projectsSlugQuery = groq`
*[_type == "project" && defined(slug.current) ]{
"slug":slug.current,
}
`

export const query = {
    groqQuery,
    projectsSlugQuery
};

export const projectsQuery = {
    query,
}



export async function getProjects<T>(): Promise<T | null> {
    try {
        const page = await fetchDataFromSanity<T>({
            query: { groqQuery: projectsQuery.query.groqQuery },
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
