// ./schemas/blockTypes/blockWorkRelated.ts
import {defineType, defineField} from 'sanity'

export const blockWorkRelated = defineType({
  name: 'blockWorkRelated',
  type: 'object',
  title: 'Related Work',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title', initialValue: 'Related Work'}),
    defineField({
      name: 'intro',
      type: 'text',
      title: 'Introduction',
      description: 'Short description for the related projects section',
    }),
    defineField({
      name: 'relatedProjects',
      type: 'array',
      title: 'Select Related Projects',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
  ],
})
