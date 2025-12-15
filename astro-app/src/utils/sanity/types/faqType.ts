import type { SanityDocument } from "sanity";
import type { RichTextSimpleType } from "./global";



export interface FaqType extends SanityDocument {
    _id: string;
    _type: string;
    language: string;
    title: string;
    question: string;
    answer: RichTextSimpleType
}
