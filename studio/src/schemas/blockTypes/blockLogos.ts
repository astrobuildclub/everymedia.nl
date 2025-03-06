// ./schemas/blockTypes/blockLogos.ts
import {defineType, defineField} from 'sanity'
import {SquareIcon} from '@sanity/icons'

export const blockLogos = defineType({
  name: 'blockLogos',
  type: 'object',
  icon: SquareIcon,
  title: 'Logos',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({
      name: 'logos',
      type: 'array',
      title: 'Logos',
      of: [
        {
          type: 'image',
          fields: [defineField({name: 'altText', type: 'string', title: 'Alt Text'})],
        },
      ],
    }),
  ],
})
