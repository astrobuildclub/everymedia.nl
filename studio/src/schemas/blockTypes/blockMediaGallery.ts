// ./schemas/blockTypes/blockMediaGallery.ts
import {defineType, defineField} from 'sanity'
import {ThLargeIcon} from '@sanity/icons'

export const blockMediaGallery = defineType({
  name: 'blockMediaGallery',
  type: 'object',
  icon: ThLargeIcon,
  title: 'Media Gallery',
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
