import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'
import { isUniqueWithinLocale } from '../utils/IsUniqueWithinLocale'
import { supportedLanguages } from '../utils/supportedLanguage'
import { richTextSimple } from '../options/richTextOptions'

export const teamType = defineType({
  name: 'team',
  type: 'document',
  icon: UserIcon,
  title: 'People',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'pageTitle',
      type: 'string',
      description: "This field is only used for CMS.",
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options:
      {
        source: 'pageTitle',
        maxLength: 200,
        isUnique: isUniqueWithinLocale,
      }
    }
    ),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name'
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role'
    }),
    defineField({
      name: 'image',
      type: 'sanityImage',
      title: 'Profile Image'
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email'
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone'
    }),
    defineField({
      name: 'bio',
      type: 'array',
      title: 'Bio',
      of: richTextSimple,
    }),
  ],
  preview: {
    select: {
      title: "pageTitle",
      language: "language"
    },
    prepare({ title, language }) {
      const baseLanguage = supportedLanguages?.find((lan) => lan?.id === language)?.title || "Unknown"
      return {
        title: title || "Team",
        subtitle: `${baseLanguage} Language`,
      };
    },
  },
})
