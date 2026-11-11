import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'
import {supportedLanguages} from '../utils/supportedLanguage'

/**
 * Projecttype (bijv. Serie, Campagne, Documentaire). Wordt gebruikt voor het
 * filter "Filter" op het projectoverzicht.
 */
export const projectCategoryType = defineType({
  name: 'projectCategory',
  type: 'document',
  title: 'Project type',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Shown in the filter on the projects overview, e.g. "Series" or "Campaign".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Used in the filter URL (?type=…). Click "Generate".',
      options: {source: 'title', maxLength: 48},
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title', language: 'language'},
    prepare({title, language}) {
      const baseLanguage =
        supportedLanguages?.find((lan) => lan?.id === language)?.title || 'Unknown'
      return {title: title || 'Project type', subtitle: `${baseLanguage} Language`}
    },
  },
})
