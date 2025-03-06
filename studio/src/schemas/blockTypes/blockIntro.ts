// ./schemas/blockTypes/blockIntro.ts
import {defineType, defineField} from 'sanity'
import {richTextOptions} from '../options/richTextOptions'

export const blockIntro = defineType({
  name: 'blockIntro',
  type: 'object',
  title: 'Intro Block',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: richTextOptions, // Beperkte rich text opties
    }),
  ],
})
