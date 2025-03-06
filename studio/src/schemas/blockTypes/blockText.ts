// ./schemas/blockTypes/blockText.ts
import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'
import {richTextOptions} from '../options/richTextOptions'

export const blockText = defineType({
  name: 'blockText',
  type: 'object',
  icon: DocumentTextIcon,
  title: 'Text',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'content', type: 'array', of: richTextOptions}),
    defineField({
      name: 'hideTitle',
      type: 'boolean',
      title: 'Hide Title',
      description: "Don't show title on the website.",
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare({title, content}) {
      const subtitle =
        content && content.length > 0
          ? content.map((block) => block.children.map((child) => child.text).join('')).join(' ')
          : 'No content'
      return {
        title: title || 'Untitled Text Block',
        subtitle: subtitle,
      }
    },
  },
})
