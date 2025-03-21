import type { SanityImageAssetDocument } from "@sanity/client";
import type { PortableTextBlock } from "sanity";
import { type LinkProps } from 'sanity-plugin-link-field/component';


{/* Sanity Image */ }

export type SanityImageType = {
  _type: "image";
  asset?: SanityImageAssetDocument;
  crop?: SanityImageCropType
  hotspot?: SanityImageHotspotType
  alt?: string;
  hasCaption: boolean
  caption: string
};

{/* Sanity Image Crop */ }

export type SanityImageCropType = {
  _type: "SanityImageCrop";
  right: number;
  top: number;
  left: number;
  bottom: number;
}

{/* Sanity Image Hotspot */ }

export type SanityImageHotspotType = {
  _type: "SanityImageHotspot";
  width?: number;
  x: number;
  y: number;
  height: number;
}


{/* Label Link */ }

export type LabelLinkType = {
  _type: "labelLink";
  label?: string;
  link?: LinkProps;
};


{/* Button Variant */ }

export type ButtonVariantType = "white" | "black";


{/* Button */ }

export type ButtonType = {
  _type: "cta";
  buttonText?: string;
  variant:ButtonVariantType
  link?: LinkProps;
};

{/* Rich Text Simple */ }

export type RichTextSimpleType = PortableTextBlock[]

