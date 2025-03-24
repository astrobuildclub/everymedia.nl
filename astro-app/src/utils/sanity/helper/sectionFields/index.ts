import { audienceFields, ctaFields, labelLinkFields, projectFields, richTextSimpleFields } from "../commonFields";
import { imageFields } from "../imageFields";

{
  /* Block Audiences Overview Section */
}

export const blockAudiencesOverviewSectionFields = /* groq */ `
_type,
title[]{
${richTextSimpleFields}
},
audiences[@->language == ^.^.language]->{
${audienceFields}
}
`;

{
  /* Connect With Us */
}

export const connectWithUsFields = /* groq */ `
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

{
  /* Block Audiences Overview Section */
}

export const blockFeetSectionFields = /* groq */ `
  _type,
  title[]{
  ${richTextSimpleFields}
  },
  subTitle[]{
  ${richTextSimpleFields}
  },
  body[]{
  ${richTextSimpleFields}
  },
  connectWithUs[]{
  ${connectWithUsFields}
  },
  "allProjects":*[_type in ["project"] && defined(slug.current) && language == ^.^.language ]{
  ${projectFields}
  },
`;

{
  /* Block Contact Section */
}

export const blockContactFields = /* groq */ `
  _type,
  title,
  image{
  ${imageFields}
  },
  intro[]{
  ${richTextSimpleFields}
  },
  cta[]{
  ${ctaFields}
  }
`;
