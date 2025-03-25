import type { PortableTextBlock } from "@portabletext/types";
import type { Slug, ImageAsset } from "@sanity/types";

export interface Post {
  _type: "post";
  _createdAt: string;
  title: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset & { alt?: string };
  body: PortableTextBlock[];
}

export interface Project {
  _type: "project";
  _createdAt: string;
  title: string;
  slug: Slug;
  intro?: PortableTextBlock[];
  mainImage?: ImageAsset & { alt?: string };
  body?: PortableTextBlock[];
}

export interface Page {
  _type: "page";
  _createdAt: string;
  title: string;
  slug: Slug;
  content?: PortableTextBlock[];
}

export interface Audience {
  _type: "audience";
  _createdAt: string;
  title: string;
  slug: Slug;
  // Add additional fields as needed...
}

export interface TeamMember {
  _type: "team";
  _createdAt: string;
  name: string;
  slug: Slug;
  role: string;
  image?: ImageAsset;
  email?: string;
  phone?: string;
  bio?: PortableTextBlock[];
}

export interface SiteSettings {
  _type: "siteSettings";
  title: string;
  description: string;
  // You can add SEO related fields here, like meta keywords or social sharing images
}