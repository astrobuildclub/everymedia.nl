import {defineType, defineField} from 'sanity'
import {directVideoUrlDescription, directVideoUrlValidation} from '../options/videoUrl'
import {CaseIcon} from '@sanity/icons'
import {richTextSimple} from '../options/richTextOptions'
import {isUniqueWithinLocale} from '../utils/IsUniqueWithinLocale'
import {supportedLanguages} from '../utils/supportedLanguage'

export const projectType = defineType({
  name: 'project',
  type: 'document',
  icon: CaseIcon,
  title: 'Projects',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
      group: 'hero',
    }),
    defineField({
      name: 'pageTitle',
      type: 'string',
      description: 'This field is only used for CMS.',
      group: 'hero',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'pageTitle',
        maxLength: 200,
        isUnique: isUniqueWithinLocale,
      },
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
          {title: 'Video', value: 'heroVideo'},
          {title: 'Image', value: 'heroImage'},
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
      hidden: ({parent}) => parent?.select !== 'heroVideo',
      description: directVideoUrlDescription,
      validation: directVideoUrlValidation,
    }),
    defineField({
      name: 'heroImage',
      type: 'sanityImage',
      group: 'hero',
      hidden: ({parent}) => parent?.select !== 'heroImage',
    }),
    {
      name: 'client',
      title: 'Client',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'tag',
      title: 'Award',
      type: 'string',
      group: 'hero',
    },
    defineField({
      name: 'categories',
      title: 'Project type',
      description: 'Used for the "Filter" on the projects overview. Manage the options under "Project types".',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'reference',
          to: [{type: 'projectCategory'}],
          options: {
            filter: ({document}) => ({
              filter: 'language == $language',
              params: {language: document?.language},
            }),
          },
        },
      ],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: 'audiences',
      title: 'Audiences',
      description: 'Used for the "Doelgroep" filter on the projects overview.',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'reference',
          to: [{type: 'audience'}],
          options: {
            filter: ({document}) => ({
              filter: 'language == $language',
              params: {language: document?.language},
            }),
          },
        },
      ],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: 'pagebuilder',
      type: 'array',
      title: 'Pagebuilder',
      of: [
        {type: 'blockFeetSection'},
        {type: 'blockAudiencesOverviewSection'},
        {type: 'blockContact'},
        {type: 'blockCards'},
        {type: 'blockWorkSelection'},
        {type: 'blockFaqs'},
        {type: 'blockText'},
        {type: 'blockImage'},
        {type: 'blockIntro'},
        {type: 'blockTestimonial'},
        {type: 'blockLogos'},
        {type: 'blockMultiCol'},
        {type: 'blockVideo'},
        {type: 'blockWorkRelated'},
        {type: 'blockTeamMembers'},
        {type: 'blockImageGallery'},
        {type: 'blockEpisodes'},
        {type: 'blockRichText'},
        {type: 'featuredProjects'},
        {type: 'projectsListingSection'},
        {type: 'blockMediaGallery'},
        {type: 'blockTextMedia'},
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
      language: 'language',
    },
    prepare({title, language}) {
      const baseLanguage =
        supportedLanguages?.find((lan) => lan?.id === language)?.title || 'Unknown'
      return {
        title: title || 'Project',
        subtitle: `${baseLanguage} Language`,
      }
    },
  },
})
