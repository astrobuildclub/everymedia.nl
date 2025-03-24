{/* Slug */ }

export type Slug = {
    _type: 'slug'
    current: string
}

export interface TranslatedPath {
    locale: string;
    path: string;
    _type?: string;
}

export interface _TranslationsType {
    title: string
    _type?: string
    language: string
    slug: Slug
}

export interface TranslationsType {
    slug: Slug
    language: string
    _type?: string
    _translations: _TranslationsType[]
}
