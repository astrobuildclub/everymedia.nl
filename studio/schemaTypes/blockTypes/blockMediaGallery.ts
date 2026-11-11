import { defineType, defineField } from 'sanity'
import { ThLargeIcon } from '@sanity/icons'

export const blockMediaGallery = defineType({
  name: 'blockMediaGallery',
  title: 'Media Gallery',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional heading shown above the gallery.',
    }),
    defineField({
      name: 'media',
      type: 'array',
      title: 'Media Items',
      of: [{ type: 'sanityImage' }],
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
      description:
        'Advances every 5 seconds. Visitors can pause it, and it never autoplays for visitors who enabled "reduce motion".',
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
