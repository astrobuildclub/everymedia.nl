import { defineType, defineField } from 'sanity';
import { richTextSimple } from '../options/richTextOptions';

export const blockCards = defineType({
    name: 'blockCards',
    title: 'Block Cards',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'intro',
            title: 'Introduction',
            type: 'text',
        }),
        defineField({
            name: 'colsAmount',
            title: 'Columns Amount',
            type: 'number',
            description: 'Number of cards per row (2 to 5)',
            validation: (Rule) => Rule.min(2).max(5),
        }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [
                ({
                    name: 'card',
                    title: 'Card',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Card Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'subtitle',
                            title: 'Card Subtitle',
                            type: 'string',
                        }),
                        defineField({
                            name: 'body',
                            title: 'Body',
                            type: 'array',
                            of: richTextSimple,
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'footnote',
            title: 'Footnote',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title, }) {
            return {
                title: title || 'Block Cards',
            }
        },
    },
});
