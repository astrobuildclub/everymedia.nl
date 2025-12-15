import type { AudienceType } from "./audienceType";
import type { EpisodeType, SizeType } from "./common";
import type { FaqType } from "./faqType";
import type {
  ButtonType,
  LabelLinkType,
  RichTextSimpleType,
  SanityImageType,
} from "./global";
import type { ProjectType } from "./projectType";
import type { TeamType } from "./teamType";

export type PagebuilderType =
  | BlockFeetSectionType
  | BlockAudiencesOverviewSectionType
  | BlockContactType
  | BlockCardsType
  | BlockFaqsType
  | BlockWorkSelectionType
  | BlockTextType
  | BlockImageType
  | BlockIntroType
  | BlockTestimonialType
  | BlockLogosType
  | BlockVideoType
  | BlockWorkRelatedType
  | BlockTeamMembersType
  | BlockEpisodesType
  | BlockImageGalleryType
  | BlockMultiColType
  | BlockRichTextType
  | FeaturedProjectsType
  | ProjectsListingSectionType
  | BlockMediaGalleryType
  | BlockTextMediaType

{
  /*  Connect With Us */
}

export interface ConnectWithUsType {
  _type: "connectWithUs";
  title?: string;
  select: "labelLinks" | "body";
  labelLinks: LabelLinkType[];
  body: RichTextSimpleType;
}

{
  /*  Block Feet Section */
}

export interface BlockFeetSectionType {
  _type: "blockFeetSection";
  title?: string;
  _key:string
  subtitle?: string;
  intro?: RichTextSimpleType;
  body?: RichTextSimpleType;
  connectWithUs?: ConnectWithUsType[];
  selectedProjects: ProjectType[];
  cta: ButtonType;
}

{
  /*  Block Contact */
}

export interface BlockContactType {
  _type: "blockContact";
  _key:string
  title?: string;
  intro?: RichTextSimpleType;
  image: SanityImageType;
  cta: ButtonType[];
}

{
  /*  Card */
}

export interface CardType {
  _type: "card";
  title?: string;
  subtitle?: string;
  body: RichTextSimpleType;
}

{
  /*  Block Cards */
}

export interface BlockCardsType {
  _type: "blockCards";
  _key:string
  title?: string;
  intro?: string;
  colsAmount: number;
  footnote?: string;
  cards: CardType[];
}

{
  /*  Block Faqs */
}

export interface BlockFaqsType {
  _type: "blockFaqs";
  _key:string
  title?: string;
  faqs: FaqType[];
}

{
  /*  Block Work Selection */
}

export interface BlockWorkSelectionType {
  _type: "blockWorkSelection";
  _key:string
  title?: string;
  intro?: string;
  selectedProjects: ProjectType[];
  cta: ButtonType;
}

{
  /*  Block Text */
}

export interface BlockTextType {
  _type: "blockText";
  _key:string
  title?: string;
  content?: RichTextSimpleType;
  hideTitle: boolean;
}

{
  /*  Block Image */
}

export interface BlockImageType {
  _type: "blockImage";
  _key:string
  title?: string;
  image: SanityImageType;
  size: SizeType;
}

{
  /*  Block Intro */
}

export interface BlockIntroType {
  _type: "blockIntro";
  _key:string
  title?: string;
  content: RichTextSimpleType;
}

{
  /*  Block Audiences Overview Section */
}

export interface BlockAudiencesOverviewSectionType {
  _type: "blockAudiencesOverviewSection";
  _key:string
  title?: RichTextSimpleType;
  audiences: AudienceType[];
}

{
  /* Block Work Related */
}

export interface BlockWorkRelatedType {
  _type: "blockWorkRelated";
  _key:string
  title?: string;
  intro?: string;
  relatedProjects: ProjectType[];
  cta: ButtonType;
}

{
  /* Block Team Members */
}

export interface BlockTeamMembersType {
  _type: "blockTeamMembers";
  _key:string
  title?: string;
  footnote?: string;
  teamMembers: TeamType[];
}

{
  /* Block Episodes */
}

export interface BlockEpisodesType {
  _type: "blockEpisodes";
  _key:string
  title?: string;
  description?: string;
  episodes: EpisodeType[];
}

{
  /* Block Image Gallery*/
}

export interface BlockImageGalleryType {
  _type: "blockImageGallery";
  _key:string
  images: SanityImageType[];
}

{
  /* Block Testimonial */
}

export interface BlockTestimonialType {
  _type: "blockTestimonial";
  title?: string;
  _key:string
  testimonial?: string;
  person?: string;
  role?: string;
  company?: string;
  image: SanityImageType;
}

{
  /* Block Logos */
}

export interface BlockLogosType {
  _type: "blockLogos";
  _key:string
  title?: string;
  logos: SanityImageType[];
}

{
  /* Block Text Media */
}

export interface BlockTextMediaType {
  _type: "blockTextMedia";
  _key:string
  alignment: "left" | "right";
  title?: string;
  intro: RichTextSimpleType;
  image: SanityImageType;
}

{
  /* Block RichText */
}

export interface BlockRichTextType {
  _type: "blockRichText";
  _key:string
  footnote?: string;
  content: BlockIntroType[];
}

{
  /* Block Media Gallery */
}

export interface BlockMediaGalleryType {
  _type: "blockMediaGallery";
  _key:string
  title:string
  media: Array<SanityImageType>;
}

{
  /* Projects Listing Section */
}

export interface ProjectsListingSectionType {
  _type: "projectsListingSection";
  _key:string
  tagLine: string;
  allProjects: Array<ProjectType>;
}

{
  /* Featured Projects */
}

export interface FeaturedProjectsType {
  _type: "featuredProjects";
  _key:string
  tagLine: string;
  intro: RichTextSimpleType;
  projects: Array<ProjectType>;
}

{
  /* Block Multi Col */
}

export interface BlockMultiColType {
  _type: "blockMultiCol";
  _key:string
  title: string;
  colsAmount: number;
  select: "blockText" | "blockTextMedia" | "blockMediaGallery";
  blockText: Array<BlockTextType>;
  blockTextMedia: Array<BlockTextMediaType>;
  blockMediaGallery: BlockMediaGalleryType;
}

{
  /* Block Video */
}

export interface BlockVideoType {
  _type: "blockVideo";
  _key:string
  title?: string;
  videoType: "mp4" | "embed";
  videoUrl: string;
  select: "vimeo" | "youtube";
  youtubeId: string;
  vimeoId: string;
  thumbnail: SanityImageType;
  size: SizeType;
  autoplay: boolean;
  loop: boolean;
}

{
  /* Hero View */
}

export interface HeroViewType {
  title: string | undefined;
  pageTitle: string | undefined;
  subtitle: string | undefined;
  heroVideo: string | undefined;
  heroImage: SanityImageType | undefined;
  select: "heroVideo" | "heroImage" | undefined;
  intro: RichTextSimpleType | undefined;
  tag?: string;
  client?: string;
  documentType: string;
  documentId: string;
}
