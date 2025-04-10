import { defineField, defineType } from 'sanity';
import { richTextSimple } from '../options/richTextOptions';
import { toPlainText } from '@portabletext/react';
import {TextIcon} from '@sanity/icons'

export const blockIntro = defineType({
    name: 'blockIntro',
    title: 'Intro',
    type: 'object',
    icon:TextIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: richTextSimple,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            content: "content"
        },
        prepare({ title, content }) {
            const getContent = content ? toPlainText(content) : null
            return {
                title: title || 'Block Intro',
                subtitle: getContent
            }
        },
    },
});
