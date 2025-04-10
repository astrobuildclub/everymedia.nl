import {defineType, defineField} from 'sanity'
import {InlineIcon} from '@sanity/icons'

export const blockMultiCol = defineType({
  name: 'blockMultiCol',
  title: 'Multi Column Block',
  type: 'object',
  icon: InlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'select',
      title: 'Select',
      type: 'string',
      options: {
        list: [
          {
            title: 'Block Text',
            value: 'blockText',
          },
          {
            title: 'Block Text Media',
            value: 'blockTextMedia',
          },
          {
            title: 'Block Media Gallery',
            value: 'blockMediaGallery',
          },
        ],
        direction: 'vertical',
        layout: 'radio',
      },
    }),
    defineField({
      name: 'colsAmount',
      title: 'Columns Amount',
      type: 'number',
      description: 'Number of cards per row (2 to 5)',
      validation: (Rule) => Rule.min(2).max(5),
      hidden: ({parent}) => parent?.select != 'blockText',
    }),
    defineField({
      name: 'blockText',
      title: 'Block Text',
      type: 'array',
      of: [{type: 'blockText'}],
      hidden: ({parent}) => parent?.select != 'blockText',
    }),
    defineField({
      name: 'blockTextMedia',
      title: 'Block Text Media',
      type: 'array',
      of: [{type: 'blockTextMedia'}],
      hidden: ({parent}) => parent?.select != 'blockTextMedia',
    }),
    defineField({
      name: 'blockMediaGallery',
      title: 'Block Media Gallery',
      type: 'blockMediaGallery',
      hidden: ({parent}) => parent?.select != 'blockMediaGallery',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Block Multi Col',
      }
    },
  },
})
