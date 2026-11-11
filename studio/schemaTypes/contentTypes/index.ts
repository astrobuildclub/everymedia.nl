import { audienceType } from "./audienceType";
import { faqType } from "./faqType";
import { footerType } from "./footerType";
import { headerType } from "./headerType";
import { pageType } from "./pageType";
import { projectType } from "./projectType";
import { projectCategoryType } from "./projectCategoryType";
import { siteSettingsType } from "./siteSettings";
import { teamType } from "./teamType";

export const contentTypes = [
    audienceType,
    faqType,
    pageType,
    projectType,
    projectCategoryType,
    siteSettingsType,
    teamType,
    headerType,
    footerType,
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
    "projectCategory",
    "team",
    "siteSettings",
]
