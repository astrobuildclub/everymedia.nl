import { defineType, defineField } from 'sanity'
import { InlineIcon } from '@sanity/icons'
import { alignmentOptions } from '../options/alignmentOptions'
import { richTextSimple } from '../options/richTextOptions'

export const blockTextMedia = defineType({
    name: 'blockTextMedia',
    title: "Block Text Media",
    type: 'object',
    icon: InlineIcon,
    fields: [
        defineField({
            name: 'alignment',
            title: 'Alignment',
            type: 'string',
            options: { list: alignmentOptions, direction: 'vertical', layout: 'radio' },
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'intro',
            type: 'array',
            title: 'Intro',
            of: richTextSimple,
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'sanityImage',
        }),
    ],
    preview: {
        select: {
          title: 'title',
        },
        prepare({title}) {
          return {
            title: title || 'Block Text Media',
          }
        },
      },
})
