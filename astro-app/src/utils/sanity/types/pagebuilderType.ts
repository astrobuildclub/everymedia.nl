import type { SanityAssetDocument } from "@sanity/client";
import type { AudienceType } from "./audienceType";
import type { SizeType } from "./common";
import type { FaqType } from "./faqType";
import type { ButtonType, LabelLinkType, RichTextSimpleType, SanityImageType } from "./global";
import type { ProjectType } from "./projectType";

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



{
    /*  Connect With Us */
}

export interface ConnectWithUsType {
    _type: "connectWithUs";
    title?: string;
    select: "labelLinks" | "body"
    labelLinks: LabelLinkType[]
    body: RichTextSimpleType
}

{
    /*  Block Feet Section */
}

export interface BlockFeetSectionType {
    _type: "blockFeetSection";
    title?: string;
    subtitle?: string;
    intro?: RichTextSimpleType;
    body?: RichTextSimpleType;
    connectWithUs?: ConnectWithUsType[];
    selectedProjects: ProjectType[]
    cta: ButtonType
}

{
    /*  Block Contact */
}

export interface BlockContactType {
    _type: "blockContact";
    title?: string;
    intro?: RichTextSimpleType;
    image: SanityImageType
    cta: ButtonType[]
}

{
    /*  Card */
}

export interface CardType {
    _type: "card";
    title?: string;
    subtitle?: string;
    body: RichTextSimpleType
}

{
    /*  Block Cards */
}

export interface BlockCardsType {
    _type: "blockCards";
    title?: string;
    intro?: string;
    colsAmount?: string;
    footnote?: string;
    cards: CardType[]
}

{
    /*  Block Faqs */
}

export interface BlockFaqsType {
    _type: "blockFaqs";
    title?: string;
    faqs: FaqType[]
}

{
    /*  Block Work Selection */
}

export interface BlockWorkSelectionType {
    _type: "blockWorkSelection";
    title?: string;
    intro?: string;
    selectedProjects: ProjectType[]
    cta: ButtonType
}

{
    /*  Block Text */
}

export interface BlockTextType {
    _type: "blockText";
    title?: string;
    content?: RichTextSimpleType;
    hideTitle: boolean
}

{
    /*  Block Image */
}

export interface BlockImageType {
    _type: "blockImage";
    title?: string;
    image: SanityImageType
    size: SizeType
}

{
    /*  Block Intro */
}

export interface BlockIntroType {
    _type: "blockIntro";
    title?: string;
    content: RichTextSimpleType
}

{
    /*  Block Audiences Overview Section */
}

export interface BlockAudiencesOverviewSectionType {
    _type: "blockAudiencesOverviewSection";
    title?: RichTextSimpleType;
    audiences: AudienceType[]
}

{
    /* Block Work Related */
}

export interface BlockWorkRelatedType {
    _type: "blockWorkRelated";
    title?: string;
    intro?: string;
    relatedProjects: ProjectType[]
    cta: ButtonType
}

{
    /* Block Testimonial */
}

export interface BlockTestimonialType {
    _type: "blockTestimonial";
    title?: string;
    testimonial?: string;
    person?: string;
    role?: string;
    company?: string;
    image: SanityImageType
}

{
    /* Block Logos */
}

export interface BlockLogosType {
    _type: "blockLogos";
    title?: string;
    logos: SanityImageType[]
}

{
    /* Block Video */
}

export interface BlockVideoType {
    _type: "blockVideo";
    title?: string;
    videoType: "mp4" | "embed"
    videoUrl: string
    embedPlatform: "vimeo" | "youtube"
    embedUrl: string
    thumbnail: SanityImageType
    size: SizeType
    autoplay: boolean
    loop: boolean
    videoThumbnail: {
        _type: "file",
        asset: SanityAssetDocument
    }
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
}