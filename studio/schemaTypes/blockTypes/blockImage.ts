import { defineField, defineType } from 'sanity';

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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
  ],
});
