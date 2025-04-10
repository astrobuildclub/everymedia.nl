import { defineField, defineType } from 'sanity';
import { richTextSimple } from '../options/richTextOptions';
import {UserIcon} from '@sanity/icons'

export const blockContact = defineType({
    name: 'blockContact',
    title: 'Contact',
    type: 'object',
    icon:UserIcon,
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
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Block Contact',
            }
        },
    },
});
