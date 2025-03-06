import {defineType, defineField} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export const projectType = defineType({
  name: 'project',
  type: 'document',
  icon: CaseIcon,
  title: 'Projects',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}}),
    defineField({
      name: 'intro',
      type: 'array',
      title: 'Introductie',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'pagebuilder',
      type: 'array',
      title: 'Pagebuilder',
      of: [
        {type: 'blockText'},
        {type: 'blockImage'},
        {type: 'blockVideo'},
        {type: 'blockTestimonial'},
        {type: 'blockWorkRelated'},
        {type: 'blockLogos'},
      ],
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
