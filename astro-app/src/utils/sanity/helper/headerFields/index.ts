import { labelLinkFields } from "../commonFields";
import { imageFields } from "../imageFields";


{
  /* Nav Item */
}

export const navItemFields = /* groq */ `
_type,
headline,
labelLinks[]{
${labelLinkFields}
}
`;

{
  /* Header */
}

export const headerFields = /* groq */ `
_id,
_type,
logo{
${imageFields}
},
navItems[]{
${navItemFields}
}
`;


