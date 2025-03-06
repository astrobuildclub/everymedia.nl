// ./schemas/contentTypes/pageType.ts

import {defineType, defineField} from 'sanity'
import {richTextSimple} from '../options/richTextOptions'
import {DocumentIcon} from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  icon: DocumentIcon,
  title: 'Pages',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
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
      title: 'Intro',
      of: richTextSimple,
      group: 'hero',
    }),
    defineField({
      name: 'heroVideo',
      type: 'url',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      group: 'hero',
    }),
    defineField({
      name: 'pagebuilder',
      type: 'array',
      title: 'Pagebuilder',
      of: [
        {type: 'blockText'},
        {type: 'blockImage'},
        {type: 'blockVideo'},
        {type: 'blockMultiCol'},
        {type: 'blockMediaGallery'},
        {type: 'blockTestimonial'},
        {type: 'blockCards'},
        {type: 'blockFaqs'},
        {type: 'blockEpisodes'},
        {type: 'blockLogos'},
        {type: 'blockWorkSelection'},
        {type: 'blockWorkRelated'},
        {type: 'blockContact'},
      ],
      group: 'content',
    }),
    // https://www.npmjs.com/package/sanity-plugin-seo
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      metaTitle: 'seo.metaTitle',
    },
    prepare(selection) {
      const {title, metaTitle} = selection
      return {
        title: metaTitle || title || 'no title',
      }
    },
  },
})
