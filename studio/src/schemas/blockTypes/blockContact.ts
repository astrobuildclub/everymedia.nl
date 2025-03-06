// ./schemas/blockTypes/blockContact.ts
import {defineType, defineField} from 'sanity'
import {UserIcon} from '@sanity/icons'

// https://www.sanity.io/plugins/sanity-plugin-link-field
import {linkField} from 'sanity-plugin-link-field'

export const blockContact = defineType({
  name: 'blockContact',
  type: 'object',
  icon: UserIcon,
  title: 'Contact Block',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'intro', type: 'array', title: 'Intro', of: [{type: 'block'}]}),
    defineField({
      name: 'cta',
      type: 'array',
      title: 'Call to Action',
      of: [
        {
          type: 'object',
          title: 'CTA Button',
          fields: [
            defineField({name: 'buttonText', type: 'string', title: 'Button Text'}),
            defineField({name: 'link', type: 'link', title: 'Link'}), // Gebruik Sanity Plugin Link Field
          ],
        },
      ],
    }),
  ],
})
