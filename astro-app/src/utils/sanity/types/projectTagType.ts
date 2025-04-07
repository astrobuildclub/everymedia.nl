import type { SanityDocument } from "sanity";



export interface ProjectTagType extends SanityDocument {
    _id: string;
    language: string;
    title: string;
}
