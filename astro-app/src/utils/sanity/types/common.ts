import type { SanityAssetDocument } from "@sanity/client";
import type { SanityImageType } from "./global";

{
  /* Slug */
}

export type Slug = {
  _type: "slug";
  current: string;
};
export type SizeType = "inline" | "featured" | "page" | "full";
export type HeroVariantType =
  | "homepage"
  | "audience"
  | "project"
  | "page"
  | undefined;

export interface TranslatedPath {
  locale: string;
  path: string;
  _type?: string;
}

export interface _TranslationsType {
  title: string;
  _type?: string;
  language: string;
  slug: Slug;
}

export interface TranslationsType {
  slug: Slug;
  language: string;
  _type?: string;
  _translations: _TranslationsType[];
}

export interface EpisodeType {
  _type: "episode";
  title: string;
  description: string;
  select: "youtube" | "vimeo";
  youtubeId: string;
  vimeoId: string;
  thumbnailUrl: string;
  thumbType: "file" | "url";
  thumbnailFile: {
    _type: "file";
    asset: SanityAssetDocument;
  };
}

export interface WebsiteType {
  title: string;
  tagline: string;
  description: string;
  timezone: string;
  metaTags: Array<{
    name: string;
    content: string;
  }>;
}

export interface AnalyticsType {
  googleAnalytics: string;
  googleTagManager: string;
  facebookPixel: string;
}

export interface DefaultSeoType {
  shareImage: SanityImageType;
  defaultPageTitle: string;
  defaultPageDescription: string;
  schemaMarkup: any;
}

export interface SocialType {
  socialAccounts: Array<{
    name: string;
    url: string;
  }>;
}

export interface ContactType {
  phone: string;
  email: string;
  kvk: string;
  btw: string;
  address: string;
  termsAndConditions: {
    _type: "file";
    asset: SanityAssetDocument;
  };
  privacyPolicy: {
    _type: "file";
    asset: SanityAssetDocument;
  };
}

export interface DefaultSeoPropsType {
  _id?: string;
  _type?: "siteSettings";
  language: string;
  website: WebsiteType;
  analytics: AnalyticsType;
  defaultSeo: DefaultSeoType;
  social: SocialType;
  contact: ContactType;
}
