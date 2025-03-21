import { imageFields } from "../imageFields";


{/* Meta Attributes  */ }

export const metaAttributesQuery = /* groq */ `
_type,
attributeValueString,
attributeType,
attributeKey,
attributeValueImage{
${imageFields}
}
`

{/* Open Graph  */ }

export const openGraphQuery = /* groq */ `
_type,
siteName,
url,
description,
title,
image{
${imageFields}
}
`

{/* Twitter */ }

export const twitterQuery = /* groq */ `
_type,
site,
creator,
cardType,
handle
`

{/* Seo */ }

export const seofields = /* groq */ `
_type,
nofollowAttributes,
seoKeywords,
metaTitle,
metaDescription,
openGraph{
${openGraphQuery}
},
twitter{
${twitterQuery}
},
additionalMetaTags[]{
_type,
metaAttributes[]{
${metaAttributesQuery}     
}
}
`;

{/*  Seo */ }

export const seo = /* groq */ `seo{
${seofields}  
}`;