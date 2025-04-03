import { defineType, defineField } from 'sanity'
import { ThLargeIcon } from '@sanity/icons'

export const blockMediaGallery = defineType({
  name: 'blockMediaGallery',
  title: 'Block Media Gallery',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: 'media',
      type: 'array',
      title: 'Media Items',
      of: [{ type: 'sanityImage' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Media Gallery',
      }
    },
  },
})
