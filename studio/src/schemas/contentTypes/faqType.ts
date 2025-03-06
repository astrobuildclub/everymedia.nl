// ./schemas/contentTypes/faqType.ts
import {defineType, defineField} from 'sanity'
import {cardRichText} from '../options/richTextOptions'

export const faqType = defineType({
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'question', type: 'string', title: 'Question'}),
    defineField({
      name: 'answer',
      type: 'array',
      title: 'Answer',
      of: cardRichText,
    }),
  ],
})
