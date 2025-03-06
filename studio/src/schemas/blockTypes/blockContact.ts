// ./schemas/blockTypes/blockContact.ts
import {defineType, defineField} from 'sanity'
import {linkField} from 'sanity-plugin-link-field'

export const blockContact = defineType({
  name: 'blockContact',
  type: 'object',
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
