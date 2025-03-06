// ./schemas/blockTypes/blockImageGallery.ts
import {defineType, defineField} from 'sanity'

export const blockImageGallery = defineType({
  name: 'blockImageGallery',
  type: 'object',
  title: 'Image Gallery',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({
      name: 'media',
      type: 'array',
      title: 'Media Items',
      of: [{type: 'blockImage'}, {type: 'blockVideo'}],
    }),
  ],
})
