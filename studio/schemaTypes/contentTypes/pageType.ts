import { defineType, defineField } from 'sanity'
import { richTextSimple } from '../options/richTextOptions'
import { DocumentIcon } from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  icon: DocumentIcon,
  title: 'Pages',
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
      options: { source: 'pageTitle'},
      group: 'hero',
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'string',
      options: {
        list: [
          { title: 'Homepage', value: 'homepage' },
          { title: 'Audience', value: 'audience' },
          { title: 'Project', value: 'project' },
          { title: 'Page', value: 'page' },
        ],
        layout: 'radio',
      },
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
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
      title: 'Pagebuilder',
      of: [
        // {type: 'blockText'},
        { type: 'blockImage' },
        // {type: 'blockVideo'},
        // {type: 'blockMultiCol'},
        // {type: 'blockMediaGallery'},
        // {type: 'blockTestimonial'},
        { type: 'blockCards' },
        { type: 'blockFaqs' },
        { type: 'blockEpisodes' },
        // {type: 'blockLogos'},
        // {type: 'blockWorkSelection'},
        // {type: 'blockWorkRelated'},
        { type: 'blockContact' },
        { type: 'blockAudiencesOverviewSection' },
        { type: 'blockFeetSection' },
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
