import { defineField, defineType } from 'sanity';
import { mediaSizes } from '../options/mediaSizes';
import {ImageIcon} from '@sanity/icons'

export const blockImage = defineType({
  name: 'blockImage',
  title: 'Image',
  type: 'object',
  icon:ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'sanityImage',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: mediaSizes,
        layout: 'radio',
        direction: 'vertical',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Block Image',
      }
    },
  },
});
