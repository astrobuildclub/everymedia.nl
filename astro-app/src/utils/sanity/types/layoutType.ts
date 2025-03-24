import type { LabelLinkType, RichTextSimpleType, SanityImageType } from "./global";



{/* Nav Item */ }

export interface NavItemType {
    _type: "navItem";
    headline: string
    labelLinks: LabelLinkType[]
}

{/* Header */ }

export interface HeaderType {
    _type?: "header";
    logo?: SanityImageType;
    navItems?: NavItemType[]
}

{/* Footer Link */ }

export interface FooterLinkType {
    _type: "footerLink";
    title?: string;
    select: "labelLinks" | "body"
    labelLinks: LabelLinkType[]
    body: RichTextSimpleType
}

{/* Footer */ }

export interface FooterType {
    _type: "footer";
    title: RichTextSimpleType
    footerLinks: FooterLinkType[]
}

{/* Layout Props Type */ }

export interface LayoutPropsType {
    _id?: string
    _type?: 'siteSettings',
    language: string;
    header: HeaderType
    footer: FooterType
}
