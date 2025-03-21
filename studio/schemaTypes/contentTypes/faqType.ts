import {defineType, defineField} from 'sanity'
import {FeedbackIcon} from '@sanity/icons'
import { richTextSimple } from '../options/richTextOptions'


export const faqType = defineType({
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  icon: FeedbackIcon,
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'question', type: 'string', title: 'Question'}),
    defineField({
      name: 'answer',
      type: 'array',
      title: 'Answer',
      of: richTextSimple,
    }),
  ],
})
