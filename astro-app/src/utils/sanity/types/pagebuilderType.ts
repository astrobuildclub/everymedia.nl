import type { AudienceType } from "./audienceType";
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
    cta:ButtonType
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
    cta:ButtonType
}

{
    /*  Block Text */
}

export interface BlockTextType {
    _type: "blockText";
    title?: string;
    content?: RichTextSimpleType;
    hideTitle:boolean
}


{
    /*  Block Audiences Overview Section */
}

export interface BlockAudiencesOverviewSectionType {
    _type: "blockAudiencesOverviewSection";
    title?: RichTextSimpleType;
    audiences: AudienceType[]
}