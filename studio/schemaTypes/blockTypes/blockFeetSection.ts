import { defineField, defineType } from 'sanity'
import { richTextSimple } from '../options/richTextOptions'
import {ComponentIcon} from '@sanity/icons'

export const blockFeetSection = defineType({
  name: 'blockFeetSection',
  title: 'Feet Section',
  icon:ComponentIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'array',
      of: richTextSimple,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: richTextSimple,
    }),
    defineField({
      name: 'selectedProjects',
      type: 'array',
      title: 'Select Projects',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
          options: {
            disableNew: true,
            filter: ({ document }) => {
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
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',
    }),
    defineField({
      name: 'connectWithUs',
      title: 'Connect With Us',
      type: 'array',
      of: [
        {
          name: 'connectWithUs',
          title: 'Connect With Us',
          type: 'object',
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
                  { title: 'Label Links', value: 'labelLinks' },
                  { title: 'Body', value: 'body' },
                ],
                layout: 'radio',
              },
              initialValue: 'labelLinks',
            }),
            defineField({
              name: 'labelLinks',
              title: 'Label Links',
              type: 'array',
              of: [{ type: 'labelLink' }],
              hidden: ({ parent }) => parent?.select !== 'labelLinks',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'array',
              of: richTextSimple,
              hidden: ({ parent }) => parent?.select !== 'body',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Block Feet Section',
      }
    },
  },
})
