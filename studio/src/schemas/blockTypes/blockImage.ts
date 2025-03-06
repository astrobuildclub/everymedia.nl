// ./schemas/blockTypes/blockImage.ts
import {defineType, defineField} from 'sanity'
import {mediaSizes} from '../options/media'
import {captionRichText} from '../options/richTextOptions'

export const blockImage = defineType({
  name: 'blockImage',
  type: 'object',
  title: 'Image',
  fields: [
    defineField({name: 'image', type: 'image'}),
    defineField({name: 'altText', type: 'string'}),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: mediaSizes.map((format) => ({title: format, value: format})),
      },
    }),
    defineField({
      name: 'caption',
      type: 'array',
      title: 'Caption',
      of: captionRichText, // Gebruik de aangepaste Caption RichText
    }),
  ],
})
