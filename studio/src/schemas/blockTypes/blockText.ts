// ./schemas/blockTypes/blockText.ts
import {defineType, defineField} from 'sanity'
import {richTextOptions} from '../options/richTextOptions'

export const blockText = defineType({
  name: 'blockText',
  type: 'object',
  title: 'Text',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'content', type: 'array', of: richTextOptions}),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Text Block',
        subtitle: 'Text',
      }
    },
  },
})
