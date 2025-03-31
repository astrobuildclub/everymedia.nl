import { footerFields } from "../helper/footerFields";
import { headerFields } from "../helper/headerFields";
import {
  blockAudiencesOverviewSectionFields,
  blockCardsFields,
  blockContactFields,
  blockFaqsFields,
  blockFeetSectionFields,
  blockImageFields,
  blockIntroFields,
  blockLogosFields,
  blockTestimonialFields,
  blockTextFields,
  blockVideoFields,
  blockWorkRelatedFields,
  blockWorkSelectionFields,
} from "../helper/sectionFields";
import { seofields } from "../helper/seoFields";

{
  /*  Seo */
}

export const seo = /* groq */ `seo{
${seofields}  
}`;

{
  /*  Layout Props */
}

export const layoutProps = /* groq */ `*[_type == "siteSettings" && language == $language][0]{
_id,
_type,
header{
${headerFields}
},
footer{
${footerFields}
}
}`;

{
  /* Page Builder */
}

export const pagebuilder = /* groq */ `
pagebuilder[]{
(_type == "blockAudiencesOverviewSection") => {
${blockAudiencesOverviewSectionFields}
},
(_type == "blockFeetSection") => {
${blockFeetSectionFields}
},
(_type == "blockContact") => {
${blockContactFields}
},
(_type == "blockCards") => {
${blockCardsFields}
},
(_type == "blockFaqs") => {
${blockFaqsFields}
},
(_type == "blockWorkSelection") => {
${blockWorkSelectionFields}
},
(_type == "blockText") => {
${blockTextFields}
},
(_type == "blockImage") => {
${blockImageFields}
},
(_type == "blockIntro") => {
${blockIntroFields}
},
(_type == "blockTestimonial") => {
${blockTestimonialFields}
},
(_type == "blockLogos") => {
${blockLogosFields}
},
(_type == "blockVideo") => {
${blockVideoFields}
},
(_type == "blockWorkRelated") => {
${blockWorkRelatedFields}
},

}
`;
