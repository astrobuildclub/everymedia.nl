import groq from "groq";
import { defaultSeoProps, layoutProps, pagebuilder, seo } from "../../helperQueries";
import { heroViewFields } from "../../helper/commonFields";

const groqQuery = groq`*[_type == "audience" && slug.current==$slug && language == $language][0]{

_type,
_id,
"slug":slug.current,
${seo},
${pagebuilder},
"layoutProps":${layoutProps},
"defaultSeoProps":${defaultSeoProps},
language,
${heroViewFields},

}`;

const audienceSlugQuery = groq`
*[_type == "audience" && defined(slug.current) ]{
"slug":slug.current,
language
}
`

const translationsQuery = groq`
 * [ _type == "audience" && _id == $id][0] {

_type,
slug,
language,
"_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
_type,
title,
slug,
language
},

}`;

export const query = {
    groqQuery,
    audienceSlugQuery,
    translationsQuery,
};