// ./schemas/blockTypes/blockCards.ts
import {defineType, defineField} from 'sanity'
import {cardRichText} from '../options/richTextOptions'

export const blockCards = defineType({
  name: 'blockCards',
  type: 'object',
  title: 'Cards Block',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'intro', type: 'text', title: 'Intro'}),
    defineField({
      name: 'colsAmount',
      type: 'number',
      title: 'Columns Amount',
      description: 'Number of cards per row (2 to 5)',
      validation: (Rule) => Rule.min(2).max(5),
    }),
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Title'}),
            defineField({name: 'subtitle', type: 'string', title: 'Subitle'}),
            // defineField({name: 'intro', type: 'text', title: 'Intro'}),
            defineField({
              name: 'body',
              type: 'array',
              title: 'Body',
              of: cardRichText,
            }),
          ],
        },
      ],
    }),
    defineField({name: 'footnote', type: 'text', title: 'Footnote'}),
  ],
})
