import groq from "groq";

const normalPage = /* groq */ `*[_type in ["page","audience","project"] && defined(slug.current) 
&& !(_id in path("drafts.**")) && ! (slug.current in ["/","404"])]{

(_type == "page") => {
_updatedAt,
"locUrl": language + "/" + slug.current,
},

(_type == "audience") => {
_updatedAt,
"locUrl": language + "/" + "audience/" + slug.current,
"imageUrl":heroImage.asset->url,
},

(_type == "project") => {
_updatedAt,
"locUrl": language + "/" + "projects/" + slug.current,
"imageUrl":heroImage.asset->url,
},

}`;

const groqQuery = groq`${normalPage}`;

export const query = {
  groqQuery,
};
