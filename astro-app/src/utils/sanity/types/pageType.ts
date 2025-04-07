import type { SanityDocument } from "sanity";
import type { SeoType } from "./seoType";
import type { LayoutPropsType } from "./layoutType";
import type { PagebuilderType } from "./pagebuilderType";
import type { DefaultSeoPropsType, HeroVariantType, RichTextSimpleType, SanityImageType } from ".";




export interface PageType extends SanityDocument {
    _id: string;
    slug: string;
    seo: SeoType
    pagebuilder: PagebuilderType[]
    layoutProps: LayoutPropsType
    defaultSeoProps: DefaultSeoPropsType
    language: string;
    variants: HeroVariantType
    pageTitle: string;
    title: string;
    subtitle: string
    intro: RichTextSimpleType
    select: "heroVideo" | "heroImage"
    heroVideo: string
    heroImage: SanityImageType
}
