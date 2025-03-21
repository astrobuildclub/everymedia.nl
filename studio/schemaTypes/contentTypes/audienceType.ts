import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'
import { richTextSimple } from '../options/richTextOptions'


export const audienceType = defineType({
  name: 'audience',
  type: 'document',
  icon: UsersIcon,
  title: 'Audiences',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'pageTitle',
      type: 'string',
      description: "This field is only used for CMS.",
      group: 'hero',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'pageTitle', },
      group: 'hero',
    }),
    defineField({
      name: 'title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'intro',
      type: 'array',
      of: richTextSimple,
      group: 'hero',
    }),
    defineField({
      name: 'select',
      title: 'Select',
      type: 'string',
      options: {
        list: [
          { title: 'Video', value: 'heroVideo' },
          { title: 'Image', value: 'heroImage' },
        ],
        layout: 'radio',
      },
      initialValue: 'heroVideo',
      group: 'hero',
    }),
    defineField({
      name: 'heroVideo',
      type: 'url',
      group: 'hero',
      hidden: ({ parent }) => parent?.select !== 'heroVideo',
    }),
    defineField({
      name: 'heroImage',
      type: 'sanityImage',
      group: 'hero',
      hidden: ({ parent }) => parent?.select !== 'heroImage',
    }),
    defineField({
      name: 'pagebuilder',
      type: 'array',
      title: 'Content',
      of: [
        // {type: 'blockText'},
        { type: 'blockCards' },
        // {type: 'blockWorkSelection'},
        { type: 'blockFaqs' },
        { type: 'blockContact' },
      ],
      group: 'content',
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
    prepare(selection) {
      const { title, } = selection
      return {
        title: title || "No Title",
      }
    },
  },
})
