import type { SanityDocument } from "sanity";
import type { SeoType } from "./seoType";
import type { LayoutPropsType } from "./layoutType";
import type { PagebuilderType } from "./pagebuilderType";
import type { RichTextSimpleType, SanityImageType } from "./global";
import type { DefaultSeoPropsType, Slug } from "./common";

export interface AudienceType extends SanityDocument {
  _id: string;
  _type: string;
  slug: string | Slug;
  seo: SeoType;
  pagebuilder: PagebuilderType[];
  layoutProps: LayoutPropsType;
  defaultSeoProps: DefaultSeoPropsType;
  language: string;
  pageTitle: string;
  title: string;
  subtitle: string;
  intro: RichTextSimpleType;
  select: "heroVideo" | "heroImage";
  heroVideo: string;
  heroImage: SanityImageType;
}
