import type { AudienceType } from "./audienceType";
import type { ButtonType, LabelLinkType, RichTextSimpleType, SanityImageType } from "./global";
import type { ProjectType } from "./projectType";

export type PagebuilderType =
    | BlockFeetSectionType
    | BlockAudiencesOverviewSectionType
    | BlockContactType



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
    title?: RichTextSimpleType;
    subTitle?: RichTextSimpleType;
    body?: RichTextSimpleType;
    connectWithUs?: ConnectWithUsType[];
    allProjects: ProjectType[]
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
    /*  Block Audiences Overview Section */
}

export interface BlockAudiencesOverviewSectionType {
    _type: "blockAudiencesOverviewSection";
    title?: RichTextSimpleType;
    audiences:AudienceType[]
}