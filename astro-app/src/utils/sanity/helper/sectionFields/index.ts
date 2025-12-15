import {
  audienceFields,
  ctaFields,
  episodeFields,
  faqFields,
  labelLinkFields,
  projectFields,
  richTextSimpleFields,
  teamFields,
} from "../commonFields";
import { imageFields } from "../imageFields";

{
  /* Block Audiences Overview Section */
}

export const blockAudiencesOverviewSectionFields = /* groq */ `
_type,
_key,
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
_key,
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
  /* Block Team Members */
}

export const blockTeamMembersFields = /* groq */ `
_type,
_key,
title,
footnote,
teamMembers[@->language == ^.^.language]->{
${teamFields}
},
`;

{
  /* Featured Projects */
}

export const featuredProjectsFields = /* groq */ `
_type,
_key,
tagLine,
intro[]{
${richTextSimpleFields}
},
projects[@->language == ^.^.language]->{
${projectFields}
},
`;

{
  /* Block Episodes */
}

export const blockEpisodesFields = /* groq */ `
_type,
_key,
title,
description,
episodes[]{
${episodeFields}
},
`;

{
  /* Block Image Gallery*/
}

export const blockImageGalleryFields = /* groq */ `
_type,
_key,
images[]{
${imageFields}
},
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
_key,
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
_key,
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
_key,
title,
intro,
colsAmount,
footnote,
cards[]{
${cardFields}
}
`;

{
  /* Block Video */
}

export const blockVideoFields = /* groq */ `
_type,
_key,
title,
videoType,
(@.videoType=="mp4") => { 
videoUrl
},
(@.videoType=="embed") => { 
select,
(@.select=="youtube") => { 
youtubeId
},
(@.select=="vimeo") => { 
vimeoId
},
},
thumbnail{
${imageFields}
},
size,
autoplay,
loop,
`;

{
  /* Projects Listing Section */
}

export const projectsListingSectionFields = /* groq */ `
_type,
tagLine,
_key,
"allProjects":*[_type in ["project"] && defined(slug.current)]| order(_updatedAt desc){
${projectFields}
},
`;

{
  /* Block Faqs */
}

export const blockFaqsFields = /* groq */ `
_type,
_key,
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
_key,
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
_key,
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
_key,
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
_key,
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
_key,
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
_key,
title,
logos[]{
${imageFields}
}
`;

{
  /* Block Media Gallery */
}

export const blockMediaGalleryFields = /* groq */ `
_type,
_key,
title,
media[]{
${imageFields}
}
`;

{
  /* Block Text Media */
}

export const blockTextMediaFields = /* groq */ `
_type,
_key,
alignment,
title,
intro[]{
${richTextSimpleFields}
},
image{
${imageFields}
}
`;

{
  /* Block RichText */
}

export const blockRichTextFields = /* groq */ `
_type,
_key,
footnote,
content[]{
${blockIntroFields}
},
`;

{
  /* Block Multi Col */
}

export const blockMultiColFields = /* groq */ `
_type,
_key,
title,
select,
(@.select=="blockText") => { 
colsAmount,
blockText[]{
${blockTextFields}
},  
},
(@.select=="blockTextMedia") => { 
blockTextMedia[]{
${blockTextMediaFields}
},
},
(@.select=="blockMediaGallery") => { 
blockMediaGallery{
${blockMediaGalleryFields}
},
}
`;
