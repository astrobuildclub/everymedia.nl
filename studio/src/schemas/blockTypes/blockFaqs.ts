// ./schemas/blockTypes/blockFaqs.ts
import {defineType, defineField} from 'sanity'
import {FeedbackIcon} from '@sanity/icons'

export const blockFaqs = defineType({
  name: 'blockFaqs',
  type: 'object',
  icon: FeedbackIcon,
  title: 'FAQs Block',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Frequently Asked Questions',
    }),
    defineField({
      name: 'faqs',
      type: 'array',
      title: 'Select FAQs',
      of: [{type: 'reference', to: [{type: 'faq'}]}],
    }),
  ],
})
