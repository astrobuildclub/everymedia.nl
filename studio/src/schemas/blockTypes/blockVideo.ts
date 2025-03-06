// ./schemas/blockTypes/blockVideo.ts
import {defineType, defineField} from 'sanity'
import {mediaSizes} from '../options/media'

export const blockVideo = defineType({
  name: 'blockVideo',
  type: 'object',
  title: 'Video',
  fields: [
    defineField({name: 'videoUrl', type: 'string'}),
    defineField({
      name: 'size',
      type: 'string',
      options: {
        list: mediaSizes.map((size) => ({title: size, value: size})),
      },
    }),
  ],
})
