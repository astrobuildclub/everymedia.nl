import { audienceType } from "./audienceType";
import { faqType } from "./faqType";
import { footerType } from "./footerType";
import { headerType } from "./headerType";
import { pageType } from "./pageType";
import { projectTagType } from "./projectTagType";
import { projectType } from "./projectType";
import { siteSettingsType } from "./siteSettings";
import { teamType } from "./teamType";

export const contentTypes = [
    audienceType,
    faqType,
    pageType,
    projectType,
    siteSettingsType,
    teamType,
    headerType,
    footerType,
    projectTagType
];

export const linkableSchemaTypes = [
    "page",
    "audience",
    "project"
]
export const translateLanguagesSchema = [
    "page",
    "audience",
    "faq",
    "project",
    "team",
    "siteSettings",
    "projectTag"
]
