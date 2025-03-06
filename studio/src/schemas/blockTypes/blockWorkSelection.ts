// ./schemas/blockTypes/blockWorkSelection.ts
import {defineType, defineField} from 'sanity'

export const blockWorkSelection = defineType({
  name: 'blockWorkSelection',
  type: 'object',
  title: 'Work Selection',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title', initialValue: 'Selected Projects'}),
    defineField({
      name: 'intro',
      type: 'text',
      title: 'Introduction',
      description: 'Short description for the project selection section',
    }),
    defineField({
      name: 'selectedProjects',
      type: 'array',
      title: 'Select Projects',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
  ],
})
