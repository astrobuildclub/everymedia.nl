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
client,
tag,
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

{
    /* Website */
}

export const websiteFields = /* groq */ `
title,
tagline,
description,
timezone,
`;

{
    /* Analytics */
}

export const analyticsFields = /* groq */ `
googleAnalytics,
googleTagManager,
facebookPixel,
`;

{
    /* Default Seo */
}

export const defaultSeoFields = /* groq */ `
shareImage{
${imageFields}
},
defaultPageTitle,
defaultPageDescription,
schemaMarkup,
`;

{
    /* Social */
}

export const socialFields = /* groq */ `
socialAccounts[]{
_type,
name,
url,
},
`;

{
    /* Hero View */
}

export const heroViewFields = /* groq */ `
title,
pageTitle,
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
    /* Contact */
}

export const contactFields = /* groq */ `
phone,
email,
kvk,
btw,
address,
termsAndConditions{
_type,
asset->{
...
},
},
privacyPolicy{
_type,
asset->{
...
},
}
`;