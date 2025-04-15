import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'
import {richTextSimple} from '../options/richTextOptions'
import {isUniqueWithinLocale} from '../utils/IsUniqueWithinLocale'
import {supportedLanguages} from '../utils/supportedLanguage'

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
      name: 'variants',
      title: 'Variants',
      type: 'string',
      options: {
        list: [
          {title: 'Homepage', value: 'homepage'},
          {title: 'Audience', value: 'audience'},
          {title: 'Project', value: 'project'},
          {title: 'Page', value: 'page'},
        ],
        layout: 'radio',
      },
      group: 'hero',
      validation: (Rule) => Rule.required(),
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
      description:
        'Example: https://videos.pexels.com/video-files/3578881/3578881-uhd_2560_1440_30fps.mp4',
    }),
    defineField({
      name: 'heroImage',
      type: 'sanityImage',
      group: 'hero',
      hidden: ({parent}) => parent?.select !== 'heroImage',
    }),
    defineField({
      name: 'pagebuilder',
      type: 'array',
      title: 'Content',
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
        title: title || 'Audience',
        subtitle: `${baseLanguage} Language`,
      }
    },
  },
})
