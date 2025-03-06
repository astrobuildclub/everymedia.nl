// ./schemas/blockTypes/blockEpisodes.ts
import {defineType, defineField} from 'sanity'

export const blockEpisodes = defineType({
  name: 'blockEpisodes',
  type: 'object',
  title: 'Episodes Block',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'description', type: 'text', title: 'Description'}),
    defineField({
      name: 'episodes',
      type: 'array',
      title: 'Episodes',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Title'}),
            defineField({name: 'description', type: 'text', title: 'Description'}),
            defineField({name: 'embedUrl', type: 'url', title: 'Video URL'}),
          ],
        },
      ],
    }),
  ],
})
