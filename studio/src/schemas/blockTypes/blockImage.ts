// ./schemas/blockTypes/blockImage.ts
import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'
import {mediaSizes} from '../options/media'
import {captionRichText} from '../options/richTextOptions'

export const blockImage = defineType({
  name: 'blockImage',
  type: 'object',
  icon: ImageIcon,
  title: 'Image',
  fields: [
    defineField({name: 'title', type: 'string'}),
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
  preview: {
    select: {
      title: 'title',
      size: 'size',
      media: 'image', // ✅ Dit zorgt ervoor dat de afbeelding getoond wordt in de preview
    },
    prepare({title, size, media}) {
      return {
        title: title || 'Untitled Image Block',
        subtitle: size ? `size: ${size}` : 'No size specified',
        media, // ✅ Dit voegt de afbeelding toe in de preview in Sanity Studio
      }
    },
  },
})
