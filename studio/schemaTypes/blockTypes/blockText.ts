import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'
import { richTextSimple } from '../options/richTextOptions'
import { toPlainText } from '@portabletext/react'


export const blockText = defineType({
    name: 'blockText',
    title: 'Block Text',
    type: 'object',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            title: "Title",
            type: 'string',
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: richTextSimple
        }),
        defineField({
            name: 'hideTitle',
            type: 'boolean',
            title: 'Hide Title',
            description: "Don't show title on the website.",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            content: 'content',
        },
        prepare({ title, content }) {
            const subtitle = content ? toPlainText(content) : null
            return {
                title: title || 'Block Text',
                subtitle: subtitle,
            }
        },
    },
})
