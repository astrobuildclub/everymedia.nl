// ./schemas/contentTypes/pageType.ts

import {defineType, defineField} from 'sanity'
import {blockText} from '../blockTypes/blockText'
import {blockImage} from '../blockTypes/blockImage'
import {blockVideo} from '../blockTypes/blockVideo'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({
      name: 'pagebuilder',
      type: 'array',
      of: [{type: 'blockText'}, {type: 'blockImage'}, {type: 'blockVideo'}],
    }),
  ],
})
