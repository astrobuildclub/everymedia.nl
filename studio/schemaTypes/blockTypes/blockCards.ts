import { defineType, defineField } from 'sanity';
import { richTextSimple } from '../options/richTextOptions';

export const blockCards =  defineType({
    name: 'blockCards',
    title: 'Block Cards',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'intro',
            title: 'Introduction',
            type: 'string',
        }),
        defineField({
            name: 'colsAmount',
            title: 'Columns Amount',
            type: 'number',
            validation: (Rule) => Rule.required().min(2).max(5),
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
                            validation: (Rule) => Rule.required(),
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
});
