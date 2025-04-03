import { imageFields } from "../imageFields";
import { linkFields } from "../linkFields";

{/* Rich Text Simpele  */ }

export const richTextSimpleFields = /* groq */ `
_type,
...,
markDefs[]{
...,
_type == "link" => {
...,
internalLink->{_type,slug,pageTitle,language}
}
}
`;

{
    /* CTA */
}

export const ctaFields = /* groq */ `
  _type,
  buttonText,
  variant,
  link{
  ${linkFields}
  }
  `;


{
    /* Label Link  */
}

export const labelLinkFields = /* groq */ `
  _id,
  _type,
  label,
  link{
  ${linkFields}
  }
  `;

{
    /* Project */
}

export const projectFields = /* groq */ `
_type,
slug,
_id,
title,
language,
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
`;

{
    /* Audience */
}

export const audienceFields = /* groq */ `
_type,
slug,
_id,
title,
language,
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
`;

{
    /* Team */
}

export const teamFields = /* groq */ `
_type,
slug,
_id,
language,
name,
role,
image{
${imageFields}
},
email,
phone,
bio[]{
${richTextSimpleFields}
}
`;

{
    /* Faq */
}

export const faqFields = /* groq */ `
_type,
_id,
language,
title,
question,
answer[]{
${richTextSimpleFields}
},
`;

{
    /* Episode */
}

export const episodeFields = /* groq */ `
_type,
title,
description,
select,
(@.select=="youtube") => { 
youtubeId
},
(@.select=="vimeo") => { 
vimeoId
},
thumbType,
(@.thumbType=="file") => { 
thumbnailFile{
_type,
asset->{
...
},
},
},
(@.thumbType=="url") => { 
thumbnailUrl,
},
`;