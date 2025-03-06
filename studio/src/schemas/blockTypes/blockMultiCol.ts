// ./schemas/blockTypes/blockMultiCol.ts
import {defineType, defineField} from 'sanity'
import {blockText} from './blockText'
import {blockImage} from './blockImage'
import {blockVideo} from './blockVideo'

export const blockMultiCol = defineType({
  name: 'blockMultiCol',
  type: 'object',
  title: 'Multi Column Block',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({
      name: 'colsAmount',
      type: 'number',
      title: 'Columns Amount',
      validation: (Rule) => Rule.min(2).max(5),
    }),
    defineField({
      name: 'colBlocks',
      type: 'array',
      title: 'Column Blocks',
      of: [
        {type: 'blockText'}, // 🔥 Verwijst naar de naam van het schema
        {type: 'blockImage'},
        {type: 'blockVideo'},
      ],
    }),
  ],
})
