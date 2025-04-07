import {defineField, defineType} from 'sanity'
import {richTextSimple} from '../options/richTextOptions'

export const featuredProjects = defineType({
  name: 'featuredProjects',
  title: 'Featured Projects',
  type: 'object',
  fields: [
    defineField({
      name: 'tagLine',
      title: 'TagLine',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      type: 'array',
      title: 'Intro',
      of: richTextSimple,
    }),
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
          options: {
            disableNew: true,
            filter: ({document}) => {
              return {
                filter: 'language == $language',
                params: {
                  language: document.language,
                },
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Featured Projects',
      }
    },
  },
})
