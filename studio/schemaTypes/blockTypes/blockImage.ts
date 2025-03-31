import { defineField, defineType } from 'sanity';
import { mediaSizes } from '../options/mediaSizes';

export const blockImage = defineType({
  name: 'blockImage',
  title: 'Block Image',
  type: 'object',
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
