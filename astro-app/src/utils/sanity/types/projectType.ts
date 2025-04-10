import type { SanityDocument } from "sanity";
import type { SeoType } from "./seoType";
import type { LayoutPropsType } from "./layoutType";
import type { PagebuilderType } from "./pagebuilderType";
import type { RichTextSimpleType, SanityImageType } from "./global";
import type { DefaultSeoPropsType, HeroVariantType, Slug } from "./common";

export interface ProjectType extends SanityDocument {
  _id: string;
  slug: string | Slug;
  seo: SeoType;
  pagebuilder: PagebuilderType[];
  layoutProps: LayoutPropsType;
  defaultSeoProps: DefaultSeoPropsType;
  language: string;
  variants: HeroVariantType;
  pageTitle: string;
  title: string;
  subtitle: string;
  intro: RichTextSimpleType;
  select: "heroVideo" | "heroImage";
  heroVideo: string;
  heroImage: SanityImageType;
  tag: string;
  client: string;
}
