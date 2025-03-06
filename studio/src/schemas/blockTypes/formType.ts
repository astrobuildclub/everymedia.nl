// ./schemas/formType.ts

import {defineField, defineType} from 'sanity'

export const formType = defineType({
  name: 'form',
  type: 'object', // use document to use as content type
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'form',
      type: 'string',
      description: 'Select form type',
      options: {
        list: ['newsletter', 'register', 'contact'],
      },
    }),
  ],
})
