import {defineType, defineField} from 'sanity'
import {richTextSimple} from '../options/richTextOptions'
import {UsersIcon} from '@sanity/icons'

// Pagebuilder Blocks
// blockCards (for the grid layout of cards)
// blockWorkSelection (manual selection of work items from a reference list)

export const audienceType = defineType({
  name: 'audience',
  type: 'document',
  icon: UsersIcon,
  title: 'Audiences',
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
      of: richTextSimple,
      group: 'hero',
    }),

    defineField({
      name: 'pagebuilder',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'blockText'},
        {type: 'blockCards'},
        {type: 'blockWorkSelection'},
        {type: 'blockFaqs'},
        {type: 'blockContact'},
      ],
      validation: (Rule) =>
        Rule.custom((blocks: {_key: string; _type: string}[] | undefined) => {
          const faqBlocks = (blocks || []).filter((block) => block._type === 'blockFaqs')
          const faqPaths = faqBlocks.map((block) => [{_key: block._key}])

          if (faqPaths.length > 1) {
            return {
              message: 'Je kunt maar één FAQ-blok toevoegen',
              paths: faqPaths,
              title: 'Pagebuilder',
            }
          }

          return true
        }),
      group: 'content',
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),
  ],
})
