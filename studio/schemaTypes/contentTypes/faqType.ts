import { defineType, defineField } from 'sanity'
import { FeedbackIcon } from '@sanity/icons'
import { richTextSimple } from '../options/richTextOptions'
import { supportedLanguages } from '../utils/supportedLanguage'


export const faqType = defineType({
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  icon: FeedbackIcon,
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'question', type: 'string', title: 'Question' }),
    defineField({
      name: 'answer',
      type: 'array',
      title: 'Answer',
      of: richTextSimple,
    }),
  ],
  preview: {
    select: {
      title: "question",
      language: "language"
    },
    prepare({ title, language }) {
      const baseLanguage = supportedLanguages?.find((lan) => lan?.id === language)?.title || "Unknown"
      return {
        title: title || "FAQ",
        subtitle: `${baseLanguage} Language`,
      };
    },
  },
})
