import { defineField, defineType } from 'sanity';
import { richTextSimple } from '../options/richTextOptions';

export const blockContact = defineType({
    name: 'blockContact',
    title: 'Block Contact',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'sanityImage',
        }),
        defineField({
            name: 'intro',
            title: 'Introduction',
            type: 'array',
            of: richTextSimple,
        }),
        defineField({
            name: 'cta',
            title: 'Call to Action',
            type: 'array',
            of: [{ type: "cta" }],
        }),
    ],
});
