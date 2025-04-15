import type { SanityDocument } from "sanity";
import type { RichTextSimpleType, SanityImageType } from "./global";



export interface TeamType extends SanityDocument {
    _id: string;
    _type:string
    slug: string;
    language: string;
    name: string;
    role: string
    email: string
    phone: string
    bio: RichTextSimpleType
    image: SanityImageType
}
