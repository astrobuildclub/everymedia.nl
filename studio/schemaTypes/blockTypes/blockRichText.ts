import {defineField, defineType} from 'sanity'

export const blockRichText = defineType({
  name: 'blockRichText',
  title: 'Block RichText',
  type: 'object',
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
