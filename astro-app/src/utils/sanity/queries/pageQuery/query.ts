import groq from "groq";
import { defaultSeoProps, layoutProps, pagebuilder, seo } from "../../helperQueries";
import { heroViewFields } from "../../helper/commonFields";


const groqQuery = groq`*[_type == "page" && slug.current==$slug && language == $language][0]{

_type,
_id,
"slug":slug.current,
${seo},
${pagebuilder},
"layoutProps":${layoutProps},
"defaultSeoProps":${defaultSeoProps},
language,
variants,
(@.variants=="homepage") => { 
${heroViewFields}
},
(@.variants=="audience") => { 
${heroViewFields}
},
(@.variants=="project") => { 
${heroViewFields}
},
(@.variants=="page") => { 
${heroViewFields}
},

}
`;

const pageSlugQuery = groq`
*[_type == "page" && defined(slug.current) && ! (slug.current in ["/"])]{
"slug":slug.current,
language
}
`
const translationsQuery = groq`
* [ _type == "page" && _id == $id][0] {

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
  pageSlugQuery,
  translationsQuery,
};