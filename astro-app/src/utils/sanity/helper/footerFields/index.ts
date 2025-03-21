import { labelLinkFields, richTextSimpleFields } from "../commonFields";

{/* Footer Link  */ }

export const footerLinkFields = /* groq */ `
_type,
title,
select,
(@.select=="labelLinks") => { 
labelLinks[]{
${labelLinkFields},
},
},
(@.select=="body") => { 
body[]{
${richTextSimpleFields}
},
},
`;


{/* Footer  */ }

export const footerFields = /* groq */ `
_id,
_type,
title[]{
${richTextSimpleFields}
},
footerLinks[]{
${footerLinkFields}
}
`;