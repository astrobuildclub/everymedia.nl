import {defineType, defineField} from 'sanity'
import {UserIcon} from '@sanity/icons'
import {supportedLanguages} from '../utils/supportedLanguage'

export const projectTagType = defineType({
  name: 'projectTag',
  type: 'document',
  icon: UserIcon,
  title: 'Project Tag',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare({title, language}) {
      const baseLanguage =
        supportedLanguages?.find((lan) => lan?.id === language)?.title || 'Unknown'
      return {
        title: title || 'Project Tag',
        subtitle: `${baseLanguage} Language`,
      }
    },
  },
})
