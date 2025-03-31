import { audienceFields, ctaFields, faqFields, labelLinkFields, projectFields, richTextSimpleFields } from "../commonFields";
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
  /* Block Work Related */
}

export const blockWorkRelatedFields = /* groq */ `
_type,
title,
intro,
relatedProjects[@->language == ^.^.language]->{
${projectFields}
},
cta{
${ctaFields}
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
  title,
  subtitle,
  intro[]{
  ${richTextSimpleFields}
  },
  body[]{
  ${richTextSimpleFields}
  },
  connectWithUs[]{
  ${connectWithUsFields}
  },
  selectedProjects[@->language == ^.^.language]->{
  ${projectFields}
  },
  cta{
  ${ctaFields}
  }
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

{
  /* Card */
}

export const cardFields = /* groq */ `
  _type,
  title,
  subtitle,
  body[]{
  ${richTextSimpleFields}
  }
`;

{
  /* Block Cards */
}

export const blockCardsFields = /* groq */ `
  _type,
  title,
  intro,
  colsAmount,
  footnote,
  cards[]{
  ${cardFields}
  }
`;

{
  /* Block Faqs */
}

export const blockFaqsFields = /* groq */ `
  _type,
  title,
  faqs[@->language == ^.^.language]->{
  ${faqFields}
  }
`;

{
  /* Block Work Selection */
}

export const blockWorkSelectionFields = /* groq */ `
  _type,
  title,
  intro,
  selectedProjects[@->language == ^.^.language]->{
  ${projectFields}
  },
  cta{
  ${ctaFields}
  }
`;

{
  /* Block Text */
}

export const blockTextFields = /* groq */ `
  _type,
  hideTitle,
  hideTitle == false =>{
  title,
  },
  content[]{
  ${richTextSimpleFields}
  },
`;

{
  /* Block Image */
}

export const blockImageFields = /* groq */ `
  _type,
  title,
  image{
  ${imageFields}
  },
  size,
`;

{
  /* Block Intro */
}

export const blockIntroFields = /* groq */ `
  _type,
  title,
  content[]{
  ${richTextSimpleFields}
  }
`;

{
  /* Block Testimonial */
}

export const blockTestimonialFields = /* groq */ `
  _type,
  title,
  testimonial,
  person,
  role,
  company,
  image{
  ${imageFields}
  }
`;

{
  /* Block Logos */
}

export const blockLogosFields = /* groq */ `
  _type,
  title,
  logos[]{
  ${imageFields}
  }
`;

{
  /* Block Video */
}

export const blockVideoFields = /* groq */ `
  _type,
  title,
  videoType,
  (@.videoType=="mp4") => { 
  videoUrl
  },
  (@.videoType=="embed") => { 
  embedPlatform,
  embedUrl,
  },
  thumbnail{
  ${imageFields}
  },
  size,
  autoplay,
  loop,
  videoThumbnail{
  _type,
  asset->{
  ...
  },
  },
`;
