import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'

export const blockLogos = defineType({
  name: 'blockLogos',
  title: 'Logo',
  type: 'object',
  icon: SquareIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{type: 'sanityImage'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Block Logos',
      }
    },
  },
})
