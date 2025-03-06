import {defineType, defineField} from 'sanity'
import {blockText} from '../blockTypes/blockText'
import {blockCards} from '../blockTypes/blockCards'
import {blockFaqs} from '../blockTypes/blockFaqs'
import {blockContact} from '../blockTypes/blockContact'

export const audienceType = defineType({
  name: 'audience',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({
      name: 'pagebuilder',
      type: 'array',
      of: [{type: 'blockText'}, {type: 'blockCards'}, {type: 'blockFaqs'}, {type: 'blockContact'}],
      validation: (Rule) =>
        Rule.custom((blocks: {_key: string; _type: string}[] | undefined) => {
          const faqBlocks = (blocks || []).filter((block) => block._type === 'blockFaqs')
          const faqPaths = faqBlocks.map((block) => [{_key: block._key}])

          if (faqPaths.length > 1) {
            return {
              message: 'Je kunt maar één FAQ-blok toevoegen',
              paths: faqPaths,
              title: 'Pagebuilder',
            }
          }

          return true
        }),
    }),
  ],
})
