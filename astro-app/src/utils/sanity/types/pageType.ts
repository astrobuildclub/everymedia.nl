import type { SanityDocument } from "sanity";
import type { SeoType } from "./seoType";
import type { LayoutPropsType } from "./layoutType";
import type { PagebuilderType } from "./pagebuilderType";
import type { RichTextSimpleType, SanityImageType } from ".";




export interface PageType extends SanityDocument {
    _id: string;
    slug: string;
    seo: SeoType
    pagebuilder: PagebuilderType[]
    layoutProps: LayoutPropsType
    language: string;
    variants: "homepage" | "audience" | "project" | "page"
    title: string;
    subtitle: string
    intro: RichTextSimpleType
    select: "heroVideo" | "heroImage"
    heroVideo: string
    heroImage: SanityImageType
}
