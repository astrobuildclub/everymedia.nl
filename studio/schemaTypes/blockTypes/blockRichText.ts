import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const blockRichText = defineType({
  name: 'blockRichText',
  title: 'RichText',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'footnote',
      title: 'Footnote',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'blockIntro'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Block RichText',
      }
    },
  },
})
