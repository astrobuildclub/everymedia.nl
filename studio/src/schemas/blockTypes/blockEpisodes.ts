// ./schemas/blockTypes/blockEpisodes.ts
import {defineType, defineField} from 'sanity'
import {VideoIcon} from '@sanity/icons'

export const blockEpisodes = defineType({
  name: 'blockEpisodes',
  type: 'object',
  icon: VideoIcon,
  title: 'Media Carousel',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'description', type: 'text', title: 'Description'}),
    // use video block?
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
